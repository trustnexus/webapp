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
              href={"/"}
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
                href={"/webapps"}
              >
                Webapps
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/mobile-apps"}
              >
                Mobile Applications
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/desktop-apps"}
              >
                Desktop Applications
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/point-of-sale"}
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
                href={"/dapps"}
              >
                Dapps
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/"}
              >
                Mobile Applications
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/"}
              >
                Desktop Applications
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/"}
              >
                POS
              </Link>
            </div>
          </div>{" "}
          <div className="flex flex-col">
            <h5 className="text-[20px] font-semibold ">
              Artificial Intelligence / Machine Learning
            </h5>
            <div className="flex flex-col gap-2">
              <Link
                className="hover:text-blue-600 transition duration-200"
                style={{ textDecoration: "none", color: "black" }}
                href="/ai-automation"
              >
                Intelligent Process Automation
              </Link>
              <Link
                className="hover:text-blue-600 transition duration-200"
                style={{ textDecoration: "none", color: "black" }}
                href="/ai-analytics"
              >
                Predictive Analytics & Insights
              </Link>
              <Link
                className="hover:text-blue-600 transition duration-200"
                style={{ textDecoration: "none", color: "black" }}
                href="/ai-chatbots"
              >
                AI Chatbots & NLP Solutions
              </Link>
              <Link
                className="hover:text-blue-600 transition duration-200"
                style={{ textDecoration: "none", color: "black" }}
                href="/ai-custom-models"
              >
                Custom AI/ML Model Development
              </Link>
            </div>
          </div>
        </div>
        <div className="flex min-w-[360px]   w-full flex-col gap-3 ">
          <div className="flex flex-col">
            <h5 className="text-[20px] mb-[100px] font-semibold">Robotics </h5>
            <div className="flex flex-col justify-between">
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/"}
              >
                Webapps
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/"}
              >
                Mobile Applications
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/"}
              >
                Desktop Applications
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/"}
              >
                POS
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="text-[20px] font-semibold">
              Biometric & Embedded systems
            </h5>
            <div className="flex flex-col gap-1 justify-between">
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/"}
              >
                Dapps
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/"}
              >
                Mobile Applications
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/"}
              >
                Desktop Applications
              </Link>
              <Link
                className="hover:text-black"
                style={{ textDecoration: "none", color: "black" }}
                href={"/"}
              >
                POS
              </Link>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Services;
