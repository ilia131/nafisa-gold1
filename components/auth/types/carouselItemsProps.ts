import { StaticImageData } from "next/image";

export interface carouselItemProps {
   readonly id: number;
   readonly image: StaticImageData;
   readonly title : string;
   readonly subtitle: string;
}


