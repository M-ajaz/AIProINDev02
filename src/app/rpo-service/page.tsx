"use client"
import { useState, useEffect, useRef } from "react";
import {
    ContactUsComponent,
    FAQ Section,
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

// Modern Interactive Timeline Component
const InteractiveTimeline = () => {
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(rpoProcessData.length).fill(false));
    const timelineRef = useRef<HTMLDivElement>(null);

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
                        {rpoProcessData.map((step, index) => (
                            <div
                                key={index}
                                data-index={index}
                                className={`timeline-step relative ${visibleSteps[index] ? 'animate-in' : ''}`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}>
                                    {/* Step number */}
                                    <div className="relative z-20 flex-shrink-0">
                                        <div 
                                            className={`w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center font-bold text-white cursor-pointer transition-all duration-300 ${
                                                activeStep === index 
                                                    ? 'bg-primary-green-color scale-110' 
                                                    : 'bg-gradient-to-br from-primary to-secondry hover:scale-105'
                                            }`}
                                            onClick={() => setActiveStep(activeStep === index ? null : index)}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        {visibleSteps[index] && (
                                            <div className="absolute inset-0 rounded-full bg-primary-green-color/30 animate-pulse"></div>
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function RPOService() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <RPOServiceBanner />
            <div className="py-16 md:py-24">
                <ModernBenefitsSection />
            </div>
            
            <ModernServiceSlider />
            <InteractiveTimeline />

            <div className="py-16 md:py-24 w-full flex justify-center">
                <BgWithListComponent
                    title="Highly Skilled Team for Business Expansions"
                    desc="Right recruitment means matching the right talent with the team to work efficiently and deliver actionable results. RPO is taking forward more from reactive hiring to strategic talent-pool acquisition to build success."
                    bg="/img/bgListImgs/businessBenefits.png"
                    bgList="/img/bgListImgs/businessBenefits2.png"
                    listData={rpoBenefitsData}
                />
            </div>

            <div className="py-16 md:py-24 w-full flex justify-center bg-gray-50">
                <div className="w-full max-w-[1450px]">
                    <IndustriesSection
                        title="Industries Where We Serve"
                        desc="We provide tailored RPO solutions across diverse industries, helping businesses hire top talent faster, reduce costs, and scale efficiently. Our expertise adapts to your hiring needs, whether you're in tech, healthcare, manufacturing, or beyond."
                        cardData={rpoIndustriesData}
                    />
                </div>
            </div>

            <div className="py-16 md:py-24 w-full flex justify-center">
                <ServicePartners
                    title="We Are Not Another RPO Vendor, But A Trusted Talent Growth Partner"
                    desc="We work for excellence with the top-tier talent pool. Our pre-vetted and new candidates are highly skilled to evolve and expand your organization with precision. Our recruiters blend agility, domain expertise, and a tech-enabled approach to build talent pipelines that work efficiently."
                    cardList={rpoPartnersData}
                />
            </div>

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