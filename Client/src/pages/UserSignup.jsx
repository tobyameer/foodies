import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserSignup = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/userSignup",
        {
          name,
          lastName,
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((result) => {
        if (result.status === 201) {
          navigate("/userlogin");
          console.log("User Created Successfully!");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          window.alert("Email already exists. Please use a different email");
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div>
      {/* Logo */}
      <div className="flex w-full h-screen items-center justify-center bg-orange-50">
        <div className="border border-orange-400 w-[500px] h-[680px] rounded-3xl bg-orange-100 flex flex-col items-center justify-center">
          <h1 className="my-[10px] text-[32px] text-center ">Sign Up</h1>
          <div className="flex flex-col">
            <p className="my-[6px] font-semibold text-[18px]">First Name</p>
            <div className="flex items-center pl-4 border-none bg-gray-100 w-[300px] rounded-xl h-[45px]">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="First Name"
                className="border-none p-3 bg-inherit placeholder-[gray] hover:outline-none hover:ring-0 hover:border-transparent "
              />
            </div>
            <p className="my-[6px] font-semibold text-[18px]">Last Name</p>
            <div className="flex items-center pl-4 border-none bg-gray-100 w-[300px] rounded-xl h-[45px]">
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
                className="border-none p-3 bg-inherit placeholder-[gray] hover:outline-none hover:ring-0 hover:border-transparent "
              />
            </div>
            <p className="my-[6px] font-semibold text-[18px]">Email</p>
            <div className="flex items-center pl-4 border-none bg-gray-100 w-[300px] rounded-xl h-[45px]">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                className="border-none p-3 bg-inherit placeholder-[gray] hover:outline-none hover:ring-0 hover:border-transparent "
              />
            </div>
            <p className="my-[6px] font-semibold text-[18px] ">Password</p>
            <div className="flex items-center pl-4 border-none bg-gray-100 w-[300px] rounded-xl h-[45px]">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="border-none p-3 bg-inherit placeholder-[gray] hover:outline-none hover:ring-0 hover:border-transparent "
              />
            </div>
            <div className="flex flex-row items-center justify-between text-[11px]">
              <div className="flex items-center">
                <input type="checkbox" name="" id="" />
                <p className="mx-2 text-gray-500">Remember Password</p>
              </div>
              <a className="text-[#007EA7]" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className=" mt-[35px] bg-orange-600 text-white w-[300px] h-[45px] rounded-2xl"
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* SingUp */}
          <div className="flex justify-center my-3">
            <p className=" text-[12px] text-gray-500">
              Already have an account?
            </p>
            <p className="text-[12px] ml-1">
              <Link to="/userLogin">
                <a href="" className="text-orange-500">
                  Login
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
