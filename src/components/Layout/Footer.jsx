import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import {
  footerProductLinks,
  footerSupportLinks,
  footercompanyLinks,
} from "../../static/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#32a850] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#F6BA00] font-bold">Subscibe</span> us for get
          news <br />
          events and offers
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800
            sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#F6BA00] text-black hover:bg-teal-500 hover:text-white duration-300 px-5 py-2.5 rounded-md md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-10 sm:text-cente">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src={require("../../Assests/my_shop_img.png")}
            alt="my-shop"
            style={{ filter: "brightness(0) invert(1)" }}
            className="h-[120px] w-[150px]"
          />
          <br />
          <p className="text-[18px]">
            The home and elements needed to create beautiful products.
          </p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiOutlineInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiOutlineYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>
        <ul className="text-center sm:text-start text-[26px]">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start text-[26px]">
          <h1 className="mb-1 font-semibold">My Shop</h1>
          {footercompanyLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start text-[26px]">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pb-5 text-gray-400 text-sm-pb-8">
        <span> Made with ❤. Written by Madhavi Giduthuri</span>
        <span> All rights reserved. Terms . privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt="cards-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
