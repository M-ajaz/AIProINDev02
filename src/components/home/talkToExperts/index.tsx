"use client"
import React from 'react'
import { 
    FaUserTie, 
    FaUsers, 
    FaChartLine,
    FaCheck,
    FaArrowRight,
    FaStar,
    FaClock,
    FaRocket
} from 'react-icons/fa';

// -----------------------------------------------------------

const TalkToExpert = () => {
    const pathwayData = [
        {
            id: 'expert-advice',
            title: "Need Expert Advice?",
            subtitle: "Get Strategic Guidance",
            description: "Tap into 25+ years of industry expertise for immediate solutions to your most pressing challenges.",
            benefits: [
                "25+ years experience across industries",
                "Industry-specific insights & strategies",
                "Free 30-minute consultation call"
            ],
            cta: "Schedule Expert Call",
            icon: FaUserTie,
            gradient: "from-[#34969E] to-[#113F64]",
            accentColor: "#34969E",
            featured: false
        },
        {
            id: 'dedicated-team',
            title: "Want A Dedicated Team?",
            subtitle: "Scale Your Operations",
            description: "Get hand-picked experts who integrate seamlessly with your business and start delivering results in 48 hours.",
            benefits: [
                "Hand-picked experts for your domain",
                "Flexible engagement models",
                "Start delivering in 48 hours"
            ],
            cta: "Build Your Team",
            icon: FaUsers,
            gradient: "from-[#C2D92C] to-[#34969E]",
            accentColor: "#C2D92C",
            featured: true,
            badge: "Most Popular"
        },
        {
            id: 'business-consultation',
            title: "Need Business Consultation?",
            subtitle: "Transform Your Business",
            description: "Comprehensive business audit with custom roadmap and guaranteed ROI improvement strategies.",
            benefits: [
                "Complete business audit & analysis",
                "Custom growth roadmap delivery",
                "ROI improvement guarantee"
            ],
            cta: "Get Consultation",
            icon: FaChartLine,
            gradient: "from-[#113F64] to-[#C2D92C]",
            accentColor: "#113F64",
            featured: false
        }
    ];

    const trustSignals = [
        { icon: FaStar, value: "500+", label: "Happy Clients" },
        { icon: FaClock, value: "48hrs", label: "Quick Start" },
        { icon: FaRocket, value: "95%", label: "Success Rate" }
    ];

    return (
        <div className='w-full bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 overflow-hidden'>
            {/* Main Content Container */}
            <div className='max-w-7xl mx-auto px-4 md:px-6'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-6 py-3 bg-gradient-to-r from-[#34969E]/10 to-[#C2D92C]/10 rounded-full border border-[#34969E]/20 mb-6'>
                        <span className='text-[#34969E] font-semibold text-lg' style={{ fontFamily: 'Lato' }}>
                            🚀 Choose Your Success Path
                        </span>
                    </div>
                    
                    <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight' style={{ color: '#113F64', fontFamily: 'Lato' }}>
                        Ready to Transform Your Business?
                        <span className='block text-[#34969E]'>We Have 3 Ways to Help</span>
                    </h2>
                    
                    <p className='text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed' style={{ fontFamily: 'Raleway' }}>
                        From expert guidance to dedicated teams, choose the path that accelerates your growth and drives measurable results.
                    </p>
                </div>

                {/* Pathways Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
                    {pathwayData.map((pathway, index) => {
                        const IconComponent = pathway.icon;
                        return (
                            <div
                                key={pathway.id}
                                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl ${
                                    pathway.featured 
                                        ? 'transform scale-105 lg:scale-110 hover:scale-110 lg:hover:scale-115 z-10' 
                                        : 'hover:-translate-y-3'
                                } ${pathway.featured ? 'ring-4 ring-[#C2D92C] ring-opacity-50' : ''}`}
                            >
                                {/* Featured Badge */}
                                {pathway.featured && (
                                    <div className='absolute top-6 right-6 z-20'>
                                        <div className='bg-[#C2D92C] text-[#113F64] px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse'>
                                            <span className='flex items-center gap-2'>
                                                <FaStar className='w-3 h-3' />
                                                {pathway.badge}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${pathway.gradient} opacity-95 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                
                                {/* Geometric Pattern Overlay */}
                                <div 
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 25% 25%, ${pathway.accentColor} 2px, transparent 2px), 
                                                         radial-gradient(circle at 75% 75%, white 3px, transparent 3px)`,
                                        backgroundSize: '60px 60px, 80px 80px'
                                    }}
                                ></div>
                                
                                {/* Card Content */}
                                <div className='relative z-10 p-8 lg:p-10 h-full text-white min-h-[500px] flex flex-col justify-between'>
                                    {/* Header */}
                                    <div>
                                        <div className='mb-6'>
                                            <div 
                                                className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xl ${
                                                    pathway.featured ? 'bg-white text-[#34969E]' : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
                                                }`}
                                            >
                                                <IconComponent />
                                            </div>
                                        </div>
                                        
                                        <div className='mb-2'>
                                            <h3 className='text-2xl lg:text-3xl font-bold mb-2' style={{ fontFamily: 'Lato' }}>
                                                {pathway.title}
                                            </h3>
                                            <div className={`text-lg font-semibold mb-4 ${pathway.featured ? 'text-[#C2D92C]' : 'text-white/80'}`} style={{ fontFamily: 'Lato' }}>
                                                {pathway.subtitle}
                                            </div>
                                        </div>
                                        
                                        <p className='text-white/90 leading-relaxed mb-6 text-lg' style={{ fontFamily: 'Raleway' }}>
                                            {pathway.description}
                                        </p>
                                        
                                        {/* Benefits List */}
                                        <div className='space-y-3 mb-8'>
                                            {pathway.benefits.map((benefit, idx) => (
                                                <div key={idx} className='flex items-start space-x-3'>
                                                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1 ${
                                                        pathway.featured ? 'bg-[#C2D92C]' : 'bg-white/20'
                                                    }`}>
                                                        <FaCheck className={`w-3 h-3 ${pathway.featured ? 'text-[#113F64]' : 'text-white'}`} />
                                                    </div>
                                                    <span className='text-white/90 leading-relaxed' style={{ fontFamily: 'Raleway' }}>
                                                        {benefit}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* CTA Button */}
                                    <div>
                                        <button 
                                            className={`w-full px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-xl ${
                                                pathway.featured 
                                                    ? 'bg-white text-[#34969E] hover:bg-[#C2D92C] hover:text-[#113F64]' 
                                                    : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-[#113F64]'
                                            }`}
                                            style={{ fontFamily: 'Lato' }}
                                        >
                                            <span className='flex items-center justify-center space-x-3'>
                                                <span>{pathway.cta}</span>
                                                <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Signals */}
                <div className='bg-white rounded-3xl p-8 shadow-lg border border-gray-100'>
                    <div className='text-center mb-6'>
                        <p className='text-gray-600 text-lg' style={{ fontFamily: 'Raleway' }}>
                            Trusted by businesses worldwide
                        </p>
                    </div>
                    
                    <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16'>
                        {trustSignals.map((signal, index) => {
                            const IconComponent = signal.icon;
                            return (
                                <div key={index} className='text-center group'>
                                    <div className='flex items-center justify-center space-x-3'>
                                        <div className='w-12 h-12 bg-gradient-to-r from-[#34969E] to-[#C2D92C] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                            <IconComponent className='w-6 h-6 text-white' />
                                        </div>
                                        <div className='text-left'>
                                            <div className='text-3xl font-bold text-[#113F64]' style={{ fontFamily: 'Lato' }}>
                                                {signal.value}
                                            </div>
                                            <div className='text-gray-600 text-sm' style={{ fontFamily: 'Raleway' }}>
                                                {signal.label}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Additional CTA Banner */}
                <div className='mt-16 text-center'>
                    <div className='inline-block px-8 py-4 bg-gradient-to-r from-[#113F64] to-[#34969E] rounded-full text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer'>
                        <span className='text-lg font-semibold' style={{ fontFamily: 'Lato' }}>
                            🎯 Not sure which path is right for you? Let's talk!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TalkToExpert;

export default TalkToExpert;