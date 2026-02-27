import { carouselItemProps } from "./carouselItemsProps"
import type { Swiper as SwiperType } from 'swiper';

export interface SwiperSliderProps {
    carouselItems: carouselItemProps[]
    handleSlideChange : (swiper : SwiperType) => void
}
