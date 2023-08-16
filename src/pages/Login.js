import React, { useState as State } from "react";
import { darklogo } from "../assets/index";
import { Link , useNavigate as Navigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {auth} from '../firebase'
// import { useDispatch as Dispatch } from "react-redux";

function login() {

  const navigate = Navigate();
  const [Email, setEmail] = State("");
  const [Password, setPassword] = State("");

  const [ErrEmail, setErrEmail] = State("");
  const [ErrPassword, setErrPassword] = State("");

  // const  dispatch=Dispatch();

  

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(Email,Password).then((auth)=>{
      if (auth) {
        // dispatch({
        //   type:'LOGIN',
        //   payload:auth
        // })
        navigate("/");
      }
    }).catch(error => alert(error.message))

    if(Email && Password){
      // console.log(Email, Password);
      setEmail("")
      setPassword("")
    }
    if (!Email) {
      setErrEmail("! Enter your email or phone number");
    }
    if (!Password) {
      setErrPassword("! Enter your Password");
    }
  };

  return (
    <div className="w-full">
      <div className="w-[100%,950px] flex justify-center">
        <form
          action=""
          className="w-[100%,950px] flex flex-col items-center justify-center pb-10"
        >
          <img className="w-[8rem] py-5" src={darklogo} alt="..." />
          <div>
            <h3 className="font-titleFont text-[30px] mr-[15rem] mb-4">
              Sign in
            </h3>
            <div className="w-full mb-3">
              <p className="mr-[5rem] text-sm font-semibold">
                Email or mobile phone number
              </p>
              <input
              value={Email}
                onChange={handleEmail}
                type="email"
                className="w-full py-1 px-2 border !border-zinc-400 text-base rounded-sm outline-none 
      focus-within:border-zinc-400 focus-within:shadow-amazonInput"
                placeholder="Email address" checked
              />
              {ErrEmail && (
                <p className="text-[red] text-xs font-semibold tracking-wide flex items-center gap-2 mt-1 italic">
                  {" "}
                  {ErrEmail}
                </p>
              )}
            </div>

            <div className="w-full mb-3">
              <p className="mr-[5rem] text-sm font-semibold">Password</p>
              <input
              value={Password}
                onChange={handlePassword}
                type="password"
                className="w-full py-1 px-2 border !border-zinc-400 text-base rounded-sm outline-none 
      focus-within:border-zinc-400 focus-within:shadow-amazonInput"
                placeholder="At least 6 characters"
              />
              {ErrPassword && (
                <p className="text-[red] text-xs font-semibold tracking-wide flex items-center gap-2 mt-1 italic">
                  {" "}
                  {ErrPassword}
                </p>
              )}
            </div>
            <button
              onClick={handleLogin}
              className="w-full mt-4 mb-4 bg-yellow-300 rounded-sm py-2 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700"
            >
              continue
            </button>
            <p className="w-[340px] text-sm">
              By continuing you agree to Amazon's
              <span className="text-blue-600 cursor-pointer hover:text-red-400 hover:underline">
                {" "}
                Conditions of Use{" "}
              </span>
              and
              <span className="text-blue-600 cursor-pointer hover:text-red-400 hover:underline">
                {" "}
                Privacy Notice
              </span>
            </p>

            <p className="text-blue-500 cursor-pointer mt-10 hover:text-red-400 hover:underline">
              <ArrowRightIcon style={{ color: "black" }} /> Need help?
            </p>
          </div>
          <div className="flex flex-col items-center w-full mt-5">
            <p className="text-sm mb-2">New to Amazon?</p>
            <Link to="/Register">
              <button
                type="submit"
                className="w-full border text-[15px] !border-zinc-300 py-1"
              >
                Create your Amazon account
              </button>
            </Link>
          </div>
          <div className="w-full mt-10  ">
            <ul className="flex gap-4 text-sm text-blue-500  cursor-pointer justify-center">
              <li className="hover:underline hover:text-red-400">
                Conditions of Use
              </li>
              <li className="hover:underline hover:text-red-400">
                Privacy Notice
              </li>
              <li className="hover:underline hover:text-red-400">Help</li>
            </ul>
            <p className="text-sm flex justify-center">
              © 1996-2023, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
