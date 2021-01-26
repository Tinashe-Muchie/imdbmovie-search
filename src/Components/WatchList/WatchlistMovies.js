import React from 'react'
import WatchlistControls from './WatchlistControls'
import './WatchList.css'

export default function WatchlistMovies(props) {
    return (
        <div>
            <div className="grid-container">
                <div className="wrapper">
                <div className="img">
            <img src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`} alt="" className='image'></img>
            <div className="overlay">
                <WatchlistControls />
            </div>
            </div>
            </div>
            </div>
            
        </div>
    )
}
