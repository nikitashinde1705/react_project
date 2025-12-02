
import { useRef, useState } from "react";

const MultipleInputFormuseRef = () => {

    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const cityRef = useRef();

    const [errors, setErrors] = useState({});

    const validate = (data) => {
        let error = {};

        if (!data.fullName.trim()) {
            error.fullName = "Full Name is required";
        }

        const emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!data.email) {
            error.email = "Email is required";
        } else if (!emailRegx.test(data.email)) {
            error.email = "Invalid email format";
        }

        const passRegx =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]|\\:;"'<>,.?/~`]).{8,}$/;

        if (!data.password) {
            error.password = "Password is required";
        } else if (!passRegx.test(data.password)) {
            error.password =
                "Password must include uppercase, lowercase, digit, special char & min 8 length.";
        }

        if (!data.city) {
            error.city = "Please select city";
        }

        setErrors(error);
        return Object.keys(error).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            fullName: fullNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            city: cityRef.current.value,
        };

        if (validate(formData)) {
            alert("Form submitted successfully");
            console.log(formData);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-info-emphasis">Controlled Form using useRef</h3>

                        <form onSubmit={handleSubmit} className="border border-info rounded p-4">

                            {/* Full Name */}
                            <div className="mb-3">
                                <label className="form-lable text-info-emphasis fw-medium">
                                    Full Name:
                                </label>
                                <input
                                    type="text"
                                    className={`form-control border border-info ${errors.fullName ? "is-invalid" : ""}`}
                                    ref={fullNameRef}
                                />
                                {errors.fullName && (
                                    <div className="invalid-feedback">
                                        {errors.fullName}
                                    </div>
                                )}
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label className="form-lable text-info-emphasis fw-medium">
                                    Email Address:
                                </label>
                                <input
                                    type="email"
                                    className={`form-control border border-info ${errors.email ? "is-invalid" : ""}`}
                                    ref={emailRef}
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label className="form-lable text-info-emphasis fw-medium">
                                    Password:
                                </label>
                                <input
                                    type="password"
                                    className={`form-control border border-info ${errors.password ? "is-invalid" : ""}`}
                                    ref={passwordRef}
                                />
                                {errors.password && (
                                    <div className="invalid-feedback">
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            {/* City */}
                            <div className="mb-3">
                                <label className="text-info-emphasis fw-medium">Select City</label>
                                <select
                                    className={`form-select border border-info ${errors.city ? "is-invalid" : ""}`}
                                    ref={cityRef}
                                >
                                    <option value="">Choose City</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Solapur">Solapur</option>
                                </select>
                                {errors.city && (
                                    <div className="invalid-feedback">
                                        {errors.city}
                                    </div>
                                )}
                            </div>

                            <button className="btn btn-info fw-bold text-info-emphasis">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultipleInputFormuseRef;

