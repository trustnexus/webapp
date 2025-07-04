'use client';
import Help from '@/components/Help';
import React from 'react';

const page = () => {
  return (
    <>
      {/* 🔷 HERO SECTION */}
      <section className="relative h-[550px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1620626018133-61d1a5d4e7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]">
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
          <div className="md:w-1/2">
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
          <div className="md:w-1/2">
            <img
              src="https://miro.medium.com/v2/resize:fit:1200/format:webp/1*cAYrFTcKExMZdGJ2Vzbg4w.png"
              alt="NFT Marketplace"
              className="rounded-xl shadow-lg hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔷 LIVE STATS */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Marketplace in Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <p className="text-5xl font-bold text-indigo-600">3.5M+</p>
              <p className="text-gray-700 mt-2">NFTs Minted</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-600">$45M+</p>
              <p className="text-gray-700 mt-2">Total Sales Volume</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-indigo-600">250K+</p>
              <p className="text-gray-700 mt-2">Registered Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 NFT CATEGORIES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Explore Top NFT Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
            {[
              {
                name: 'Digital Art',
                img: 'https://images.unsplash.com/photo-1611262588024-72f98dd9b08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
              },
              {
                name: 'Game Assets',
                img: 'https://images.unsplash.com/photo-1633347012799-d0e0d715bfa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
              },
              {
                name: 'Music & Audio',
                img: 'https://images.unsplash.com/photo-1621619343963-86a0839e5d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
              },
              {
                name: 'Virtual Land',
                img: 'https://images.unsplash.com/photo-1634569329735-ff9b14983f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <img src={item.img} alt={item.name} className="w-full h-[180px] object-cover" />
                <div className="p-4 text-center font-semibold">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 CALL TO ACTION */}
      <section className="relative h-[400px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1626101210324-57e7f41da074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]">
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
