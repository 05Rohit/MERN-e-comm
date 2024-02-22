import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginAnimation from '../asset/loginImage.avif'

const Login = () => {

  const navigate = useNavigate();

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  const handleLogin= async(e)=>{
    e.preventDefault();

    const res= await fetch("/signin",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    const loginData=res.json() 
    console.log(loginData)

    if(res.status === 400 || !loginData )
    {
      toast("Invalid Credential")
      console.log("invalid from login.jsx")
      navigate("/login");
    }
    else{
      toast("Login successful")
      navigate('/')
    } 
  }

  return (
    <>
    <div className="flex gap-5  select-none ">
      <div className="w-1/2 m-auto sm:hidden">
      <img src={LoginAnimation} alt=""  />

      </div>

      <div className=" w-1/2 m-auto border-4 border-[#5AE4A9]  mt-16 rounded-xl mr-20 font-medium sm:w-[100%] sm:m-5 ">
        <h1 className="text-center pt-5 text-2xl ">Registration Form</h1>
        <div className="form_container">
          <div className="form_content flex flex-col gap-1 p-10">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              autoComplete="off"
              placeholder="Enter Your Email id"
              className="mb-5 mt-1 px-2 py-2 rounded-md ring ring-[#D5F8E8]"
              onChange={(e)=>setEmail(e.target.value)} 
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Enter Your password"
              autoComplete="off"
              className="mb-3 mt-1 px-2 py-2 rounded-md ring ring-[#D5F8E8] "
              onChange={(e)=> setPassword(e.target.value)}
            />

            <button className="bg-[#51cd97a9] text-white font-bold text-lg rounded-2xl w-max mt-4 px-7 py-1 m-auto
              hover:bg-[#29ec97]" onClick={handleLogin} >
              Sign In
            </button>

            <p className="mt-10 m-auto text-lg">
              Create new account?
              <spacn className="mx-2 text-red-800">
                
                <Link to={"/registration"}>Login</Link>
              </spacn>
            </p>
          </div>
        </div>
        <ToastContainer position="top-center" autoClose={1100} />
      </div>
      </div>
    </>
  );
};

export default Login;
