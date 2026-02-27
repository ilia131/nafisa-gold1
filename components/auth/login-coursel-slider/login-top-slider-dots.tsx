'use client'

import { SliderDotsProps } from "../types/login-top-slider-dots-props"

const SliderDots = ({carouselItems, activeIndex}:SliderDotsProps) => {
  return (
    <div className="flex items-center gap-2">
     {carouselItems.map((_, index) => (
      <div
        key={index}
        className={`rounded-full transition-all ${
          index === activeIndex
            ? 'w-4 h-2 bg-[#003322]'
            : 'w-4 h-2 bg-[#B3B3B3]'
        }`}
      />
      ))}
      </div>
  )
}

export default SliderDots