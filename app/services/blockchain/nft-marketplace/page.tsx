'use client';
import Help from '@/components/Help';
import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const heroRef = useRef(null);
  const textLeftRef = useRef(null);
  const imgRightRef = useRef(null);
  const statsRef = useRef(null);
  const categoriesRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Hero fade in
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 0 },
      {
        opacity: 1,
        y: 0,
        duration:2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 2,
        },
      }
    );

    // Text Left Slide In
    gsap.fromTo(
      textLeftRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration:2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textLeftRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 2,
        },
      }
    );

    // Image Right Slide In
    gsap.fromTo(
      imgRightRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imgRightRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 2,
        },
      }
    );

    // Stats
    gsap.fromTo(
      statsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top bottom',
          end: 'top center',
          scrub: 2,
        },
      }
    );

    // Categories
    gsap.fromTo(
      categoriesRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: categoriesRef.current,
          start: 'top 90%',
          end: 'top 40%',
          scrub: 2,
        },
      }
    );

    // CTA
    gsap.fromTo(
      ctaRef.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top bottom',
          end: 'top center',
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <>
      {/* 🔷 HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-[550px] bg-fixed bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/gradient-isometric-nft-concept_52683-62009.jpg?semt=ais_hybrid&w=740')]"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Decentralized NFT Marketplace
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Mint, buy, sell, and trade NFTs with complete ownership and transparency on the blockchain.
          </p>
        </div>
      </section>

      {/* 🔷 FEATURE OVERVIEW */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div ref={textLeftRef} className="md:w-1/2">
            <p className="text-sm text-indigo-600 mb-2">🎨 POWERFUL NFT TOOLS</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Build and Trade NFTs with Full Control
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our marketplace enables users to mint ERC-721 & ERC-1155 NFTs, set royalty structures,
              launch auctions, and showcase their digital assets with stunning UI and on-chain security.
            </p>
            <ul className="mt-6 list-disc list-inside text-gray-600 space-y-2">
              <li>🧬 Custom Smart Contract Minting</li>
              <li>💰 Gasless Lazy Minting Support</li>
              <li>🔗 IPFS & Arweave Decentralized Storage</li>
              <li>📊 Creator Dashboards & Analytics</li>
            </ul>
          </div>
          <div ref={imgRightRef} className="md:w-1/2">
            <img
              src="https://nftify-platform.s3.ap-southeast-1.amazonaws.com/blog/61d521a404fd1814f3e5e90f-1649909527135.png"
              alt="NFT Marketplace"
              className="rounded-xl shadow-lg hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔷 LIVE STATS */}
      <section ref={statsRef} className="bg-gray-50 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Marketplace in Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <p className="text-5xl font-bold text-indigo-600">
                <CountUp end={3.5} enableScrollSpy suffix="M+" />
              </p>
              <p className="text-gray-700 mt-2">NFTs Minted</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-600">
                $<CountUp end={45} enableScrollSpy suffix="M+" />
              </p>
              <p className="text-gray-700 mt-2">Total Sales Volume</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-600">
                <CountUp end={250} enableScrollSpy suffix="K+" />
              </p>
              <p className="text-gray-700 mt-2">Registered Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 NFT CATEGORIES */}
      <section ref={categoriesRef} className="py-20 bg-white px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Explore Top NFT Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
            {[
              {
                name: 'Digital Art',
                img: 'https://www.wipo.int/dpp-files/67504/67504.jpg',
              },
              {
                name: 'Game Assets',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9t4d1OrwXAGhRRqp61onYs13wNoHOH3nm9A&s',
              },
              {
                name: 'Music & Audio',
                img: 'https://webisoft.com/articles/wp-content/uploads/2023/07/Various-types-of-music-NFT-1024x574.webp',
              },
              {
                name: 'Virtual Land',
                img: 'https://public.bnbstatic.com/static/academy/uploads-original/85ee5e48691b4ba99fa1addbac79146b.png',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[180px] object-cover"
                />
                <div className="p-4 text-center font-semibold">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 CALL TO ACTION */}
      <section
        ref={ctaRef}
        className="relative h-[400px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1626101210324-57e7f41da074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
      >
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Launch Your NFT Collection?
          </h2>
          <p className="text-lg mb-6 max-w-[700px]">
            Whether you're an artist, gamer, or enterprise, we’ll help you build and scale your NFT marketplace with modern Web3 tools.
          </p>
          <a
            href="/contact"
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Book a Free Strategy Session
          </a>
        </div>
      </section>

      {/* 🔷 HELP COMPONENT */}
      <Help />
    </>
  );
};

export default page;
