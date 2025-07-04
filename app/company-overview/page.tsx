import React from 'react';
import Link from 'next/link';
const page = () => {
    return (

        <div className="min-h-screen bg-[#1E2235] text-white">
            <div className="max-w-20xl mx-auto px-6 py-8 relative">
                <h1 className="pt-40 text-30xl font-light leading-snug">
                    Enabling a <br /> <span className="block text-white">digital</span>
                </h1>
            </div>
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
                    {/* Our Philosopy */}
                    <section id='philosophy-section'>
                        <div className="pt-10 flex justify-between items-center text-sm mb-8">
                            <div>
                                <span className="font-semibold tracking-wider">OUR PHILOSOPY</span>
                            </div>
                        </div>                        <p className="text-gray-700 mb-6">
                            As a leading contributor to driving change, we understand the importance of continued self-reinvention.
                            <br />We accomplish this by investing in next-generation capabilities that <br />enhance our differentiation in key growth areas and by investing in talent to ensure we have specialized skills to resolve business problems.<br /> Backed by our expertise and diverse global workforce, our ultimate goal is to offer sustainable and meaningful value across all directions.  </p>

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


            {/* Sidebar Section (Right Aligned) */}
            <div className="absolute top-1/3 right-10 transform -translate-y-1/2 text-sm text-gray-300 space-y-5 hidden lg:block">
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
