import React, {useContext} from 'react'
import {MovieContext} from '../GlobalContext/GlobalContext'

export default function WatchlistControls() {
    const {addMovieToWatched} = useContext(MovieContext)
    return (
        <div>
            <button className="buton" onClick={()=>addMovieToWatched()}><i className='fa fas fa-eye'></i></button>
            <button className="buton"><i className='fa far fa-window-close'></i></button>
        </div>
    )
}
