'use client'

import type { StaticImageData } from 'next/image';
import carouselItem1 from '@/public/images/login-carousel-item-1.svg';
import carouselItem2 from '@/public/images/login-carousel-item-2.svg';
import carouselItem3 from '@/public/images/login-carousel-item-3.svg';
import carouselItem4 from '@/public/images/login-carousel-item-4.svg';

export interface CarouselItem {
  readonly id: number;
  readonly image: StaticImageData;
  readonly title: string;
  readonly subtitle: string;
}

export const loginCarouselItems: CarouselItem[] = [
  {
    id: 1,
    image: carouselItem1,
    title: 'آینده بازار طلا را امروز ببینید',
    subtitle: 'تحلیل طلا با هوش‌مصنوعی , اولین بار در نفیسا گلد',
  },
  {
    id: 2,
    image: carouselItem2,
    title: 'طلاهاتو از این جیب به اون جیب ببر',
    subtitle: 'جابجایی پول بین کیف‌ پول‌ها',
  },
  {
    id: 3,
    image: carouselItem3,
    title: 'اعتباری طلا بخر، نقدی با سود بفروش',
    subtitle: 'امکان کسب درآمد از دیجی کالا',
  },
  {
    id: 4,
    image: carouselItem4,
    title: 'طلا همیشه در دسترس',
    subtitle: 'خرید طلا از نفیسا بدون محدودیت زمانی',
  },
];