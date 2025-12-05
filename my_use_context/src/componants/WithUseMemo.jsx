import { useState, useMemo } from "react";

function slowDouble(num){

    for (let i = 0; i<1000000000; i++){}
        console.log("Slow running");
        return num*2;
    

    
}

const WithUseMemo = () => {

    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");

    //Runs only when number change
    const doubleNumber = useMemo(() => {
        return slowDouble(number);
    },[number]);

  return (
    <div>
      <h1>Without use Memo</h1>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>

      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>

      <h3>Double number: {doubleNumber}</h3>
    </div>
  )
}

export default WithUseMemo;
