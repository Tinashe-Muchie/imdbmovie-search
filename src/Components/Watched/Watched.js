import React, {useContext} from 'react'
import {MovieContext} from '../GlobalContext/GlobalContext'
import WatchedMovies from './WatchedMovies'
import './Watched.css'

export default function Watched() {
    const {addWatched} = useContext(MovieContext);
    return (
        <div>
          <div className="watchedHeading">
                <h1>Movies Watched</h1>
                <h3 className="pillbackground">{addWatched.length} movies</h3>
            </div>
            {addWatched.length > 0 ?
            <ul className='list grid-container'>
                {addWatched.map((movie)=>
                <li key={movie.id}>
                    <WatchedMovies movie={movie} />
                </li>)}
            </ul>
            : <h2>There are no movies in the watched list, ADD SOME!</h2>
            }
        </div>
    )
}
