import React, { useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import './Banner.css';

// install Virtual module
SwiperCore.use([Navigation]);

const Banner = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    return (
        <div>
            <div className='swiper-container'>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={9}
                    centeredSlides={true}
                    spaceBetween={30}
                    navigation={true}
                >
                    <SwiperSlide className='swiper-slider'>
                        {({ isActive }) => (
                            <div>{isActive ? <div className='slide-1'>
                                <div className='relative ml-[-600px]'>
                                    <h1 className='text-7xl text-white font-bold'>Cox's Bazaar</h1>
                                    <p className='text-left w-[455px] my-4 text-white'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and...</p>
                                    <button className='btn btn-primary font-bold'>Book Now</button>
                                </div>
                                <div className='slide-bg border-4 border-primary'>
                                    <h1 className='text-2xl absolute bottom-8 left-4 font-bold text-white tracking-wider'>COX'S BAZAAR</h1>
                                </div>
                            </div> : <></>}</div>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className='slide-2'>
                        {({ isActive }) => (
                            <div>{isActive ? <div>
                                <div className='relative ml-[-740px]'>
                                    <h1 className='text-7xl text-white font-bold'>Sajek</h1>
                                    <p className='text-left w-[455px] my-4 text-white'>Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.The valley is 2,000 feet (610 m) above sea level.Sajek Tripuri Valley is known as the Queen of Hills & Roof of Rangamati...</p>
                                    <button className='btn btn-primary font-bold'>Book Now</button>
                                </div>
                                <div className='slide-bg border-4 border-primary'>
                                    <h1 className='text-2xl absolute bottom-8 left-4 font-bold text-white tracking-wider'>SAJEK</h1>
                                </div>
                            </div> : <div className='slide-bg'>
                                <h1 className='text-2xl absolute bottom-8 left-4 font-bold text-white tracking-wider'>SAJEK</h1>
                            </div>}</div>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className='slide-3'>
                        {({ isActive }) => (
                            <div>{isActive ? <div className=''>
                                <div className='relative ml-[-860px] p-3 rounded w-[475px] bg-black bg-opacity-25'>
                                    <h1 className='text-7xl text-white font-bold'>Sreemangal</h1>
                                    <p className='text-left my-4 text-white'>Sreemangal (Bengali: শ্রীমঙ্গল, romanized: Srimongol) is an upazila of Moulvibazar District in the Sylhet Division of Bangladesh. Sreemangal is often referred to as the 'tea capital' of Bangladesh, and is most famous for its tea fields. Other than tea, the rubber, pineapple, wood, betel, and lemon industries also exist in the upazila...</p>
                                    <button className='btn btn-primary font-bold w-1/3'>Book Now</button>
                                </div>
                                <div className='slide-bg border-4 border-primary'>
                                    <h1 className='text-2xl absolute bottom-8 left-4 font-bold text-white tracking-wider'>SREEMANGAL</h1>
                                </div>
                            </div> : <div className='slide-bg'>
                                <h1 className='text-2xl absolute bottom-8 left-4 font-bold text-white tracking-wider'>SREEMANGAL</h1>
                            </div>}</div>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className='slide-4'>
                        {({ isActive }) => (
                            <div>{isActive ? <div>
                                <div className='relative ml-[-980px] rounded p-3 w-[475px] bg-black bg-opacity-25 overflow-hidden'>
                                    <h1 className='text-7xl text-white font-bold'>Sundarban</h1>
                                    <p className='text-left w-[455px] my-4 text-white'>Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal...</p>
                                    <button className='btn btn-primary font-bold w-1/3'>Book Now</button>
                                </div>
                                <div className='slide-bg border-4 border-primary'>
                                    <h1 className='text-2xl absolute bottom-8 left-4 font-bold text-white tracking-wider'>SUNDARBAN</h1>
                                </div>
                            </div> : <div className='slide-bg'>
                                <h1 className='text-2xl absolute bottom-8 left-4 font-bold text-white tracking-wider'>SUNDARBAN</h1>
                            </div>}</div>
                        )}
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;