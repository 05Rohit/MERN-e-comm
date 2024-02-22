import React, { useState } from "react";
import { Link } from "react-router-dom";

import { RiShoppingCart2Fill } from "react-icons/ri";
import { PiUserCircle } from "react-icons/pi";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItemData = useSelector((state) => state.product.cartItem);
  const count = cartItemData?.length ?? 0;

  // Toggle for userICon dropdown option
  const [show, setShow] = useState(false);
  const toogleDisplay = () => {
    setShow((prev) => !prev);
  };

  const [menuState, setMenuState] = useState(false);

  

  return (
    <>
      <div className="sticky top-0 ">
        <div className=" flex justify-between items-center text-xl w-[100%] py-5 px-16  mx-auto bg-white md:px-5 ">
          <div>
            <Link to="/">YourShop</Link>
          </div>
       
            <div
              className={`flex gap-5 text-base bg-white ${menuState ? "LinkContainer" : "navMobileContainer"}`}onClick={()=> setMenuState(false) } >
              <Link
                className="md:p-2 md:rounded-2xl md:mr-10 hover:text-yellow-600 md:hover:font-semibold md:hover:shadow-lg"
                to={"/"}
          
              > Home </Link>
              {/* <Link to={"/menu"}> Menu </Link> */}
              <Link
                className="md:p-2 md:rounded-2xl md:mr-10 hover:text-yellow-600 md:hover:font-semibold md:hover:shadow-lg"
                to={"/about"}
              > About Me </Link>
              <Link
                className="md:p-2 md:rounded-2xl md:mr-10 hover:text-yellow-600 md:hover:font-semibold md:hover:shadow-lg"
                to={"/contact"}
              > Contact </Link>
              <Link
                className="md:p-2 md:rounded-2xl md:mr-10 hover:text-yellow-600 md:hover:font-semibold md:hover:shadow-lg"
                to={"/registration"}
              > Registration  </Link>
              <Link
                className="md:p-2 md:rounded-2xl md:mr-10 hover:text-yellow-600 md:hover:font-semibold md:hover:shadow-lg"
                to={"/login"}
              >   Login  </Link>
            </div>
      

          {/* Sign in button and menu icon */}

          <div className="flex items-center gap-6">
            {/* Shopping cart Icon */}
            <Link to={"/cart"}>
              <div className="text-2xl relative top-0 ">
                <RiShoppingCart2Fill className=" text-black" />

                <p className=" text-sm bg-blue-400 px-[4px] font-semibold rounded-lg text-white absolute -right-3 -top-3">
                  {count}
                </p>
              </div>
            </Link>

            {/* User ICON and option */}

            <div className="relative  top-0">
              <PiUserCircle
                className="text-3xl"
                onClick={() => toogleDisplay()}
              />
              {show && (
                <div className="mt-[20px] w-max bg-white absolute -left-24  flex flex-col gap-2 px-3 shadow drop-shadow-md">
                  <p className="whitespace-nowrap">
                    <Link to="/newproduct">New product</Link>{" "}
                  </p>
                  <p className="whitespace-nowrap">
                    {" "}
                    <Link to={"/logout"}> Logout </Link>
                  </p>
                </div>
              )}
            </div>

            {/* Show and hide menu for responsive devices */}
            <div className="Tooglebar ">
              <button className=" hidden text-3xl cursor-pointer md:block" onClick={()=> setMenuState(!menuState) }>
                {menuState ? (
                  <RxCross1  />
                ) : (
                  <FaBarsStaggered /> 
                 
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
