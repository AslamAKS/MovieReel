import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Registration.css";
import {useNavigate} from 'react-router-dom'

function Login() {
  const navigate=useNavigate();
  const [successMsg, setSuccessMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMsg("User registration is successful.");
    reset();
  };

  

  return (
    <div className="registration">
      <div className="background">
      <div className="form">
      <img className='mainlogo' src='HomePageLogo.png' alt='logo.png' />

      <form onSubmit={handleSubmit(onSubmit)}>
        {successMsg && <p className="success-msg">{successMsg}</p>}
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid."
              }
            })} placeholder="Email"
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              validate: {
                checkLength: (value) => value.length >= 6,
                matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value
                  )
              }
            })} placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password?.type === "checkLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
          {errors.password?.type === "matchPattern" && (
            <p className="errorMsg">
              Password should contain at least one uppercase letter, lowercase
              letter, digit, and special symbol.
            </p>
          )}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit" onClick={()=>{navigate('/homescreen')}}>Log In</button>
        </div>
        <h2 style={{color:'white'}}>Don't Have Account ? <button onClick={()=>{navigate('/signup')}}>Create</button></h2>
      </form>
      </div>
      </div>
    </div>
  );
}

export default Login