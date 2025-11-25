const EventExample = () => {

    const showMessage = () => {
        alert("Button is Clicked..");
    }

    const handleInput = (event) => {
        console.clear();
        console.log("Value: " + event.target.value)
    }

    const showName = name => {
       return alert(name);
    }

    const name1 = "Nikita";

    const handleMouseOver = () => console.log("Mouse is Hover on text");

    const doubleClick = () => console.log("Double clicked..");

    return(
        <>
        <div className="container">
            <div className="row">

                <div className="col-md-6">
                    <button onClick={showMessage} type="button" class="btn btn-success me-4">Click Here</button>
                    <hr/>
                    <button onClick={() => alert("Hellow this is inline alert")} type="button" class="btn btn-secondary me-4">Click Me</button>
                    <hr/>
                    <button onClick={showName(name1)} type="button" class="btn btn-success me-4">My name</button>

                    <h3>Enter Name: </h3>
                    <input type="text form-control" onChange={handleInput} placeholder="Enter Name" />
                    <hr/>

                    <p onMouseOver={handleMouseOver} onDoubleClick={doubleClick}>Hover on text</p>
                   
                </div>
                <div className="col-md-6">


                </div>
                
            </div>
        </div>
        </>
    );
};
export default EventExample;