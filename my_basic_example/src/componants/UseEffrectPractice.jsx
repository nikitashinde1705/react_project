import { useEffect, useState } from "react";

const UseEffectPractice = () => {

     const[text, setText] = useState('');
     const[name, setName] = useState("lOVE");

    // //variation 1  --> Every render run
    // useEffect ( () => {
    //     console.log("UI RENDORING DONE");
    // });

    // //variation 2  --> First render run
    // useEffect ( () => {
    //     console.log("UI RENDERING");
    // },[]);

    // //variation 3  --> on First render run + whenever dependency change
    // useEffect ( () => {
    //     console.log("UI RENDERING");
    // },[name]);

    // //variation 4 : handle unmounting of component
     useEffect ( () => {
        console.log("Listner added");

        return ( () => {
            console.log("Listner removed");
        })
     },[name]);
    function changeHandler (event) {
        console.log(text);
        setText(event.target.value);
    }

    return(
        <>
       <div className="App">
        <input type="text" onChange={changeHandler} />
       </div>
        </>
    )
};
export default UseEffectPractice;
