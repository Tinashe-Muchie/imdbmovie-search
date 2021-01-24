import React, {useState, useContext,useRef, useEffect} from 'react'
import {MovieContext} from '../GlobalContext/GlobalContext'
import './add.css'

export default function Add() {
        const [query, setQuery] = useState('')
        const [movie, setMovie] = useState([])
        const {addMovieToWatchlist, addWatchlist} = useContext(MovieContext)
        const inputRef = useRef(null)
        
        useEffect(()=>{
          inputRef.current.focus()
        }, [])

        let storedMovie = addWatchlist.find(o => o.id === movie.id)
        const addWatchListDisabled = storedMovie ? true : false;

        function onChange(e) {
            e.preventDefault()
            setQuery(e.target.value)
            const urlEncodedQuery = encodeURIComponent(query)
      
            fetch (`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&page=1&include_adult=false&query=${urlEncodedQuery}`)
                .then(response => response.json())
                .then(response => {
                  if(!response.errors){
                    setMovie(response.results)
                  }else {
                    setMovie([])
                  }
                })
                .catch(err=>{console.error(err)})
        }
      
    return (
        <div>
            <form>
                <input 
                    type='text'
                    placeholder='Search for a movie'
                    value={query}
                    onChange={onChange} 
                    className="inputText"
                    ref={inputRef}/>
            </form>
            <div>
                {movie.length > 0 &&
                <ul>
                    {movie.map((movie)=>(
                        <li key={movie.id} className="list">
                        <div className="container">
                        <div className="item1"><img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`movie path`}></img></div>
                        <div className="item2"><span>{movie.title}</span></div>
                        <div className="item3"><span>{movie.release_date.substring(0,4)}</span></div> 
                        <div className="item5"><button 
                                                    className="button" 
                                                    onClick={()=>addMovieToWatchlist(movie)}
                                                    disabled={addWatchListDisabled}
                                                    >Add to Watch List</button></div>
              </div>
              </li>
            ))}
          </ul>
            }
        </div>
        </div>
    )
}
