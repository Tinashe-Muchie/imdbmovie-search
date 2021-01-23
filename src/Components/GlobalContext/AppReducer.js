
function AppReducer(state, action) {
    switch(action.type){
        case 'ADD_MOVIE_TO_WATCHLIST':
            return {
            ...state,
            addWatchList: [action.value, ...state.addWatchList]
            }
        default:
            return state
    }
}

export default AppReducer
