import React from "react";
import { FaFacebook } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-300 w-full  py-[40px]">
      <div className="w-[1468px] flex mx-auto container gap-4  ">
        <div className="w-[550px] h-[386px] ">
          <h5>Services</h5>
          <div className="flex gap-16 my-4">
            <div className="">
              <h6>Digital</h6>
              <p>Digital consultancy</p>
              <p>Digital commerce</p>
              <p>Business Applications</p>
            </div>
            <div className="">
              <h6>Cloud</h6>
              <p>Cloud Operations & Migration</p>
              <p>Cloud Applications</p>
              <p>Developments and integration</p>
              <p>Managed Services</p>
            </div>
          </div>
          <div className="flex gap-16 my-4">
            <div className="">
              <h6>Data Analytics</h6>
              <p>Digital consultancy</p>
              <p>Digital commerce</p>
              <p>Business Applications</p>
            </div>
            <div className="">
              <h6>Digital Infrastructure Services</h6>
              <p>Cloud Operations & Migration</p>
              <p>Cloud Applications</p>
              <p>Developments and integration</p>
              <p>Managed Services</p>
            </div>
          </div>
        </div>
        <div className="w-[256px] h-[310px]">
          <h5 className="mb-4"> Industries</h5>
          <p>Digital consultancy</p>
          <p>Digital commerce</p>
          <p>Business Applications</p>
        </div>
        <div className="w-[257px] h-[310px]">
          <h5 className="mb-4"> Insight</h5>
          <p>Digital consultancy</p>
          <p>Digital commerce</p>
          <p>Business Applications</p>
          <p>Business Applications</p>
        </div>
        <div className="">
          <h5 className="mb-4"> Quick Links</h5>
          <p>Digital consultancy</p>
          <p>Digital commerce</p>
          <p>Business Applications</p>
          <p>Business Applications</p>
        </div>
      </div>
      <div className="flex mt-20  container  items-end justify-between">
        <div className="w-[526px]">
          <h5>Subscribe</h5>
          <p>Stay updated on how future of technology is shaping</p>
          <div className="flex gap-4 ">
            <input
              className="border-[1px] w-full border-gray-700 px-3  py-2"
              type="email"
              placeholder="Enter your email here"
            />
            <button className="border-[1px] border-gray-700 px-3 py-1">
              Submit
            </button>
          </div>
        </div>
        <div className="w-[526px] ">
          <ul className="flex items-end justify-end gap-7">
            <li>
              <FaLinkedin className="text-gray-400 cursor-pointer" size={26} />
            </li>
            <li>
              <FaFacebook className="text-gray-400 cursor-pointer" size={26} />
            </li>
            <li>
              <FaInstagram className="text-gray-400 cursor-pointer" size={26} />
            </li>
            <li>
              <FaXTwitter className="text-gray-400 cursor-pointer" size={26} />
            </li>
            <li>
              <FaYoutube className="text-gray-400 cursor-pointer" size={26} />
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-[1320px] mx-auto border-gray-300 my-3" />
      <div className="w-[1320px] h-[50px] mx-auto flex justify-between items-center">
        <div className="">
          <ul className="list-none flex items-center gap-8 my-4">
            <li>Privacy Policy</li>
            <li>Terms and Conditions </li> <li>Sitemap</li>{" "}
            <li>Cookie Policy</li>{" "}
          </ul>
        </div>
        <div className="w-[439px] flex justify-end items-end">
          <p>
            &copy; {new Date().getFullYear()} Trust Nexus. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
