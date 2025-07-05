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
      <div className="px-4 border-b-[1px] py-3 flex items-center justify-between w-full">
        <Link
          style={{ textDecoration: "none" }}
          className="text-xl sm:text-2xl italic font-semibold text-white"
          href="/"
        >
          TrustNexus
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
            onClick={() => setShowServices(!showServices)}
            className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
          >
            Services{" "}
            {showServices ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>

          {showServices && (
            <div className="flex h-[183px] overflow-y-auto px-6  flex-col text-sm bg-gray-800">
              {/* --- Software Development --- */}
              <Link
                className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/software-development/webapps"
              >
                Webapps
              </Link>
              <Link
                className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/software-development/mobile-apps"
              >
                Mobile Applications
              </Link>
              <Link
               className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/software-development/desktop-apps"
              >
                Desktop Applications
              </Link>
              <Link
               className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/software-development/point-of-sale"
              >
                POS
              </Link>

              {/* --- Blockchain --- */}
              <Link
               className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/blockchain/dapps"
              >
                Dapps
              </Link>
              <Link
                className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/blockchain/blockchain-wallets"
              >
                Blockchain Wallets
              </Link>
              <Link
             className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/blockchain/nft-marketplace"
              >
                NFT Marketplace
              </Link>
              <Link
             className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/blockchain/smart-contracts"
              >
                Smart Contract Development
              </Link>

              {/* --- AI / ML --- */}
              <Link
               className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/ai-ml/ai-automation"
              >
                Intelligent Process Automation
              </Link>
              <Link
               className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/ai-ml/ai-analytics"
              >
                Predictive Analytics & Insights
              </Link>
              <Link
                className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/ai-ml/ai-chatbots"
              >
                AI Chatbots & NLP Solutions
              </Link>

              {/* --- Robotics --- */}
              <Link
                className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/robotics/robotic-process-automation"
              >
                Robotic Process Automation (RPA)
              </Link>
              <Link
                className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/robotics/industrial-robots"
              >
                Industrial Robots Integration
              </Link>
              <Link
              className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/robotics/ai-powered-robots"
              >
                AI-Powered Autonomous Robots
              </Link>
              <Link
               className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/robotics/robotics-simulation"
              >
                Robotics Simulation & Testing
              </Link>

              {/* --- Biometric & Embedded Systems --- */}
              <Link
               className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/biometric/biometric-authentication"
              >
                Biometric Authentication Systems
              </Link>
              <Link
                className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/biometric/embedded-iot-devices"
              >
                Embedded IoT Devices
              </Link>
              <Link
               className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href="/services/biometric/access-control-systems"
              >
                Access Control & Face Recognition
              </Link>
            </div>
          )}
        </div>

        {/* Other Main Menu Items */}
        {/* INDUSTRIES DROPDOWN */}
        <div className="w-full">
          <button
            onClick={() => setShowIndustries(!showIndustries)}
            className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
          >
            Industries{" "}
            {showIndustries ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
          {showIndustries && (
            <div className="flex h-[183px] overflow-y-auto px-6  flex-col text-sm bg-gray-800">
              {/* Put industries sublinks here */}
              <Link
               className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href={"/industries/communication"}
              >
                Communication{" "}
              </Link>
              <Link
               className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href={"/industries/banking-financial-services"}
              >
                Banking & Financial Services{" "}
              </Link>{" "}
              <Link
               className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href={"/industries/public-sector"}
              >
                Public Sector{" "}
              </Link>{" "}
              <Link
               className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href={"/industries/health"}
              >
                Health{" "}
              </Link>
              <Link
              className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href={"/industries/retail"}
              >
                Retail{" "}
              </Link>
            </div>
          )}
        </div>

        {/* INSIGHT DROPDOWN */}
        <div className="w-full">
          <button
            onClick={() => setShowInsight(!showInsight)}
            className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
          >
            Insight {showInsight ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
          {showInsight && (
            <div className="flex  overflow-y-auto px-6  flex-col text-sm bg-gray-800">
              <Link
                 className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href={"/insights/case-studies"}
              >
              Case Studies{" "}
              </Link>
                   <Link
                className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href={"/insights/newsroom"}
              >
              Newsroom
              </Link>     <Link
                className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href={"/insights/whitepapers-ebooks"}
              >
              Whitepapers/eBooks{" "}
              </Link>
            </div>
          )}
        </div>

        {/* ABOUT DROPDOWN */}
        <div className="w-full">
          <button
            onClick={() => setShowAbout(!showAbout)}
            className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
          >
            About {showAbout ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
          {showAbout && (
            <div className="flex  overflow-y-auto px-6  flex-col text-sm bg-gray-800">
              <Link
                 className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href={"/company-overview"}
              >
              Who we are{" "}
              </Link>
                   <Link
                className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                href={"/company-overview"}
              >
              Our accomplishments{" "}
              </Link>     <Link
                className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                                href={"/company-overview"}

              >
              Our Leadership{" "}
              </Link>
              <Link
                className="px-6 border-b-[1px] border-gray-500 py-2 text-gray-300 italic hover:text-white hover:bg-blue-600"
                style={{ color: "white", textDecoration: "none" }}
                               href={"/company-overview"}

              >
              Our Global presence{" "}
              </Link>
            </div>
          )}
        </div>

        {/* CAREERS - Normal Link */}
        <Link
          href="/career"
          style={{ textDecoration: "none" }}
          className="list-none text-white cursor-pointer w-full px-4 py-3 border-b border-gray-600"
        >
          Careers
        </Link>

        {/* INVESTORS DROPDOWN */}
        <div className="w-full">
          <button
            onClick={() => setShowInvestors(!showInvestors)}
            className="cursor-pointer w-full px-4 py-3 border-b border-gray-600 flex items-center text-white justify-between"
          >
            Investors{" "}
            {showInvestors ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
          {showInvestors && (
            <div className="bg-gray-700 px-6 py-2 text-sm italic text-gray-300">
              {/* Put investor sublinks here */}
              <div>Financials</div>
              <div>Reports</div>
              <div>Shareholders</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileView;
