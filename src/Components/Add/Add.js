import React, {useState, useRef, useEffect} from 'react'
import './add.css'
import AddMovieResults from './AddMovieResults'

export default function Add() {
        const [query, setQuery] = useState('')
        const [movie, setMovie] = useState([])
        const inputRef = useRef(null)
        
        useEffect(()=>{
          inputRef.current.focus()
        }, [])

        function onChange(e) {
            e.preventDefault()
            setQuery(e.target.value)
            const urlEncodedQuery = encodeURIComponent(query)
      
            fetch (`https://api.themoviedb.org/3/search/movie?api_key=2275e0d385947cc56fd79c498e925dba&page=1&include_adult=false&query=${urlEncodedQuery}`)
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
                        <AddMovieResults movie={movie}/>
              </li>
            ))}
          </ul>
            }
        </div>
        </div>
    )
}
