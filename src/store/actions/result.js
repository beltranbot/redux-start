import {STORE_RESULT, DELETE_RESULT} from './actionTypes'

export const saveResult = result => {
    return {
        type: STORE_RESULT,
        result
    }
}

export const storeResult = (result) => {
    return (dispatch, getState) => {
        const oldCounter = getState().ctr.counter
        console.log(oldCounter)
        setTimeout(() => {
            dispatch(saveResult(result))
        }, 2000)
    }
}

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        id
    }
}