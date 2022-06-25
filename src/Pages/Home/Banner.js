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
                    <SwiperSlide className='slide-1'>
                        {({ isActive }) => (
                            <div>{isActive ? <div>
                                <div className='relative ml-[-600px]'>
                                    <h1 className='text-7xl text-white font-bold'>Cox's Bazaar</h1>
                                    <p className='text-left w-[455px] my-4 text-white'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and...</p>
                                    <button className='btn btn-primary font-bold'>Book Now</button>
                                </div>
                                <div className='slide-bg'>
                                    <h1 className='text-2xl absolute bottom-8 left-4 font-bold text-white tracking-wider'>COX'S BAZAAR</h1>
                                </div>
                            </div> : <div className='slide-bg'>
                                <h1 className='text-2xl absolute bottom-8 left-4 font-bold text-white tracking-wider'>COX'S BAZAAR</h1>
                            </div>}</div>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className='slide-2'>
                        {({ isActive }) => (
                            <div>{isActive ? <div>
                                <div className='relative ml-[-750px]'>
                                    <h1 className='text-7xl text-white font-bold'>Sajek</h1>
                                    <p className='text-left w-[455px] my-4 text-white'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and...</p>
                                    <button className='btn btn-primary font-bold'>Book Now</button>
                                </div>
                                <div className='slide-bg'>
                                    <h1 className='text-2xl absolute bottom-8 left-4 font-bold text-white tracking-wider'>SAJEK</h1>
                                </div>
                            </div> : <div className='slide-bg'>
                                <h1 className='text-2xl absolute bottom-8 left-4 font-bold text-white tracking-wider'>SAJEK</h1>
                            </div>}</div>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className='slide-3'>
                        <div className='slide-bg'>
                            <h1 className='text-2xl absolute bottom-8 left-4 font-bold text-white tracking-wider'>SREEMONGOL</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slide-4'>
                        <div className='slide-bg'>
                            <h1 className='text-2xl absolute bottom-8 left-4 font-bold text-white tracking-wider'>SUNDARBON</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;