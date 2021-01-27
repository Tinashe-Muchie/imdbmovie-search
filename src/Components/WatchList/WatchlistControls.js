import React, {useContext} from 'react'
import {MovieContext} from '../GlobalContext/GlobalContext'

export default function WatchlistControls({movie}) {
    const {addMovieToWatched, removeMovieFromWatchlist} = useContext(MovieContext)
    return (
        <div>
            <>
            <button className="buton" onClick={()=>{
                                                    addMovieToWatched(movie)
                                                    removeMovieFromWatchlist(movie.id)
                                                    }}><i className='fa fas fa-eye'></i></button>
            <button className="buton" onClick={()=>removeMovieFromWatchlist(movie.id)}><i className='fa far fa-window-close'></i></button>
            </>
        </div>
    )
}
