'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { SwiperSliderProps } from '../types/login-swiper-slider-items-props';


const SwiperSlider = ({carouselItems , handleSlideChange}:SwiperSliderProps) => {
  return (
    <div className=" flex items-center justify-center w-full max-w-100 pt-4">

        <div className="w-full max-w-87">
                 <Swiper
                            modules={[Autoplay, Navigation]}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            navigation={{
                                nextEl: '.login-carousel-next',
                            }}
                            loop
                            slidesPerView={1}
                            className="login-carousel"
                            onSlideChange={handleSlideChange}
                            key="ltr-swiper"
                        >
                            {carouselItems.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="relative w-full bg-white">
                                        <div className="h-[clamp(170px,30vh,380px)] w-full flex items-center justify-center">
                                            <Image
                                                src={item.image}
                                                alt={`Login carousel ${item.id}`}
                                                className="h-full w-auto max-w-full object-cover"
                                            />
                                        </div>
                                        <div className="mx-4  text-center  ">
                                            <p className="text-[20px]  font-bold text-[#013B28] mb-1">
                                                {item.title}
                                            </p>
                                            <p className="text-[16px]  font-bold text-[#000000]">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                      </div>
  )
}

export default SwiperSlider