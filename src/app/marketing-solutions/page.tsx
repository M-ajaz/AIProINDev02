"use client"
import React from "react";
import {
    EnhancedFAQSection,
    GeometricBackground
} from "@/components";
import { 
    FaChartLine, 
    FaBullseye, 
    FaUsers, 
    FaCogs, 
    FaRocket,
    FaHandshake,
    FaArrowRight,
    FaCheckCircle,
    FaShare,
    FaRobot,
    FaUserFriends,
    FaHeartbeat,
    FaUtensils,
    FaLaptopCode,
    FaHome,
    FaShoppingCart,
    FaGraduationCap,
    FaTools,
    FaChartBar,
    FaCode,
    FaPlay,
    FaEye,
    FaMousePointer,
    FaAward,
    FaThumbsUp,
    FaGlobe
} from 'react-icons/fa';

// Hero Section
const MarketingHeroSection = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1626123080782-10b336a160b4')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C2D92C]/60 via-[#34969E]/70 to-[#113F64]/80"></div>
            
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 border border-[#C2D92C]/40 rotate-45 animate-pulse"></div>
                <div className="absolute bottom-32 right-16 w-16 h-16 border border-[#34969E]/50 rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative z-10 text-center text-white max-w-4xl px-4 md:px-6">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
                    Digital Marketing Services
                    <span className="block text-[#C2D92C]">To Grow Your Business</span>
                </h1>
                
                <p className="text-base md:text-lg lg:text-xl font-light mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                    Protingent India delivers ROI-driven marketing services to businesses that generate heavy traffic and higher conversion possibilities. 
                    We have a team of skilled Martech professionals who execute strategic and insightful SEO, performance marketing, social media, and content strategy that enable growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-8 py-4 bg-[#C2D92C] text-[#113F64] font-bold rounded-lg hover:bg-[#34969E] hover:text-white transition-all duration-300">
                        Connect for Free Consultation
                    </button>
                    
                    <button className="px-6 py-3 border-2 border-white/30 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                        <span className="flex items-center gap-2">
                            <span>View Portfolio</span>
                            <FaPlay className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </div>
                
                <div className="flex justify-center items-center gap-8 mt-8 text-sm opacity-80">
                    <div className="text-center">
                        <div className="font-bold text-xl">500+</div>
                        <div>Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-xl">15+</div>
                        <div>Years</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-xl">95%</div>
                        <div>Retention</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Challenge Section
const ChallengeSection = () => {
    const challenges = [
        {
            title: "Unclear ROI",
            description: "Marketing spend increases, but the revenue is still uncertain.",
            image: "https://images.unsplash.com/photo-1705846973668-0e9ed382ea8f",
            icon: FaChartLine
        },
        {
            title: "Scattered Efforts",
            description: "Multiple vendors, disconnected tools, no unified strategy.",
            image: "https://images.unsplash.com/photo-1646394828039-0802101e1053",
            icon: FaCogs
        },
        {
            title: "Low Conversion Rates",
            description: "Traffic comes in, but leads don't turn into paying customers.",
            image: "https://images.pexels.com/photos/33820159/pexels-photo-33820159.jpeg",
            icon: FaMousePointer
        },
        {
            title: "Scaling Struggles",
            description: "Campaigns that work at a small scale fail when the business grows.",
            image: "https://images.unsplash.com/photo-1652359282381-63624506739c",
            icon: FaRocket
        },
        {
            title: "Lack of Real-Time Insights",
            description: "Decisions rely on guesswork instead of data-driven clarity.",
            image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
            icon: FaEye
        }
    ];

    return (
        <div className="relative w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 overflow-hidden">
            <GeometricBackground variant="tertiary" intensity="light" />
            
            <div className="max-w-[1450px] mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#113F64' }}>
                        The Challenge We Solve
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Approx. 75% of marketing strategies fail to give results. Businesses that invest in digital marketing services lack campaign direction, scattered strategies, and uncertain ROI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {challenges.map((challenge, index) => {
                        const IconComponent = challenge.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-3"
                            >
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${challenge.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/90 via-[#34969E]/80 to-[#113F64]/90"></div>
                                
                                <div className="relative z-10 p-8 h-full text-white min-h-[280px]">
                                    <div className="mb-6">
                                        <div 
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                                            style={{ backgroundColor: '#C2D92C' }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl md:text-2xl font-bold mb-4">
                                        {challenge.title}
                                    </h3>
                                    <p className="text-white/90 leading-relaxed">
                                        {challenge.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Solutions Section
const SolutionsSection = () => {
    const solutions = [
        {
            title: "Strategy & Consulting",
            description: "We study your market, understand your customers, and craft clear roadmaps that help you grow with focus and confidence.",
            image: "https://images.unsplash.com/photo-1646394828039-0802101e1053",
            icon: FaBullseye,
            features: ["Market Analysis", "Customer Research", "Growth Roadmap"]
        },
        {
            title: "Performance Marketing",
            description: "From SEO to PPC, we design campaigns that attract the right audience and turn clicks into measurable business growth.",
            image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
            icon: FaRocket,
            features: ["SEO Optimization", "PPC Campaigns", "Conversion Tracking"]
        },
        {
            title: "Content & Social",
            description: "We create stories, visuals, and conversations that connect with your audience, build trust, and keep your brand top of mind.",
            image: "https://images.unsplash.com/photo-1705846973668-0e9ed382ea8f",
            icon: FaShare,
            features: ["Content Strategy", "Social Media", "Brand Storytelling"]
        },
        {
            title: "Automation & Analytics",
            description: "Our dashboards, email workflows, and CRM tools give you clarity so every decision is guided by data, not guesswork.",
            image: "https://images.pexels.com/photos/7948065/pexels-photo-7948065.jpeg",
            icon: FaRobot,
            features: ["Marketing Automation", "Analytics Dashboard", "CRM Integration"]
        },
        {
            title: "Scalable Teams",
            description: "Need more professionals on the team? Our on-demand marketing experts plug right into your team, ensuring campaigns never stall or lose momentum.",
            image: "https://images.unsplash.com/photo-1652359282381-63624506739c",
            icon: FaUserFriends,
            features: ["Expert Teams", "On-Demand Scaling", "Seamless Integration"]
        }
    ];

    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-[1450px] mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#113F64' }}>
                        End-to-End Marketing Solutions
                        <span className="block text-[#34969E]">That Help You Scale</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Tap into insightful marketing services designed on strategies, creative, and BI analytics basis to make every campaign work on a measurable scale. 
                        Protingent India curates impactful solutions that fit and align with business goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => {
                        const IconComponent = solution.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 ${
                                    index === 0 ? 'lg:col-span-2' : ''
                                }`}
                            >
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${solution.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/95 via-[#34969E]/85 to-[#113F64]/95"></div>
                                
                                <div className="relative z-10 p-8 lg:p-12 h-full text-white min-h-[300px] flex flex-col justify-between">
                                    <div>
                                        <div className="mb-6">
                                            <div 
                                                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                                style={{ backgroundColor: '#C2D92C' }}
                                            >
                                                <IconComponent className="text-[#113F64]" />
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                                            {solution.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed mb-6 text-lg">
                                            {solution.description}
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {solution.features.map((feature, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm border border-white/30"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <button className="flex items-center gap-2 text-[#C2D92C] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:gap-3">
                                            <span>Learn More</span>
                                            <FaArrowRight className="text-sm" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// CTA Section
const CTASection = () => {
    return (
        <div className="relative w-full py-16 md:py-24 overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1623410439361-22ac19216577')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#113F64]/95 via-[#34969E]/90 to-[#C2D92C]/85"></div>
            
            <div className="relative z-10 max-w-[1450px] mx-auto px-4 md:px-6 text-center text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Connect and Let Us Together
                    <span className="block text-[#C2D92C]">Grow Your Business</span>
                </h2>
                <p className="text-xl leading-relaxed mb-12 max-w-4xl mx-auto opacity-90">
                    Stop getting frustrated from marketing campaigns that do not deliver results. 
                    Protingent India will help design engaging and result-driven marketing strategies for scalability.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="px-12 py-4 bg-[#C2D92C] text-[#113F64] font-bold text-lg rounded-full hover:scale-105 transform transition-all shadow-2xl">
                        Start Your Growth Journey
                    </button>
                    
                    <button className="px-8 py-4 border-2 border-white/40 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white">
                        <span className="flex items-center gap-3">
                            <span>Schedule Free Consultation</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </div>
                
                <div className="flex justify-center items-center gap-12 mt-12 text-sm opacity-80">
                    <div className="text-center">
                        <FaCheckCircle className="text-2xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Free Consultation</div>
                    </div>
                    <div className="text-center">
                        <FaRocket className="text-2xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Quick Setup</div>
                    </div>
                    <div className="text-center">
                        <FaChartLine className="text-2xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Guaranteed ROI</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// FAQ Section - CRITICAL: This section must be visible and functional
const MarketingFAQSection = () => {
    const faqs = [
        {
            q: "How can a marketing agency help my business grow revenue?",
            a: "A marketing agency drives business growth by combining digital strategy, SEO, paid advertising, and content marketing to attract qualified leads. Protingent India focuses on measurable results boosting visibility, improving conversions, and building customer loyalty. With data-driven campaigns and performance tracking, we ensure every marketing dollar works harder, turning engagement into consistent revenue growth."
        },
        {
            q: "What makes Protingent India different from other digital marketing agencies?",
            a: "Protingent India offers end-to-end solutions; such as strategy, performance marketing, content, and BI analytics. We blend creativity with data-driven insights to design campaigns that scale. Our flexible staff augmentation services model ensures you get the right team when you need it. We don't just deliver clicks; we build conversion-focused strategies that help businesses grow faster and smarter across industries."
        },
        {
            q: "Do you provide end-to-end marketing solutions or just campaign execution?",
            a: "We see marketing more than just executing a campaign. We include all elements of marketing from market research to digital strategy, SEO, paid advertising, social media, and marketing automation. Protingent India is a complete marketing solution. Our ecosystem ensures that every aspect of your marketing - content, analytics, and performance marketing is integrated to drive growth. Clients come to us because we provide a complete solution that helps them to scale revenue, optimize ROI, and create sustained visibility for their brand."
        },
        {
            q: "How long does it take to see measurable results from digital marketing?",
            a: "The outcomes of digital marketing strategies rely on your business goals and strategy. Results from SEO usually take 3–6 months whereas paid ads and performance campaigns can yield measurable ROI in weeks. Protingent India has clients that want to balance the short-term wins of lead generation with the long-term growth of organic visibility. We've integrated strategic analytics and performance tracking so that you will be able to measure progress, optimize campaigns, and scale revenue faster."
        },
        {
            q: "Can you customize marketing strategies for startups, SMBs, and large enterprises?",
            a: "There is no one-size-fits-all approach for any business. Startups need lean and rapid-growth strategies, SMBs need scalable and adaptable solutions, and enterprise businesses are looking for advanced marketing automation and analytics. Protingent India creates tailored strategies to be successful at every stage, for example from brand awareness, to getting qualified leads, and then optimizing your set-it-and-forget-it enterprise-level campaigns. Our flexible solutions are built to fit the current size of your business; while also preparing you for scalability and future growth."
        },
        {
            q: "What industries do you specialize in serving with your marketing solutions?",
            a: "We serve multiple industries including healthcare, IT & SaaS, e-commerce, education, real estate, and food & beverage. Beyond industries, we also specialize in business intelligence analytics, engineering, and developer ecosystems. Each industry has its own set of challenges whether compliance, lead generation, or community engagement. Protingent India creates customized marketing strategies for your industry to ensure your campaigns reach the appropriate audience, draw qualified leads, and drive sustainable growth."
        }
    ];

    return (
        <div className="w-full py-16 md:py-24">
            <EnhancedFAQSection
                title="Frequently Asked Questions"
                description="Get answers to common questions about our marketing solutions and how Protingent India can help you achieve sustainable business growth through data-driven marketing strategies."
                FAQList={faqs}
            />
        </div>
    );
};

// Main Marketing Solutions Page Component
export default function MarketingSolutionsService() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <MarketingHeroSection />
            <ChallengeSection />
            <SolutionsSection />
            <CTASection />
            <MarketingFAQSection />
        </div>
    );
}