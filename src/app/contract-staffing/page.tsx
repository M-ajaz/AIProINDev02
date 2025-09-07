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
    FaExpand,
    FaBrain,
    FaBuilding,
    FaCogs,
    FaFileContract,
    FaAward,
    FaLaptopCode,
    FaHeartbeat,
    FaUniversity,
    FaTools,
    FaShoppingCart,
    FaSignal,
    FaArrowRight,
    FaCheckCircle,
    FaDesktop
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
            {/* Professional background image */}
            <div 
                className="absolute inset-0 w-full h-full object-cover bg-center bg-cover"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80)'
                }}
            ></div>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(1,45,80,0.85), rgba(52,150,157,0.75))' }}></div>
            
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
            accentColor: "#34969D",
            image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            icon: FaDollarSign,
            title: "Cost Control",
            description: "Reduce long-term hiring overheads whenever the project closes",
            accentColor: "#CBDC13",
            image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            icon: FaShieldAlt,
            title: "Compliance Assured",
            description: "Navigate labor laws and payroll complexities with zero risk",
            accentColor: "#34969D",
            image: "https://images.unsplash.com/photo-1551836022-aadb801c60ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            icon: FaUsers,
            title: "Access to Specialists",
            description: "Quickly secure niche experts for short-term and high-priority projects",
            accentColor: "#CBDC13",
            image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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

// Section 3: Interactive Timeline - Streamlined Approach
const StreamlinedApproachTimeline = () => {
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const [visibleSteps, setVisibleSteps] = useState<boolean[]>([]);
    const timelineRef = useRef<HTMLDivElement>(null);

    const processSteps = [
        {
            icon: FaSearch,
            title: "Workforce Requirement Analysis",
            description: "We assess your project or business needs, defining skill sets, timelines, and compliance requirements for precise hiring.",
            accentColor: "#34969D"
        },
        {
            icon: FaRobot,
            title: "AI-Powered Talent Sourcing",
            description: "Our smart recruitment engine identifies and pre-vets candidates from extensive databases, ensuring speed and accuracy in talent matching.",
            accentColor: "#CBDC13"
        },
        {
            icon: FaClipboardCheck,
            title: "Rigorous Screening & Compliance",
            description: "Every candidate undergoes multi-level checks, credential verifications, and compliance evaluations to ensure reliability and legal alignment.",
            accentColor: "#34969D"
        },
        {
            icon: FaHandshake,
            title: "Seamless Onboarding & Deployment",
            description: "We manage contracts, payroll, and induction processes, enabling professionals to integrate quickly into your workflows with minimal downtime.",
            accentColor: "#CBDC13"
        },
        {
            icon: FaDesktop,
            title: "Continuous Performance Monitoring",
            description: "Through regular feedback loops and data-driven insights, we ensure workforce productivity, offering replacements or scaling support as required.",
            accentColor: "#34969D"
        },
        {
            icon: FaExpand,
            title: "Scalability & Future-Readiness",
            description: "Our models ensure organizations can scale up or down instantly, staying agile for changing demands and future growth.",
            accentColor: "#CBDC13"
        }
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
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-[1450px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#012D50' }}>
                        Our Streamlined Approach to Contract Staffing
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We combine AI-driven staff sourcing, deep industry expertise, and agile workflows to deliver the right talent 
                        at the right time, ensuring speed, compliance, and business continuity for our clients.
                    </p>
                </div>

                <div ref={timelineRef} className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2"></div>
                    <div 
                        className="timeline-progress absolute left-4 md:left-1/2 top-0 w-1 transform md:-translate-x-1/2 z-10"
                        style={{
                            height: `${(visibleSteps.filter(Boolean).length / processSteps.length) * 100}%`,
                            background: 'linear-gradient(135deg, #34969D, #CBDC13)'
                        }}
                    ></div>

                    <div className="space-y-12 md:space-y-16">
                        {processSteps.map((step, index) => {
                            const IconComponent = step.icon;
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
                                        {/* Step icon and number */}
                                        <div className="relative z-20 flex-shrink-0 flex flex-col items-center">
                                            {/* Icon */}
                                            <div 
                                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 hover:scale-110 hover:rotate-6"
                                                style={{ 
                                                    backgroundColor: step.accentColor,
                                                    boxShadow: visibleSteps[index] ? `0 8px 25px ${step.accentColor}40` : 'none'
                                                }}
                                            >
                                                <IconComponent className="text-white text-lg" />
                                            </div>
                                            
                                            {/* Step number */}
                                            <div 
                                                className={`w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center font-bold text-white cursor-pointer transition-all duration-300 ${
                                                    activeStep === index ? 'scale-110' : 'hover:scale-105'
                                                }`}
                                                style={{
                                                    backgroundColor: activeStep === index ? '#CBDC13' : '#012D50'
                                                }}
                                                onClick={() => setActiveStep(activeStep === index ? null : index)}
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </div>
                                        </div>

                                        {/* Step content */}
                                        <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                            <div 
                                                className="bg-white p-6 md:p-8 rounded-2xl cursor-pointer hover-lift group shadow-lg border-2"
                                                style={{ borderColor: step.accentColor }}
                                                onClick={() => setActiveStep(activeStep === index ? null : index)}
                                            >
                                                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-opacity-90 transition-colors duration-300" style={{ color: '#012D50' }}>
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Section 4: Measurable Impact with Animated Counters
const MeasurableImpactSection = () => {
    const [countersVisible, setCountersVisible] = useState(false);
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const sectionRef = useRef<HTMLDivElement>(null);

    const impactData = [
        {
            icon: FaRocket,
            number: 45,
            suffix: "%",
            title: "Faster Workforce Deployment",
            description: "Reduce hiring cycles with pre-vetted talent pools and AI-driven sourcing",
            accentColor: "#34969D"
        },
        {
            icon: FaDollarSign,
            number: 35,
            suffix: "%",
            title: "Lower Hiring & Payroll Costs",
            description: "Cut overheads by paying only for skills and duration needed",
            accentColor: "#CBDC13"
        },
        {
            icon: FaShieldAlt,
            number: 100,
            suffix: "%",
            title: "Compliance Coverage",
            description: "All staffing contracts and payroll are managed under strict legal and regulatory frameworks",
            accentColor: "#34969D"
        },
        {
            icon: FaChartLine,
            number: 60,
            suffix: "%",
            title: "Faster Access to Niche Expertise",
            description: "Quickly onboard specialists for critical projects without lengthy recruitment delays",
            accentColor: "#CBDC13"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !countersVisible) {
                    setCountersVisible(true);
                    
                    // Animate counters
                    impactData.forEach((item, index) => {
                        let currentCount = 0;
                        const increment = item.number / 50; // 50 steps
                        const timer = setInterval(() => {
                            currentCount += increment;
                            if (currentCount >= item.number) {
                                currentCount = item.number;
                                clearInterval(timer);
                            }
                            setCounts(prev => {
                                const newCounts = [...prev];
                                newCounts[index] = Math.floor(currentCount);
                                return newCounts;
                            });
                        }, 40); // Update every 40ms for smooth animation
                    });
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [countersVisible]);

    return (
        <section ref={sectionRef} className="py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #012D50 0%, #34969D 100%)' }}>
            <div className="container mx-auto px-4 max-w-[1450px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Measurable Impact
                    </h2>
                    <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                        Our contract staffing solutions deliver quantifiable results that drive business growth and operational efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impactData.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={index}
                                className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105"
                            >
                                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <div 
                                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: item.accentColor }}
                                    >
                                        <IconComponent className="text-white text-2xl" />
                                    </div>
                                    
                                    <div className="mb-4">
                                        <span 
                                            className="text-5xl md:text-6xl font-bold"
                                            style={{ color: '#CBDC13' }}
                                        >
                                            {counts[index]}{item.suffix}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 leading-relaxed">
                                        {item.description}
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

// Section 5: Protingent Advantage
const ProtingentAdvantageSection = () => {
    const advantages = [
        {
            icon: FaBrain,
            title: "AI-Powered Talent Matching",
            description: "Intelligent sourcing means faster and more accurate identification of the right professionals",
            accentColor: "#34969D"
        },
        {
            icon: FaBuilding,
            title: "Industry-Focused Expertise",
            description: "From IT to Healthcare to BFSI, we connect pre-vetted professionals with experience in the respective sectors",
            accentColor: "#CBDC13"
        },
        {
            icon: FaCogs,
            title: "Flexible Engagement Models",
            description: "Add to your workforce with short-term, long-term, remote or project-specific placement types",
            accentColor: "#34969D"
        },
        {
            icon: FaFileContract,
            title: "Compliance-First Policy",
            description: "Each hire is managed under a serious lens of labor laws and payroll regulations reducing risk for your organization",
            accentColor: "#CBDC13"
        },
        {
            icon: FaAward,
            title: "SLA-Commitment",
            description: "Guaranteed speed, quality and service with defined performance level agreements",
            accentColor: "#34969D"
        },
        {
            icon: FaGlobe,
            title: "Proven Global Partnerships",
            description: "Trusted by organizations for predictable services and long-term collaboration",
            accentColor: "#CBDC13"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-[1450px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#012D50' }}>
                        Protingent Advantage
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We are redefining contract staffing by blending AI-driven sourcing, domain-specific talent pools, and compliance-backed processes, 
                        ensuring organizations receive not just staff, but sustainable workforce solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((advantage, index) => {
                        const IconComponent = advantage.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer bg-white shadow-lg hover:shadow-2xl hover:-translate-y-3 border-l-4"
                                style={{ borderLeftColor: advantage.accentColor }}
                            >
                                <div className="p-8 h-full">
                                    <div className="relative mb-6">
                                        <div 
                                            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ backgroundColor: advantage.accentColor }}
                                        >
                                            <IconComponent className="text-white" />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#012D50' }}>
                                        {advantage.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        {advantage.description}
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

// Section 6: Industries We Serve
const IndustriesSection = () => {
    const industries = [
        {
            icon: FaLaptopCode,
            title: "Information Technology (IT)",
            description: "Engage software developers, cloud experts, and IT experts to quickly onboard for projects with domain knowledge and full flexibility and availability.",
            accentColor: "#34969D"
        },
        {
            icon: FaHeartbeat,
            title: "Healthcare",
            description: "Fill urgent clinical roles, allied health staff, and administrative positions while managing compliance and patient care continuity.",
            accentColor: "#CBDC13"
        },
        {
            icon: FaUniversity,
            title: "Banking, Financial Services & Insurance (BFSI)",
            description: "Bring compliance based finance professionals, risk analysts and support staff on board for your evolving BFSI workforce needs.",
            accentColor: "#34969D"
        },
        {
            icon: FaTools,
            title: "Manufacturing",
            description: "Onboard qualified engineers, technicians, and floor staff to meet production cycles, seasonal dips, and quality maintenance and operation.",
            accentColor: "#CBDC13"
        },
        {
            icon: FaShoppingCart,
            title: "Retail & E-commerce",
            description: "Expand functions in your supply chain, sales, and customer service support using agile workforce smart workforce models to meet peak seasonal business demands.",
            accentColor: "#34969D"
        },
        {
            icon: FaSignal,
            title: "Telecommunications",
            description: "Easily onboard field engineers, support staff, and project specialists to meet demands of company networks, new and ongoing services and network expansion.",
            accentColor: "#CBDC13"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-[1450px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#012D50' }}>
                        Industries We Serve
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Our contract staffing expertise spans across diverse industries, providing specialized talent solutions 
                        tailored to sector-specific requirements and compliance standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => {
                        const IconComponent = industry.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer bg-white shadow-lg hover:shadow-2xl hover:-translate-y-3"
                                style={{
                                    borderTop: `4px solid ${industry.accentColor}`
                                }}
                            >
                                <div className="p-8 h-full">
                                    <div className="relative mb-6">
                                        <div 
                                            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: industry.accentColor }}
                                        >
                                            <IconComponent className="text-white" />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: '#012D50' }}>
                                        {industry.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        {industry.description}
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

// CTA Section
const CTASection = () => {
    return (
        <section className="py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #012D50 0%, #34969D 50%, #CBDC13 100%)' }}>
            <div className="container mx-auto px-4 text-center max-w-[1450px]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Ready to Build Your Agile Workforce For the Timespan You Need?
                </h2>
                <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
                    Partner with Protingent India to access flexible, compliant, and pre-vetted contract staffing solutions 
                    that empower your business to grow without limits.
                </p>
                <button 
                    className="font-bold text-lg px-12 py-4 rounded-full hover:scale-105 transform transition-all shadow-2xl"
                    style={{
                        background: 'linear-gradient(90deg, #CBDC13, white)',
                        color: '#012D50'
                    }}
                >
                    Get Contract Staffing Support Today
                </button>
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
            <StreamlinedApproachTimeline />
            <MeasurableImpactSection />
            <ProtingentAdvantageSection />
            <IndustriesSection />
            <CTASection />
            
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