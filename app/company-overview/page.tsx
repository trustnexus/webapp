"use client";

import React from 'react';
import Link from 'next/link';
const page = () => {
    return (

        <div className="min-h-screen bg-[#1E2235] text-white">
            {/* Hero Section */}
            <div className="max-w-20xl mx-auto px-6 py-8 relative">
                <h1 className="pt-40 text-30xl font-light leading-snug">
                    Enabling a <br /> <span className="block text-white">digital</span>
                </h1>
            </div>

            {/* White Section with Philosophy */}
            <div className="bg-white text-black mt-6 pb-10 px-6 relative">
                <h2 className="text-10xl font-light">tomorrow</h2>
                {/* CTA Button */}
                <div className="mt-8">
                    <Link
                        href="/contact-us"
                        className="inline-block bg-[#1E2235] text-white border border-white px-6 py-3 text-sm tracking-widest hover:bg-white hover:text-[#1E2235] transition"
                    >
                        GET IN TOUCH
                    </Link>

                    {/* Philosophy Section */}
                    <section id='philosophy-section' className="pt-10 flex flex-col lg:flex-row justify-between items-start gap-10">
                        {/* Left Text */}
                        <div className="lg:w-1/2">
                            <div className="mb-4 text-sm">
                                <span className="font-semibold tracking-wider">OUR PHILOSOPHY</span>
                            </div>
                            <p className="text-gray-700">
                                As a leading contributor to driving change, we understand the importance of continued self-reinvention.
                                <br /><br />
                                We accomplish this by investing in next-generation capabilities that enhance our differentiation in key growth areas and by investing in talent to ensure we have specialized skills to resolve business problems.
                                <br /><br />
                                Backed by our expertise and diverse global workforce, our ultimate goal is to offer sustainable and meaningful value across all directions.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="lg:w-1/2">
                            <img
                                src="/balloon.png"
                                alt="Our Philosophy"
                                className="rounded-lg shadow-lg w-full object-cover"
                            />
                        </div>
                    </section>
                </div>
            </div>
            {/* Our Core Values Section */}
            <section className="bg-[#1E2235] text-white px-6 py-16">
                {/* Breadcrumb-like heading */}
                <div className="flex justify-between items-center text-sm mb-8">
                    <div>
                        <span className="font-semibold tracking-wider">OUR CORE VALUES</span>
                    </div>
                </div>

                {/* Core Values Heading */}
                <h3 className="text-4xl font-light mb-12 max-w-4xl">
                    We dedicatedly master the power of technology in bespoke ways for our customers, guided by three core values:
                </h3>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center border-t border-gray-600 pt-20 pb-10">
                    <div className="px-4">
                        <h4 className="text-xl font-semibold mb-2">Integrity</h4>
                        <p className="text-gray-300">Embody dependability, honesty, and transparency.</p>
                    </div>
                    <div className="px-4 border-l border-r border-gray-600">
                        <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                        <p className="text-gray-300">Act courageously, experiment, and make bold decisions.</p>
                    </div>
                    <div className="px-4">
                        <h4 className="text-xl font-semibold mb-2">Dedication</h4>
                        <p className="text-gray-300">Commit to tirelessly delivering precision and perfection.</p>
                    </div>
                </div>
            </section>
            {/* The Systems Way Section */}
            <section
                className="relative text-white text-center py-24 px-4 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://www.systemsltd.com/sites/default/files/2023-07/MicrosoftTeams-image%20%28125%29%20%281%29.webp')",
                }}
            >
                <h4 className="text-sm uppercase tracking-widest mb-6">
                    THE SYSTEMS WAY
                </h4>
                <h2 className="text-3xl md:text-4xl max-w-4xl mx-auto font-light leading-snug mb-16">
                    As a top IT company, we're uniquely positioned to partner with the world’s
                    largest businesses in their transformation journeys.
                </h2>

                {/* 3 Columns: Optimize, Transform, Scale */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Optimize</h3>
                        <p>
                            We leverage customer-centric and cutting-edge talent and technology for
                            higher business efficiency.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Transform</h3>
                        <p>
                            We reimagine processes and systems by offering holistic solutions for
                            superior enterprise value.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Scale</h3>
                        <p>
                            We enable future-ready enterprises with long-term growth in a state of
                            perpetual reinvention.
                        </p>
                    </div>
                </div>
            </section>
            {/* Accomplishments Section */}
            <section id='accomplishment' className="bg-white text-black py-20 px-6">
                <h2 className="text-4xl font-light text-center mb-12">
                    Our accomplishments as a <br /> global leader
                </h2>

                {/* Scrollable Awards Row */}
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-6 w-max px-2">
                        {/* Award Card 1 */}
                        <div className="min-w-[220px] bg-white text-center shadow-md p-4 rounded-lg">
                            <img
                                src="/images/banking-tech.png" // Replace with actual image path
                                alt="Banking Tech Awards"
                                className="mx-auto mb-4 h-20 object-contain"
                            />
                            <p className="text-sm text-gray-600">
                                Highly Commended - Top Tech Team 2022
                            </p>
                        </div>

                        {/* Award Card 2 */}
                        <div className="min-w-[220px] bg-white text-center shadow-md p-4 rounded-lg">
                            <img
                                src="/images/temenos.png"
                                alt="Temenos Award"
                                className="mx-auto mb-4 h-20 object-contain"
                            />
                            <p className="text-sm text-gray-600">
                                Best Sales Partner – MEA Sales and Partner Summit 2022
                            </p>
                        </div>

                        {/* Award Card 3 */}
                        <div className="min-w-[220px] bg-white text-center shadow-md p-4 rounded-lg">
                            <img
                                src="/images/ibs-award.png"
                                alt="IBS Global FinTech"
                                className="mx-auto mb-4 h-20 object-contain"
                            />
                            <p className="text-sm text-gray-600">
                                Best Digital Channel/Platform Implementation Award
                            </p>
                        </div>

                        {/* Award Card 4 */}
                        <div className="min-w-[220px] bg-white text-center shadow-md p-4 rounded-lg">
                            <img
                                src="/images/forbes.png"
                                alt="Forbes Asia"
                                className="mx-auto mb-4 h-20 object-contain"
                            />
                            <p className="text-sm text-gray-600">
                                Fastest growing company in Asia
                            </p>
                        </div>

                        {/* Award Card 5 */}
                        <div className="min-w-[220px] bg-white text-center shadow-md p-4 rounded-lg">
                            <img
                                src="/images/inner-circle.png"
                                alt="Inner Circle"
                                className="mx-auto mb-4 h-20 object-contain"
                            />
                            <p className="text-sm text-gray-600">
                                Among top global technology partners four times in a row
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Leadership Section */}
            <section id='leadership' className="bg-[#292f45] text-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Left-Aligned Heading */}
                    <div className="mb-12">
                        <h4 className="text-sm uppercase tracking-widest mb-4">OUR LEADERSHIP</h4>
                        <h2 className="text-3xl md:text-4xl font-light leading-snug max-w-3xl">
                            Our commitment goes beyond serving our own business and clients as we strive to have a positive
                            impact on people and communities.
                        </h2>
                    </div>

                    {/* Carousel Wrapper */}
                    <div className="relative mt-10">
                        {/* Left Arrow */}
                        <button
                            className="absolute left-[-30px] top-1/2 -translate-y-1/2 z-10 bg-[#1e2235] p-2 rounded-full text-white hover:bg-white hover:text-black"
                            onClick={() => {
                                document.getElementById("leader-carousel")?.scrollBy({ left: -300, behavior: "smooth" });
                            }}
                        >
                            &#x276E;
                        </button>

                        {/* Scrollable Row */}
                        <div
                            id="leader-carousel"
                            className="flex space-x-8 overflow-x-auto scrollbar-hide pl-10 pr-6"
                        >
                            {/* Leader Card */}
                            {[
                                {
                                    name: "Asif Peer",
                                    title: "Group CEO & Managing Director",
                                    img: "/images/leader1.png",
                                    linkedin: "https://www.linkedin.com/in/asifpeer/",
                                },
                                {
                                    name: "Roohi Khan",
                                    title: "Group CFO",
                                    img: "/images/leader2.webp",
                                    linkedin: "https://www.linkedin.com/in/roohikhan/",
                                },
                                {
                                    name: "Toima Asghar",
                                    title: "Group CHRO",
                                    img: "/images/leader3.png",
                                    linkedin: "https://www.linkedin.com/in/toimaasghar/",
                                },
                                {
                                    name: "Asif Akram",
                                    title: "Group COO",
                                    img: "/images/leader4.png",
                                    linkedin: "https://www.linkedin.com/in/asifakram/",
                                },
                            ].map((leader, index) => (
                                <div key={index} className="min-w-[250px] bg-white rounded-lg p-4 text-black text-center">
                                    <img
                                        src={leader.img}
                                        alt={leader.name}
                                        className="w-full h-64 object-cover rounded-md mb-4"
                                    />
                                    <h3 className="text-lg font-semibold">{leader.name}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{leader.title}</p>
                                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="/images/linkedin.png"
                                            alt="LinkedIn"
                                            className="w-6 h-6 mx-auto hover:opacity-80"
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            className="absolute right-[-30px] top-1/2 -translate-y-1/2 z-10 bg-[#1e2235] p-2 rounded-full text-white hover:bg-white hover:text-black"
                            onClick={() => {
                                document.getElementById("leader-carousel")?.scrollBy({ left: 300, behavior: "smooth" });
                            }}
                        >
                            &#x276F;
                        </button>
                    </div>
                </div>
            </section>
            {/* Sidebar Section (Right Aligned) */}
            <div id='philosophy' className="absolute top-1/3 right-10 transform -translate-y-1/2 text-sm text-gray-300 space-y-5 hidden lg:block">
                <div className="text-white font-semibold mb-1">Sections</div>
                <ul className="space-y-1 ">
                    {[
                        "Our philosophy",
                        "Our core values",
                        "The Systems way",
                        "Accomplishments",
                        "Our leadership",
                        "Sustainable progress",
                        "Our global presence",
                    ].map((item) => (
                        <li key={item} className="hover:text-white cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default page;
