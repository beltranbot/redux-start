const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBSTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter
                })
            }
        case 'DELETE_RESULT':
            // const newArray = [...state.resutls]
            // newArray.splice(id, 1)
            const newArray = state.results.filter((el) => el.id !== action.id)

            return {
                ...state,
                results: newArray
            }
    }
    return state
}

export default reducer