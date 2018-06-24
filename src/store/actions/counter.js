import {INCREMENT, DECREMENT, ADD, SUBSTRACT} from './actionTypes'

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (value) => {
    return {
        type: ADD,
        value
    }
}

export const substract = (value) => {
    return {
        type: SUBSTRACT,
        value
    }
}