// useState : it is an hook, it is keyword. for these you need to import useState first

import { useState } from "react";
function UseStateCounter () {

        const[count, setCount] = useState(0);

        const handleIncrement = () => {
            setCount(prev => Math.min(prev + 1, 10));
        }

        const handleDecrement = () => {
            setCount(prev => Math.max(prev - 1, 0));
        }

    return(
        <>
            <div className="container">
                <div className="row">
                    <h2>Counter : {count}</h2>
                </div>
                <button className="btn btn-secondary me-2" onClick={handleIncrement}>
                    +
                </button>
                <button className="btn btn-secondary me-2" onClick={handleDecrement}>
                    -
                </button>
            </div>
        </>
    );
};
export default UseStateCounter;