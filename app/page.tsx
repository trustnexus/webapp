import Navbar from "@/components/Navbar";
import React from "react";
import Carousal from "@/components/Carousal";
import OurServices from "@/components/OurServices";
import FeaturedInsight from "@/components/FeaturedInsight";
import Technology from "@/components/Technology";
import Careers from "@/components/Careers";
import Help from "@/components/Help";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <div className="bg-transparent">
        <Navbar />
      </div>
      <Carousal />
      <OurServices />
      <FeaturedInsight />
      <Technology />
      <Careers/>
      <Help/>
      <Footer/>
    </>
  );
};

export default page;
