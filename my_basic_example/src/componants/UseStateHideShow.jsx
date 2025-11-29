//password hide show 
import { useState } from "react";
const UseStateHideShow = () => {

    const[showPass, setShowPass] = useState(false);

    return(
        <>
            <div className="container">
                <div className="row">
                    <hr />
                    <h2>Show / Hide Password</h2>
                    <input className="form-control" type={showPass ? "text" : "password"}/>
                    <button className="btn btn-secondary mt-3" onClick={() => setShowPass(!showPass)}>
                        {showPass ? "Hide" : "show"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default UseStateHideShow;