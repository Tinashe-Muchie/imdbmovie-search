import React, {useContext} from 'react'
import {MovieContext} from '../GlobalContext/GlobalContext'

export default function WatchList() {
    const {addWatchlist} = useContext(MovieContext);
    return (
        <div>
            <ul>
                {addWatchlist.map((movie)=>
                <li>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt=""></img>
                </li>)}
            </ul>
        </div>
    )
}
