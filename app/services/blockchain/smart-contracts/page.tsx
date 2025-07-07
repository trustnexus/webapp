"use client";
import Help from '@/components/Help';
import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const featureGridRef = useRef(null);
  const projectStatsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const animateSection = (ref: any, xStart = -100) => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, x: xStart },
        {
          opacity: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'top center',
            scrub: 2,
          },
        }
      );
    };

    animateSection(heroRef);
    animateSection(overviewRef);
    animateSection(featureGridRef);
    animateSection(projectStatsRef);
    animateSection(ctaRef);
  }, []);

  return (
    <>
      {/* 🔷 HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-[500px] bg-fixed bg-center bg-cover bg-[url('https://media.licdn.com/dms/image/v2/D4D12AQEoyE22C_iD4Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1656989044059?e=2147483647&v=beta&t=vAg_7VWxkbwEwGeELOQje_6Zix_f49JlQnJnLqSUcJ0')]"
      >
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Smart Contract Development</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Secure, transparent, and scalable smart contracts tailored for DeFi, NFTs, DAOs, and enterprise blockchain solutions.
          </p>
        </div>
      </section>

      {/* 🔷 SECTION 2: OVERVIEW */}
      <section ref={overviewRef} className="py-20 px-4 bg-white">
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
              src="https://contenthub-static.crypto.com/wp_media/2023/01/Smart-Contract_flow.jpeg"
              alt="Smart Contract Code"
              className="rounded-xl shadow-lg hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 3: FEATURE GRID */}
      <section ref={featureGridRef} className="bg-gray-50 py-20 px-4">
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
      <section ref={projectStatsRef} className="py-20 bg-white px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Smart Contracts Delivered
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-5xl font-bold text-indigo-600"> <CountUp end={100} enableScrollSpy suffix='+'/></p>
              <p className="mt-2 text-gray-600">Custom Contracts Deployed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-600"> <CountUp end={5} enableScrollSpy suffix='M+'/></p>
              <p className="mt-2 text-gray-600">Blockchain Transactions Processed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-600"> <CountUp end={30} enableScrollSpy suffix='+'/></p>
              <p className="mt-2 text-gray-600">Audits Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 5: CTA */}
      <section
        ref={ctaRef}
        className="relative h-[400px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1644298576676-b711ef9bb3f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
      >
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
