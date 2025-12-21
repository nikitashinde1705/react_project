import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
    })

     const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account created");
        const accountData = {
            ...formData
        };
        console.log("Printing account data");
        console.log(accountData);

        navigate("/dashboard");
    }

  return (
    <div>
        {/* student-instructor tab */}
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
            {/* first name and last name */}
            <div>
                <label>
                    <p>First Name <sup>*</sup></p>
                    <input
                        required
                        name='firstname'
                        type="text"
                        onChange={changeHandler}
                        placeholder='Enter first Name'
                        value={formData.firstname} />
                </label>

                <label>
                    <p>Last Name <sup>*</sup></p>
                    <input
                        required
                        name='lastname'
                        type="text"
                        onChange={changeHandler}
                        placeholder='Enter last Name'
                        value={formData.lastname} />
                </label>

            </div>
            {/* email address */}
            <label>
                    <p>Email Address<sup>*</sup></p>
                    <input
                        required
                        name='email'
                        type="email"
                        onChange={changeHandler}
                        placeholder='Enter email address'
                        value={formData.email} />
            </label>

            {/* create password and confirm password */}
            <div>
                <label>
                    <p>Create password<sup>*</sup></p>
                    <input
                        required
                        name='password'
                        type={showPassword ? ("text") : ("password")}
                        onChange={changeHandler}
                        placeholder='Enter password'
                        value={formData.password} />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                </label>

                <label>
                    <p>Confirm password<sup>*</sup></p>
                    <input
                        required
                        name='confirmPassword'
                        type={showPassword ? ("text") : ("password")}
                        onChange={changeHandler}
                        placeholder='confirm password'
                        value={formData.confirmPassword} />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                </label>
            </div>

            <button >
                Create Account
            </button>
            

        </form>
      
    </div>
  )
}

export default SignupForm
