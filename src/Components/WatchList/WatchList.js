import React, {useContext} from 'react'
import {MovieContext} from '../GlobalContext/GlobalContext'
import './WatchList.css'
import WatchlistMovies from './WatchlistMovies';

export default function WatchList() {
    const {addWatchlist} = useContext(MovieContext);
    return (
        <div>
            <div className="watchlistHeading">
                <h1>Movie Watchlist</h1>
                {
                    addWatchlist.length === 1?
                    <h3 className="pillbackground">{addWatchlist.length} movie</h3>
                    :<h3 className="pillbackground">{addWatchlist.length} movies</h3>
                }
            </div>
            {addWatchlist.length > 0 ?
            <ul className='list grid-container'>
                {addWatchlist.map((movie)=>
                <li key={movie.id}>
                    <WatchlistMovies movie={movie} />
                </li>)}
            </ul>
            : <h2 style={{
                        color: "#C5C6C7",
                        fontFamily: "Papyrus"
            }}>There are no movies in the watchlist, ADD SOME!</h2>
            }
        </div>
    )
}
