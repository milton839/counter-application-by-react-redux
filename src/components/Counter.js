import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/counter/action';

const Counter = ({count, increment, decrement}) => {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state)=>{
    return {
        ...state,
        count:state.value
    }
    // must akta object return korte hbe
}

const mapDispatchToProps = (dispatch)=>{
    return {
        increment: ()=>dispatch(increment()),
        decrement: ()=>dispatch(decrement())
    }
    //must akta object return korte hbe
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//connect()==HOC
// connect(mapStateToProps, mapDispatchToProps)(original component)
//HOC==higher order component hosse akta function er moddhe akta original component nia notun akta component build kora