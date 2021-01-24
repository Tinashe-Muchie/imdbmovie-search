
function AppReducer(state, action) {
    switch(action.type){
        case 'ADD_MOVIE_TO_WATCHLIST':
            return {
            ...state,
            addWatchlist: [action.value, ...state.addWatchlist]
            }
        default:
            return state
    }
}

export default AppReducer
