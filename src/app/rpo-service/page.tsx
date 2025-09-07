"use client"
import { useState, useEffect, useRef } from "react";
import {
    BgWithListComponent,
    ContactUsComponent,
    FAQSection,
    IndustriesSection,
    ServicePartners,
    CommonHeading,
    ThreeCardSlider
} from "@/components";
import {
    rpoBenefitsData,
    rpoEngagementModelsData,
    rpoIndustriesData,
    rpoPartnersData,
    rpoProcessData,
    rpoServicesData,
    serviceRPOFAQ
} from "@/utils/constants";

// --------------------------------------------------------------

const RPOServiceBanner = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            <video
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
            >
                <source src="/ITConsultingBg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
            
            {/* Floating geometric elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 border border-primary-green-color/30 rotate-45 float-animation"></div>
                <div className="absolute bottom-32 right-16 w-16 h-16 border border-secondry/40 rounded-full float-animation" style={{animationDelay: '-2s'}}></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary-green-color/20 rotate-12 float-animation" style={{animationDelay: '-4s'}}></div>
            </div>
            
            <div className="relative z-10 text-center text-white max-w-4xl px-4 md:px-6">
                <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-primary-green-color/20 backdrop-blur-sm rounded-full border border-primary-green-color/30 mb-4">
                        <span className="text-primary-green-color font-semibold text-sm">🚀 Transform Your Hiring Process</span>
                    </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
                    RPO That Builds Your Team
                    <span className="block text-primary-green-color">Lightning Fast</span>
                </h1>
                
                <p className="text-base md:text-lg lg:text-xl font-light mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                    Streamlined recruitment solutions designed for growth-oriented businesses. 
                    Our Recruitment Process Outsourcing (RPO) model helps you hire 
                    smarter and faster, while reducing costs by up to 40%.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="modern-btn group relative overflow-hidden">
                        <span className="relative z-10">Request Free RPO Consultation</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-green-color to-secondry opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    
                    <button className="px-6 py-3 border-2 border-white/30 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                        <span className="flex items-center gap-2">
                            <span>Watch Demo</span>
                            <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent group-hover:translate-x-1 transition-transform duration-300"></div>
                        </span>
                    </button>
                </div>
                
                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Modern Interactive Benefits Cards
const ModernBenefitsSection = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const benefits = [
        {
            icon: "⚡",
            title: "Flexible hiring",
            description: "Adapt to changing business needs with scalable recruitment solutions",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: "🚀",
            title: "Faster hires", 
            description: "Reduce time-to-hire by 60% with our streamlined processes",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: "⭐",
            title: "Top talent",
            description: "Access pre-vetted candidates from our extensive talent network",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: "💰",
            title: "Cost control",
            description: "Lower recruitment costs while maintaining quality standards",
            gradient: "from-orange-500 to-red-500"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="w-full max-w-[1450px] flex flex-col items-center gap-8 md:gap-12 px-4 md:px-6">
            <CommonHeading
                title="Recruitment Process Outsourcing (RPO) for Your Talent-Pool"
                desc="Recruitment delays cost businesses more than time. It holds back growth, revenue, and innovation. Through professional RPO Services, you can outsource talent hiring responsibility to expert recruiters like Protingent who act as an extension of your in-house HR team."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full mt-8">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className={`group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer float-animation hover-lift ${
                            isVisible ? 'animate-in' : 'opacity-0'
                        }`}
                        style={{ 
                            animationDelay: `${index * 0.2}s`,
                            animationFillMode: 'forwards'
                        }}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Glass morphism background */}
                        <div className="glass-card p-6 md:p-8 h-full relative z-10">
                            {/* Gradient border effect */}
                            <div className="gradient-border absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Icon with pulse effect */}
                            <div className="relative mb-6">
                                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="filter drop-shadow-sm">{benefit.icon}</span>
                                </div>
                                {hoveredCard === index && (
                                    <div className="absolute inset-0 rounded-2xl animate-pulse" style={{
                                        background: `linear-gradient(135deg, rgba(52,150,157,0.2), rgba(203,220,19,0.2))`,
                                        animation: 'glowPulse 2s ease-in-out infinite'
                                    }}></div>
                                )}
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 group-hover:text-secondry transition-colors duration-300">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                {benefit.description}
                            </p>
                            
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondry/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        </div>
                        
                        {/* Background decoration */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary-green-color/20 to-secondry/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function RPOService() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-16 md:gap-24 lg:gap-32 pb-12 md:pb-20">
            <RPOServiceBanner />
            <ModernBenefitsSection />
            
            <ThreeCardSlider
                title="Our Core RPO Services Offering"
                desc="We outsource the talent you need on time with our pre-vetted candidates. Reliable hiring experts offering tailored RPO services align with your business goals:"
                cardData={rpoServicesData}
            />

            <ThreeCardSlider
                title="RPO Service Delivery Process"
                desc="Protingent follows the RPO process, designed to deliver the best talent pool hiring results quickly, flexibly, and aligned with objectives."
                cardData={rpoProcessData}
            />

            <BgWithListComponent
                title="Highly Skilled Team for Business Expansions"
                desc="Right recruitment means matching the right talent with the team to work efficiently and deliver actionable results. RPO is taking forward more from reactive hiring to strategic talent-pool acquisition to build success."
                bg="/img/bgListImgs/businessBenefits.png"
                bgList="/img/bgListImgs/businessBenefits2.png"
                listData={rpoBenefitsData}
            />

            <ThreeCardSlider
                title="RPO Engagement Models We Offer"
                desc="Protingent offers flexible RPO models tailored to organizational growth stage, talent needs, and operational scalability."
                cardData={rpoEngagementModelsData}
            />

            <IndustriesSection
                title="Industries Where We Serve"
                desc="We provide tailored RPO solutions across diverse industries, helping businesses hire top talent faster, reduce costs, and scale efficiently. Our expertise adapts to your hiring needs, whether you're in tech, healthcare, manufacturing, or beyond."
                cardData={rpoIndustriesData}
            />

            <ServicePartners
                title="We Are Not Another RPO Vendor, But A Trusted Talent Growth Partner"
                desc="We work for excellence with the top-tier talent pool. Our pre-vetted and new candidates are highly skilled to evolve and expand your organization with precision. Our recruiters blend agility, domain expertise, and a tech-enabled approach to build talent pipelines that work efficiently."
                cardList={rpoPartnersData}
            />

            <ContactUsComponent />

            <FAQSection
                title="Frequently Asked Questions"
                desc="Get answers to common questions about our RPO services and how Protingent can help accelerate your hiring process while maintaining quality and reducing costs."
                FAQList={serviceRPOFAQ}
            />
        </div>
    );
}