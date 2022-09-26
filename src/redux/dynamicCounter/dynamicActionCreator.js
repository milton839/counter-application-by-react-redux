import { DYNAMICDECREMENT, DYNAMICINCREMENT } from "./dynamicActionTypes"


export const dynamicIncrement = (value) => {
    return {
        type: DYNAMICINCREMENT,
        payload: value
    }
}

export const dynamicDecrement = (value) => {
    return {
        type: DYNAMICDECREMENT,
        payload: value
    }
}