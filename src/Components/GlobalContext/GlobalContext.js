import React, {useReducer, createContext, useEffect} from 'react'
import AppReducer from './AppReducer'

export const MovieContext = createContext();
const initialState = {
    addWatchlist: localStorage.getItem('watchlist')?
                    JSON.parse(localStorage.getItem('watchlist'))
                    : [],
    addWatched: localStorage.getItem('watched')?
                    JSON.parse(localStorage.getItem('watched'))
                    :[]
}

function GlobalContext(props) {
    const [state, dispatch]= useReducer(AppReducer, initialState);
    const addMovieToWatchlist =(movie)=>{
        dispatch({
            type: 'ADD_MOVIE_TO_WATCHLIST',
            value: movie,
        })
    }
    const addMovieToWatched = (movie)=>{
        dispatch({
            type: 'ADD_MOVIE_TO_WATCHED',
            value: movie
        })
    }
    const removeMovieFromWatchlist = (id)=>{
        dispatch({
            type: 'REMOVE_MOVIE_FROM_WATCHLIST',
            value: id
        })
    }
    const removeMovieFromWatched = (id) =>{
        dispatch({
            type: 'REMOVE_MOVIE_FROM_WATCHED',
            value:id
        })
    }
    useEffect(()=>{
        localStorage.setItem('watchlist', JSON.stringify(state.addWatchlist))
        localStorage.setItem('watched', JSON.stringify(state.addWatched))
    }, [state])
    return (
        <div>
            <MovieContext.Provider value={{
                addWatchlist: state.addWatchlist,
                addWatched: state.addWatched,
                addMovieToWatchlist,
                addMovieToWatched,
                removeMovieFromWatchlist,
                removeMovieFromWatched
                }}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}

export default GlobalContext
