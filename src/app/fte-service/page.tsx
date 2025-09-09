"use client";
import React, { useState, useEffect } from 'react';
import { ServiceFTEBanner, EnhancedFAQSection } from "@/components";
import { serviceFTEFAQ, ProductivityCardData, ServiceOfferingData, ServicesProcessData, businessBenefitsData, serviceFTEIndustryData, serviceFTEPartnersData } from '@/utils/constants';
import Image from 'next/image';
import { FaCheckCircle, FaCogs, FaUsers, FaChartLine, FaRocket, FaArrowRight, FaPlus, FaMinus, FaSearch } from 'react-icons/fa';

// --------------------------------------------------------------

// Dedicated FTE Experts Section
const DedicatedFTEExpertsSection = () => {
    return (
        <section className="relative w-full py-20 overflow-hidden">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 bg-gradient-to-br from-lime-50 via-teal-50 to-navy-50 opacity-60"></div>
            
            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-lime-300/20 rounded-full animate-float"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-teal-300/20 rotate-45 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-navy-300/20 rounded-full animate-bounce"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8" data-aos="fade-right">
                        <h2 className="text-4xl lg:text-5xl font-black text-navy-800 leading-tight">
                            Dedicated Full-Time Equivalent (FTE) Experts for Growth
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full"></div>
                        
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Full-Time Equivalent (FTE) Services provide businesses structural and skilled talent pool exclusively for your projects without the need to hire in-house.
                            </p>
                            <p>
                                FTE is a flexible workforce model that enables organizations to scale operations, manage hiring costs effectively, and maintain complete control over deliverables. Protingent's FTE Services has pre-vetted tech-engineers aligned with your project goals, timelines, and workflows. It's ideal for long-term initiatives, compliance-heavy operations, or companies aiming to expand without inflating internal headcount. Maximize productivity while minimizing hiring risks with consistent accountability and measurable ROI.
                            </p>
                        </div>
                    </div>

                    {/* Right Image with Stats Overlay */}
                    <div className="relative" data-aos="fade-left">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image 
                                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTc0MjAxMjN8MA&ixlib=rb-4.1.0&q=85"
                                alt="Professional team collaboration"
                                width={600}
                                height={400}
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-navy-600/70 via-transparent to-lime-400/30"></div>
                        </div>
                        
                        {/* Stats Card Overlay */}
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 border-l-4 border-lime-400" data-aos="zoom-in" data-aos-delay="300">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-teal-500 rounded-full flex items-center justify-center">
                                    <FaCheckCircle className="text-white text-xl" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-navy-800">98%</div>
                                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Workforce Challenges Section
const WorkforceChallengesSection = () => {
    return (
        <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mb-6">
                        Struggling to Optimize Your Workforce Productivity?
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Many businesses overspend, under-deliver, or lose project efficiency. Protingent India bridges this gap with scalable, cost-effective, and accountable FTE solutions that give you a competitive edge without the overhead.
                    </p>
                </div>

                {/* Challenge Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Cost Inefficiency",
                            desc: "Traditional hiring models often result in overpaying for underutilized resources, draining budgets without maximizing returns on talent investment.",
                            img: "/img/serviceFTE/productivityCard1.png"
                        },
                        {
                            title: "Inconsistent Output Quality",
                            desc: "Fluctuating freelancer performance or multitasking in-house teams can lead to delivery delays and uneven quality, ultimately impacting client satisfaction and brand reputation.",
                            img: "/img/serviceFTE/productivityCard2.png"
                        },
                        {
                            title: "Limited Scalability",
                            desc: "Rapid project expansion becomes challenging when teams lack the necessary capacity or specialized skills, slowing growth and hindering agility.",
                            img: "/img/serviceFTE/productivityCard3.png"
                        },
                        {
                            title: "Resource Gaps and Burnout",
                            desc: "In-house teams often face burnout due to unbalanced workloads, while businesses struggle to maintain continuity across long-term or high-volume projects.",
                            img: "/img/serviceFTE/productivityCard4.png"
                        }
                    ].map((challenge, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Background Geometric Pattern */}
                            <div className="absolute inset-0 bg-gradient-to-br from-lime-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Icon Background */}
                            <div className="relative w-16 h-16 bg-gradient-to-br from-lime-400 to-teal-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Image 
                                    src={challenge.img}
                                    alt={challenge.title}
                                    width={32}
                                    height={32}
                                    className="text-white filter invert"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-navy-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                                    {challenge.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {challenge.desc}
                                </p>
                            </div>

                            {/* Hover Overlay Animation */}
                            <div className="absolute top-0 right-0 w-0 h-0 bg-gradient-to-br from-lime-400 to-teal-500 group-hover:w-full group-hover:h-full transition-all duration-700 rounded-full opacity-10"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Service Offerings Bento Grid Section
const ServiceOfferingsBentoSection = () => {
    const serviceOfferings = [
        {
            title: "Hybrid Resource Flexibility",
            desc: "Blend in-house direction with outsourced expertise through custom-built resource models that scale seamlessly with your project demands."
        },
        {
            title: "Seamless Project Oversight",
            desc: "Get dedicated project managers and regular updates that ensure milestone tracking, accountability, and zero communication gaps."
        },
        {
            title: "Quick Access to Niche Talent",
            desc: "Deploy specialized professionals on-demand — without recruitment delays or onboarding hurdles — to fast-track delivery."
        },
        {
            title: "Quality & Compliance Assurance",
            desc: "Engage FTEs trained in regulatory, data security, and industry protocols, ensuring every outcome is compliant and audit-ready."
        }
    ];

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mb-6">
                        Maximize Output with Our High-Impact FTE Service Offerings
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Empower your business with a full spectrum of tailored FTE services built to reduce costs, increase agility, and ensure top-tier project execution from day one.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto lg:h-[800px]">
                    {/* Large Featured Card - Hybrid Resource Flexibility */}
                    <div 
                        className="lg:col-span-2 lg:row-span-2 group relative bg-gradient-to-br from-navy-600 to-teal-600 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
                        data-aos="fade-right"
                    >
                        <div className="absolute inset-0">
                            <Image 
                                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTc0MjAxMjN8MA&ixlib=rb-4.1.0&q=85"
                                alt="Team collaboration"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-800/80 via-teal-600/60 to-lime-400/40 group-hover:from-navy-900/90 transition-colors duration-500"></div>
                        </div>
                        
                        <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <FaUsers className="text-navy-800 text-2xl" />
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
                                    {serviceOfferings[0].title}
                                </h3>
                                <p className="text-xl text-gray-200 leading-relaxed">
                                    {serviceOfferings[0].desc}
                                </p>
                            </div>
                            
                            <div className="flex items-center text-lime-400 group-hover:text-lime-300 transition-colors duration-300">
                                <span className="text-lg font-semibold mr-2">Learn More</span>
                                <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
                            </div>
                        </div>
                    </div>

                    {/* Smaller Service Cards */}
                    {serviceOfferings.slice(1).map((service, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="absolute inset-0">
                                <Image 
                                    src={`https://images.unsplash.com/photo-${[
                                        '1517048676732-d65bc937f952',
                                        '1521737852567-6949f3f9f2b5',
                                        '1606857521015-7f9fcf423740'
                                    ][index]}?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85`}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-navy-600/80 to-teal-400/60 group-hover:from-navy-700/90 group-hover:to-teal-500/70 transition-colors duration-500"></div>
                            </div>
                            
                            <div className="relative z-10 p-8">
                                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <FaCogs className="text-navy-800 text-lg" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-lime-300 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Process Timeline Section
const ProcessTimelineSection = () => {
    const processSteps = [
        {
            title: "Requirement Discovery",
            desc: "Understand your project needs, timelines, and resourcing expectations."
        },
        {
            title: "Talent Mapping",
            desc: "Match expert professionals to roles with domain-specific alignment."
        },
        {
            title: "Resource Onboarding",
            desc: "Fast-track orientation to ensure zero downtime from day one."
        },
        {
            title: "Workflow Integration",
            desc: "FTEs embedded into your team for smooth collaboration and delivery."
        },
        {
            title: "Monitoring & Optimization",
            desc: "Track KPIs, ensure compliance, and optimize performance consistently."
        }
    ];

    return (
        <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mb-6">
                        Precision & Performance Oriented FTE Services Process
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Our Full-Time Equivalent (FTE) delivery process is streamlined to ensure speed, flexibility, and consistent value for your business operations from planning to project execution.
                    </p>
                </div>

                {/* Timeline Steps */}
                <div className="space-y-20">
                    {processSteps.map((step, index) => (
                        <div 
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        >
                            {/* Step Number */}
                            <div className="relative">
                                <div className="w-24 h-24 bg-gradient-to-br from-lime-400 to-teal-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                                    <span className="text-2xl font-black text-white">{index + 1}</span>
                                </div>
                                
                                {/* Connecting Line */}
                                {index < processSteps.length - 1 && (
                                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-lime-400 to-teal-500 hidden lg:block"></div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 lg:max-w-md">
                                <h3 className="text-2xl font-bold text-navy-800 mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="flex-1 lg:max-w-md">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                    <Image 
                                        src={`https://images.unsplash.com/photo-${[
                                            '1600880292089-90a7e086ee0c',
                                            '1557426272-fc759fdf7a8d',
                                            '1517048676732-d65bc937f952',
                                            '1521737852567-6949f3f9f2b5',
                                            '1606857521015-7f9fcf423740'
                                        ][index]}?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85`}
                                        alt={step.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-navy-600/40 to-teal-400/40"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Benefits Stats Grid Section
const BenefitsStatsSection = () => {
    const [counters, setCounters] = useState([0, 0, 0]);

    useEffect(() => {
        const targetValues = [95, 40, 60]; // Example stats
        const animateCounters = () => {
            targetValues.forEach((target, index) => {
                let current = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    setCounters(prev => {
                        const newCounters = [...prev];
                        newCounters[index] = Math.floor(current);
                        return newCounters;
                    });
                }, 20);
            });
        };

        animateCounters();
    }, []);

    return (
        <section className="w-full py-20 bg-navy-800">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                        Strategic Business Benefits of Choosing FTE Services
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Organization with a flexible, scalable, and cost-effective talent model designed to elevate your operational efficiency, reduce overheads, and speed up delivery cycles.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {businessBenefitsData.map((benefit, index) => (
                        <div 
                            key={index}
                            className="group relative bg-gradient-to-br from-teal-600 to-navy-700 rounded-3xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 opacity-20">
                                <Image 
                                    src={`https://images.unsplash.com/photo-${[
                                        '1606857521015-7f9fcf423740',
                                        '1497366754035-f200968a6e72',
                                        '1718220216044-006f43e3a9b1'
                                    ][index]}?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85`}
                                    alt={benefit.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-800/80 to-teal-600/60 group-hover:from-navy-900/90 group-hover:to-teal-700/70 transition-colors duration-500"></div>
                            
                            <div className="relative z-10">
                                {/* Animated Counter */}
                                <div className="text-4xl font-black text-lime-400 mb-4">
                                    {counters[index]}%+
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Industries Section
const IndustriesSection = () => {
    return (
        <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mb-6">
                        Serving Diverse Industries with Tailored FTE Expertise
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Our Full-Time Equivalent (FTE) services are designed to seamlessly integrate with businesses across industries empowering them with domain-specific skills, faster turnaround, and scalable operations.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {serviceFTEIndustryData.map((industry, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            {/* Background Image */}
                            <div className="relative h-48">
                                <Image 
                                    src={`https://images.unsplash.com/photo-${[
                                        '1606857521015-7f9fcf423740',
                                        '1497366754035-f200968a6e72',
                                        '1718220216044-006f43e3a9b1',
                                        '1748346918817-0b1b6b2f9bab'
                                    ][index % 4]}?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85`}
                                    alt={industry.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/80 to-navy-700/60 group-hover:from-teal-700/90 group-hover:to-navy-800/70 transition-colors duration-500"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="relative z-10 p-6">
                                <h3 className="text-lg font-bold text-white text-center group-hover:text-lime-300 transition-colors duration-300">
                                    {industry.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Why Protingent Section
const WhyProtingentSection = () => {
    return (
        <section className="w-full py-20 bg-white relative overflow-hidden">
            {/* Background Geometric Motifs */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-64 h-64 bg-lime-400 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-teal-500 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-navy-600 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mb-6">
                        Protingent is the Preferred Partner for FTE Services
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-teal-500 rounded-full mx-auto mb-6"></div>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Finding the right FTE provider can be the difference between stagnation and scalable success. Protingent go beyond basic staffing, bring you dedicated professionals, agile processes, and industry-leading value tailored to your business goals.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceFTEPartnersData.map((partner, index) => (
                        <div 
                            key={index}
                            className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Background Gradient on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-lime-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                            
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <FaRocket className="text-white text-2xl" />
                                </div>

                                <h3 className="text-xl font-bold text-navy-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                                    {partner.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {partner.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Final CTA Section
const FinalCTASection = () => {
    return (
        <section className="relative w-full py-32 overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
                <Image 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTc0MjAxMjN8MA&ixlib=rb-4.1.0&q=85"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-lime-600/90 via-teal-700/80 to-navy-800/90"></div>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight" data-aos="fade-up">
                    Grow Smarter. Hire Faster. Deliver Better.
                </h2>
                
                <p className="text-xl text-gray-200 mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                    Transform your business operations with our expert FTE services. Start your journey to operational excellence today.
                </p>
                
                <button 
                    className="group relative px-12 py-6 bg-white text-navy-800 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                >
                    <span className="relative z-10 flex items-center">
                        Get Started Today
                        <FaArrowRight className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
            </div>
        </section>
    );
};

export default function Home() {
    useEffect(() => {
        // Initialize AOS
        if (typeof window !== 'undefined') {
            import('aos').then((AOS) => {
                AOS.init({
                    duration: 800,
                    easing: 'ease-out-cubic',
                    once: true,
                });
            });
        }
    }, []);

    return (
        <div className="bg-white w-full flex flex-col items-center">
            {/* Hero Section - Keep unchanged */}
            <ServiceFTEBanner />
            
            {/* Updated Sections */}
            <DedicatedFTEExpertsSection />
            <WorkforceChallengesSection />
            <ServiceOfferingsBentoSection />
            <ProcessTimelineSection />
            <BenefitsStatsSection />
            <IndustriesSection />
            <WhyProtingentSection />
            <FinalCTASection />
            
            {/* Enhanced FAQ Section */}
            <div className="w-full py-20">
                <EnhancedFAQSection
                    title="Frequently Asked Questions"
                    description="Protingent India brings a proven combination of healthcare knowledge, technology capabilities, and agile delivery models that ensure your organization can meet today's challenges while preparing for tomorrow."
                    FAQList={serviceFTEFAQ}
                />
            </div>
        </div>
    );
}
