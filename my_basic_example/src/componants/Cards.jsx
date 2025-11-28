//cards using props
const Cards = ({title, photo, body, button}) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={photo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{body}</p>
                            <a href="#" className="btn btn-primary">{button}</a>
                        </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Cards;