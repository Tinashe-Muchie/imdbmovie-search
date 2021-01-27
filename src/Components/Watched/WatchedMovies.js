import React from 'react'
import WatchedControls from './WatchedControls'
import './Watched.css'

export default function WatchedMovies({movie}) {
    return (
        <div>
            <div className="grid-container">
                <div className="wrapper">
                <div className="img">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" className='image'></img>
            <div className="overlay">
                <WatchedControls  movie={movie}/>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}
