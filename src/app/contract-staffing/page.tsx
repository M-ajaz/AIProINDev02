"use client"
import { useState, useEffect, useRef } from "react";
import {
    ContactUsComponent,
    FAQSection,
    CommonHeading
} from "@/components";
import { 
    FaUserTie,
    FaProjectDiagram,
    FaClock,
    FaGlobe,
    FaIndustry,
    FaUsers,
    FaChartLine,
    FaDollarSign,
    FaShieldAlt,
    FaRocket,
    FaSearch,
    FaRobot,
    FaClipboardCheck,
    FaHandshake,
    FaMonitorHeartbeat,
    FaExpand,
    FaBrain,
    FaBuilding,
    FaCogs,
    FaFileContract,
    FaAward,
    FaGlobe2,
    FaLaptopCode,
    FaHeartbeat,
    FaUniversity,
    FaTools,
    FaShoppingCart,
    FaSignal,
    FaArrowRight,
    FaCheckCircle
} from 'react-icons/fa';

// Contract Staffing FAQ Data
const contractStaffingFAQ = [
    {
        q: "How quickly can Protingent deploy contract staff for urgent needs?",
        a: "We maintain pre-vetted talent pools across industries so we can deploy talent quickly within days. Our AI-driven sourcing matches the right skills very quickly, enabling businesses to continue operations or meet project deadlines without interruption."
    },
    {
        q: "What types of roles can be filled through contract staffing?",
        a: "Protingent has access to any profession needed - IT developers, healthcare providers, finance professionals, customer support and field technicians and many more. Short term, project-based, or specialized skill set, we provide talent for your field."
    },
    {
        q: "How does Protingent ensure compliance with labor laws and payroll regulations?",
        a: "All engagements are governed by rigorous compliance frameworks including payroll, taxation, and legal documentation. Our compliance-first approach limits risk on behalf of clients, meaning that contract staff are hired, paid, and managed legally in each engagement."
    },
    {
        q: "Can we scale staffing support up or down easily?",
        a: "Yes. Our contract staffing models provide a flexible option where you can quickly add people on when activity peaks or reduce the number of heads when a project is done--- without the burdens of permanent hiring, and, if projects terminate, without the concerns of layoffs."
    },
    {
        q: "How does contract-to-hire staffing work with Protingent?",
        a: "We provide organizations the opportunity to bring on professionals and engage them on a contract, or temporary basis, while at the same time assessing them. If they are the proper fit culturally and technically, you can move them to permanent employee status and reduce hiring risk."
    },
    {
        q: "Do you provide staffing solutions for remote or hybrid work models?",
        a: "We have virtual, onsite, and hybrid staffing solutions. Our global sourcing capabilities provide businesses access to knowledgeable talent pools away from geographic constraints while improving productivity and compliance."
    },
    {
        q: "How do you ensure the quality of candidates provided?",
        a: "Candidates undergo a rigorous multi-step vetting process, including technical assessments, background checks, and compliance reviews. We only recommend professionals who meet both your skill requirements and organizational standards."
    },
    {
        q: "What makes Protingent different from traditional staffing agencies?",
        a: "Unlike traditional agencies that only supply manpower, Protingent integrates AI-driven sourcing, compliance management, and industry expertise. This ensures not just faster placements but also sustainable workforce solutions that deliver measurable business impact."
    }
];

// Hero Section
const ContractStaffingHero = () => {
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
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(1,45,80,0.9), rgba(52,150,157,0.7))' }}></div>
            
            {/* Floating geometric elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 border-2 rotate-45 float-animation opacity-30" style={{ borderColor: '#CBDC13' }}></div>
                <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full float-animation opacity-40" style={{ backgroundColor: '#CBDC13', animationDelay: '-2s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 rotate-12 float-animation opacity-25" style={{ backgroundColor: '#34969D', animationDelay: '-4s' }}></div>
            </div>
            
            <div className="relative z-10 text-center text-white max-w-5xl px-4 md:px-6">
                <div className="mb-6">
                    <div className="inline-block px-4 py-2 rounded-full border mb-4" style={{ backgroundColor: 'rgba(203, 220, 19, 0.2)', borderColor: 'rgba(203, 220, 19, 0.3)' }}>
                        <span className="font-semibold text-sm" style={{ color: '#CBDC13' }}>🎯 Flexible Workforce Solutions</span>
                    </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">Contract Staffing That Delivers</span>
                    <span className="block mt-2" style={{ color: '#CBDC13' }}>the Right Talent, Right on Time</span>
                </h1>
                
                <p className="text-base md:text-lg lg:text-xl font-light mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
                    Protingent India bridges talent gaps with pre-vetted professionals on demand. We deliver contract staffing services, 
                    where dedicated, skilled talent-pool requirements are filled for a certain time. Our technology experts promise agility, 
                    cost-efficiency, and compliance, so businesses scale faster without burdening permanent hiring.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="modern-btn group relative overflow-hidden">
                        <span className="relative z-10">Get Contract Staffing Support Today</span>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #CBDC13, #34969D)' }}></div>
                    </button>
                    
                    <button className="px-6 py-3 border-2 border-white/30 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                        <span className="flex items-center gap-2">
                            <span>View Our Solutions</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
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

// Section 1: Benefits Section
const ContractualBenefitsSection = () => {
    const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    const benefits = [
        {
            icon: FaRocket,
            title: "Rapid Scalability",
            description: "Maximise or minimise the team anytime required based on project needs",
            accentColor: "#34969D"
        },
        {
            icon: FaDollarSign,
            title: "Cost Control",
            description: "Reduce long-term hiring overheads whenever the project closes",
            accentColor: "#CBDC13"
        },
        {
            icon: FaShieldAlt,
            title: "Compliance Assured",
            description: "Navigate labor laws and payroll complexities with zero risk",
            accentColor: "#34969D"
        },
        {
            icon: FaUsers,
            title: "Access to Specialists",
            description: "Quickly secure niche experts for short-term and high-priority projects",
            accentColor: "#CBDC13"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.benefit-card');
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
        <section ref={sectionRef} className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-[1450px]">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#012D50' }}>
                        Contractual Staffing Solutions For Dedicated Hiring
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Organizations face volatile demand, rising talent costs, and strict compliance requirements at times. 
                        Contractual staffing is a strategic approach, where the needs for a skilled talent pool are filled without permanent pay expected.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className={`benefit-card group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer bg-white border-2 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:scale-105 ${
                                    visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                                style={{ 
                                    borderColor: benefit.accentColor,
                                    transitionDelay: `${index * 0.1}s`
                                }}
                            >
                                <div className="p-6 md:p-8 h-full relative z-10">
                                    <div className="relative mb-6">
                                        <div 
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ backgroundColor: benefit.accentColor }}
                                        >
                                            <IconComponent className="text-white" />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300" style={{ color: '#012D50' }}>
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        {benefit.description}
                                    </p>
                                    
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
        </section>
    );
};

// Section 2: Contract Staffing Solutions
const ContractStaffingSolutions = () => {
    const solutions = [
        {
            icon: FaUserTie,
            title: "Contract-to-Hire Staffing",
            description: "Hire skilled pre-vetted candidates on a contract basis with the option to convert them to full-time when needed, while ensuring corporate culture understanding and operational efficiency.",
            accentColor: "#34969D"
        },
        {
            icon: FaProjectDiagram,
            title: "Project-Based Staffing",
            description: "Quick deployment of a niche-specific team of experts for dedicated projects, ensuring agility, efficiency, and end-to-end performance.",
            accentColor: "#CBDC13"
        },
        {
            icon: FaClock,
            title: "Short-Term & Long-Term Contracts",
            description: "We have a talent pool available for a flexible duration, whether it's short-term or long-term. Clients can extend their working contracts from weeks to months based on business demands.",
            accentColor: "#34969D"
        },
        {
            icon: FaGlobe,
            title: "Remote & Hybrid Staffing",
            description: "Our database includes talented candidates who fulfill contract agreements on remote and hybrid requirements across the globe. We ensure that there are no geographical limitations for remote and hybrid staffing models.",
            accentColor: "#CBDC13"
        },
        {
            icon: FaIndustry,
            title: "Specialized Industry Staffing",
            description: "The AI-enabled CRM software has a huge tech-expert details of domain-specific tech programmers like IT, Healthcare, Finance, Manufacturing, and Retail to address unique workforce challenges with precision.",
            accentColor: "#34969D"
        },
        {
            icon: FaCogs,
            title: "Workforce Replacement & Continuity",
            description: "Ensure uninterrupted operations with swift workforce replacement services, minimizing risks of downtime and maintaining consistent productivity across projects and functions.",
            accentColor: "#CBDC13"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-[1450px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#012D50' }}>
                        Our Contract Staffing Solutions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Protingent India delivers tailored contractual staffing services aligned to the dynamic workforce needs for short-term projects. 
                        We have the recruiters ensure compliance, quality, and speed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => {
                        const IconComponent = solution.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer bg-white shadow-lg hover:shadow-2xl hover:-translate-y-3"
                                style={{
                                    borderTop: `4px solid ${solution.accentColor}`
                                }}
                            >
                                <div className="p-8 h-full">
                                    <div className="relative mb-6">
                                        <div 
                                            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: solution.accentColor }}
                                        >
                                            <IconComponent className="text-white" />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#012D50' }}>
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        {solution.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default function ContractStaffingService() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-0 pb-12 md:pb-20">
            <ContractStaffingHero />
            <ContractualBenefitsSection />
            <ContractStaffingSolutions />
            
            <div className="py-16 md:py-24 w-full flex justify-center">
                <ContactUsComponent />
            </div>

            <div className="py-16 md:py-24 w-full flex justify-center bg-gray-50">
                <FAQSection
                    title="Frequently Asked Questions"
                    desc="Get answers to common questions about our contract staffing services and how Protingent can help you build flexible, compliant workforce solutions."
                    FAQList={contractStaffingFAQ}
                />
            </div>
        </div>
    );
}