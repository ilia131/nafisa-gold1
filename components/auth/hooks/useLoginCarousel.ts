'use client'
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';

export function useLoginCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return {
    activeIndex,
    handleSlideChange,
  };
}