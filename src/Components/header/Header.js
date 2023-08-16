import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import india from "../../assets/india.png";
import "./Header.css";
import { accList, allItems } from "../../constants";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HeaderBottom from "./HeaderBottom";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import LogoutIcon from "@mui/icons-material/Logout";

function Header() {
  const [showAll, setShowAll] = useState(false);
  const [listAll, setListAll] = useState(false);

  const [userName, setUserName] = useState("");

  const product = useSelector((state) => state.amazon.product);
  const navigate = useNavigate();
  const logoutBtn = document.getElementById("logout");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log('USER : ' ,user)
      try {
        if (user) {
          setUserName(user.email);
          // logoutBtn.style.display="block";
        } else {
          setUserName("Hello,SignIn");
          logoutBtn.style.display = "none";
        }
      } catch (e) {
        console.log(e.message);
      }
    });
  });

  const handleAuthentication = () => {
    if (userName) {
      auth.signOut();
      navigate("/");
    }
  };

  return (
    <div className="w-full top-0 sticky z-50 ">
      <div className="w-full flex h-20 mdl:h-14 bg-amazon_blue text-white px-3 mdl:flex flex-block gap-4 ">
        <Link to="/">
          <div className=" flex h-14 p-1 items-center justify-center  mdl:hover:border border-white-100">
            <img className="w-[6rem] mt-2" src={logo} alt="logo" />
          </div>
        </Link>

        <div className=" h-14 p-1 items-center mt-[2.5rem] mdl:mt-0 justify-center absolute mdl:relative mdl:hover:border border-white-100 mdl:flex cursor-pointer">
          <LocationOnOutlinedIcon />
          <p className="text-sm text-light font-light flex flex-col hidden mdl:inline-flex">
            <span className="">Deliver to{" "}</span> 
            <span className="text-sm font-semibold -mt-1 text-white">
              Bangalore
            </span>
          </p>
        </div>

        <div className=" h-14  p-1 items-center rounded-md flex absolute mt-8 w-[14rem] mdl:mt-0 ml-14 mdl:right-0 mdl:relative  mdl:flex flex-grow">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-8 mdl:h-10 bg-gray-200 hover:bg-gray-300 border-1 cursor-pointer duration-300
        text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </span>
          {showAll && (
            <div>
              <ul
                className="absolute w-65 h-80 top-10 left-1 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2
              flex-col gap-1 z-50"
              >
                {allItems.map((item) => (
                  <li
                    className="list_items text-m tracking-wide font-titleFont border-b-[1px] border-b-transparent 
                  hover: cursor-pointer bg-c-blue duration-200"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            maxLength={80}
            className="w-full h-8 mdl:h-10 text-base text-amazon_blue flex  items-center justify-center outline-none border-none"
            type="text"
          />
          <span
            className="w-12 h-8 mdl:h-10 flex items-center justify-center bg-amazon_yellow
         hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md"
          >
            <SearchOutlinedIcon />
          </span>
        </div>

        <div className="h-14  p-1  hidden mdl:inline-flex hover:border border-white-100">
          <p className="flex items-center text-sm font-semibold text-white  p-1.5">
            <img className="h-7 mr-2" src={india} alt="Language" />
            EN
            <ArrowDropDownOutlinedIcon />
          </p>
        </div>

        <Link to="/login" className="text-white h-0">
          <div className="flex flex-col h-14 p-1 items-center relative justify-center mdl:hover:border border-white-100 ">
            <p className="text-sm text-lightText font-semibold mdl:text-xs flex items-center ">
              {userName ? userName.split("@", [1]) : "Hello, sign in"}
            </p>
            <p className="hidden mdl:inline-flex mdl:text-sm font-semibold  text-white items-center text-xs">
              Account & Lists
              <span onMouseMove={() => setListAll(!listAll)}   >
                <ArrowDropDownOutlinedIcon />
              </span>
              {listAll && (
                <div className="">
                  <ul
                    className="absolute left-0 top-12 w-40 h-35 mdl:h-60 mdl:w-72 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2
              flex-col gap-1 z-50"
                  >
                    {accList.map((item) => (
                      <li
                        className="list_items w-80 text-m tracking-wide font-titleFont border-b-[1px] border-b-transparent 
                  hover: cursor-pointer bg-c-blue duration-200"
                        key={item._id}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </p>
          </div>
        </Link>

        <div className="w-[100%,950px] flex flex-col h-14 p-1 items-center justify-center mdl:hover:border border-white-100 cursor-pointer ">
          <p className="text-xs  text-lightText font-light hidden mdl:inline-flex mdl:text-sm">
            Returns &
          </p>
          <p className="text-sm   font-semibold  text-white "> Orders</p>
        </div>

        <Link to="/cart" className="text-white">
          <div className="w-[100%.950ppx] h-14 p-1 flex flex-col items-center mdl:hover:border border-white-100 justify-center relative">
            <p className="text-l font-bold text-whiteText">
              <ShoppingCartOutlinedIcon />
              <span className="hidden mdl:inline-flex">Cart</span> 
              <span className="absolute text-sm top-2 left-3 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {product.length > 0 ? product.length : 0}
              </span>
            </p>
          </div>
        </Link>

        <div
          id="logout"
          className="justify-center items-center right-3 bottom-8 mdl:bottom-0 h-14 p-1 flex mdl:relative absolute  mdl:hover:border border-white-100 cursor-pointer"
        >
          <p onClick={handleAuthentication}>
            <LogoutIcon />
          </p>
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
}

export default Header;
