"use client"
import { useState, useEffect, useRef } from "react";
import {
    ContactUsComponent,
    FAQSection,
    IndustriesSection,
    CommonHeading
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
import { 
    FaUsersCog, 
    FaChartLine, 
    FaHandshake, 
    FaCogs, 
    FaRocket,
    FaUsers,
    FaLightbulb,
    FaDollarSign,
    FaArrowLeft,
    FaArrowRight,
    FaCheckCircle,
    FaGraduationCap,
    FaSearch,
    FaClipboardCheck,
    FaCalendarAlt,
    FaFileContract,
    FaChartBar
} from 'react-icons/fa';

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

// Brand-Focused Benefits Section with Solid Icons
const BrandBenefitsSection = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const benefits = [
        {
            icon: FaUsers,
            title: "Flexible hiring",
            description: "Adapt to changing business needs with scalable recruitment solutions",
            accentColor: "#34969D"
        },
        {
            icon: FaRocket,
            title: "Faster hires", 
            description: "Reduce time-to-hire by 60% with our streamlined processes",
            accentColor: "#CBDC13"
        },
        {
            icon: FaGraduationCap,
            title: "Top talent",
            description: "Access pre-vetted candidates from our extensive talent network",
            accentColor: "#34969D"
        },
        {
            icon: FaDollarSign,
            title: "Cost control",
            description: "Lower recruitment costs while maintaining quality standards",
            accentColor: "#CBDC13"
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
                {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer bg-white border-2 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                            style={{ 
                                animationDelay: `${index * 0.1}s`,
                                borderColor: benefit.accentColor,
                                transitionDelay: `${index * 0.1}s`
                            }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Solid background card */}
                            <div className="p-6 md:p-8 h-full relative z-10">
                                {/* Solid Icon with brand colors */}
                                <div className="relative mb-6">
                                    <div 
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                        style={{ 
                                            backgroundColor: benefit.accentColor,
                                            boxShadow: hoveredCard === index ? `0 10px 30px ${benefit.accentColor}40` : 'none'
                                        }}
                                    >
                                        <IconComponent className="text-white" />
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300" style={{color: '#012D50'}}>
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    {benefit.description}
                                </p>
                                
                                {/* Accent line */}
                                <div 
                                    className="absolute bottom-0 left-0 h-1 w-full transition-all duration-500 group-hover:h-2"
                                    style={{ backgroundColor: benefit.accentColor }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// Modern Case Study Style Slider Component
const ModernServiceSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const services = [
        {
            id: 1,
            number: "01",
            title: "Full-Cycle RPO",
            description: "End-to-end recruitment management, from sourcing and screening to final offer and onboarding, is fully handled by our dedicated hiring specialists. Experience complete recruitment transformation with measurable ROI.",
            image: "https://customer-assets.emergentagent.com/job_cohesive-expansion/artifacts/ugjl6qe9_Background.png",
            features: ["360° Recruitment", "Dedicated Specialists", "Complete Onboarding"],
            link: "#full-cycle"
        },
        {
            id: 2,
            number: "02", 
            title: "Project-Based RPO",
            description: "Flexible RPO engagement for high-volume or urgent hiring needs, ideal for new project launches, seasonal spikes, or expansions. Scale your team rapidly without compromising quality.",
            image: "https://customer-assets.emergentagent.com/job_cohesive-expansion/artifacts/ugjl6qe9_Background.png",
            features: ["Rapid Scaling", "Flexible Engagement", "Quality Assurance"],
            link: "#project-based"
        },
        {
            id: 3,
            number: "03",
            title: "Onsite/Offsite Recruiters",
            description: "Deploy skilled recruiters at your office or remotely, fully aligned with your internal processes, brand, and hiring targets. Seamless integration with your existing team.",
            image: "https://customer-assets.emergentagent.com/job_cohesive-expansion/artifacts/ugjl6qe9_Background.png",
            features: ["Skilled Recruiters", "Brand Alignment", "Seamless Integration"],
            link: "#recruiters"
        },
        {
            id: 4,
            number: "04",
            title: "Talent Sourcing & Screening",
            description: "Access a rich talent pipeline with targeted sourcing, resume screening, and candidate shortlisting done with speed and precision. Quality candidates, delivered faster.",
            image: "https://customer-assets.emergentagent.com/job_cohesive-expansion/artifacts/ugjl6qe9_Background.png",
            features: ["Rich Talent Pipeline", "Precision Screening", "Speed & Quality"],
            link: "#sourcing"
        },
        {
            id: 5,
            number: "05",
            title: "Employer Branding Support",
            description: "Position your company as an employer of choice with branding strategies that attract high-quality candidates and reduce dropouts. Build your talent magnet.",
            image: "https://customer-assets.emergentagent.com/job_cohesive-expansion/artifacts/ugjl6qe9_Background.png",
            features: ["Employer Branding", "Candidate Attraction", "Dropout Reduction"],
            link: "#branding"
        },
        {
            id: 6,
            number: "06",
            title: "Analytics & Hiring Insights",
            description: "Use real-time dashboards and data-driven insights to optimize hiring workflows, track performance, and improve recruitment ROI. Make informed decisions.",
            image: "https://customer-assets.emergentagent.com/job_cohesive-expansion/artifacts/ugjl6qe9_Background.png",
            features: ["Real-time Analytics", "Performance Tracking", "ROI Optimization"],
            link: "#analytics"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
        setProgress(0);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
        setProgress(0);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setProgress(0);
    };

    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        nextSlide();
                        return 0;
                    }
                    return prev + 2; // 2% every 100ms = 5 seconds total
                });
            }, 100);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPlaying, currentSlide]);

    const handleMouseEnter = () => setIsPlaying(false);
    const handleMouseLeave = () => setIsPlaying(true);

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
            <div className="max-w-[1450px] mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Our Core RPO Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive recruitment solutions tailored to your business needs
                    </p>
                </div>

                <div 
                    className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="flex flex-col lg:flex-row min-h-[600px]">
                        {/* Left side - Image */}
                        <div className="lg:w-3/5 relative overflow-hidden">
                            <div className="relative h-64 lg:h-full">
                                <img
                                    src={services[currentSlide].image}
                                    alt={services[currentSlide].title}
                                    className="w-full h-full object-cover transition-transform duration-700 scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondry/70"></div>
                                
                                {/* Floating elements */}
                                <div className="absolute top-8 left-8">
                                    <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <span className="text-white font-bold text-xl">{services[currentSlide].number}</span>
                                    </div>
                                </div>
                                
                                {/* Navigation arrows */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                                >
                                    <div className="w-0 h-0 border-r-[8px] border-r-white border-y-[6px] border-y-transparent group-hover:-translate-x-1 transition-transform duration-300"></div>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                                >
                                    <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent group-hover:translate-x-1 transition-transform duration-300"></div>
                                </button>
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                            <div className="mb-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-6xl font-bold text-primary/20">{services[currentSlide].number}</span>
                                    <div className="h-1 flex-1 bg-gradient-to-r from-primary to-secondry rounded-full relative">
                                        <div 
                                            className="h-full bg-primary-green-color rounded-full transition-all duration-100"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight">
                                    {services[currentSlide].title}
                                </h3>
                                
                                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                    {services[currentSlide].description}
                                </p>
                                
                                {/* Features */}
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {services[currentSlide].features.map((feature, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-primary-green-color/10 text-primary rounded-full text-sm font-medium border border-primary-green-color/20"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                                
                                <button className="modern-btn group">
                                    <span className="relative z-10">Learn More</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-green-color to-secondry opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation dots */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                        {services.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'bg-primary-green-color w-8' 
                                        : 'bg-white/50 hover:bg-white/70'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Modern Interactive Timeline Component with Solid Icons
const InteractiveTimeline = () => {
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(rpoProcessData.length).fill(false));
    const timelineRef = useRef<HTMLDivElement>(null);

    const timelineIcons = [
        FaSearch,           // Discovery & Requirement Mapping
        FaCogs,             // Custom RPO Strategy  
        FaUsersCog,         // Talent Sourcing & Employer Branding
        FaClipboardCheck,   // Screening & Assessment
        FaCalendarAlt,      // Interview Coordination & Candidate Experience
        FaFileContract,     // Offer Management & Onboarding
        FaChartBar          // Performance Monitoring & Reporting
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleSteps(prev => {
                            const newState = [...prev];
                            newState[index] = true;
                            return newState;
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        const stepElements = timelineRef.current?.querySelectorAll('.timeline-step');
        stepElements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
            <div className="max-w-[1450px] mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        RPO Service Delivery Process
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our streamlined 7-step process designed to deliver exceptional results
                    </p>
                </div>

                <div ref={timelineRef} className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2"></div>
                    <div 
                        className="timeline-progress absolute left-4 md:left-1/2 top-0 w-1 transform md:-translate-x-1/2 z-10"
                        style={{
                            height: `${(visibleSteps.filter(Boolean).length / rpoProcessData.length) * 100}%`
                        }}
                    ></div>

                    <div className="space-y-12 md:space-y-16">
                        {rpoProcessData.map((step, index) => {
                            const IconComponent = timelineIcons[index];
                            return (
                                <div
                                    key={index}
                                    data-index={index}
                                    className={`timeline-step relative ${visibleSteps[index] ? 'animate-in' : ''}`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}>
                                        {/* Step number with icon */}
                                        <div className="relative z-20 flex-shrink-0 flex flex-col items-center">
                                            {/* Icon */}
                                            <div 
                                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 hover:scale-110 hover:rotate-6"
                                                style={{ 
                                                    backgroundColor: index % 2 === 0 ? '#34969D' : '#CBDC13',
                                                    boxShadow: visibleSteps[index] ? `0 8px 25px ${index % 2 === 0 ? '#34969D' : '#CBDC13'}40` : 'none'
                                                }}
                                            >
                                                <IconComponent className="text-white text-lg" />
                                            </div>
                                            
                                            {/* Step number */}
                                            <div 
                                                className={`w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center font-bold text-white cursor-pointer transition-all duration-300 ${
                                                    activeStep === index 
                                                        ? 'scale-110' 
                                                        : 'hover:scale-105'
                                                }`}
                                                style={{
                                                    backgroundColor: activeStep === index ? '#CBDC13' : '#012D50'
                                                }}
                                                onClick={() => setActiveStep(activeStep === index ? null : index)}
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </div>
                                            {visibleSteps[index] && (
                                                <div 
                                                    className="absolute inset-0 rounded-full animate-pulse"
                                                    style={{ 
                                                        backgroundColor: index % 2 === 0 ? '#34969D30' : '#CBDC1330'
                                                    }}
                                                ></div>
                                            )}
                                        </div>

                                    {/* Step content */}
                                    <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div 
                                            className="glass-card p-6 md:p-8 rounded-2xl cursor-pointer hover-lift group"
                                            onClick={() => setActiveStep(activeStep === index ? null : index)}
                                        >
                                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-secondry transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {step.desc}
                                            </p>
                                            
                                            {/* Expandable details */}
                                            <div className={`overflow-hidden transition-all duration-500 ${
                                                activeStep === index ? 'max-h-96 mt-6' : 'max-h-0'
                                            }`}>
                                                <div className="border-t border-gray-200 pt-4">
                                                    <h4 className="font-semibold text-primary mb-2">Key Benefits:</h4>
                                                    <ul className="text-gray-600 space-y-1">
                                                        <li>• Streamlined process for maximum efficiency</li>
                                                        <li>• Real-time progress tracking and updates</li>
                                                        <li>• Quality assurance at every step</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            {/* Hover indicator */}
                                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className={`w-6 h-6 border-2 border-primary rounded-full flex items-center justify-center transition-transform duration-300 ${
                                                    activeStep === index ? 'rotate-45' : ''
                                                }`}>
                                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );})
                    </div>
                </div>
            </div>
        </div>
    );
};

// Premium Interactive Slider - Highly Skilled Team Section
const PremiumInteractiveSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const skillCards = [
        {
            icon: FaChartLine,
            title: "Faster Time-to-Hire",
            description: "Streamline hiring with pre-vetted candidates to fill positions quickly with top-tier skills and domain expertise.",
            highlights: ["60% Faster Hiring", "Pre-Vetted Talent", "Quality Assurance"],
            ctaText: "Accelerate Hiring",
            accentColor: "#34969D",
            bgColor: "#012D50"
        },
        {
            icon: FaUsersCog,
            title: "Access to Quality Talent",
            description: "Leveraging organizations with skilled applicants and niche sourcing expertise to attract result-oriented professionals.",
            highlights: ["Global Talent Pool", "Niche Expertise", "Quality Screening"],
            ctaText: "Find Top Talent",
            accentColor: "#CBDC13",
            bgColor: "#012D50"
        },
        {
            icon: FaDollarSign,
            title: "Cost Efficiency",
            description: "Optimized workflows, reduced dependency on agencies, and minimized vacancy gaps for cost-efficient hiring.",
            highlights: ["40% Cost Reduction", "Streamlined Process", "ROI Focused"],
            ctaText: "Reduce Costs",
            accentColor: "#34969D",
            bgColor: "#012D50"
        },
        {
            icon: FaRocket,
            title: "Scalable Recruitment Support",
            description: "Maximizing capable hirings based on dedicated project needs and current market standards.",
            highlights: ["Flexible Scaling", "Project Based", "Market Aligned"],
            ctaText: "Scale Teams",
            accentColor: "#CBDC13",
            bgColor: "#012D50"
        },
        {
            icon: FaLightbulb,
            title: "Improved Employer Branding",
            description: "Build a strong brand image that attracts the right kind of talent consistently and improves retention.",
            highlights: ["Brand Enhancement", "Talent Magnet", "Higher Retention"],
            ctaText: "Build Brand",
            accentColor: "#34969D",
            bgColor: "#012D50"
        },
        {
            icon: FaHandshake,
            title: "Enhanced Candidate Experience",
            description: "Deliver professional, timely, and engaging recruitment journeys reducing drop-offs and improving acceptance rates.",
            highlights: ["Professional Journey", "Higher Acceptance", "Better Experience"],
            ctaText: "Improve Experience",
            accentColor: "#CBDC13",
            bgColor: "#012D50"
        }
    ];

    const slidesToShow = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
    const maxSlide = skillCards.length - slidesToShow;

    const nextSlide = () => {
        setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
        setProgress(0);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
        setProgress(0);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(Math.min(index, maxSlide));
        setProgress(0);
    };

    useEffect(() => {
        if (isAutoPlay) {
            intervalRef.current = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        nextSlide();
                        return 0;
                    }
                    return prev + 2.5; // 4 second intervals
                });
            }, 100);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isAutoPlay, currentSlide]);

    return (
        <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(170deg, #F8FAFB 0%, white 50%, #F8FAFB 100%)' }}>
            {/* Geometric pattern overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, #34969D 2px, transparent 2px), radial-gradient(circle at 80% 50%, #CBDC13 2px, transparent 2px)`,
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-[1450px] mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#012D50' }}>
                        Highly Skilled Team for
                        <span className="block" style={{ color: '#34969D' }}>Business Expansions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Right recruitment means matching the right talent with the team to work efficiently and deliver actionable results. 
                        RPO is taking forward more from reactive hiring to strategic talent-pool acquisition to build success.
                    </p>

                    {/* Progress bar */}
                    <div className="w-32 h-2 mx-auto mt-8 rounded-full overflow-hidden" style={{ backgroundColor: '#e5e7eb' }}>
                        <div 
                            className="h-full rounded-full transition-all duration-100"
                            style={{ 
                                width: `${progress}%`,
                                backgroundColor: '#CBDC13'
                            }}
                        ></div>
                    </div>
                </div>

                {/* Slider Container */}
                <div 
                    className="relative"
                    onMouseEnter={() => setIsAutoPlay(false)}
                    onMouseLeave={() => setIsAutoPlay(true)}
                >
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{ 
                            backgroundColor: '#34969D',
                            boxShadow: '0 10px 30px rgba(52, 150, 157, 0.3)'
                        }}
                    >
                        <FaArrowLeft className="text-white" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{ 
                            backgroundColor: '#34969D',
                            boxShadow: '0 10px 30px rgba(52, 150, 157, 0.3)'
                        }}
                    >
                        <FaArrowRight className="text-white" />
                    </button>

                    {/* Cards Container */}
                    <div className="overflow-hidden mx-16">
                        <div 
                            className="flex transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`
                            }}
                        >
                            {skillCards.map((card, index) => {
                                const IconComponent = card.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 px-4"
                                        style={{ width: `${100 / slidesToShow}%` }}
                                    >
                                        <div
                                            className="service-card group relative overflow-hidden rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-3 hover:scale-105 cursor-pointer"
                                            style={{
                                                backgroundColor: card.bgColor,
                                                border: `2px solid ${card.accentColor}`,
                                                boxShadow: '0 10px 30px rgba(1, 45, 80, 0.1)'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = '#CBDC13';
                                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(1, 45, 80, 0.3)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = card.accentColor;
                                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(1, 45, 80, 0.1)';
                                            }}
                                        >
                                            {/* Accent decoration */}
                                            <div 
                                                className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                                                style={{
                                                    background: `linear-gradient(135deg, ${card.accentColor}, #CBDC13)`,
                                                    transform: 'translate(50%, -50%)'
                                                }}
                                            ></div>

                                            {/* Icon */}
                                            <div 
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                                                style={{ backgroundColor: card.accentColor }}
                                            >
                                                <IconComponent className="text-white text-2xl" />
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-opacity-90 transition-all duration-300">
                                                {card.title}
                                            </h3>

                                            <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                                                {card.description}
                                            </p>

                                            {/* Highlights */}
                                            <div className="space-y-2 mb-6">
                                                {card.highlights.map((highlight, idx) => (
                                                    <div key={idx} className="flex items-center text-sm">
                                                        <div 
                                                            className="w-2 h-2 rounded-full mr-3"
                                                            style={{ backgroundColor: card.accentColor }}
                                                        ></div>
                                                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                                            {highlight}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA Button */}
                                            <button 
                                                className="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                                                style={{
                                                    background: `linear-gradient(135deg, ${card.accentColor}, #CBDC13)`,
                                                    color: '#012D50'
                                                }}
                                            >
                                                {card.ctaText}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'w-8 scale-110' 
                                        : 'hover:scale-110'
                                }`}
                                style={{
                                    backgroundColor: index === currentSlide ? '#CBDC13' : '#34969D'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Powerful Partner Section - Maximum Visual Impact
const PowerfulPartnerSection = () => {
    const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    const impactData = [
        {
            number: "25+",
            title: "Years of Excellence",
            description: "Deep industry experience in engineering and tech hiring, knowing niche talent better than anyone else.",
            icon: FaGraduationCap,
            accentColor: "#34969D"
        },
        {
            number: "60%",
            title: "Faster Hiring",
            description: "We shorten time-to-hire without sacrificing quality by refining our sourcing frameworks.",
            icon: FaRocket,
            accentColor: "#CBDC13"
        },
        {
            number: "100%",
            title: "Transparent Process",
            description: "Complete visibility in hiring with regular updates, dedicated account managers, and full transparency.",
            icon: FaCheckCircle,
            accentColor: "#34969D"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.impact-card');
                        const newVisibleCards = Array(cards.length).fill(false);
                        
                        cards.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleCards(prev => {
                                    const updated = [...prev];
                                    updated[index] = true;
                                    return updated;
                                });
                            }, index * 200);
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-20 overflow-hidden">
            {/* Dynamic gradient background */}
            <div 
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(135deg, #012D50 0%, #34969D 35%, #012D50 70%, #CBDC13 100%)',
                    backgroundSize: '400% 400%',
                    animation: 'gradient-shift 15s ease infinite'
                }}
            >
                {/* Floating shapes */}
                <div className="floating-shapes">
                    <div className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-bounce" style={{ animationDelay: '0s' }}>
                        <div className="w-full h-full border-2 rotate-45" style={{ borderColor: '#CBDC13' }}></div>
                    </div>
                    <div className="absolute bottom-32 right-20 w-12 h-12 rounded-full opacity-30 animate-pulse" style={{ backgroundColor: '#CBDC13', animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/4 w-8 h-8 opacity-25 animate-spin" style={{ backgroundColor: '#34969D', animationDelay: '2s' }}></div>
                    <div className="absolute bottom-20 left-1/3 w-6 h-6 rounded-full opacity-40 animate-bounce" style={{ backgroundColor: '#CBDC13', animationDelay: '0.5s' }}></div>
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-[1450px]">
                {/* Powerful headline treatment */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white text-center leading-tight mb-8" style={{ textShadow: '0 4px 20px rgba(1, 45, 80, 0.3)' }}>
                        <span className="block">We Are Not Another</span>
                        <span className="block animate-pulse" style={{ color: '#CBDC13', textShadow: '0 0 30px rgba(203, 220, 19, 0.5)' }}>
                            RPO Vendor
                        </span>
                        <span className="block mt-4">But A Trusted</span>
                        <span className="block bg-gradient-to-r from-[#34969D] to-[#CBDC13] bg-clip-text text-transparent font-black">
                            Talent Growth Partner
                        </span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
                        We work for excellence with the top-tier talent pool. Our pre-vetted candidates are highly skilled 
                        to evolve and expand your organization with precision and measurable results.
                    </p>
                </div>

                {/* Impact statements grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {impactData.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={index}
                                className={`impact-card group relative bg-white border-l-8 p-8 rounded-2xl transition-all duration-700 transform ${
                                    visibleCards[index] 
                                        ? 'opacity-100 translate-y-0 rotate-0' 
                                        : 'opacity-0 translate-y-12 rotate-6'
                                }`}
                                style={{
                                    borderLeftColor: item.accentColor,
                                    transitionDelay: `${index * 0.2}s`,
                                    transformStyle: 'preserve-3d',
                                    perspective: '1000px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(5deg) translateX(10px) translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '-20px 20px 40px rgba(1, 45, 80, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateX(0px) translateY(0px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                {/* Large number accent */}
                                <div className="flex items-start justify-between mb-6">
                                    <div 
                                        className="impact-number font-black leading-none"
                                        style={{
                                            fontSize: '72px',
                                            background: `linear-gradient(135deg, ${item.accentColor}, #CBDC13)`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                        }}
                                    >
                                        {item.number}
                                    </div>
                                    <div 
                                        className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                                        style={{ backgroundColor: item.accentColor }}
                                    >
                                        <IconComponent className="text-white text-2xl" />
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-4" style={{ color: '#012D50' }}>
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>

                                {/* Hover glow effect */}
                                <div 
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        background: `linear-gradient(135deg, ${item.accentColor}20, #CBDC1320)`,
                                        filter: 'blur(10px)'
                                    }}
                                ></div>
                            </div>
                        );
                    })}
                </div>

                {/* Call-to-Action */}
                <div className="text-center">
                    <button className="group relative inline-flex items-center gap-4 px-12 py-6 text-xl font-bold text-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2" 
                            style={{
                                background: 'linear-gradient(135deg, #34969D, #CBDC13)',
                                boxShadow: '0 10px 30px rgba(52, 150, 157, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #CBDC13, #34969D)';
                                e.currentTarget.style.boxShadow = '0 20px 60px rgba(203, 220, 19, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #34969D, #CBDC13)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(52, 150, 157, 0.3)';
                            }}
                    >
                        <span className="relative z-10" style={{ color: '#012D50' }}>Start Your Transformation</span>
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" style={{ color: '#012D50' }} />
                        
                        {/* Button glow effect */}
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </button>
                    
                    <p className="mt-6 text-gray-300 text-lg">
                        Join 500+ companies who chose Protingent as their trusted growth partner
                    </p>
                </div>
            </div>
        </section>
    );
};

export default function RPOService() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <RPOServiceBanner />
            <div className="py-16 md:py-24">
                <BrandBenefitsSection />
            </div>
            
            <ModernServiceSlider />
            <InteractiveTimeline />

            <PremiumInteractiveSlider />

            <div className="py-16 md:py-24 w-full flex justify-center bg-gray-50">
                <div className="w-full max-w-[1450px]">
                    <IndustriesSection
                        title="Industries Where We Serve"
                        desc="We provide tailored RPO solutions across diverse industries, helping businesses hire top talent faster, reduce costs, and scale efficiently. Our expertise adapts to your hiring needs, whether you're in tech, healthcare, manufacturing, or beyond."
                        cardData={rpoIndustriesData}
                    />
                </div>
            </div>

            <PowerfulPartnerSection />

            <div className="py-16 md:py-24 w-full flex justify-center bg-gray-50">
                <ContactUsComponent />
            </div>

            <div className="py-16 md:py-24 w-full flex justify-center">
                <FAQSection
                    title="Frequently Asked Questions"
                    desc="Get answers to common questions about our RPO services and how Protingent can help accelerate your hiring process while maintaining quality and reducing costs."
                    FAQList={serviceRPOFAQ}
                />
            </div>
        </div>
    );
}