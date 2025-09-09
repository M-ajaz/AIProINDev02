"use client"
import { useState, useEffect, useRef } from "react";
import {
    ContactUsComponent,
    FAQSection,
    CommonHeading
} from "@/components";
import { 
    FaUsers, 
    FaClock, 
    FaDollarSign, 
    FaExpand, 
    FaCheckCircle,
    FaRocket,
    FaSearch,
    FaBullseye,
    FaHandshake,
    FaShieldAlt,
    FaLaptopCode,
    FaChartBar,
    FaCogs,
    FaCloud,
    FaRobot,
    FaEye,
    FaNetworkWired,
    FaUserFriends,
    FaMoneyBillWave,
    FaTachometerAlt,
    FaAward,
    FaStar,
    FaGraduationCap,
    FaBuilding,
    FaIndustry,
    FaArrowRight,
    FaPlay,
    FaChevronDown,
    FaChevronUp
} from 'react-icons/fa';

// --------------------------------------------------------------
// 1. Hero Section (Tallium/FuseLab Style)
// --------------------------------------------------------------
const DirectSourcingHeroSection = () => {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* MANDATORY: Animated gradient mesh background */}
            <div className="absolute inset-0 w-full h-full">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1664526937033-fe2c11f1be25')`,
                    }}
                ></div>
                {/* Animated gradient mesh overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C2D92C]/70 via-[#34969E]/80 to-[#113F64]/90 animate-gradient-shift"></div>
            </div>
            
            {/* Floating network elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-24 h-24 border-2 border-[#C2D92C]/40 rounded-full float-animation"></div>
                <div className="absolute bottom-32 right-16 w-20 h-20 border-2 border-white/30 rotate-45 float-animation" style={{animationDelay: '-2s'}}></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#C2D92C]/20 rounded-full float-animation" style={{animationDelay: '-4s'}}></div>
                <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border border-[#34969E]/50 rotate-12 float-animation" style={{animationDelay: '-6s'}}></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
                {/* Side-by-side layout (40% image / 60% content) */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    {/* 40% - Hero Image */}
                    <div className="lg:col-span-2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1586991602729-49c1e818ad46"
                                alt="Connected Digital Talent Network"
                                className="w-full h-[400px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#113F64]/80 via-transparent to-[#C2D92C]/20"></div>
                            
                            {/* Floating talent network icons */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-3 gap-4 opacity-80">
                                    <div className="w-12 h-12 bg-[#C2D92C] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                        <FaUsers className="text-[#113F64] text-lg" />
                                    </div>
                                    <div className="w-12 h-12 bg-[#34969E] rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}>
                                        <FaNetworkWired className="text-white text-lg" />
                                    </div>
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
                                        <FaRocket className="text-[#113F64] text-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 60% - Content */}
                    <div className="lg:col-span-3 text-white">
                        <div className="mb-6">
                            <div className="inline-block px-4 py-2 bg-[#113F64]/30 backdrop-blur-sm rounded-full border border-[#C2D92C]/40 mb-4">
                                <span className="text-[#C2D92C] font-semibold text-sm">🚀 Build Your Private Talent Pool</span>
                            </div>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                Direct Sourcing Services
                            </span>
                            <span className="block text-[#C2D92C] mt-2">
                                for IT and Engineering Talent
                            </span>
                        </h1>
                        
                        <p className="text-xl lg:text-2xl font-light mb-8 leading-relaxed opacity-90">
                            Protingent India enables businesses to design a private talent pool of pre-vetted IT, engineering, and analytics professionals. 
                            The direct sourcing service model provides faster access to skilled talent, reduces overheads, and fosters a strong culture to scale the workforce on demand.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 mb-8">
                            <button className="group relative overflow-hidden px-8 py-4 bg-[#C2D92C] text-[#113F64] font-bold text-lg rounded-xl hover:scale-105 transform transition-all shadow-2xl">
                                <span className="relative z-10 flex items-center gap-3">
                                    Build Your Talent-Pool
                                    <FaUsers className="group-hover:rotate-12 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </button>
                            
                            <button className="px-8 py-4 border-2 border-white/40 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white">
                                <span className="flex items-center gap-3">
                                    <FaPlay className="text-sm" />
                                    <span>Watch Demo</span>
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </button>
                        </div>
                        
                        {/* Key Benefits Preview */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                            {[
                                { icon: FaClock, label: "Faster Hiring", value: "60%" },
                                { icon: FaDollarSign, label: "Cost Reduction", value: "40%" },
                                { icon: FaUsers, label: "Pre-vetted Talent", value: "5000+" },
                                { icon: FaAward, label: "Success Rate", value: "95%" }
                            ].map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                        <IconComponent className="text-[#C2D92C] text-2xl mb-2 mx-auto" />
                                        <div className="text-2xl font-bold">{stat.value}</div>
                                        <div className="text-sm opacity-80">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------
// 2. Challenge Section (WANDR Card Style)
// --------------------------------------------------------------
const ChallengeSection = () => {
    const challenges = [
        {
            title: "Faster hiring cycles",
            description: "accessing pre-qualified candidates on demand",
            image: "https://images.unsplash.com/photo-1646394828039-0802101e1053",
            icon: FaClock,
            accentColor: "#C2D92C"
        },
        {
            title: "Lower recruitment costs", 
            description: "cutting agency fees and markups",
            image: "https://images.unsplash.com/photo-1656625497592-af6140a73eaa",
            icon: FaDollarSign,
            accentColor: "#34969E"
        },
        {
            title: "Workforce scalability",
            description: "match project needs without overhiring",
            image: "https://images.unsplash.com/photo-1652359282381-63624506739c",
            icon: FaExpand,
            accentColor: "#C2D92C"
        },
        {
            title: "Quality alignment",
            description: "talent that understands your culture and technology environment",
            image: "https://images.unsplash.com/photo-1548098751-d645421e0d7a",
            icon: FaCheckCircle,
            accentColor: "#34969E"
        }
    ];

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        Overcome Hiring Challenges with
                        <span className="block text-[#34969E]">Private Talent Pool</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                        Utilise the smarter workforce sourcing model to find the right IT and Engineering professionals when required urgently at reduced overhead expenses. 
                        It's a community of business-owned skilled talent-pool who already know your brand before being onboarded.
                    </p>
                </div>

                {/* 4 Challenge Cards with mandatory image backgrounds */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {challenges.map((challenge, index) => {
                        const IconComponent = challenge.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-4 hover:scale-105"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* MANDATORY: Image background with overlay */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${challenge.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/90 via-[#34969E]/80 to-[#113F64]/95"></div>
                                
                                <div className="relative z-10 p-8 h-full text-white min-h-[320px] flex flex-col justify-between">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div 
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                            style={{ backgroundColor: challenge.accentColor }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4 leading-tight">
                                            {challenge.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-lg">
                                            {challenge.description}
                                        </p>
                                    </div>
                                    
                                    {/* Hover indicator */}
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="w-8 h-8 rounded-full border-2 border-[#C2D92C] flex items-center justify-center">
                                            <FaArrowRight className="text-[#C2D92C] text-sm" />
                                        </div>
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

// --------------------------------------------------------------
// 3. CTA Banner (Studio Beyond Style)
// --------------------------------------------------------------
const CTABannerSection = () => {
    return (
        <div className="relative w-full py-16 md:py-24 overflow-hidden">
            {/* MANDATORY: Full-width background image with overlay gradient */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/33809955/pexels-photo-33809955.jpeg')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#34969E]/95 via-[#113F64]/90 to-[#C2D92C]/85"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#C2D92C]/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white/40 rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#C2D92C]/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center text-white">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                    A Flexible Hiring Solution That
                    <span className="block text-[#C2D92C]">Puts You in Control</span>
                </h2>
                <p className="text-xl lg:text-2xl leading-relaxed mb-12 max-w-5xl mx-auto opacity-90">
                    Building a private talent pool, Protingent gives you a flexible hiring solution that eliminates middle-layer delays. 
                    You manage your own contingent workforce, gain visibility into available skills, and engage talent faster without the heavy agency costs.
                </p>
                
                <button className="group relative overflow-hidden px-12 py-6 bg-[#C2D92C] text-[#113F64] font-bold text-xl rounded-2xl hover:scale-105 transform transition-all shadow-2xl">
                    <span className="relative z-10 flex items-center gap-4">
                        Get Started Today
                        <FaRocket className="group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                
                {/* Trust indicators */}
                <div className="flex justify-center items-center gap-12 mt-12 text-lg opacity-80">
                    <div className="text-center">
                        <FaShieldAlt className="text-3xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Secure & Compliant</div>
                    </div>
                    <div className="text-center">
                        <FaEye className="text-3xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Full Transparency</div>
                    </div>
                    <div className="text-center">
                        <FaTachometerAlt className="text-3xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Real-time Control</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------
// 4. Process Section (LaSoft Timeline Style)  
// --------------------------------------------------------------
const ProcessSection = () => {
    const processes = [
        {
            title: "Employer Branding First",
            description: "We showcase your company as a destination for IT and engineering professionals, helping you attract talent who already believe in your brand.",
            image: "https://images.unsplash.com/photo-1646394828039-0802101e1053",
            icon: FaBullseye
        },
        {
            title: "Building a Private Talent Pool",
            description: "Using a mix of past applicants, referrals, and curated outreach, we create a talent community that's always engaged and ready.",
            image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
            icon: FaUsers
        },
        {
            title: "Curation & Qualification",
            description: "Candidates are vetted for technical skills, cultural fit, and availability—ensuring your workforce sourcing model is sharp and reliable.",
            image: "https://images.unsplash.com/photo-1652359282381-63624506739c",
            icon: FaSearch
        },
        {
            title: "On-Demand Deployment",
            description: "When projects ramp up, you tap into your flexible workforce solution and bring in the right professionals without the delays of traditional recruitment.",
            image: "https://images.pexels.com/photos/33809956/pexels-photo-33809956.jpeg",
            icon: FaRocket
        }
    ];

    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        We Have Made Talent Discovery to
                        <span className="block text-[#34969E]">Deployment Simple</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                        Protingent India makes hiring predictable by blending technology, human expertise, and your employer brand. 
                        Our talent acquisition strategy is designed to keep your pipeline full of pre-qualified IT and engineering professionals, so you always have the right people at the right time.
                    </p>
                </div>

                {/* 4 Process Steps with alternating image/content */}
                <div className="space-y-24">
                    {processes.map((process, index) => {
                        const IconComponent = process.icon;
                        const isEven = index % 2 === 0;
                        
                        return (
                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row items-center gap-12 ${
                                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                }`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {/* Image Side - MANDATORY: Each step has image background */}
                                <div className="lg:w-1/2 relative">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                        <img
                                            src={process.image}
                                            alt={process.title}
                                            className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/70 via-transparent to-[#34969E]/60"></div>
                                        
                                        {/* Step Number */}
                                        <div className="absolute top-8 left-8">
                                            <div className="w-16 h-16 bg-[#C2D92C] rounded-2xl flex items-center justify-center shadow-xl">
                                                <span className="text-[#113F64] font-bold text-xl">{index + 1}</span>
                                            </div>
                                        </div>
                                        
                                        {/* Icon */}
                                        <div className="absolute bottom-8 right-8">
                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                                                <IconComponent className="text-white text-2xl" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:w-1/2">
                                    <div className="relative">
                                        {/* Step indicator */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div 
                                                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                                                style={{ backgroundColor: index % 2 === 0 ? '#34969E' : '#C2D92C' }}
                                            >
                                                <IconComponent className="text-white text-xl" />
                                            </div>
                                            <div className="text-sm font-semibold text-[#34969E] uppercase tracking-wider">
                                                Step {index + 1}
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-[#113F64] leading-tight">
                                            {process.title}
                                        </h3>
                                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                            {process.description}
                                        </p>
                                        
                                        <div className="flex items-center gap-3 text-[#34969E] font-semibold hover:gap-5 transition-all duration-300 cursor-pointer">
                                            <span>Learn More</span>
                                            <FaArrowRight />
                                        </div>
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

// --------------------------------------------------------------
// 5. How It Works (SPD Tech Style) - Bento Grid Layout
// --------------------------------------------------------------
const HowItWorksSection = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    
    const steps = [
        {
            title: "Workforce Discovery",
            description: "We assess your staffing needs, project timelines, and technical requirements.",
            icon: FaSearch,
            color: "#C2D92C",
            image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643",
            size: "large" // Spans 2 grid columns
        },
        {
            title: "Talent Pool Curation", 
            description: "Our team builds or taps into a private community of vetted professionals tailored to your business.",
            icon: FaUsers,
            color: "#34969E",
            image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
            size: "large" // Spans 2 grid columns
        },
        {
            title: "Candidate Engagement",
            description: "We connect directly with qualified talent, streamlining outreach and avoiding third-party markups.",
            icon: FaHandshake,
            color: "#C2D92C",
            image: "https://images.unsplash.com/photo-1659355894515-2548f35525f1",
            size: "small"
        },
        {
            title: "Selection & Matchmaking",
            description: "Using AI-driven insights and recruiter expertise, we present only the best-fit candidates.",
            icon: FaBullseye,
            color: "#34969E",
            image: "https://images.unsplash.com/photo-1659355894740-d7caa8e9c653",
            size: "small"
        },
        {
            title: "Onboarding & Support",
            description: "Protingent ensures smooth integration, compliance, and ongoing workforce management.",
            icon: FaRocket,
            color: "#C2D92C",
            image: "https://images.pexels.com/photos/33827315/pexels-photo-33827315.jpeg",
            size: "small"
        }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        How Protingent's Direct
                        <span className="block text-[#34969E]">Talent Sourcing Works?</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                        We've simplified workforce sourcing into a structured yet flexible process that gives you full visibility at every step. 
                        Our direct sourcing service company helps businesses move from open roles to onboarded talent without the inefficiencies of traditional staffing.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-fr">
                    {/* Top Row: 2 Large Cards */}
                    {steps.slice(0, 2).map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <div
                                key={index}
                                className="md:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 bg-white min-h-[400px]"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onMouseEnter={() => setActiveCard(index)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Professional Human Image Background */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${step.image}')`,
                                    }}
                                ></div>
                                
                                {/* Abstract Geometric Overlay with Brand Colors */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[${step.color}]/75 to-[#113F64]/90`}>
                                    {/* Geometric Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div 
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `radial-gradient(circle at 25% 25%, ${step.color}40 2px, transparent 2px), radial-gradient(circle at 75% 75%, #113F6440 3px, transparent 3px)`,
                                                backgroundSize: '60px 60px, 80px 80px'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                
                                <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                                    {/* Step number and icon */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div 
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ backgroundColor: step.color }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>
                                        <div 
                                            className="text-5xl font-bold opacity-30"
                                            style={{ color: step.color }}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-3xl font-bold mb-4 leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-lg mb-6">
                                            {step.description}
                                        </p>
                                        
                                        {/* Expand indicator */}
                                        <div className={`flex items-center gap-3 text-lg font-semibold transition-all duration-300 ${
                                            activeCard === index 
                                                ? 'opacity-100 gap-4' 
                                                : 'opacity-70'
                                        }`} style={{ color: step.color }}>
                                            <span>Explore Process</span>
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Accent border */}
                                <div 
                                    className="absolute bottom-0 left-0 w-full h-2 transition-all duration-500 group-hover:h-3"
                                    style={{ backgroundColor: step.color }}
                                ></div>
                            </div>
                        );
                    })}

                    {/* Bottom Row: 3 Smaller Cards */}
                    {steps.slice(2).map((step, index) => {
                        const actualIndex = index + 2;
                        const IconComponent = step.icon;
                        return (
                            <div
                                key={actualIndex}
                                className="md:col-span-4 lg:col-span-2 group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 bg-white min-h-[320px]"
                                style={{ animationDelay: `${actualIndex * 0.1}s` }}
                                onMouseEnter={() => setActiveCard(actualIndex)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Professional Human Image Background */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${step.image}')`,
                                    }}
                                ></div>
                                
                                {/* Abstract Geometric Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-[#113F64]/85 via-[${step.color}]/75 to-[#113F64]/90`}>
                                    {/* Subtle geometric pattern */}
                                    <div className="absolute inset-0 opacity-15">
                                        <div 
                                            className="w-full h-full"
                                            style={{
                                                backgroundImage: `linear-gradient(45deg, ${step.color}20 25%, transparent 25%), linear-gradient(-45deg, ${step.color}20 25%, transparent 25%)`,
                                                backgroundSize: '40px 40px'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                
                                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                                    {/* Step number and icon */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div 
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ backgroundColor: step.color }}
                                        >
                                            <IconComponent className="text-[#113F64]" />
                                        </div>
                                        <div 
                                            className="text-4xl font-bold opacity-30"
                                            style={{ color: step.color }}
                                        >
                                            {String(actualIndex + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-base mb-4">
                                            {step.description}
                                        </p>
                                        
                                        {/* Expand indicator */}
                                        <div className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                                            activeCard === actualIndex 
                                                ? 'opacity-100 gap-3' 
                                                : 'opacity-70'
                                        }`} style={{ color: step.color }}>
                                            <span>Learn More</span>
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Accent border */}
                                <div 
                                    className="absolute bottom-0 left-0 w-full h-2 transition-all duration-500 group-hover:h-3"
                                    style={{ backgroundColor: step.color }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------
// 6. Benefits Section
// --------------------------------------------------------------
const BenefitsSection = () => {
    const benefits = [
        {
            title: "Lower Recruitment Costs",
            description: "Reduce agency markups and only pay for the talent you actually deploy, leading to long-term cost savings.",
            image: "https://images.unsplash.com/photo-1646394828039-0802101e1053",
            icon: FaMoneyBillWave,
            gradient: "from-[#C2D92C] to-[#34969E]"
        },
        {
            title: "Faster Access to Talent",
            description: "Cut hiring cycles by engaging with a ready-to-work talent community instead of waiting on vendor pipelines.",
            image: "https://images.unsplash.com/photo-1656625497592-af6140a73eaa",
            icon: FaTachometerAlt,
            gradient: "from-[#34969E] to-[#113F64]"
        },
        {
            title: "Workforce Scalability",
            description: "Scale up or down seamlessly with an on-demand contingent workforce that adjusts to project needs.",
            image: "https://images.unsplash.com/photo-1652359282381-63624506739c",
            icon: FaExpand,
            gradient: "from-[#C2D92C] to-[#34969E]"
        },
        {
            title: "Better Talent Quality",
            description: "Hire professionals who understand your culture and technology environment, improving retention and project outcomes.",
            image: "https://images.unsplash.com/photo-1548098751-d645421e0d7a",
            icon: FaAward,
            gradient: "from-[#34969E] to-[#113F64]"
        },
        {
            title: "More Control, Less Risk",
            description: "Gain visibility into your workforce sourcing strategy, ensuring compliance, transparency, and predictable results.",
            image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
            icon: FaShieldAlt,
            gradient: "from-[#C2D92C] to-[#34969E]"
        }
    ];

    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        Why Businesses Rely on the
                        <span className="block text-[#34969E]">Direct Sourcing Model?</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
                        Protingent India upgrades businesses to a smarter hiring model. Our private talent pools are built and managed around your projects, your culture, and your growth targets. 
                        Instead of dealing with vendor markups and slow pipelines, you get a transparent staffing model that delivers qualified IT and engineering talent on demand. 
                        We deliver an on-demand hiring approach that scales with your business and keeps costs under control.
                    </p>
                </div>

                {/* 5 Benefits with mandatory background images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-3 ${
                                    index === 4 ? 'lg:col-span-1 lg:col-start-2' : ''
                                }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* MANDATORY: Background image */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${benefit.image}')`,
                                    }}
                                ></div>
                                
                                {/* Hover gradient overlays */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-85 group-hover:opacity-95 transition-opacity duration-300`}></div>
                                
                                <div className="relative z-10 p-8 h-full text-white min-h-[320px] flex flex-col justify-between">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl border border-white/30">
                                            <IconComponent className="text-white" />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed text-lg">
                                            {benefit.description}
                                        </p>
                                    </div>
                                    
                                    {/* Hover indicator */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center">
                                            <FaArrowRight className="text-white text-sm" />
                                        </div>
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

// --------------------------------------------------------------
// 7. Industries Section (Visual Cards) - Masonry Grid Layout
// --------------------------------------------------------------
const IndustriesSection = () => {
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

    const industries = [
        {
            title: "Information Technology & Software Development",
            description: "From cloud engineers to cybersecurity experts, we provide IT staffing solutions that match today's fast-changing tech landscape.",
            image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25",
            icon: FaLaptopCode,
            color: "#34969E"
        },
        {
            title: "Business Intelligence & Data Analytics", 
            description: "Access BI and analytics professionals who can turn raw data into real business intelligence, helping you drive smarter decisions.",
            image: "https://images.unsplash.com/photo-1646394828039-0802101e1053",
            icon: FaChartBar,
            color: "#C2D92C"
        },
        {
            title: "Engineering & Product Development",
            description: "Mechanical, electrical, and embedded engineers—our engineering workforce solutions help companies bring products to life faster.",
            image: "https://images.unsplash.com/photo-1652359282381-63624506739c",
            icon: FaCogs,
            color: "#34969E"
        },
        {
            title: "Managed IT & Infrastructure",
            description: "Support your operations with infrastructure specialists and IT consultants who keep systems secure, scalable, and efficient.",
            image: "https://images.unsplash.com/photo-1548098751-d645421e0d7a",
            icon: FaCloud,
            color: "#C2D92C"
        },
        {
            title: "Emerging Tech & Niche Roles",
            description: "Whether it's AI, IoT, or automation, we source experts who can plug into your most critical innovation projects.",
            image: "https://images.pexels.com/photos/33809955/pexels-photo-33809955.jpeg",
            icon: FaRobot,
            color: "#34969E"
        }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        Specialized Workforce Solutions for
                        <span className="block text-[#34969E]">Every Industry We Power</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
                        Protingent India's strength lies in understanding the unique workforce challenges of technology-driven businesses. 
                        We curate industry-specific talent pools that deliver engineers, developers, and analysts who are project-ready from day one.
                    </p>
                </div>

                {/* Masonry Grid: 2 cards on top row, 3 cards on bottom row (centered) */}
                <div className="space-y-8">
                    {/* Top Row: 2 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {industries.slice(0, 2).map((industry, index) => {
                            const IconComponent = industry.icon;
                            const isHovered = hoveredIndustry === index;
                            
                            return (
                                <div
                                    key={index}
                                    className={`group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl ${
                                        isHovered ? 'scale-105 z-10' : 'hover:scale-102'
                                    }`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                    onMouseEnter={() => setHoveredIndustry(index)}
                                    onMouseLeave={() => setHoveredIndustry(null)}
                                >
                                    {/* MANDATORY: Representative abstract images */}
                                    <div
                                        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url('${industry.image}')`,
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/90 via-transparent to-black/70"></div>
                                    
                                    {/* Content with smooth expansion */}
                                    <div className={`relative z-10 p-8 h-full text-white transition-all duration-700 ${
                                        isHovered ? 'min-h-[420px]' : 'min-h-[350px]'
                                    } flex flex-col justify-between`}>
                                        {/* Icon and Title */}
                                        <div>
                                            <div 
                                                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                                style={{ backgroundColor: industry.color }}
                                            >
                                                <IconComponent className="text-white" />
                                            </div>
                                            
                                            <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                                                {industry.title}
                                            </h3>
                                        </div>
                                        
                                        {/* Description with hover reveal */}
                                        <div className={`transition-all duration-700 overflow-hidden ${
                                            isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                            <p className="text-white/90 leading-relaxed text-lg mb-6">
                                                {industry.description}
                                            </p>
                                            
                                            <div className="flex items-center gap-3 font-semibold" style={{ color: industry.color }}>
                                                <span>Explore Solutions</span>
                                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Accent border */}
                                    <div 
                                        className="absolute bottom-0 left-0 w-full h-2 transition-all duration-500"
                                        style={{ backgroundColor: industry.color }}
                                    ></div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Row: 3 Cards (Centered) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {industries.slice(2).map((industry, index) => {
                            const actualIndex = index + 2;
                            const IconComponent = industry.icon;
                            const isHovered = hoveredIndustry === actualIndex;
                            
                            return (
                                <div
                                    key={actualIndex}
                                    className={`group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer shadow-lg hover:shadow-2xl ${
                                        isHovered ? 'scale-105 z-10' : 'hover:scale-102'
                                    }`}
                                    style={{ animationDelay: `${actualIndex * 0.1}s` }}
                                    onMouseEnter={() => setHoveredIndustry(actualIndex)}
                                    onMouseLeave={() => setHoveredIndustry(null)}
                                >
                                    {/* MANDATORY: Representative abstract images */}
                                    <div
                                        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url('${industry.image}')`,
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/90 via-transparent to-black/70"></div>
                                    
                                    {/* Content with smooth expansion */}
                                    <div className={`relative z-10 p-6 h-full text-white transition-all duration-700 ${
                                        isHovered ? 'min-h-[400px]' : 'min-h-[320px]'
                                    } flex flex-col justify-between`}>
                                        {/* Icon and Title */}
                                        <div>
                                            <div 
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                                                style={{ backgroundColor: industry.color }}
                                            >
                                                <IconComponent className="text-white" />
                                            </div>
                                            
                                            <h3 className="text-xl lg:text-2xl font-bold mb-3 leading-tight">
                                                {industry.title}
                                            </h3>
                                        </div>
                                        
                                        {/* Description with hover reveal */}
                                        <div className={`transition-all duration-700 overflow-hidden ${
                                            isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                            <p className="text-white/90 leading-relaxed text-base mb-4">
                                                {industry.description}
                                            </p>
                                            
                                            <div className="flex items-center gap-2 font-semibold text-sm" style={{ color: industry.color }}>
                                                <span>Explore Solutions</span>
                                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Accent border */}
                                    <div 
                                        className="absolute bottom-0 left-0 w-full h-2 transition-all duration-500"
                                        style={{ backgroundColor: industry.color }}
                                    ></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Call to Action Button */}
                <div className="text-center mt-16">
                    <button className="group relative overflow-hidden px-12 py-4 bg-[#34969E] text-white font-bold text-lg rounded-2xl hover:scale-105 transform transition-all shadow-2xl">
                        <span className="relative z-10 flex items-center gap-3">
                            Explore All Industries
                            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-[#C2D92C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------
// 8. Why Choose Protingent
// --------------------------------------------------------------
const WhyChooseSection = () => {
    const reasons = [
        {
            title: "Deep Tech Expertise",
            description: "Two decades of focus in IT, engineering, and BI means we understand the skills you actually need.",
            icon: FaGraduationCap,
            color: "#C2D92C"
        },
        {
            title: "Private Talent Communities",
            description: "Exclusive networks of vetted professionals who are ready to step in when you need them.",
            icon: FaUserFriends,
            color: "#34969E"
        },
        {
            title: "Transparent Pricing",
            description: "No hidden markups or vendor surprises—just a clear, predictable cost structure.",
            icon: FaEye,
            color: "#C2D92C"
        },
        {
            title: "Scalable Workforce Models",
            description: "Support for project spikes, long-term programs, or managed IT initiatives.",
            icon: FaExpand,
            color: "#34969E"
        },
        {
            title: "High-Quality Matches",
            description: "Candidates aligned not just by skills but by culture and business fit.",
            icon: FaStar,
            color: "#C2D92C"
        }
    ];

    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        Why Companies Choose Protingent
                        <span className="block text-[#34969E]">for Workforce Sourcing?</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
                        We are your partner in how you build and manage your workforce. With years of experience in IT, engineering, and analytics, 
                        our recruitment experts designed a direct sourcing model that blends human expertise with smart technology to deliver talent faster, cheaper, and with more long-term impact.
                    </p>
                </div>

                {/* 5 Points with icons and subtle background visuals */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => {
                        const IconComponent = reason.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 border-l-4 ${
                                    index === 4 ? 'lg:col-span-1 lg:col-start-2' : ''
                                }`}
                                style={{ 
                                    borderLeftColor: reason.color,
                                    animationDelay: `${index * 0.1}s` 
                                }}
                            >
                                {/* Subtle background visuals */}
                                <div className="absolute inset-0 opacity-5">
                                    <div 
                                        className="w-full h-full"
                                        style={{
                                            backgroundImage: `radial-gradient(circle at 80% 20%, ${reason.color}30 2px, transparent 2px)`,
                                            backgroundSize: '40px 40px'
                                        }}
                                    ></div>
                                </div>
                                
                                <div className="relative z-10 p-8 h-full min-h-[280px] flex flex-col justify-between">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div 
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ backgroundColor: reason.color }}
                                        >
                                            <IconComponent className="text-white" />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-[#113F64] group-hover:text-[#34969E] transition-colors duration-300">
                                            {reason.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Hover accent */}
                                <div 
                                    className="absolute top-0 right-0 w-1 h-full transition-all duration-500 group-hover:w-2"
                                    style={{ backgroundColor: reason.color }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------
// 9. Final CTA Section
// --------------------------------------------------------------
const FinalCTASection = () => {
    return (
        <div className="relative w-full py-20 md:py-32 overflow-hidden">
            {/* MANDATORY: Full-width gradient image background */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/33809956/pexels-photo-33809956.jpeg')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#C2D92C]/90 via-[#34969E]/85 to-[#113F64]/90"></div>
            
            {/* Animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-40 h-40 border-2 border-white/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 right-32 w-32 h-32 border-2 border-[#C2D92C]/40 rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center text-white">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                    Save Time and Cost While Hiring
                    <span className="block text-[#C2D92C]">Skilled Professionals?</span>
                </h2>
                <p className="text-2xl lg:text-3xl leading-relaxed mb-16 max-w-6xl mx-auto opacity-90 font-light">
                    Protingent helps you build your own talent ecosystem faster, smarter, and designed to scale with your business. 
                    With deep expertise in IT, engineering, BI, and managed services, we're here to deliver a sourcing model that's efficient, transparent, and built around your goals.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
                    <button className="group relative overflow-hidden px-16 py-6 bg-[#C2D92C] text-[#113F64] font-bold text-2xl rounded-2xl hover:scale-105 transform transition-all shadow-2xl">
                        <span className="relative z-10 flex items-center gap-4">
                            Start Building Your Talent Pool
                            <FaUsers className="group-hover:rotate-12 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                    
                    <button className="px-12 py-6 border-3 border-white/40 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group text-white text-xl font-semibold">
                        <span className="flex items-center gap-4">
                            <span>Schedule Consultation</span>
                            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                    </button>
                </div>
                
                {/* Final trust indicators */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {[
                        { icon: FaBuilding, label: "Enterprise Clients", value: "500+" },
                        { icon: FaUsers, label: "Talent Network", value: "50,000+" },
                        { icon: FaClock, label: "Avg. Time to Hire", value: "7 Days" },
                        { icon: FaDollarSign, label: "Cost Savings", value: "40%" }
                    ].map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div key={index} className="text-center">
                                <IconComponent className="text-4xl text-[#C2D92C] mb-4 mx-auto" />
                                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                <div className="text-lg opacity-80">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------
// 10. FAQ Section
// --------------------------------------------------------------
const DirectSourcingFAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            q: "How much can direct sourcing actually save our company?",
            a: "Direct sourcing can cut contingent hiring spend meaningfully by removing agency markups and making rates more predictable. Savings vary by program size and execution quality, but many firms report double-digit reductions in contingent spend when direct sourcing is done right. Think of it as immediate procurement savings plus ongoing lower replacement costs."
        },
        {
            q: "How quickly will we see results after launching a direct sourcing program?",
            a: "Expect early wins in 60–120 days if you already have employer brand assets and some candidate data. That timeline covers initial talent-pool curation, first outreach campaigns, and a handful of quick placements. Bigger program value (reliable pipelines, cost savings, DEI gains) generally materializes over 6–12 months."
        },
        {
            q: "How does direct sourcing work with our existing MSP, VMS, or ATS?",
            a: "Direct sourcing should complement—not replace—your tech stack. A good program integrates with MSP/VMS/ATS for candidate records, rate cards, and compliance workflows while using branded outreach to build exclusive talent pools. The goal: seamless data flow, single source of truth, and faster fill rates."
        },
        {
            q: "What about the legal risk that worker classification and compliance?",
            a: "Misclassification risk is real and varies by country/state. A mature direct sourcing program embeds compliance checks, classification rules, and payroll/EOR options to keep you safe. Don't let cost optimism trump governance learning the rules and designing the program around them prevents costly mistakes."
        },
        {
            q: "How do you keep a talent pool active so we actually get hires when we need them?",
            a: "Talent pools fail if left to sit. You need segmented engagement (role-based messaging), re-engagement campaigns, upskilling touchpoints, and simple application paths under your brand. Regular curation—refreshing skills, availability, and interest—turns a passive list into a plug-and-play workforce."
        }
    ];

    return (
        <div className="w-full bg-gray-50 py-16 md:py-24 relative">
            {/* MANDATORY: FAQ background pattern */}
            <div
                className="absolute inset-0 bg-repeat opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, #34969E 2px, transparent 2px), radial-gradient(circle at 25% 75%, #C2D92C 1px, transparent 1px)`,
                    backgroundSize: '60px 60px, 40px 40px'
                }}
            ></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#113F64' }}>
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600">
                        Get answers to common questions about our direct sourcing services and how we can help transform your talent acquisition strategy.
                    </p>
                </div>

                {/* Accordion with plus/minus animation */}
                <div className="space-y-6">
                    {faqs.map((faq, index) => {
                        const isOpen = openFAQ === index;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
                            >
                                <button
                                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                                    className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <h3 className="text-xl lg:text-2xl font-bold text-[#113F64] pr-8 leading-tight">
                                        {faq.q}
                                    </h3>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#34969E] flex items-center justify-center transition-all duration-300 ${
                                        isOpen ? 'bg-[#34969E] rotate-45' : 'hover:bg-[#34969E]/10'
                                    }`}>
                                        {isOpen ? (
                                            <FaChevronUp className="text-white text-sm" />
                                        ) : (
                                            <FaChevronDown className="text-[#34969E] text-sm" />
                                        )}
                                    </div>
                                </button>
                                
                                <div className={`transition-all duration-500 overflow-hidden ${
                                    isOpen ? 'max-h-96' : 'max-h-0'
                                }`}>
                                    <div className="px-8 pb-8">
                                        <div className="h-px bg-gradient-to-r from-[#C2D92C] via-[#34969E] to-[#C2D92C] mb-6"></div>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {faq.a}
                                        </p>
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

// --------------------------------------------------------------
// Main Direct Sourcing Page Component
// --------------------------------------------------------------
export default function DirectSourcingService() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <DirectSourcingHeroSection />
            <ChallengeSection />
            <CTABannerSection />
            <ProcessSection />
            <HowItWorksSection />
            <BenefitsSection />
            <IndustriesSection />
            <WhyChooseSection />
            <FinalCTASection />
            
            <div className="py-16 md:py-24 w-full flex justify-center">
                <ContactUsComponent />
            </div>

            <DirectSourcingFAQSection />
        </div>
    );
}