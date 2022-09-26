import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counter/action';

const HooksCounter = () => {
    const count = useSelector((state)=>state.counterReducer.value)

    const dispatch = useDispatch()

    const dynamicIncrementHandler = ()=> {
        dispatch(increment())
    }

    const dynamicDecrementHandler = ()=> {
        dispatch(decrement())
    }
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>dynamicIncrementHandler()}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>dynamicDecrementHandler()}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default HooksCounter;