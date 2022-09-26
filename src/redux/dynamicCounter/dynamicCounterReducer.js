import { DYNAMICDECREMENT, DYNAMICINCREMENT } from "./dynamicActionTypes";
const initialState = {
    value: 10
}
const dynamicCounterReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case DYNAMICINCREMENT:
            return {
                ...state,
                value: state.value + action.payload
            }

        case DYNAMICDECREMENT:
            return {
                ...state,
                value: state.value - action.payload
            }
    
        default:
            return state;
    }
}

export default dynamicCounterReducer;