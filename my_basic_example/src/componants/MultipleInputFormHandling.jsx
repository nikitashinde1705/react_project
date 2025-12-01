import { useState } from "react"

const ControlledFormeHandling = () => {

    const [form, setForm] = useState({
        fullName : "",
        email : "",
        password : "",
        city : ""
    });

    const [errors, setErrors] = useState({});

  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h3>Controlled form with Validation</h3>

                    <form className="border rounded p-4">

                        <div className="mb-3">
                            <label className="form-lable">Full Name : </label>
                            <input type="text" className="form-control"
                            name="fullName"
                            value={"Nikita"}
                            onChange={""}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-lable">Email Address: </label>
                            <input type="email" className="form-control"
                            name="email"
                            value={"abc@gmail.com"}
                            onChange={""}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-lable">Password: </label>
                            <input type="password" className="form-control"
                            name="password"
                            value={""}
                            onChange={""}/>
                        </div>

                        <div className="mb-3">
                            <label > Select City</label>
                            <select className="form-select" name="city" >
                                <option value="">Choose City</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Pune">Pune</option>
                                <option value="Solapur">Solapur</option>
                            </select>
                        </div>


                    </form>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default ControlledFormeHandling
