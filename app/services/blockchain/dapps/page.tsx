"use client";
import Help from "@/components/Help";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const imageTextRef = useRef(null);
  const useCasesRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
  const animateSection = (ref: any, y = 50) => {
    if (!ref.current) return;
    gsap.from(ref.current, {
      opacity: 0,
      y,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        scrub:2
      },
    });
  };

  const animateImageX = (selector: string, x = -100) => {
    gsap.utils.toArray(selector).forEach((img: any) => {
      gsap.from(img, {
        opacity: 0,
        x:100,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          scrub:2
        },
      });
    });
  };

  animateSection(heroRef, 0);
  animateSection(featuresRef);
  animateSection(imageTextRef);
  animateSection(useCasesRef);
  animateSection(ctaRef);

  // Animate images from left or right
  animateImageX(".fade-x-left", -150);   // left to center
  animateImageX(".fade-x-right", 150);   // right to center
}, []);


  return (
    <>
      {/* 🌐 HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-[550px] bg-[url('https://miro.medium.com/v2/resize:fit:1400/0*UGspIgbRQNOMBSFF')] bg-cover bg-center bg-no-repeat text-white"
      >
        <div className="max-w-[1320px] mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Decentralized Applications for the Web3 Era
          </h1>
          <p className="text-lg sm:text-xl max-w-[720px] text-gray-300">
            We design and develop secure, scalable, and user-friendly DApps that harness the full potential of blockchain technology.
          </p>
        </div>
      </section>

      {/* 🔹 FEATURES SECTION */}
      <section ref={featuresRef} className="bg-white py-20 px-6">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
            Key Capabilities of Our DApp Development
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border hover:shadow-xl transition"
              >
                <h3 className="text-3xl mb-2">
                  {["🛡️","🔗","⚡","🌍","📦","📈"][idx]}
                </h3>
                <h4 className="text-xl font-semibold text-blue-600 mb-2">
                  {["Smart Contract Development","Blockchain Integration","High-Speed UX","Multi-Chain Support","Tokenomics & NFT Utility","Analytics & Security"][idx]}
                </h4>
                <p className="text-gray-700">
                  {["Secure, gas-optimized contracts for Ethereum, BNB, Solana, and more.","Seamless integration with wallets like MetaMask, Coinbase, and Ledger.","Frontend built with React, Next.js & Tailwind for lightning-fast experience.","We support EVM-compatible chains like Polygon, Arbitrum, and Avalanche.","Integrated token systems, minting logic, royalty models, and governance.","On-chain event tracking, threat analysis, and protocol hardening."][idx]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 IMAGE + TEXT SECTION */}
      <section ref={imageTextRef} className="bg-gray-100 py-20 px-4">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden">
            <img
              src="https://www.shutterstock.com/image-photo/blockchain-technology-concept-revolutionizing-industries-600nw-2476544647.jpg"
              alt="Blockchain"
              className=" shadow-md hover:scale-125 transition duration-300"
            />
          </div>
          <div>
            <p className="text-sm text-indigo-600 mb-2">
              🔍 TRANSPARENCY & TRUST
            </p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Transparent, Auditable & Immutable
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Every transaction and event within your DApp is logged on-chain, ensuring
              total transparency and trust among your community. Our development process
              follows audit-ready standards from day one.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 USE CASES SECTION */}
      <section ref={useCasesRef} className="bg-[#1e1e1e] text-white py-20 px-6">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">DApps We Build</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {["DeFi Protocols","NFT Marketplaces","DAO Platforms","GameFi","Identity & Document Verification","Enterprise Solutions"].map((title, idx) => (
              <div key={idx}>
                <h3 className={`text-xl font-semibold mb-2 ${["text-green-400","text-yellow-400","text-blue-400","text-purple-400","text-pink-400","text-teal-400"][idx]}`}>🔹 {title}</h3>
                <p className="text-gray-300">
                  {["Yield farming, staking, swapping, and lending platforms on EVM & L2 chains.","Create, trade, and showcase digital assets with royalty and rarity logic.","On-chain voting, treasury control, and governance systems with token gating.","Tokenized economies, in-game assets, and real-time blockchain sync for games.","Build systems for notarization, proof-of-existence, and verified credentials.","Private chains, supply chain traceability, and secure internal networks."][idx]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 CTA SECTION */}
      <section ref={ctaRef} className="bg-gradient-to-tr from-indigo-600 to-violet-600 py-20 text-white text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Launch Your Decentralized App with Confidence
        </h2>
        <p className="text-lg max-w-[700px] mx-auto mb-6">
          From tokenomics to mainnet deployment — Trust Nexus has you covered.
          Let’s build the future of the internet together.
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Schedule Free Consultation
        </a>
      </section>

      <Help />
    </>
  );
};

export default page;
