import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Registration.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Registration() {
  const navigate = useNavigate();
  //const [successMsg, setSuccessMsg] = useState("");
  const [fname, setFName] = useState("");
  const [sname, setSName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  const {
    register,
    formState: { errors },
    reset
  } = useForm();

  const signUp = async () => {

    await axios.post("http://localhost:5050/signup", {
      fname,
      sname,
      email,
      password,
    }).then((resposce) => {
      console.log(resposce.data)
      alert(resposce.data);
      reset();
      if(resposce.data==="Success"){
        navigate('/login')
      }
      
    });


  };

  return (
    <div className="registration">
      <div className="background">
        <div className="form">
          <img className='mainlogo' src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='logo.png' />

          {/* {successMsg && <p className="success-msg">{successMsg}</p>} */}



          <div className="form-control">
            <label>First Name</label>
            <input type="text" {...register("firstname", { required: "First Name is required." })}
              placeholder="First Name"
              onChange={(e) => { setFName(e.target.value) }} />
            {errors.firstname && (
              <p className="errorMsg">{errors.firstname.message}</p>
            )}
          </div>





          <div className="form-control">
            <label>Second Name</label>
            <input type="text" {...register("secondname", { required: "Second Name is required." })}
              placeholder="Second Name"
              onChange={(e) => { setSName(e.target.value) }} />
            {errors.secondname && (
              <p className="errorMsg">{errors.secondname.message}</p>
            )}
          </div>






          <div className="form-control">
            <label>Email</label>
            <input type="text" {...register("email", { required: "Email is required.", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Email is not valid." } })}
              placeholder="Email"
              onChange={(e) => { setEmail(e.target.value) }} />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          </div>





          <div className="form-control">
            <label>Password</label>
            <input type="password" {...register("password", { required: true, validate: { checkLength: (value) => value.length >= 6, matchPattern: (value) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value) } })}
              placeholder="Password"
              onChange={(e) => { setPassword(e.target.value) }} />
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

            <button onClick={signUp}>Register</button>
          </div>



          <h2 style={{ color: 'white' }}>Alredy Have Account ? <button onClick={() => { navigate('/login') }}>Sign In</button></h2>


        </div>
      </div>
    </div>
  );
}

export default Registration