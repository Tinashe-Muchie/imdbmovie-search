import React, {useState} from 'react'
import './add.css'

export default function Add() {
        const [query, setQuery] = useState('')
        const [movie, setMovie] = useState([])
      
        function onChange(e) {
            e.preventDefault()
            setQuery(e.target.value)
            const urlEncodedQuery = encodeURIComponent(query)
      
            fetch (`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_API_KEY}&page=1&include_adult=false&query=${urlEncodedQuery}`)
                .then(response => response.json())
                .then(response => {
                  if(!response.errors){
                    setMovie(response.results)
                  }else {
                    setMovie([])
                  }
                })
                .catch(err=>{console.error(err)})
                console.log(movie)
        }
    return (
        <div>
            <form>
                <input 
                    type='text'
                    placeholder='Search for a movie'
                    value={query}
                    onChange={onChange} 
                    className="inputText"/>
            </form>
            <div>
                {movie.length > 0 &&
                <ul>
                    {movie.map((item, i)=>(
                        <li key={i} className="list">
                        <div className="container">
                        <div className="item1"><img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={`movie path`}></img></div>
                        <div className="item2"><span>{item.title}</span></div>
                        <div className="item3"><span>{item.release_date.substring(0,4)}</span></div> 
                        <div className="item5"><button type="button" value="WatchList" className="button">Add to Watch List</button></div>
              </div>
              </li>
            ))}
          </ul>
            }
        </div>
        </div>
    )
}
