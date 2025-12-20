import { useState } from "react";

const Form = () => {

    const  [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "India",
        streetAddress: "",
        city: "",
        state: "",
        postalCode:"",
        comments: false,
        candidates: false,
        offers: false,
        pushNotification: "",

    });

    function changeHandler (event) {
        const {name, value, checked, type} = event.target;
        setFormData((prev) => ({...prev, [name] : type === "checkbox" ? checked : value}));
    }

    function submitHandler(event) {
        event.preventDefault();

        console.log("Finally printing form datta");

        console.log(formData);
    }

    return (
        <>

        <div className="container">
            <form onSubmit={submitHandler}>

                <label htmlFor="firstName">First Name</label>
                <br />
                <input
                 type="text"
                 name="firstName"
                 id="firstName"
                 placeholder="Love"
                 value={formData.firstName}
                 onChange={changeHandler}
                 className="border-2 border-grey" />

                 <br />

                 <label htmlFor="lastName">Last Name</label>
                 <br />
                 <input
                   type="text"
                   name="lastName"
                   id="lastName"
                   placeholder="Babber"
                   value={formData.lastName}
                   onChange={changeHandler}
                   className="border-2 border-grey"  />

                   <br />

                 <label htmlFor="email">Email</label>
                 <br />
                 <input
                   type="text"
                   name="email"
                   id="email"
                   placeholder="abc@gmail.com"
                   value={formData.email}
                   onChange={changeHandler}
                   className="border-2 border-grey"  />

                   <br/>

                   <label htmlFor="country">Country</label>
                   <br />
                   <select 
                   name="country" 
                   id="country"
                   value={formData.country}
                   onChange={changeHandler}>

                    <option >India</option>
                    <option >Canada</option>
                    <option >United States</option>

                   </select>

                    <br />

                 <label htmlFor="streetAddress">Street Address</label>
                 <br />
                 <input
                   type="text"
                   name="streetAddress"
                   id="streetAddress"
                   placeholder="B-6"
                   value={formData.streetAddress}
                   onChange={changeHandler}
                   className="border-2 border-grey"  />

                 
                   <br />

                 <label htmlFor="city">City</label>
                 <br />
                 <input
                   type="text"
                   name="city"
                   id="city"
                   placeholder="B-6"
                   value={formData.city}
                   onChange={changeHandler}
                   className="border-2 border-grey"  />

                   
                   <br />

                 <label htmlFor="state">State</label>
                 <br />
                 <input
                   type="text"
                   name="state"
                   id="state"
                   placeholder="Maharashtra"
                   value={formData.state}
                   onChange={changeHandler}
                   className="border-2 border-grey"  />

                   <br/>

               

                 <label htmlFor="postalCode">Postal Code</label>
                 <br />
                 <input
                   type="text"
                   name="postalCode"
                   id="postalCode"
                   placeholder="4677"
                   value={formData.postalCode}
                   onChange={changeHandler}
                   className="border-2 border-grey"  />

                   <br />

                  <fieldset>
                    <legend>By Email</legend>
                    <div className="d-flex flex-row">

                        <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        value={formData.comments}
                        onChange={changeHandler}
                        />
                        <div>
                            <label htmlFor="comments">Comments</label>
                            <p>Get notify when someones post a comment on a posting</p>
                        </div>

                    </div>

                    <div className="d-flex flex-row">

                        <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        value={formData.candidates}
                        onChange={changeHandler}
                        />
                        <div>
                            <label htmlFor="candidates">Candidates</label>
                            <p>Get notify when someones post a comment on a posting</p>
                        </div>

                    </div>

                    <div className="d-flex flex-row">

                        <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        value={formData.offers}
                        onChange={changeHandler}
                        />
                        <div>
                            <label htmlFor="offers">Offers</label>
                            <p>Get notify when someones post a comment on a posting</p>
                        </div>

                    </div>
                    
                  </fieldset>

                  <fieldset>
                    <legend>Push Notifications</legend>
                    <p>These are deliver via SMS to your mobile phones.</p>

                    <input 
                    type="radio"
                    id="pushEverything"
                    name="pushNotification"
                    value="Everything"
                    onChange={changeHandler}
                     />
                     <label htmlFor="pushEverything">Everything</label>
                        <br />
                     <input 
                    type="radio"
                    id="pushEmail"
                    name="pushNotification"
                    value="same as email"
                    onChange={changeHandler}
                     />
                     <label htmlFor="pushEmail">Same as email</label>
                        <br />
                     <input 
                    type="radio"
                    id="pushNothing"
                    name="pushNotification"
                    value="No push Notification"
                    onChange={changeHandler}
                     />
                     <label htmlFor="pushNothing">No push Notifications</label>
                  </fieldset>

                  <button className="btn btn-primary"> Save</button>


                   
                 


            </form>
        </div>
        
        </>
    )
};

export default Form;