
import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-10 px-4">
      {/* Main Content Grid */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Services */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Services</h5>
          <div className="flex flex-col gap-6">
            <div>
              <h6 className="font-medium">Digital</h6>
              <ul className="text-sm text-gray-700 space-y-1 mt-1">
                <li>Digital consultancy</li>
                <li>Digital commerce</li>
                <li>Business Applications</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium">Cloud</h6>
              <ul className="text-sm text-gray-700 space-y-1 mt-1">
                <li>Cloud Operations & Migration</li>
                <li>Cloud Applications</li>
                <li>Developments and integration</li>
                <li>Managed Services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services Continued */}
        <div>
          <div className="flex flex-col gap-6">
            <div>
              <h6 className="font-medium">Data Analytics</h6>
              <ul className="text-sm text-gray-700 space-y-1 mt-1">
                <li>Digital consultancy</li>
                <li>Digital commerce</li>
                <li>Business Applications</li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium">Digital Infrastructure Services</h6>
              <ul className="text-sm text-gray-700 space-y-1 mt-1">
                <li>Cloud Operations & Migration</li>
                <li>Cloud Applications</li>
                <li>Developments and integration</li>
                <li>Managed Services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Industries + Insight */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Industries</h5>
          <ul className="text-sm text-gray-700 space-y-1 mb-6">
            <li>Digital consultancy</li>
            <li>Digital commerce</li>
            <li>Business Applications</li>
          </ul>

          <h5 className="text-lg font-semibold mb-4">Insight</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Digital consultancy</li>
            <li>Digital commerce</li>
            <li>Business Applications</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Digital consultancy</li>
            <li>Digital commerce</li>
            <li>Business Applications</li>
            <li>More Services</li>
          </ul>
        </div>
      </div>

      {/* Subscribe and Social */}
      <div className="max-w-screen-xl mx-auto mt-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 px-2">
        {/* Subscribe */}
        <div className="w-full lg:w-1/2">
          <h5 className="text-lg font-semibold mb-2">Subscribe</h5>
          <p className="text-sm text-gray-700 mb-4">
            Stay updated on how future of technology is shaping
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email here"
              className="border border-gray-700 px-4 py-2 w-full sm:w-auto flex-grow"
            />
            <button className="bg-gray-800 text-white px-6 py-2 hover:bg-gray-700 transition">
              Submit
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div className="w-full lg:w-1/2 flex justify-start lg:justify-end">
          <ul className="flex gap-6 text-gray-600 mt-4 lg:mt-0">
            <li>
              <FaLinkedin className="hover:text-black cursor-pointer" size={26} />
            </li>
            <li>
              <FaFacebook className="hover:text-black cursor-pointer" size={26} />
            </li>
            <li>
              <FaInstagram className="hover:text-black cursor-pointer" size={26} />
            </li>
            <li>
              <FaXTwitter className="hover:text-black cursor-pointer" size={26} />
            </li>
            <li>
              <FaYoutube className="hover:text-black cursor-pointer" size={26} />
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-400 my-6 max-w-screen-xl mx-auto" />

      {/* Bottom Links */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-700 px-2">
        <ul className="flex flex-wrap gap-4 mb-2 md:mb-0">
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Sitemap</li>
          <li>Cookie Policy</li>
        </ul>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Trust Nexus. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
