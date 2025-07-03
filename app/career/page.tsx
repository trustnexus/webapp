
"use client";
import Help from "@/components/Help";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import { FaArrowRightLong } from "react-icons/fa6";

const page = () => {
  const countries = [
    { name: "EQYPT" },
    { name: "PAKISTAN" },
    { name: "IRAN" },
    { name: "UAE" },
    { name: "UK" },
    { name: "KSA" },
    { name: "SOUTH AFRICA" },
    { name: "MALAYSIA" },
    { name: "QATAR" },
    { name: "SINGAPORE" },
    { name: "KENYA" },
  ];
  const cities = [
    { name: "KARACHI" },
    { name: "ISLAMABAD" },
    { name: "MULTAN" },
    { name: "LAHORE" },
    { name: "FAISALABAD" },
  ];

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[600px] sm:h-[757px] w-full">
        <div className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('https://www.shutterstock.com/image-photo/smiling-young-curly-indian-latin-600nw-2134896799.jpg')] flex items-end px-6 sm:px-10 md:px-20 pb-16 sm:pb-24">
          <div className="text-white max-w-[1296px]">
            <p className="font-light text-[13px]">CAREERS</p>
            <p className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[90px] leading-tight font-light">
              Take your <br /> career to the <br /> next level
            </p>
            <Link
            style={{textDecoration:'none'}}
              href="/"
              className="inline-block py-4 mt-3 px-10 text-sm rounded-md bg-white text-black uppercase"
            >
              Explore Jobs
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-4 bg-white relative">
        <div className="max-w-[1382px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          <div className="max-w-[595px] text-center lg:text-left">
            <p className="text-3xl sm:text-4xl md:text-[54px] mb-6 font-[400]">
              We are from the people
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">
              We are a team of 6500+ people – with a purpose to thrive in our
              value-driven culture and make a real and lasting difference to
              the organization and their careers.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <img
              src="https://www.systemsltd.com/sites/default/files/2023-03/reel-color.webp"
              alt="video-poster"
              className="w-full max-w-[400px] grayscale hover:grayscale-0 hover:scale-105 transition duration-200"
            />
          </div>
        </div>
      </section>

      {/* Career Tracks */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-[1320px] mx-auto text-center">
          <p className="text-sm mb-4">CAREERS TRACKS</p>
          <p className="text-[18px] sm:text-[20px] mb-10">
          Techies, innovators, developers, and free-thinkers… you’ve come to
              the right place. Whether you’re an experienced professional or a
              recent graduate, working with Systems will give you opportunities
              to excel and achieve the global recognition that you deserve!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Graduates",
              "Experienced Professionals",
              "Internship/MTO",
            ].map((title, idx) => (
              <div
                key={idx}
                className="max-w-[300px] flex flex-col gap-3"
              >
                <img
                  src={`https://www.systemsltd.com/sites/default/files/2023-03/career-tracks${idx + 1}.webp`}
                  alt={title}
                  className="w-full"
                />
                <h4 className="font-light text-lg">{title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="min-h-[500px] flex flex-col justify-center items-center text-black bg-[url('https://i.pinimg.com/736x/c7/1d/f6/c71df612b413d84bdcec0ec8e4cc3049.jpg')] bg-cover bg-center py-16">
        <p className="text-white text-3xl md:text-[54px] mb-10 text-center px-4">
          Our people, our success
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 px-6 max-w-[1291px] bg-white rounded-2xl py-10">
          {[
            { value: 2113, label: "Global Employee Count" },
            { value: 4270, label: "Strong social media community" },
            { value: 60, label: "Total Training Sessions" },
            { value: 1560, label: "Total participants" },
          ].map((stat, index) => (
            <div className="text-center" key={index}>
              <p className="text-[36px] font-bold">
                <CountUp duration={2} end={stat.value} enableScrollSpy suffix="+" />
              </p>
              <p className="text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <div className="relative h-[200px] sm:h-[220px]">
        <video
          className="w-full h-full object-cover absolute inset-0"
          src="https://www.systemsltd.com/sites/default/files/2024-02/globe-animation-grey%20%282%29.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>

      {/* Global Team CTA */}
      <section className="py-20 px-6 text-center relative bg-white">
        <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-md">
          <p className="text-2xl sm:text-[54px] mb-4">Join our global team</p>
          <p className="text-[16px] sm:text-[20px] mb-4">
            Our career opportunities also span around the world.
          </p>
          <FaArrowRightLong className="mx-auto text-orange-400 cursor-pointer" size={20} />
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 px-6 text-center">
        <p className="mb-10 text-lg font-semibold">GLOBAL PRESENCE</p>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {countries.map((country, index) => (
            <p className="text-xl sm:text-2xl font-light" key={index}>{country.name}</p>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {cities.map((city, index) => (
            <p className="text-xl sm:text-2xl font-light" key={index}>{city.name}</p>
          ))}
        </div>
      </section>

      <Help />
    </div>
  );
};

export default page;
