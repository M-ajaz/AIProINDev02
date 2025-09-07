import {
    BgWithListComponent,
    ContactUsComponent,
    FAQSection,
    IndustriesSection,
    RHFHeroSection,
    ServicePartners,
    ThreeCardSlider,
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


// --------------------------------------------------------------

const RPOServiceBanner = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            <video
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/ITConsultingBg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center text-white max-w-4xl px-4 md:px-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold animate-fade-in-up mb-4 md:mb-6">
                    RPO That Builds Your Team Fast
                </h1>
                <p className="text-base md:text-lg lg:text-xl font-light mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
                    Streamlined recruitment solutions designed for growth-oriented businesses. 
                    Protingent's Recruitment Process Outsourcing (RPO) model helps you hire 
                    smarter and faster, while reducing hiring costs, improving talent quality, 
                    and providing real-time insights.
                </p>
                <button className="bg-primary-green-color text-primary font-semibold px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm md:text-base">
                    Request Free RPO Consultation
                </button>
            </div>
        </div>
    );
};

const RPOIntroSection = () => {
    return (
        <div className="w-full max-w-[1450px] flex flex-col items-center gap-6 md:gap-8 px-4 md:px-6">
            <CommonHeading
                title="Recruitment Process Outsourcing (RPO) for Your Talent-Pool"
                desc="Recruitment delays cost businesses more than time. It holds back growth, revenue, and innovation. Through professional RPO Services, you can outsource talent hiring responsibility to expert recruiters like Protingent who act as an extension of your in-house HR team. We manage scouting, screening, and first-round interviews with pre-vetted candidates who are both culturally and skill fit for your organization."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full mt-6 md:mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-base md:text-lg font-semibold text-primary">Flexible hiring</h3>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-base md:text-lg font-semibold text-primary">Faster hires</h3>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-base md:text-lg font-semibold text-primary">Top talent</h3>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">  
                    <h3 className="text-base md:text-lg font-semibold text-primary">Cost control</h3>
                </div>
            </div>
        </div>
    );
};

export default function RPOService() {
    return (
        <div className="bg-white w-full flex flex-col items-center gap-32 pb-20">
            <RPOServiceBanner />
            <RPOIntroSection />
            
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