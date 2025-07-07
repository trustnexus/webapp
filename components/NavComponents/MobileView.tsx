import React from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import useAppStore from "@/store/store";

const MobileView = () => {
  const {
    menuOpen,
    setMenuOpen,
    showServices,
    setShowServices,
    showAbout,
    setShowAbout,
    showIndustries,
    setShowIndustries,
    showInsight,
    setShowInsight,
    showInvestors,
    setShowInvestors,
  } = useAppStore();
  return (
    <div
      className={`lg:hidden overflow-y-auto  fixed top-0 left-0 w-[70%] h-screen bg-gray-800 text-white  py-6 transform transition-transform duration-300 ease-in-out ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="px-2 border-b-[1px] py-3 flex items-center justify-between w-full">
        <Link
          style={{ textDecoration: "none" }}
          className="text-md sm:text-lg flex items-center italic font-semibold text-white"
          href="/"
        >
          <img
            className="sm:w-16 w-12 h-12 pt-2 my-auto sm:h-16"
            src="./website-logo.png"
            alt=""
          />
          <span className="text-md">Trust Nexus</span>
        </Link>
        <IoClose
          size={23}
          className="cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      <div className="flex my-4 w-full flex-col text-lg">
        {/* SERVICES DROPDOWN */}
        <div className="w-full">
          <button
          style={{fontSize:'15px'}}
            onClick={() => setShowServices(!showServices)}
            className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
          >
            Services{" "}
            {showServices ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>

          {showServices && (
            <div className="flex h-[183px] overflow-y-auto px-6 flex-col text-sm bg-gray-800">
              {/* --- Software Development --- */}
              <div className="py-3">
                <h6 className="text-white font-semibold mb-2">
                  Software Development
                </h6>
                <div className="flex flex-col">
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/software-development/webapps"
                  >
                    Webapps
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/software-development/mobile-apps"
                  >
                    Mobile Applications
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/software-development/desktop-apps"
                  >
                    Desktop Applications
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/software-development/point-of-sale"
                  >
                    POS
                  </Link>
                </div>
              </div>

              {/* --- Blockchain --- */}
              <div className="py-3">
                <h6 className="text-white font-semibold mb-2">Blockchain</h6>
                <div className="flex flex-col">
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/blockchain/dapps"
                  >
                    Dapps
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/blockchain/blockchain-wallets"
                  >
                    Blockchain Wallets
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/blockchain/nft-marketplace"
                  >
                    NFT Marketplace
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/blockchain/smart-contracts"
                  >
                    Smart Contract Development
                  </Link>
                </div>
              </div>

              {/* --- AI / ML --- */}
              <div className="py-3">
                <h6 className="text-white font-semibold mb-2">AI / ML</h6>
                <div className="flex flex-col">
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/ai-ml/ai-automation"
                  >
                    Intelligent Process Automation
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/ai-ml/ai-analytics"
                  >
                    Predictive Analytics & Insights
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/ai-ml/ai-chatbots"
                  >
                    AI Chatbots & NLP Solutions
                  </Link>
                </div>
              </div>

              {/* --- Robotics --- */}
              <div className="py-3">
                <h6 className="text-white font-semibold mb-2">Robotics</h6>
                <div className="flex flex-col">
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/robotics/robotic-process-automation"
                  >
                    Robotic Process Automation (RPA)
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/robotics/industrial-robots"
                  >
                    Industrial Robots Integration
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/robotics/ai-powered-robots"
                  >
                    AI-Powered Autonomous Robots
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/robotics/robotics-simulation"
                  >
                    Robotics Simulation & Testing
                  </Link>
                </div>
              </div>

              {/* --- Biometric & Embedded Systems --- */}
              <div className="py-3">
                <h6 className="text-white font-semibold mb-2">
                  Biometric & Embedded Systems
                </h6>
                <div className="flex flex-col">
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/biometric/biometric-authentication"
                  >
                    Biometric Authentication Systems
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/biometric/embedded-iot-devices"
                  >
                    Embedded IoT Devices
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "#a2a5a6" }}
                    className="py-2 hover:text-white"
                    href="/services/biometric/access-control-systems"
                  >
                    Access Control & Face Recognition
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Other Main Menu Items */}
        {/* INDUSTRIES DROPDOWN */}
        <div className="w-full">
          <button
                    style={{fontSize:'15px'}}

            onClick={() => setShowIndustries(!showIndustries)}
            className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
          >
            Industries{" "}
            {showIndustries ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
          {showIndustries && (
            <div className="flex h-[183px] overflow-y-auto px-6 flex-col text-sm bg-gray-800">
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/industries/communication"}
              >
                Communication
              </Link>
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/industries/banking-financial-services"}
              >
                Banking & Financial Services
              </Link>
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/industries/public-sector"}
              >
                Public Sector
              </Link>
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/industries/health"}
              >
                Health
              </Link>
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/industries/retail"}
              >
                Retail
              </Link>
            </div>
          )}
        </div>

        {/* INSIGHT DROPDOWN */}
        <div className="w-full">
          <button
                    style={{fontSize:'15px'}}

            onClick={() => setShowInsight(!showInsight)}
            className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
          >
            Insight {showInsight ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
          {showInsight && (
            <div className="flex overflow-y-auto px-6 flex-col text-sm bg-gray-800">
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/insights/case-studies"}
              >
                Case Studies
              </Link>
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/insights/newsroom"}
              >
                Newsroom
              </Link>
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/insights/whitepapers-ebooks"}
              >
                Whitepapers/eBooks
              </Link>
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/insights/blogs"}
              >
                Blogs{" "}
              </Link>
            </div>
          )}
        </div>

        {/* ABOUT DROPDOWN */}
        <div className="w-full">
          <button
                    style={{fontSize:'15px'}}

            onClick={() => setShowAbout(!showAbout)}
            className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
          >
            About {showAbout ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
          {showAbout && (
            <div className="flex overflow-y-auto px-6 flex-col text-sm bg-gray-800">
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/company-overview"}
              >
                Who we are
              </Link>
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/company-overview#accomplishment"}
              >
                Our accomplishments
              </Link>
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/company-overview#leadership"}
              >
                Our Leadership
              </Link>
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/company-overview#global-presence"}
              >
                Our Global presence
              </Link>
            </div>
          )}
        </div>

        {/* CAREERS - Normal Link */}
        <Link

          href="/career"
          style={{ textDecoration: "none",fontSize:'15px' }}
          className="list-none text-white cursor-pointer w-full px-4 py-3 border-b border-gray-600"
        >
          Careers
        </Link>

        {/* INVESTORS DROPDOWN */}
        <div className="w-full">
          <button
                            style={{fontSize:'15px'}}

            onClick={() => setShowInvestors(!showInvestors)}
            className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
          >
            Investors{" "}
            {showInvestors ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
          {showInvestors && (
            <div className="flex overflow-y-auto px-6 flex-col text-sm bg-gray-800">
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/company-overview"}
              >
                Who we are
              </Link>
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/company-overview#accomplishment"}
              >
                Our accomplishments
              </Link>
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/company-overview#leadership"}
              >
                Our Leadership
              </Link>
              <Link
                className="px-6 py-2 italic hover:text-white hover:bg-blue-600"
                style={{ color: "#a2a5a6", textDecoration: "none" }}
                href={"/company-overview#global-presence"}
              >
                Our Global presence
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileView;
