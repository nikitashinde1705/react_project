const PassingNumberProps = ({marks}) => {
    return(
        <>
        
        <h3>Your Marks : {marks}</h3>
        </>
    );
};

const PassingBoolean = ({isAdmin}) => {
    return(
        <>
        <h2>{isAdmin ? "Welcome Admin" : "Welcome User"}</h2>
        </>
    );
};

const PassingObject = ({info}) => {
    return(
        <>
        <p><b>Name: {info.name}</b></p>
        <p><b>Age: {info.age}</b></p>
        <p><b>City: {info.city}</b></p>
        </>
    );
};

const PassingArray = ({list}) => {
    <hr />
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <ul className="border m-4">
                        {list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

const PassingImage = ({image}) => {
    <hr/>
    return(
        <>
        <img className="img-fluid" src={image}  width="300"/>
        </>
    );
}

export {PassingNumberProps, PassingBoolean, PassingObject, PassingArray, PassingImage};