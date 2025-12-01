import {useState} from "react"

const SimpleForm = () => {

    const[name, setName] = useState("");
    const[error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //validation
        if(!name.trim()){
            setError("Name is Required");
            return;
        }
        if(name.trim().length<3){
            setError("Name must be at least 3 character");
            return;
        }
        setError("");
        alert("Your Name: " + name);


    };

  return (
    <div>

        <form onSubmit={handleSubmit} action="">

            <input type="text" placeholder="Enter your name"
            className="form-control" value={name} 
            onChange={(a) => {
                setName(a.target.value);
                setError("");
            }}
            style={{border: error ? "1px solid red" : "1px solid grey", padding : "8px", width : "100%"}}/>
            {error && (
                <p style={{color:"red", fontSize: "14px"}}>
                    {error}
                </p>
            )}

            <button type="submit" style={{marginTop:"10px"}}>
            Submit
            </button>
      

        </form>

        
    </div>
  )
}

export default SimpleForm;
