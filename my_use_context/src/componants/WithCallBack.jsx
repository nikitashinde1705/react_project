import React from 'react'
import { useState, useCallback } from 'react';

const WithCallBack = () => {

    const [count, setCount] = useState();

    const increment = useCallback(() => {

        setCount(prev => prev + 1);
        
    },[]);

  return (

    <div>

        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
    </div>

  )
}

export default WithCallBack;
