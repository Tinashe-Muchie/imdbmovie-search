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
        <input type='text' />
        <button type='submit'>search</button>
      </form>
      <GetMovies />
    </div>
    
  );
}

export default App;
