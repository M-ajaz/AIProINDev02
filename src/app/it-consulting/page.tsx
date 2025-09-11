"use client"
import React from "react";
import {
    GeometricBackground
} from "@/components";
import { 
    FaLaptopCode,
    FaCloud, 
    FaShieldAlt, 
    FaCogs, 
    FaRocket,
    FaUsers,
    FaArrowRight,
    FaCheckCircle,
    FaEye,
    FaThumbsUp,
    FaChartLine,
    FaHandshake
} from 'react-icons/fa';

// Hero Section
const ITConsultingHeroSection = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1581092795442-5ae5e5f48a5b')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#113F64]/90 via-[#34969E]/80 to-[#113F64]/90"></div>
            
            <div className="relative z-10 text-center text-white max-w-5xl px-4 md:px-6">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                    IT Consulting Services
                    <span className="block text-[#C2D92C]">Digital Transformation Experts</span>
                </h1>
                
                <p className="text-base md:text-lg lg:text-xl font-light mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
                    Accelerate your digital transformation with strategic IT consulting, cloud solutions, and technology expertise 
                    that drive business innovation and competitive advantage.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-8 py-4 bg-[#C2D92C] text-[#113F64] font-bold rounded-lg hover:bg-[#34969E] hover:text-white transition-all duration-300">
                        Schedule IT Consultation
                    </button>
                    
                    <button className="px-6 py-3 border-2 border-white/30 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                        <span className="flex items-center gap-2">
                            <span>View Technology Stack</span>
                            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

// Services Section
const ITServicesSection = () => {
    const services = [
        {
            title: "Cloud Migration & Strategy",
            description: "Seamlessly migrate your infrastructure to the cloud with strategic planning and implementation that ensures scalability, security, and cost optimization.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
            icon: FaCloud,
            features: ["AWS/Azure Migration", "Cloud Architecture", "Cost Optimization"]
        },
        {
            title: "Cybersecurity & Compliance",
            description: "Protect your digital assets with comprehensive security solutions that ensure compliance and safeguard against evolving cyber threats.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
            icon: FaShieldAlt,
            features: ["Security Audits", "Compliance Management", "Threat Protection"]
        },
        {
            title: "Digital Transformation",
            description: "Transform your business processes with cutting-edge technology solutions that improve efficiency and drive innovation.",
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0",
            icon: FaCogs,
            features: ["Process Automation", "System Integration", "Digital Strategy"]
        },
        {
            title: "Custom Software Development",
            description: "Build scalable, secure, and high-performance applications tailored to your specific business requirements and objectives.",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
            icon: FaLaptopCode,
            features: ["Web Applications", "Mobile Apps", "API Development"]
        }
    ];

    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#113F64' }}>
                        Comprehensive IT Solutions
                        <span className="block text-[#34969E]">That Drive Business Growth</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        From strategic planning to implementation, our IT consulting services help businesses leverage technology 
                        to achieve operational excellence and sustainable growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2"
                            >
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url('${service.image}')`,
                                    }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#113F64]/95 via-[#34969E]/85 to-[#113F64]/95"></div>
                                
                                <div className="relative z-10 p-8 lg:p-10 h-full text-white min-h-[350px] flex flex-col justify-between">
                                    <div>
                                        <div className="mb-6">
                                            <div 
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                                                style={{ backgroundColor: '#C2D92C' }}
                                            >
                                                <IconComponent className="text-[#113F64]" />
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-xl lg:text-2xl font-bold mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed mb-6 text-lg">
                                            {service.description}
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {service.features.map((feature, idx) => (
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

// Benefits Section
const BenefitsSection = () => {
    const benefits = [
        {
            icon: FaRocket,
            title: "Accelerated Growth",
            description: "Technology solutions that scale with your business and drive rapid growth."
        },
        {
            icon: FaShieldAlt,
            title: "Enhanced Security",
            description: "Robust cybersecurity measures protecting your critical business data."
        },
        {
            icon: FaChartLine,
            title: "Improved Efficiency",
            description: "Streamlined processes and automation that boost operational efficiency."
        },
        {
            icon: FaUsers,
            title: "Expert Team",
            description: "Access to experienced IT professionals and cutting-edge expertise."
        }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#113F64' }}>
                        Why Choose Protingent IT Consulting
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Partner with us to leverage technology as a strategic advantage for your business success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
                            >
                                <div 
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto transition-all duration-300 group-hover:scale-110 shadow-lg"
                                    style={{ backgroundColor: '#34969E' }}
                                >
                                    <IconComponent className="text-white" />
                                </div>
                                
                                <h3 className="text-xl font-bold mb-4" style={{ color: '#113F64' }}>
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// CTA Section
const ITConsultingCTASection = () => {
    return (
        <div className="relative w-full py-16 md:py-24 overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43')`,
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#113F64]/95 via-[#34969E]/90 to-[#C2D92C]/85"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Ready to Transform Your Business
                    <span className="block text-[#C2D92C]">with Technology?</span>
                </h2>
                <p className="text-xl leading-relaxed mb-12 max-w-4xl mx-auto opacity-90">
                    Let's discuss how our IT consulting services can help you leverage technology for competitive advantage 
                    and sustainable business growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="px-12 py-4 bg-[#C2D92C] text-[#113F64] font-bold text-lg rounded-full hover:scale-105 transform transition-all shadow-2xl">
                        <span className="flex items-center gap-3">
                            <FaHandshake />
                            Start Your Digital Transformation
                        </span>
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
                        <div>Free Assessment</div>
                    </div>
                    <div className="text-center">
                        <FaEye className="text-2xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Transparent Process</div>
                    </div>
                    <div className="text-center">
                        <FaThumbsUp className="text-2xl text-[#C2D92C] mb-2 mx-auto" />
                        <div>Proven Results</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main IT Consulting Page Component
export default function ITConsultingService() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <ITConsultingHeroSection />
            <ITServicesSection />
            <BenefitsSection />
            <ITConsultingCTASection />
        </div>
    );
}