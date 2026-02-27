'use client'

import { loginCarouselItems } from '../data/login.coursel.data';
import { useLoginCarousel } from '../hooks/useLoginCarousel';
import SliderDots from '@/components/auth/login-coursel-slider/login-top-slider-dots';
import SwiperSlider from '@/components/auth/login-coursel-slider/login-swiper-slider-items';

export default function LoginCarouselContainer() {
  const { activeIndex, handleSlideChange } = useLoginCarousel();

  return (
    <>
      <SliderDots
        activeIndex={activeIndex}
        carouselItems={loginCarouselItems}
      />

      <SwiperSlider
        carouselItems={loginCarouselItems}
        handleSlideChange={handleSlideChange}
      />
    </>
  );
}