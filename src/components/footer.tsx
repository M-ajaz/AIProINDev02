"use client"
import { Icon } from "@/components";
import Image from "next/image";
import Link from "next/link";

// -----------------------------------------------------------------

const Footer = () => {
    return (
        <div id="footer" className="bg-primary w-full min-h-[500px] md:min-h-[700px] relative text-white">
            <div style={{ background: "url(/img/footerBg.png)" }} className="w-full min-h-[776px] opacity-[50%] !bg-cover !bg-center !bg-no-repeat absolute top-0 left-0 z-[0]">
            </div>
            <div className="relative z-10 w-full flex flex-col justify-center items-center px-4 md:px-6" >
                <div className="w-full max-w-[1450px] flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 [&>div>p]:text-lg md:[&>div>p]:text-xl lg:[&>div>p]:text-[26px] py-12 md:py-20 lg:py-28 border-b border-white" >
                    <div className="flex flex-col gap-6 md:gap-8 max-w-full lg:max-w-[445px] !border-0" >
                        <p className="!text-2xl md:!text-3xl lg:!text-4xl font-bold" >
                            <span className="font-extrabold" >PRO</span>TINGENT INDIA LLP
                        </p>
                        <div className="flex gap-3 md:gap-4 items-start" >
                            <Image
                                src={"/img/addressIcon.svg"}
                                height={35}
                                width={35}
                                alt=""
                                className="min-w-[30px] md:min-w-[40px] h-[30px] md:h-[40px] mt-1"
                            />
                            <p className="text-base md:text-lg lg:text-2xl leading-relaxed" >
                                4th floor, Jaipur Centre, 420, Tonk Rd, Choti Chopad, Chandrakala Colony, Durgapura, Jaipur, Rajasthan 302018
                            </p>
                        </div>
                        <div className="flex gap-3 md:gap-4 items-center" >
                            <Image
                                src={"/img/emailIcon.png"}
                                height={40}
                                width={40}
                                alt=""
                                className="min-w-[30px] md:min-w-[40px] h-[30px] md:h-[40px]"
                            />
                            <Link href="mailto:connect@protingentindia.com">
                                <p className="text-base md:text-lg lg:text-2xl hover:text-primary-green-color transition-colors" >
                                    connect@protingentindia.com
                                </p>
                            </Link>
                        </div>
                        <div className="flex gap-3 md:gap-4 items-center" >
                            <Image
                                src={"/img/callIcon.png"}
                                height={40}
                                width={40}
                                alt=""
                                className="min-w-[30px] md:min-w-[40px] h-[30px] md:h-[40px]"
                            />
                            <div>
                                <Link href={'tel:+911412990687'}>
                                    <p className="text-base md:text-lg lg:text-2xl hover:text-primary-green-color transition-colors" >
                                        +91 141 299 0687
                                    </p>
                                </Link>
                                <Link href={'tel:+919119102197'}>
                                    <p className="text-base md:text-lg lg:text-2xl hover:text-primary-green-color transition-colors" >
                                        +91 91191 02197
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 lg:flex lg:justify-between w-full lg:w-auto">
                        <div>
                            <p className="mb-4 md:mb-6">
                                Services
                            </p>
                            <div className="text-sm md:text-base lg:text-xl border-l pl-4 md:pl-6 pt-4 md:pt-6 lg:pt-12 pb-8 md:pb-12 lg:pb-16 border-white flex flex-col gap-1 md:gap-2 ">
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">
                                    RPO
                                </p>
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">
                                    FTE Hiring
                                </p>
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">
                                    Contract Staffing
                                </p>
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">
                                    IT Consulting
                                </p>
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">
                                    Marketing Solutions
                                </p>
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">
                                    BI DATA Visualization
                                </p>
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">
                                    Product Development
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="mb-4 md:mb-6">
                                Industries
                            </p>
                            <div className="text-sm md:text-base lg:text-xl border-l pl-4 md:pl-6 py-4 md:py-6 lg:py-10 border-white flex flex-col gap-1 md:gap-2 ">
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">
                                    Healthcare
                                </p>
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">
                                    Engineering
                                </p>
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">
                                    Startups
                                </p>
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">
                                    Consumer Goods & Retail
                                </p>
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">
                                    IT, Technology & Software
                                </p>
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">
                                    Life Sciences & Pharmaceutical
                                </p>
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">
                                    Manufacturing & Distribution
                                </p>
                                <p className="hover:text-primary-green-color transition-colors cursor-pointer">  
                                    Professional Services
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="mb-4 md:mb-6">
                                Company
                            </p>
                            <div className="text-sm md:text-base lg:text-xl border-l pl-4 md:pl-6 pt-4 md:pt-6 lg:pt-12 pb-12 md:pb-24 lg:pb-36 border-white flex flex-col gap-1 md:gap-2 ">
                                <Link href={"/"} >
                                    <p className="hover:text-primary-green-color transition-colors">
                                        Home
                                    </p>
                                </Link>
                                <Link href={"/about"} >
                                    <p className="hover:text-primary-green-color transition-colors">
                                        About Us
                                    </p>
                                </Link>
                                <Link href={"/insights"} >
                                    <p className="hover:text-primary-green-color transition-colors">
                                        insights
                                    </p>
                                </Link>
                                <Link href={"/contact"} >
                                    <p className="hover:text-primary-green-color transition-colors">
                                        Contact Us
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 w-full max-w-[1450px] py-8 md:py-14" >
                    <div className="flex gap-6 md:gap-11 order-2 md:order-1" >
                        <Icon
                            icon="ri:facebook-fill"
                            height={28}
                            width={28}
                            className="text-white hover:text-primary-green-color transition-colors cursor-pointer md:h-9 md:w-9"
                        />
                        <Icon
                            icon="ri:youtube-fill"
                            height={28}
                            width={28}
                            className="text-white hover:text-primary-green-color transition-colors cursor-pointer md:h-9 md:w-9"
                        />
                        <Link href="https://www.linkedin.com/company/protingent-india-llp/" target="new">
                            <Icon
                                icon="ri:linkedin-fill"
                                height={28}
                                width={28}
                                className="text-white hover:text-primary-green-color transition-colors md:h-9 md:w-9"
                            />
                        </Link>
                        <Icon
                            icon="ri:twitter-fill"
                            height={28}
                            width={28}
                            className="text-white hover:text-primary-green-color transition-colors cursor-pointer md:h-9 md:w-9"
                        />
                        <Icon
                            icon="grommet-icons:reddit"
                            height={28}
                            width={28}
                            className="text-white hover:text-primary-green-color transition-colors cursor-pointer md:h-9 md:w-9"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <p className="text-sm md:text-base text-center">
                            © 2025 Protingent India LLP | All Right reserved
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 order-3 text-center" >
                        <Link href={"/privacy-policy"} >
                            <p className="text-sm md:text-base hover:text-primary-green-color transition-colors">
                                Privacy Policy & Cookies
                            </p>
                        </Link>
                        <Link href={"/terms-condition"} >
                            <p className="text-sm md:text-base hover:text-primary-green-color transition-colors">
                                Terms & Conditions
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;