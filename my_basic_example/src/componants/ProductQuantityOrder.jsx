import { useState } from "react";
const ProductQuantityOrder = ({productName, price, photo}) => {

     const[qty, setQty] = useState(1);

    return(

       
        <>

        <div className="container m-5">
            <div className="row justify-content-center align-item-center">
                
                    <div className="card" >
                        <img src={photo} className="card-img-top img-fluid" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{productName}</h5>
                            <p className="card-text">{price}</p>
                            <button className="btn btn-secondary me-2" onClick={() => setQty(qty + 1)}> + </button>
                            <span className="me-2">{qty}</span>
                            <button className="btn btn-secondary" onClick={() => qty > 1 && setQty(qty - 1)}> - </button>
                        </div>
                        </div>
            
            
                
            </div>
        </div>
        
        </>
    );

}

export default ProductQuantityOrder