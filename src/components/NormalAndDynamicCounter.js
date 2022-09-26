import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counter/action';
import { dynamicDecrement, dynamicIncrement } from '../redux/dynamicCounter/dynamicActionCreator';

const NormalAndDynamicCounter = ({dynamic}) => {
    const count = useSelector((state)=>dynamic ? state.dynamicCounterReducer.value: state.counterReducer.value)

    const dispatch = useDispatch()

    const dynamicIncrementHandler = (value)=> {
        dispatch(dynamic? dynamicIncrement(value) : increment())
    }

    const dynamicDecrementHandler = (value)=> {
        dispatch(dynamic? dynamicDecrement(value) : decrement())
    }
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>dynamicIncrementHandler(5)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>dynamicDecrementHandler(2)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default NormalAndDynamicCounter;