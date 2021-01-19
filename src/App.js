import React, {useState} from 'react'
import GetMovies from './Components/GetMovies'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Latest from './Components/Latest/Latest'
import Watched from './Components/Watched/Watched'
import TopRated from './Components/TopRated/TopRated'
import Upcoming from './Components/Upcoming/Upcoming'
import WatchList from './Components/WatchList/WatchList'
import './App.css';

function App() {
  const [query, setQuery] = useState('')
  const [movie, setMovie] = useState([])

  function onChange(e) {
      e.preventDefault()
      setQuery(e.target.value)
      const urlEncodedQuery = encodeURIComponent(query)

      fetch (`https://api.themoviedb.org/3/search/movie?api_key=${process.env.local.REACT_KEY_APP}&page=1&include_adult=false&query=${urlEncodedQuery}`)
          .then(response => response.json())
          .then(data => {
            if(!data.errors){
              setMovie(data.results)
            }else {
              setMovie([])
            }
          })
          .catch(err=>{console.error(err)})
          console.log(movie)
  }
  
  return (
    <div className="App">
    <Router>
      <>
        <Header />

        <Switch>
          <Route exact path='/'>
            <WatchList />
          </Route>
          <Route path='/Latest'>
            <Latest />
          </Route>
          <Route path='/Upcoming'>
            <Upcoming />
          </Route>
          <Route path='/TopRated'>
            <TopRated />
          </Route>
          <Route path='/Watched'>
            <Watched />
          </Route>
        </Switch>
      </>
      </Router>
      <form>
        <input 
              type='text'
              placeholder='Search for a movie'
              value={query}
              onChange={onChange} />
      </form>
        <div>
          {movie.length > 0 &&
          <ul>
            {movie.map((item, i)=>(
              <li key={i}>
              <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={`${item.title} path`}></img>
              <span>{item.title}</span><br />
              <span>{item.release_date.substring(0,4)}</span><br />
              <span>{item.overview}</span><br /> 
              <button type="button" value="WatchList">Add to Watch List</button>
              </li>
            ))}
          </ul>
            }
        </div>
      <GetMovies />
    </div>
    
  );
}

export default App;
