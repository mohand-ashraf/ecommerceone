import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Banner = () => {

    const theme = useSelector((state) => state.category.theme);

    return (
        <div className={`${theme === "dark" ? "dark" : ""}`}>
            <div className='banner xs:pt-[180px] sm:pt-[180px] sml:pt-[180px] md:pt-[138px] mdl:pt-[138px] lg:pt-[138px] xl:pt-[138px] lxl:pt-[138px] lgl:pt-[138px] pt-[138px] bg-white dark:bg-bgall'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Link className='w-[100%]'>
                            <img src="/images/1.avif" alt='slider1' width="1440px" height="100%" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link className='w-[100%]'>
                            <img src="/images/2.avif" alt='slider2' width="1440px" height="100%" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link className='w-[100%]'>
                            <img src="/images/3.avif" alt='slider3' width="1440px" height="100%" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link className='w-[100%]'>
                            <img src="/images/4.avif" alt='slider4' width="1440px" height="100%" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link className='w-[100%]'>
                            <img src="/images/5.avif" alt='slider5' width="1440px" height="100%" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link className='w-[100%]'>
                            <img src="/images/6.avif" alt='slider6' width="1440px" height="100%" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link className='w-[100%]'>
                            <img src="/images/7.avif" alt='slider7' width="1440px" height="100%" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link className='w-[100%]'>
                            <img src="/images/8.avif" alt='slider8' width="1440px" height="100%" />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Banner