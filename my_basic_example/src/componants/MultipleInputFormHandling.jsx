import { useState } from "react";

const ControlledFormeHandling = () => {

    console.log("Component re-rendered");

    const [form, setForm] = useState({
        fullName : "",
        email : "",
        password : "",
        city : ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name] : value
        })

    };

    const validate = () => {

        let error = {};
        if(!form.fullName.trim()){
            error.fullName = "FullName id Required";
        } 

        const emailRegx =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if(!form.email){
            error.email = "Email is required";
        } 
        else if (!emailRegx.test(form.email)){
            error.email = "Invalid email format";
        }

        const passRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]|\\:;"'<>,.?/~`]).{8,}$/;
        if(!form.password){
            error.password = "Password is required"
        } 
        else if(!passRegx.test(form.password)){
            error.password = "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character."

        }

        if(!form.city){
            error.city = "Plese enter city";
        }

        setErrors(error);
        return Object.keys(error).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validate()) {
            alert("Form submitted successfully");
            console.log(form);
        }
    }

  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-info-emphasis ">Controlled form with Validation</h3>

                    <form onSubmit={handleSubmit} className="border border-info rounded p-4">

                        <div className="mb-3">
                            <label className="form-lable text-info-emphasis fw-medium">Full Name : </label>
                            <input type="text" 
                            className={`form-control border border-info ${errors.fullName ? "is-invalid" : ""}`}
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            />
                            {
                                errors.fullName && (
                                    <div className="invalid-feedback">
                                        {errors.fullName}
                                    </div>
                                )
                            }
                        </div>

                        <div className="mb-3">
                            <label className="form-lable text-info-emphasis fw-medium">Email Address: </label>
                            <input type="email" 
                            className = {`form-control border border-info ${errors.email ? "is-invalid" : ""}`}
                            name="email"
                            value={form.email}
                            onChange={handleChange}/>
                            {
                                errors.email && (
                                    <div className="invalid-feedback">
                                        {errors.email}
                                    </div>
                                )
                            }
                        </div>

                        <div className="mb-3">
                            <label className="form-lable text-info-emphasis fw-medium">Password: </label>
                            <input type="password" 
                            className = {`form-control border border-info ${errors.password ? "is-invalid" : ""}`}
                            name="password"
                            value={form.password}
                            onChange={handleChange}/>
                            {
                                errors.password && (
                                    <div className="invalid-feedback">
                                        {errors.password}
                                    </div>
                                )
                            }
                        </div>

                        <div className="mb-3">
                            <label className="text-info-emphasis fw-medium" > Select City</label>
                            <select 
                            className={`form-select border border-info ${errors.city ? "is-invalid" : ""}`}
                            name="city"
                            value={form.city}
                            onChange={handleChange} >
                                <option value="">Choose City</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Pune">Pune</option>
                                <option value="Solapur">Solapur</option>
                            </select>
                            {
                                errors.city && (
                                    <div className="invalid-feedback">
                                        {errors.city}
                                    </div>
                                )
                            }
                        </div>

                        <div className="mb-3">
                            <button 
                            className="btn btn-info fw-bold text-info-emphasis">Submit</button>
                        </div>


                    </form>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default ControlledFormeHandling;
