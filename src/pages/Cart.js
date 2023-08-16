import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  deleteItem,
  resetCart,
  incQuantity,
  decQuantity,
} from "../redux/amazonSlice";
import { emptyCart } from "../assets/index";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.amazon.product);
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    let Total = 0;
    product.map((item) => {
      Total += item.price * item.quantity;
      return setTotalPrice(Total.toFixed(2));
    });
  }, [product]);

  return (
    <div className="w-[100%,950px] relative bg-gray-100">
      {product.length > 0 ? (
        <div className=" mx-auto relative flex flex-col-2  p-4 gap-2">
          <div className="w-[100%,950px] h-full bg-white px-2  col-span-4">
            <div className="font-titleFont mdl:relative mt-[8rem]  mdl:mt-0 items-center justify-between border-b-[1px] border-b-gray-300 py-2">
              <h2 className="text-3xl font-medium hidden mdl:inline-flex">Shopping Cart</h2>
              <p
                onClick={() => dispatch(resetCart())}
                className="text-green-700  font-semibold text-sm hover:underline cursor-pointer hover:text-red-600 "
              >
                Clear All Items
              </p>
              {/* <h4 className="text-xl font-normal">Subtotal</h4> */}
            </div>
            <div>
              {product.map((item) => (
                <div
                  key={item.id}
                  className="w-full border-b-[1px] border-b-gray-300 mdl:p-4 mdl:flex items-center flex flex-col-1 gap-2 relative bg-gray-200 bg-white"
                >
                  <div className="w-2/5"> 
                    <img
                      className="w-full h-44 object-contain"
                      src={item.image}
                      alt="Images"
                    />
                  </div>
                  <div className="w-3/5">
                    <h2 className="font-semibold text-lg">{item.title.substring(0,16)}</h2>
                    <p className="py-1 hidden mdl:inline-flex text-sm">{item.description}</p>
                    <p>
                      Unit Price :{" "}
                      <span className="font-semibold">${item.price}</span>
                    </p>
                    <div className="bg-[#f0f2f2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md">
                      <p>Qty:</p>
                      <p
                        onClick={() => dispatch(decQuantity(item.id))}
                        className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                      >
                        -
                      </p>
                      <p>{item.quantity}</p>
                      <p
                        onClick={() => dispatch(incQuantity(item.id))}
                        className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                      >
                        +
                      </p>
                    </div>
                    <button
                      onClick={() => dispatch(deleteItem(item.id))}
                      className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                    >
                      Delete Item
                    </button>
                  </div>
                  <div className="">
                    <p className="font-titleFont text-lg font-semibold">
                      {/* ${item.price * item.quantity} */}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0  mdl:relative  mdl:w-[600px]  h-40  bg-white flex items-center ">
            <div className=" items-center w-[20rem] ">
              <p className="text-xs  text-green-600">
                <span>
                  <CheckCircleIcon style={{}} />{" "}
                </span>
                Your order is eligible for FREE Delivery.
              </p>
              <p className="text-xs">
                Select this option at checkout.
                <span className="text- hover:underline cursor-pointer text-green-700">
                  {" "}
                  Details
                </span>
              </p>
              <div className="w-[100%,950px]">
                <p className="font-semibold  py-1 flex items-center gap-2">
                  Subtotal: <span>${totalPrice}</span>
                </p>
                <div className="flex gap-2">
                  <input className="" type="checkbox"></input>
                  <span className="text-sm"> This order contains a gift</span>
                </div>
              </div>
              <button className="mdl:w-full w-[100%] mt-2 flex justify-center bg-yellow-300 rounded-md py-2 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700">
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center items-center py-10 ">
          <div className="w-[100%,950px] flex items-center justify-center ">
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="...."
            />
          </div>
          <div className="w-98">
            <h1 className="text-xl font-bold ">Your Amazon Cart is empty.</h1>
            <div className="flex items-center gap-1">
              <span className="text-sm">
                Check your Saved for later items below or
                <Link to="/">
                  <span className=" text-sm text-green-800 hover:underline hover:text-red-700 cursor-pointer">
                    {" "}
                    continue shopping.
                  </span>
                </Link>{" "}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
