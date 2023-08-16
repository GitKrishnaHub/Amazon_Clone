import React, { useState } from "react";
import { darklogo } from "../assets";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Register() {
  const navigate = useNavigate();

  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  //error massage
  const [ErrName, setErrName] = useState("");
  const [ErrMobile, setErrMobile] = useState("");
  const [ErrEmail, setErrEmail] = useState("");
  const [ErrPassword, setErrPassword] = useState("");

  //Handle function start
  const handleName = (e) => {
    setName(e.target.value);
    setErrName("");
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
    setErrMobile("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const emailvalidation = (Email) => {
    return String(Email).match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
  };

  // submit button start
  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(Email, Password, Name, Mobile)
      .then((auth) => {
        if (auth) {
          console.log(auth);
          navigate("/login");
        }
      })
      .catch((error) => alert(error.message));

    if (!Name) {
      setErrName("! Please enter your Name");
    } else {
      if (Name < 50) {
        setErrName("! Please enter your Name");
      }
    }

    if (!Mobile) {
      setErrMobile("! Please Enter Mobile Number.");
    } else {
      if (Mobile < 10) {
        setErrMobile("! Please Enter Valid Mobile Number.");
      }
    }
    if (!Email) {
      setErrEmail("! Enter your email address");
    } else {
      if (!emailvalidation(Email)) {
        setErrEmail("! Please provide a valid email address");
      } else {
      }
    }
    if (!Password) {
      setErrPassword("! Enter your password ");
    } else {
      if (Password.length < 6) {
        setErrPassword("! Password should be at least six characters long.");
      }
    }
    if (
      Name &&
      Mobile &&
      emailvalidation(Email) &&
      Password &&
      Password.length >= 6
    ) {
      console.log(Name, Mobile, Email, Password);
      setName("");
      setMobile("");
      setEmail("");
      setPassword("");
    }
  };
  const number = document
    .querySelectorAll('input[type="number"]')
    .forEach((input) => {
      input.oninput = () => {
        if (input.value.length > input.maxLength)
          input.value = input.value.slice(0, input.maxLength);
      };
    });
  return (
    <div>
      <div className="w-full">
        <div className="w-[100%,950px] flex justify-center">
          <form
            action=""
            className="w-[100%,950px] flex flex-col items-center justify-center pb-10"
          >
            <img className="w-[8rem] py-5" src={darklogo} alt="..." />
            <div>
              <h3 className="font-titleFont text-[30px]  mb-4">
                Create Account
              </h3>

              <div className="w-full mb-3">
                <p className="mr-[5rem] text-sm font-semibold">Your name</p>
                <input
                  value={Name}
                  onChange={handleName}
                  type="text"
                  className="w-full py-1 px-2 border !border-zinc-400 text-base rounded-sm outline-none 
      focus-within:border-zinc-400 focus-within:shadow-amazonInput"
                  placeholder="First and last name"
                />
                {ErrName && (
                  <p className="text-[red] text-xs font-semibold tracking-wide flex items-center gap-2 mt-1 italic">
                    {ErrName}
                  </p>
                )}
              </div>
              <div className="w-full mb-3">
                <p className="mr-[5rem] text-sm font-semibold">Mobile number</p>
                <input
                  value={Mobile}
                  onChange={handleMobile}
                  maxLength={10}
                  type={number}
                  className="w-full py-1 px-2 border !border-zinc-400 text-base rounded-sm outline-none 
      focus-within:border-zinc-400 focus-within:shadow-amazonInput"
                  placeholder="Mobile number"
                />
                {ErrMobile && (
                  <p className="text-[red] text-xs font-semibold tracking-wide flex items-center gap-2 mt-1 italic">
                    {ErrMobile}
                  </p>
                )}
              </div>
              <div className="w-full mb-3">
                <p className="mr-[5rem] text-sm font-semibold">
                  Email (optional)
                </p>
                <input
                  value={Email}
                  onChange={handleEmail}
                  type="email"
                  className="w-full py-1 px-2 border !border-zinc-400 text-base rounded-sm outline-none 
      focus-within:border-zinc-400 focus-within:shadow-amazonInput"
                  placeholder="Email address"
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
              <p className="w-[340px] text-[13px]">
                Passwords must be at least 6 characters.
              </p>
              <p className="w-[340px] mt-4 text-[13px]">
                By enrolling your mobile phone number, you consent to receive
                automated security notifications via text message from Amazon.
                Message and data rates may apply.
              </p>

              <button
                type="submit"
                onClick={handleRegister}
                className="w-full mt-3 mb-4 bg-yellow-300 rounded-md py-2 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700"
              >
                continue
              </button>

              <p className="w-[340px] text-sm mt-8 mb-8">
                Already have an account?
                <Link to="/login">
                  {" "}
                  <span className="text-blue-600 cursor-pointer hover:text-red-400 hover:underline">
                    {" "}
                    Sign in <ArrowRightIcon />
                  </span>
                </Link>
                Buying for work?
                <span className="text-blue-600 cursor-pointer hover:text-red-400 hover:underline">
                  {" "}
                  Create a free business account
                  <ArrowRightIcon />
                </span>
              </p>
              <p className="w-[340px] text-sm">
                By creating an account or logging in, you agree to Amazon's
                <span className="text-blue-600 cursor-pointer hover:text-red-400 hover:underline">
                  {" "}
                  Conditions of Use{" "}
                </span>
                and
                <span className="text-blue-600 cursor-pointer hover:text-red-400 hover:underline">
                  {" "}
                  Privacy Notice.
                </span>
              </p>
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
    </div>
  );
}

export default Register;
