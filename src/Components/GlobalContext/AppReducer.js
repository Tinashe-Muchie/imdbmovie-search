
function AppReducer(state, action) {
    switch(action.type){
        case 'ADD_MOVIE_TO_WATCHLIST':
            return {
            ...state,
            addWatchlist: [action.value, ...state.addWatchlist]
            }
            
        case 'ADD_MOVIE_TO_WATCHED':
            return {
                ...state,
                addWatched: [action.value, ...state.addWatched],
            }   
        case 'REMOVE_MOVIE_FROM_WATCHLIST':
            return {
                ...state,
                addWatchlist: state.addWatchlist.filter((movie)=>movie.id !== action.value)
            }
        case 'REMOVE_MOVIE_FROM_WATCHED':
            return {
                ...state, 
                addWatched: state.addWatched.filter(movie=> movie.id !== action.value)
            }
        default:
            return state
    }
}

export default AppReducer
