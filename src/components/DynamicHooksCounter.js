import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dynamicDecrement, dynamicIncrement } from '../redux/dynamicCounter/dynamicActionCreator';

const DynamicHooksCounter = () => {
    const count = useSelector((state)=>state.dynamicCounterReducer.value)

    const dispatch = useDispatch()

    const dynamicIncrementHandler = (value)=> {
        dispatch(dynamicIncrement(value))
    }

    const dynamicDecrementHandler = (value)=> {
        dispatch(dynamicDecrement(value))
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

export default DynamicHooksCounter;