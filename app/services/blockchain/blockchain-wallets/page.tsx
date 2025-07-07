'use client';
import Help from '@/components/Help';
import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  // Refs for sections
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const useCasesRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const fadeY = (ref: any, y = 60) => {
      gsap.from(ref.current, {
        opacity: 0,
        y,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          scrub:2
        },
      });
    };

    const fadeX = (selector: string, x = -80) => {
      gsap.utils.toArray(selector).forEach((el: any) => {
        gsap.from(el, {
          opacity: 0,
          x,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            scrub:2
          },
        });
      });
    };

    // Fade sections
    fadeY(heroRef, 0);
    fadeY(featuresRef);
    fadeY(statsRef);
    fadeY(useCasesRef);
    fadeY(testimonialsRef);

    // X transition for flex content
    fadeX(".fade-x-left", -100);
    fadeX(".fade-x-right", 100);
  }, []);

  return (
    <>
      {/* 🔷 SECTION 1: HERO with Parallax */}
      <section
        ref={heroRef}
        className="relative h-[500px] bg-fixed bg-center bg-cover bg-[url('https://thumbs.dreamstime.com/b/hand-holding-holographic-crypto-wallet-bitcoins-against-background-blockchain-network-hand-holding-holographic-crypto-356576453.jpg')]"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Secure & Scalable Blockchain Wallets
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Empower your users with decentralized, multi-asset, and secure blockchain wallets for digital transactions.
          </p>
        </div>
      </section>

      {/* 🔷 SECTION 2: Wallet Features */}
      <section ref={featuresRef} className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="md:w-1/2 fade-x-left">
            <p className="text-sm text-blue-600 mb-2">🔐 MULTI-ASSET WALLET SOLUTIONS</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Everything You Need in a Blockchain Wallet
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We develop user-centric wallets that support Bitcoin, Ethereum, NFTs, and ERC-20 tokens. With secure private key handling, seamless swaps, and biometric login, our wallets make crypto easier for everyone.
            </p>
            <ul className="mt-6 list-disc list-inside text-gray-600 space-y-2">
              <li>🔑 Private Key Management</li>
              <li>📲 Mobile & Web Compatible</li>
              <li>🧩 NFT, DeFi, and dApp Support</li>
              <li>🛡️ Two-Factor Authentication & Biometric Login</li>
            </ul>
          </div>
          {/* Image */}
          <div className="md:w-1/2 fade-x-right">
            <img
              src="https://cdn.dribbble.com/userupload/37145751/file/original-b028c7f52ba12d40d841268c99fbde0b.png?resize=752x&vertical=center"
              alt="Blockchain Wallet UI"
              className="rounded-xl shadow-lg hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 3: Stats + Tech */}
      <section ref={statsRef} className="bg-gray-50 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <p className="text-3xl sm:text-4xl font-bold mb-30 py-10">
            Proven Results in Web3 Wallet Solutions
          </p>

          {/* Numbers Block */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            <div>
              <p className="text-5xl font-bold text-blue-600">
                <CountUp end={1} suffix="M+" enableScrollSpy />
              </p>
              <p className="text-gray-700 mt-2">Users Secured</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600">
                <CountUp end={200} suffix="K+" enableScrollSpy />
              </p>
              <p className="text-gray-700 mt-2">Transactions per Day</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600">
                <CountUp end={50} suffix="+" enableScrollSpy />
              </p>
              <p className="text-gray-700 mt-2">Supported Coins & Tokens</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              'React Native',
              'Flutter',
              'Solidity',
              'Web3.js',
              'Ethers.js',
              'Node.js',
              'Firebase',
              'Metamask API',
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-white px-6 py-2 rounded-full shadow text-sm font-medium text-gray-700 hover:bg-blue-100 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 4: Use Cases */}
      <section ref={useCasesRef} className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <p className="text-3xl sm:text-4xl font-semibold mb-20 text-center">
            Where Our Wallets Make an Impact
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="flex-1 bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition fade-x-left">
              <h3 className="text-xl font-semibold mb-2">🔄 Peer-to-Peer Transactions</h3>
              <p className="text-gray-700">
                Enable instant global transactions with zero intermediaries — perfect for cross-border payments.
              </p>
            </div>
            <div className="flex-1 bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition fade-x-left">
              <h3 className="text-xl font-semibold mb-2">💼 Business Wallets</h3>
              <p className="text-gray-700">
                Facilitate secure salary distribution, invoice payments, and treasury management for companies.
              </p>
            </div>
            <div className="flex-1 bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition fade-x-left">
              <h3 className="text-xl font-semibold mb-2">🎮 NFT & Gaming Integration</h3>
              <p className="text-gray-700">
                Seamlessly store, view, and trade NFTs & in-game assets with custom wallet functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 5: Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-gray-100 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <p className="text-3xl sm:text-4xl font-bold mb-12">
            What Our Clients Say
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md flex-1 fade-x-left">
              <p className="text-gray-700 italic mb-4">
                “We launched our multi-chain wallet with their team in record time. Their UI was sleek, secure, and user-loved.”
              </p>
              <h4 className="text-blue-600 font-semibold">Adeel Khan</h4>
              <span className="text-sm text-gray-500">CEO, Fincrypt</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex-1 fade-x-right">
              <p className="text-gray-700 italic mb-4">
                “These guys know Web3 inside out. From wallet design to gas optimization, they’ve done it all for us.”
              </p>
              <h4 className="text-blue-600 font-semibold">Sarah Malik</h4>
              <span className="text-sm text-gray-500">Blockchain Product Manager, KoinVerse</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 HELP COMPONENT */}
      <Help />
    </>
  );
};

export default Page;
