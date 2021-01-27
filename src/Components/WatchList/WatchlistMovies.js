import React from 'react'
import WatchlistControls from './WatchlistControls'
import './WatchList.css'

export default function WatchlistMovies({movie, type}) {
    return (
        <div>
            <div className="grid-container">
                <div className="wrapper">
                <div className="img">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" className='image'></img>
            <div className="overlay">
                <WatchlistControls  type={type} movie={movie}/>
            </div>
            </div>
            </div>
            </div>
            
        </div>
    )
}
