'use client';
import Help from "@/components/Help";
import React from "react";

const page = () => {
  return (
    <>
      {/* 🌐 HERO SECTION */}
      <section className="relative h-[550px] bg-gradient-to-br from-[#121212] to-[#1f1f1f] text-white">
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
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
            Key Capabilities of Our DApp Development
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              { icon: "🛡️", title: "Smart Contract Development", desc: "Secure, gas-optimized contracts for Ethereum, BNB, Solana, and more." },
              { icon: "🔗", title: "Blockchain Integration", desc: "Seamless integration with wallets like MetaMask, Coinbase, and Ledger." },
              { icon: "⚡", title: "High-Speed UX", desc: "Frontend built with React, Next.js & Tailwind for lightning-fast experience." },
              { icon: "🌍", title: "Multi-Chain Support", desc: "We support EVM-compatible chains like Polygon, Arbitrum, and Avalanche." },
              { icon: "📦", title: "Tokenomics & NFT Utility", desc: "Integrated token systems, minting logic, royalty models, and governance." },
              { icon: "📈", title: "Analytics & Security", desc: "On-chain event tracking, threat analysis, and protocol hardening." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg border hover:shadow-xl transition">
                <h3 className="text-3xl mb-2">{item.icon}</h3>
                <h4 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 IMAGE + TEXT SECTION */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://cdn.dribbble.com/users/61984/screenshots/14950103/media/86ce041b11be7b12b38b17dce32a96ed.png"
              alt="Blockchain"
              className="rounded-xl shadow-md hover:scale-105 transition duration-300"
            />
          </div>
          <div>
            <p className="text-sm text-indigo-600 mb-2">🔍 TRANSPARENCY & TRUST</p>
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
      <section className="bg-[#1e1e1e] text-white py-20 px-6">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">DApps We Build</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-2">🔄 DeFi Protocols</h3>
              <p className="text-gray-300">Yield farming, staking, swapping, and lending platforms on EVM & L2 chains.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">🎨 NFT Marketplaces</h3>
              <p className="text-gray-300">Create, trade, and showcase digital assets with royalty and rarity logic.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">🗳 DAO Platforms</h3>
              <p className="text-gray-300">On-chain voting, treasury control, and governance systems with token gating.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-2">🎮 GameFi</h3>
              <p className="text-gray-300">Tokenized economies, in-game assets, and real-time blockchain sync for games.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-pink-400 mb-2">📜 Identity & Document Verification</h3>
              <p className="text-gray-300">Build systems for notarization, proof-of-existence, and verified credentials.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-teal-400 mb-2">💼 Enterprise Solutions</h3>
              <p className="text-gray-300">Private chains, supply chain traceability, and secure internal networks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 CTA SECTION */}
      <section className="bg-gradient-to-tr from-indigo-600 to-violet-600 py-20 text-white text-center px-4">
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
