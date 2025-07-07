import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-10 px-4">
      {/* Main Content Grid */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Services */}
        <div>
          <p className="text-lg font-bold mb-4">Services</p>
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-bold">Software Development</p>
           
                <div className="flex flex-col justify-between gap-y-2">
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/services/software-development/webapps"}
              >
                Webapps
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/services/software-development/mobile-apps"}
              >
                Mobile Applications
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/services/software-development/desktop-apps"}
              >
                Desktop Applications
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/services/software-development/point-of-sale"}
              >
                POS
              </Link>
            </div>
            </div>
            <div>
              <p className="font-bold">Blockchain</p>
            
                  <div className="flex flex-col gap-y-2 justify-between">
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/services/blockchain/dapps"}
              >
                Dapps
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/services/blockchain/blockchain-wallets"}
              >
                Blockchain Wallets
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/services/blockchain/nft-marketplace"}
              >
                NFT Marketplace
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/services/blockchain/smart-contracts"}
              >
                Smart Contract Development
              </Link>
            </div>
              <div className="mt-4">
              <p className="font-bold">              Biometric & Embedded Systems
</p>
        
                       <div className="flex flex-col gap-y-2 justify-between">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                className="hover:text-blue-600"
                href="/services/biometric/biometric-authentication"
              >
                Biometric Authentication Systems
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                className="hover:text-blue-600"
                href="/services/biometric/embedded-iot-devices"
              >
                Embedded IoT Devices
              </Link>
              
            </div>
            </div>
            </div>
          </div>
        </div>

        {/* Services Continued */}
        <div className="mt-5 ">
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-bold">     Artificial Intelligence / Machine Learning</p>
            
                <div className="flex flex-col gap-y-2">
              <Link
                className="hover:text-blue-600 transition duration-200"
                style={{ textDecoration: "none", color: "black" }}
                href="/services/ai-ml/ai-automation"
              >
                Intelligent Process Automation
              </Link>
              <Link
                className="hover:text-blue-600 transition duration-200"
                style={{ textDecoration: "none", color: "black" }}
                href="/services/ai-ml/ai-analytics"
              >
                Predictive Analytics & Insights
              </Link>
              <Link
                className="hover:text-blue-600 transition duration-200"
                style={{ textDecoration: "none", color: "black" }}
                href="/services/ai-ml/ai-chatbots"
              >
                AI Chatbots & NLP Solutions
              </Link>
            </div>
            </div>
            <div>
              <p className="font-bold">Robotics</p>
              {/* <ul className="text-sm text-gray-700 space-y-1 mt-1">
                <li>Cloud Operations & Migration</li>
                <li>Cloud Applications</li>
                <li>Developments and integration</li>
                <li>Managed Services</li>
              </ul> */}
                  <div className="flex flex-col justify-between gap-y-2">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                className="hover:text-blue-600"
                href="/services/robotics/robotic-process-automation"
              >
                Robotic Process Automation (RPA)
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                className="hover:text-blue-600"
                href="/services/robotics/industrial-robots"
              >
                Industrial Robots Integration
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                className="hover:text-blue-600"
                href="/services/robotics/ai-powered-robots"
              >
                AI-Powered Autonomous Robots
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                className="hover:text-blue-600"
                href="/services/robotics/robotics-simulation"
              >
                Robotics Simulation & Testing
              </Link>
            </div>
            </div>
           
          </div>
        </div>

        {/* Industries + Insight */}
        <div>
          <p className="text-lg font-bold mb-4">Industries</p>
        
              <div className="flex flex-col gap-y-2">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/industries/communication"}
              className=" cursor-pointer hover:text-orange-400"
            >
              Communication{" "}
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/industries/banking-financial-services"}
              className=" cursor-pointer hover:text-orange-400"
            >
              Banking & Financial Services
            </Link>

            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/industries/public-sector"}
               className=" cursor-pointer hover:text-orange-400"
            >
              Public Sector{" "}
            </Link>
               <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/industries/health"}
               className=" cursor-pointer hover:text-orange-400"
            >
              Health{" "}
            </Link>   <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/industries/retail"}
               className=" cursor-pointer hover:text-orange-400"
            >
              Retail{" "}
            </Link>
         
        </div>

          <p className="text-lg mt-4 font-semibold mb-2">Insights</p>
          {/* <ul className="text-sm text-gray-700 space-y-1">
            <li>Digital consultancy</li>
            <li>Digital commerce</li>
            <li>Business Applications</li>
          </ul> */}
            <div className="flex flex-col gap-y-2">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/insights/case-studies"}
              className=" cursor-pointer hover:text-orange-400"
            >
              Case Studies{" "}
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/insights/newsroom"}
              className=" cursor-pointer hover:text-orange-400"
            >
              Newsroom
            </Link>

            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/insights/whitepapers-ebooks"}
               className=" cursor-pointer hover:text-orange-400"
            >
              Whitepapers/eBooks{" "}
            </Link>
                <Link
              style={{ textDecoration: "none", color: "black" }}
              href={"/insights/blogs"}
               className=" cursor-pointer hover:text-orange-400"
            >
Blogs            </Link>
         
        </div>
        </div>

        {/* Quick Links */}
        {/* <div>
          <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Digital consultancy</li>
            <li>Digital commerce</li>
            <li>Business Applications</li>
            <li>More Services</li>
          </ul>
        </div> */}
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
            <Link
              style={{ color: "grey" }}
              href={"https://www.linkedin.com/company/trust-nexus/"}
              target="_blank"
            >
              <FaLinkedin
                className="hover:text-black cursor-pointer"
                size={26}
              />
            </Link>
            <Link
              style={{ color: "grey" }}
              href={"https://web.facebook.com/profile.php?id=61573089682258"}
              target="_blank"
            >
              <FaFacebook
                className="hover:text-black cursor-pointer"
                size={26}
              />
            </Link>
            <Link
              style={{ color: "grey" }}
              href={"https://www.instagram.com/trustnexusco/"}
              target="_blank"
            >
              <FaInstagram
                className="hover:text-black cursor-pointer"
                size={26}
              />
            </Link>
            <Link style={{ color: "grey" }} href={""} target="_blank">
              <FaXTwitter
                className="hover:text-black cursor-pointer"
                size={26}
              />
            </Link>
            <Link style={{ color: "grey" }} href={""} target="_blank">
              <FaYoutube
                className="hover:text-black cursor-pointer"
                size={26}
              />
            </Link>
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
