import * as actionTypes from './actions/actionTypes'

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBSTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter
                })
            }
        case actionTypes.DELETE_RESULT:
            // const newArray = [...state.results]
            // newArray.splice(id, 1)
            const newArray = state.results.filter((el) => el.id !== action.id)

            return {
                ...state,
                results: newArray
            }
        default:
    }
    return state
}

export default reducer