import React, {useContext} from 'react'
import {MovieContext} from '../GlobalContext/GlobalContext'

export default function WatchedControls({movie}) {
    const {addMovieToWatchlist, removeMovieFromWatched} = useContext(MovieContext)
    return (
        <div>
             <>
            <button className="buton" onClick={()=>{
                                                    addMovieToWatchlist(movie)
                                                    removeMovieFromWatched(movie.id)
                                                    }}><i className='fa fas fa-eye-slash'></i></button>
            <button className="buton" onClick={()=>removeMovieFromWatched(movie.id)}><i className='fa far fa-window-close'></i></button>
            </>
        </div>
    )
}
