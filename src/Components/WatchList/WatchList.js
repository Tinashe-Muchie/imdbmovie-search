import React, {useContext} from 'react'
import {MovieContext} from '../GlobalContext/GlobalContext'
import './WatchList.css'
import WatchlistMovies from './WatchlistMovies';

export default function WatchList() {
    const {addWatchlist} = useContext(MovieContext);
    return (
        <div>
            <ul className='list grid-container'>
                {addWatchlist.map((movie)=>
                <li key={movie.id}>
                    <WatchlistMovies movie={movie} />
                </li>)}
            </ul>
        </div>
    )
}
