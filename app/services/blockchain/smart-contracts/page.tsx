'use client';
import Help from '@/components/Help';
import React from 'react';

const page = () => {
  return (
    <>
      {/* 🔷 HERO SECTION */}
      <section className="relative h-[500px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1611734683876-254ab1c56b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]">
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Smart Contract Development</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Secure, transparent, and scalable smart contracts tailored for DeFi, NFTs, DAOs, and enterprise blockchain solutions.
          </p>
        </div>
      </section>

      {/* 🔷 SECTION 2: OVERVIEW */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <p className="text-sm text-indigo-600 mb-2">⚖️ AUTOMATE TRUST</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Self-Executing Code for Transparent Transactions
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We build Ethereum, Polygon, Solana, and BSC-compatible smart contracts using Solidity and Rust. Our contracts are gas-efficient, audited, and optimized for real-world use cases across DeFi protocols, token sales, DAOs, and NFT platforms.
            </p>
            <ul className="mt-6 list-disc list-inside text-gray-600 space-y-2">
              <li>✅ ERC-20 / ERC-721 / ERC-1155 Contracts</li>
              <li>✅ DeFi Lending, Staking & Yield Farming</li>
              <li>✅ DAO Voting & Governance Contracts</li>
              <li>✅ Token Vesting & Crowdsale Contracts</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/format:webp/1*rYvS_gU8tJbStKo0xQvL7Q.png"
              alt="Smart Contract Code"
              className="rounded-xl shadow-lg hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 3: FEATURE GRID */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">Core Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: '💸 DeFi Protocol Development',
                desc: 'Lending pools, swaps, staking, and yield farming contracts.',
              },
              {
                title: '🎮 NFT Smart Contracts',
                desc: 'NFT drops, royalty enforcement, lazy minting, and marketplaces.',
              },
              {
                title: '🗳️ DAO & Governance',
                desc: 'Token-weighted voting systems and on-chain governance.',
              },
              {
                title: '📈 Token Vesting & ICO',
                desc: 'Time-locked wallets, vesting schedules, and crowdsale smart contracts.',
              },
              {
                title: '🔒 Security Audits & Testing',
                desc: 'Static analysis, unit testing, and gas optimization.',
              },
              {
                title: '🌐 Cross-Chain Support',
                desc: 'Develop on Ethereum, Polygon, BSC, Solana & more.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 4: PROJECT NUMBERS */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Smart Contracts Delivered
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-5xl font-bold text-indigo-600">100+</p>
              <p className="mt-2 text-gray-600">Custom Contracts Deployed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-600">5M+</p>
              <p className="mt-2 text-gray-600">Blockchain Transactions Processed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-600">30+</p>
              <p className="mt-2 text-gray-600">Audits Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 5: CTA */}
      <section className="relative h-[400px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1644298576676-b711ef9bb3f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]">
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let’s Code the Future Together
          </h2>
          <p className="text-lg mb-6 max-w-[700px]">
            Ready to build your next Web3 project? Let our experts craft secure and scalable smart contracts tailored to your business logic.
          </p>
          <a
            href="/contact"
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* 🔷 HELP COMPONENT */}
      <Help />
    </>
  );
};

export default page;
