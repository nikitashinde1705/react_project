const Message = (props) => {
    return(
        <>
        <div className="container">
            <div className="row">
                <h2 className="text-secondary">Message: {props.text}</h2>
               
            </div>
        </div>
        </>
    );
}

export default Message;