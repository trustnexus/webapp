import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  return (
    <div className="text-black w-full shadow-md min-h-[300px] py-6 px-10">
      <div className="flex max-w-[1320px] mx-auto justify-around gap-5 ">
        <div className="max-w-[390px] flex flex-col justify-between gap-7 w-full h-full bg-gray-200 px-5 py-3">
          <p className="md:text-[29px] font-semibold">Services</p>
          <div className="w-full ">
            <img
              src="https://www.systemsltd.com/sites/default/files/2024-11/Why%20data%20standards%20matter%20%26%20why%20they%E2%80%99re%20important-%20Systems%20Limited.webp"
              alt=""
            />
          </div>
          <p className="font-medium">
            Why data standards matter & why they’re important
          </p>
          <div className="">
            <Link
              href={"/contact-us"}
              style={{ textDecoration: "none" }}
              className="flex items-center justify-center gap-2"
            >
              Learn more <GoArrowUpRight size={20} />{" "}
            </Link>
          </div>
        </div>
        <div className="flex min-w-[360px]   w-full flex-col gap-3 justify-evenly">
          <div className="flex flex-col">
            <h5 className="text-[20px] mb-[100px] font-semibold">
              Software development
            </h5>
            <div className="flex flex-col justify-between">
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
          <div className="flex flex-col">
            <h5 className="text-[20px] font-semibold">Blockchain</h5>
            <div className="flex flex-col gap-1 justify-between">
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
          </div>

          <div className="flex flex-col">
            <h5 className="text-[20px] font-semibold ">
              Artificial Intelligence / Machine Learning
            </h5>
            <div className="flex flex-col gap-2">
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
        </div>
        <div className="flex min-w-[360px]   w-full flex-col gap-3 ">
          <div className="flex flex-col">
            <h5 className="text-[20px] mb-[40px] font-semibold">Robotics</h5>
            <div className="flex flex-col justify-between gap-2">
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

          <div className="flex flex-col">
            <h5 className="text-[20px] font-semibold">
              Biometric & Embedded Systems
            </h5>
            <div className="flex flex-col gap-2 justify-between">
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
              <Link
                style={{ textDecoration: "none", color: "black" }}
                className="hover:text-blue-600"
                href="/services/biometric/access-control-systems"
              >
                Access Control & Face Recognition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
