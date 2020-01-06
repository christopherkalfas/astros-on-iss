function astronautsReducer(state = { astronauts: [ ], requesting: false }, action){
    switch (action.type) {
        case 'LOADING_ASTRONAUTS':
            return {
                ...state,
                astronauts: [...state.astronauts],
                requesting: true
            }
        case 'ADD_ASTRONAUTS':
            return {
                ...state, 
                astronauts: action.astronauts,
                requesting: false
            }
        default:
            return state
    }
}

export default astronautsReducer

