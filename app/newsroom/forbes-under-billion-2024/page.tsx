import Image from "next/image";
import Help from "@/components/Help";

const ForbesArticle = () => {
    return (
        <>
            {/* Hero Image Section */}
            <section className=" w-full h-96 mb-8 overflow-hidden shadow-lg">
                <Image
                    src="/images/forbes-under-billion-2024.webp"
                    alt="Systems Forbes Asia Award"
                    fill
                    className="object-cover object-center"
                    priority
                />

            </section>
            {/* Article Body - Combined Section */}
            <section className="space-y-8 leading-relaxed text-gray-200 bg-gray-800 p-8 rounded-xl shadow-lg">
                {/* Section 1 */}
                <div className="space-y-6">
                    <p className="text-lg">
                        <span className="font-semibold text-white">Tuesday, 13, 2024, Lahore</span> - Systems Limited, a global digitally native company focused on reinventing businesses through innovative technology
                        solutions, has been honoured with the Forbes Asia’s Best Under a Billion 2024 award for the fifth consecutive year.
                    </p>
                    <p className="text-lg">
                        Leading among the three companies from Pakistan, with a market value of <strong className="text-green-400">$485 million</strong>,
                        <strong className="text-green-400"> $188 million in sales</strong>, and <strong className="text-green-400">$31 million in net income</strong>, Systems Limited, the fastest company in Asia, has yet again
                        solidified its status as a leader in the industry.
                    </p>
                    <p className="text-lg">
                        Systems Limited’s five-year streak on Forbes Asia’s list creates an outstanding spirit of victory
                        that goes beyond conventional success. It strongly signifies a ripple effect of innovation, growth,
                        and progress. It’s more than just another accolade; it’s a significant national achievement, reflecting
                        their core values of integrity, innovation, and dedication.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-6 pt-6 border-t border-gray-700">
                    <p className="text-lg">
                        Over the last 4+ decades, Systems Limited has excelled by navigating the fast-changing tech
                        landscape with a unique blend of innovation, client understanding, and deep empathy. Their
                        advanced, impactful solutions showcase a keen ability to meet evolving business needs while
                        embracing the human aspect, cementing their leadership in the industry.
                    </p>
                    <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-300 text-lg py-2 bg-gray-700 rounded-r-lg shadow-inner">
                        <p className="mb-2">
                            “Systems Limited has cultivated a dynamic ecosystem that not only consistently surpasses performance benchmarks but also drives
                            meaningful impact across the industry. Being recognized by Forbes Asia’s Best Under a Billion for
                            five consecutive years demonstrates our ability to outperform industry standards consistently.”
                        </p>
                        <footer className="text-white font-semibold">— Mr. Asif Peer, Group CEO and MD of Systems Limited</footer>
                    </blockquote>
                </div>

                {/* Section 3 */}
                <div className="space-y-6 pt-6 border-t border-gray-700">
                    <p className="text-lg">
                        According to Forbes’ selection of Asia’s 200 Best Under a Billion, qualified companies must
                        generate annual revenue between $10 million and $1 billion, be publicly traded for at least a year,
                        and have positive net income. Forbes then ranks the companies based on earnings growth, sales
                        growth, and return on equity over the past 12 months and the last three years.
                    </p>
                    <p className="text-lg">
                        Systems Limited has proudly secured its place among the elite 200 chosen from over 20,000
                        publicly traded firms. Their consistent profitability, embedded in their DNA, ensures sustained
                        financial success across all business endeavours, underscoring their continued success and robust
                        growth.
                    </p>
                </div>
            </section>
            <Help />
        </>
    );
};

export default ForbesArticle;