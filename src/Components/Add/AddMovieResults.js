import React, {useContext} from 'react'
import {MovieContext} from '../GlobalContext/GlobalContext'
import './add.css'

export default function AddMovieResults(props) {
    const {addMovieToWatchlist, addWatchlist, addMovieToWatched, addWatched} = useContext(MovieContext)
    let storedMovie = addWatchlist.find(o => o.id === props.movie.id)
    let storedMovieWatched = addWatched.find(o => o.id === props.movie.id)
    const addWatchListDisabled = storedMovie ? true 
                                :storedMovieWatched ? true
                                : false;
    const addWatchedDisabled = storedMovieWatched ?true
                                : false;

    return (
        <div>
            <div className="container">
                            {props.movie.poster_path ? 
                        <div className="item1"><img 
                                    src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`} 
                                    alt={`movie path`}></img></div>
                            : <div className="filler"></div>
                            }
                        <div className="item2"><span>{props.movie.title}</span></div>
                        <div className="item3"><span>{props.movie.release_date.substring(0,4)}</span></div> 
                        <div className="item5"><button 
                                                    className="button" 
                                                    onClick={()=>addMovieToWatchlist(props.movie)}
                                                    disabled={addWatchListDisabled}
                                                    >Add to Watch List</button>
                                                   <button 
                                                    className="button" 
                                                    onClick={()=>addMovieToWatched(props.movie)}
                                                    disabled={addWatchedDisabled}
                                                    >Add to Watched</button> </div>
              </div>
        </div>
    )
}
