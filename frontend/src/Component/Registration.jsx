import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";

import RegistrationImage from '../asset/RegistrationImage.avif'

//tostify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let name, value;
  const getValues = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const togglePasswordIcon = (e) => {
    setShowPassword((prev) => !prev);
  };
  const toggleConPasswordIcon = (e) => {
    setShowCPassword((prev) => !prev);
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = user;

    if (firstName && lastName && email && password && confirmPassword) {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        }),
      });

      const resData = await res.json();
      console.log(resData);

      toast(`Registration Successful:`);
      alert("Registration Successful:");
      console.log("Registration successful");

      navigate("/login");
    } else {
      console.log("missing data");
    }

  };

  return (
    <>
    <div className=" flex justify-between">
      <div className="w-full m-auto sm:hidden">
        <img src={RegistrationImage} alt="" />

      </div>
      <div className="w-[100%] m-auto my-16 mx-14 rounded-xl select-none border-4 border-[#5AE4A8] sm:m-5 "
      >
        <h1 className="text-center pt-5 text-2xl ">Registration Form</h1>
        <div className="form_container">
          <div className="form_content flex flex-col gap-1 p-10">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstname"
              placeholder="Enter Your First Name"
              value={user.firstName}
              className="mb-3 px-2 py-1 rounded-md ring ring-[#D5F8E8]"
              onChange={getValues}
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lastname"
              value={user.lastName}
              placeholder="Enter Your last Name"
              className="mb-3 px-2 py-1 rounded-md ring ring-[#D5F8E8]"
              onChange={getValues}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              placeholder="Enter Your Email id"
              className="mb-3 px-2 py-1 rounded-md ring ring-[#D5F8E8]"
              onChange={getValues}
            />

            <label htmlFor="password">Password:</label>
            <div className="flex relative top-0 ">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="passwords"
                value={user.password}
                placeholder="Enter Your password"
                className="mb-3 px-2 py-1 rounded-md w-full ring ring-[#D5F8E8]"
                onChange={getValues}
              />
              <span
                className="flex absolute right-0 top-[20%] px-3 cursor-pointer "
                onClick={togglePasswordIcon}
              >
                {showPassword ? <BsEye /> : <BsEyeSlash />}
              </span>
            </div>

            <label htmlFor="confirmpassword">Confirm Password:</label>
            <div className="flex  relative top-0">
              <input
                type={showCPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmpassword"
                value={user.confirmPassword}
                placeholder="Enter confirm password"
                className="mb-3 px-2 py-1 rounded-md w-full ring ring-[#D5F8E8]"
                onChange={getValues}
              />

              <span
                className="absolute flex right-0 top-[20%] px-3 cursor-pointer"
                onClick={toggleConPasswordIcon}
              >
                {showCPassword ? <BsEye /> : <BsEyeSlash />}
              </span>
            </div>

            <button
              className="bg-[#51cd97a9] text-slate-900 font-bold text-lg rounded-2xl  mt-3 px-7 py-1 m-auto hover:bg-[#29ec97]"
              onClick={PostData}
            >
              Register
            </button>

            <p className="mt-5 m-auto text-lg">
              Already have account?
              <span className="mx-2 text-red-800">
                <Link to={"/login"}>Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      </div>

      <ToastContainer position="top-center" autoClose={1100} />
    </>
  );
};

export default Registration;
