import React, { useReducer } from 'react'

function reducerFunction(state, action){
    switch(action.type){
        case "INC":
            return{count : state.count + 1};
        
        case "DEC":
            return{count : state.count - 1};

        case "RES":
            return{count : 0};
        
        default:
            return state;

    }
}

const CounterUseReducer = () => {

    const [state, dispatch] = useReducer(reducerFunction, {count: 0})



  return (
    <div>

    <h2>Count: {state.count}</h2>
    <button onClick={() => dispatch({type: "INC"})}>Increment</button>
    <button onClick={() => dispatch({type: "DEC"})}>Decrement</button>
    <button onClick={() => dispatch({type: "RES"})}>Reset</button>

      
    </div>
  )
}

export default CounterUseReducer
