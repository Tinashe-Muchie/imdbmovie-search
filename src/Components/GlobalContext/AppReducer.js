
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
        default:
            return state
    }
}

export default AppReducer
