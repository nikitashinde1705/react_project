import { useState } from "react";

function UseStateInput () {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");


    return(
        <>

        <div className="container">
            <div className="row">
                <label>Enter Name: </label><hr />
                <input className="form-control" type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
                <hr />
                <h5>Your Name: {name}</h5>

                <label>Enter Email: </label><hr />
                <input className="form-control" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                <hr />
                <h5>Email: {email}</h5>
            </div>
        </div>

        </>
    )
};
export default UseStateInput;