"use client"
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon, EllipsisText } from '@/components';
import { industriesSliderData } from '@/utils/constants';
import { useBreakpoint } from '@/hook';
import 'swiper/css';

// --------------------------------------------------------------------

const IndustriesSlider = () => {
    const swiperRef = useRef<any>(null);
    const { xs, lg, lap, desk } = useBreakpoint();
    const [selectedIndustrie, setSelectedIndustrie] = useState<any>({ index: 0, data: industriesSliderData[0] });

    const handleSlidingCards = (btn: string) => {
        if (btn === "prev") {
            swiperRef.current?.slidePrev()
        } else {
            swiperRef.current?.slideNext()
        }
    }

    return (
        <div
            id="industries-slider"
            className='flex flex-col xl:flex-row justify-center items-center xl:items-end gap-8 w-full p-4 bg-gradient-to-br from-gray-50 via-white to-blue-50'
        >
            {/* Desktop Navigation */}
            <div
                id='slider-pagination'
                className='h-full w-fit hidden xl:flex justify-end gap-2 items-end mb-10'
            >
                <div
                    className='border-2 border-lime-400 hover:border-teal-500 w-[63px] h-[63px] flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white hover:bg-lime-50'
                    onClick={() => handleSlidingCards('prev')}
                >
                    <Icon
                        icon='material-symbols-light:double-arrow-rounded'
                        height={32}
                        width={32}
                        className='rotate-180 text-navy-600'
                    />
                </div>
                <div
                    className='border-2 border-lime-400 hover:border-teal-500 w-[63px] h-[63px] flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white hover:bg-lime-50'
                    onClick={() => handleSlidingCards('next')}
                >
                    <Icon
                        icon='material-symbols-light:double-arrow-rounded'
                        height={32}
                        width={32}
                        className='text-navy-600'
                    />
                </div>
            </div>

            <div className='w-full md:w-[80%] lg:w-[90%] 3xl:w-full max-w-[1500px] flex flex-col items-center lap:items-start 3xl:items-center gap-10 lg:gap-8' >
                {/* Enhanced Header Section */}
                <div className='w-full flex flex-col gap-4' data-aos="fade-up">
                    <h2 className='text-3xl 3xl:text-5xl font-bold font-lato text-navy-600 w-fit border-b-4 border-dotted border-lime-400' >
                        Industries We Transform with Innovation
                    </h2>
                    <p className='text-lg lg:text-xl font-raleway text-gray-700 max-w-4xl leading-relaxed' data-aos="fade-up" data-aos-delay="200">
                        We empower diverse industries with tech-enabled staffing, consulting, and digital solutions that reshape operations, improve efficiency, and unlock sustainable growth in an evolving tech-savvy world.
                    </p>
                </div>

                <div className='flex w-full xl:max-w-[1150px] max-w-[1300px] 3xl:!max-w-[1300px]' >
                    <div className='w-full flex flex-col gap-[40px] lg:gap-[80px]' >
                        {/* Main Content Display */}
                        <div className='flex flex-col-reverse lg:flex-row gap-8 items-center justify-between' data-aos="zoom-in">
                            <div className='text-navy-600 w-full lg:w-2/4 flex flex-col gap-8' >
                                <h3 className='text-4xl lg:text-5xl lap:!text-6xl 3xl:text-[80px] font-extrabold font-lato' >
                                    {selectedIndustrie?.data?.title || ""}
                                </h3>
                                <p className='text-xl 3xl:text-2xl font-raleway leading-relaxed text-justify text-gray-700' >
                                    {selectedIndustrie?.data?.desc || ""}
                                </p>
                                <div>
                                    <div className='px-6 py-3 text-xl font-semibold flex gap-3 items-center bg-gradient-to-r from-lime-400 to-teal-500 hover:from-teal-500 hover:to-lime-400 text-navy-600 w-fit rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group' >
                                        <span>Read More</span>
                                        <Icon
                                            icon='ph:arrow-right-fill'
                                            className="group-hover:translate-x-1 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-2/4 flex justify-center lg:justify-end'>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-navy-600/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                                    <Image
                                        src={selectedIndustrie?.data?.img || "/img/healthCareInd.png"}
                                        alt={selectedIndustrie?.data?.title || "Industry"}
                                        height={576}
                                        width={576}
                                        className='relative z-10 w-full max-w-[576px] rounded-3xl shadow-xl object-cover aspect-[4/3] group-hover:shadow-2xl transition-shadow duration-300'
                                        priority
                                    />
                                    {/* Gradient overlay for better text readability */}
                                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-navy-600/30 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>

                        {/* Industry Cards Slider */}
                        <div className='w-full overflow-hidden' data-aos="fade-up" data-aos-delay="400">
                            <div className='w-full overflow-x-scroll no-scrollbar' >
                                <div
                                    id='slider-wrapper'
                                    className='w-full flex duration-1000'
                                >
                                    <Swiper
                                        slidesPerView={lap ? 4 : lg ? 3 : 2}
                                        spaceBetween={desk ? 60 : lap ? 40 : lg ? 35 : xs ? 20 : 60}
                                        loop={true}
                                        onBeforeInit={(swiper) => {
                                            swiperRef.current = swiper;
                                        }}
                                        className="mySwiper"
                                    >
                                        {industriesSliderData?.map((el: any, index: number) => (
                                            <SwiperSlide key={index} >
                                                <div
                                                    key={index}
                                                    onClick={() => setSelectedIndustrie({ index, data: el })}
                                                    className={`slide-card flex flex-col items-start gap-3 border-t-4 py-6 lap:min-w-[230px] 3xl:min-w-[280px] max-w-[280px] cursor-pointer transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg rounded-lg p-4
                                                ${selectedIndustrie?.index === index 
                                                    ? "border-lime-400 text-navy-600 bg-gradient-to-br from-lime-50 to-teal-50 shadow-md" 
                                                    : "text-teal-600 border-teal-500 hover:border-lime-400 hover:text-navy-600 bg-white hover:bg-gradient-to-br hover:from-lime-50 hover:to-teal-50"
                                                }
                                            `}
                                                >
                                                    <h4 className='text-2xl lg:text-[28px] font-bold font-lato'>
                                                        {el?.title || ""}
                                                    </h4>
                                                    <EllipsisText
                                                        text={el?.desc || ""}
                                                        className='text-lg font-raleway leading-relaxed'
                                                    />
                                                    
                                                    {/* Active indicator */}
                                                    {selectedIndustrie?.index === index && (
                                                        <div className="mt-2 flex items-center gap-2">
                                                            <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
                                                            <span className="text-sm font-medium text-navy-600">Active</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                id='slider-pagination'
                className='h-full w-fit flex xl:!hidden justify-end gap-2 items-end mb-10'
            >
                <div
                    className='border-2 border-lime-400 hover:border-teal-500 w-[63px] h-[63px] flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white hover:bg-lime-50'
                    onClick={() => handleSlidingCards('prev')}
                >
                    <Icon
                        icon='material-symbols-light:double-arrow-rounded'
                        height={32}
                        width={32}
                        className='rotate-180 text-navy-600'
                    />
                </div>
                <div
                    className='border-2 border-lime-400 hover:border-teal-500 w-[63px] h-[63px] flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white hover:bg-lime-50'
                    onClick={() => handleSlidingCards('next')}
                >
                    <Icon
                        icon='material-symbols-light:double-arrow-rounded'
                        height={32}
                        width={32}
                        className='text-navy-600'
                    />
                </div>
            </div>
        </div >
    )
}

export default IndustriesSlider;