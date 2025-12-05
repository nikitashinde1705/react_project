import { useState, useEffect } from "react";

const UseEffectCounter = () => {

    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log("Runs on every render");
    // });  // ---every render

    //useEffect with dependencies
    useEffect(() => {
        console.log("Runs only once when render",count);
    },[]); // ---runs only once

    //useEffect with dependencies with value
    useEffect(() => { 
        console.log("Runs on every render",count);
    },[count]); // ---runs when updates

  return (
    <div>
      <h2>{count}</h2>
      <button className="btn btn-ternary" onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default UseEffectCounter
