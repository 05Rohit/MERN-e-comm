import React from "react";
import { Link } from "react-router-dom";

import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const LinkedIn = "www.linkedin.com/in/25rohitkumar";
  const EmailId = "25rohitKumar98@gmail.com";
  const PhoneNo = "+91 8789421173";
  return (
    <>
      <div className="p-5 px-20 bg-slate-200 flex justify-between m-auto md:px-0">
        <div className="flex flex-col gap-1 text-sm md:px-6">
          <Link to={"/"}> Home </Link>
          {/* <Link to={"/menu"}> Menu </Link> */}
          <Link to={"/about"}> About Me </Link>
          <Link to={"/contact"}> Contact </Link>
          <Link to={"/registration"}> Registration </Link>
          <Link to={"/login"}> Login </Link>
        </div>

        <div className="ContactInfo ">
          <Link to={LinkedIn} target="_blank" className="flex gap-5 md:flex-col md:gap-1 md:px-3 ">
            <FaLinkedin /> <span>25rohitkumar </span>
          </Link>
          <Link to={EmailId} target="_blank" className="flex gap-5 md:flex-col md:gap-1 md:px-3  ">
            <MdOutlineMailOutline /> <span>{EmailId} </span>
          </Link>

          <Link to={PhoneNo} target="_blank" className="flex gap-5 md:flex-col md:gap-1 md:px-3">
       
            <FaPhoneAlt /> <span>{PhoneNo} </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
