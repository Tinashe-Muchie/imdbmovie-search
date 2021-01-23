import React, {useReducer, createContext} from 'react'
import AppReducer from './AppReducer'

export const MovieContext = createContext();
const initialState = {
    addWatchList: [],
    addWatched: []
}

function GlobalContext(props) {
    const [state, dispatch]= useReducer(AppReducer, initialState);
    const addMovieToWatchlist =(movie)=>{
        dispatch({
            type: 'ADD_MOVIE_TO_WATCHLIST',
            value: movie,
        })
    }
    return (
        <div>
            <MovieContext.Provider value={{
                addWatchList: state.addWatchList,
                addWatched: state.addWatched,
                addMovieToWatchlist
                }}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}

export default GlobalContext
