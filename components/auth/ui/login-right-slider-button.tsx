import { ChevronRight } from 'lucide-react';

const SliderButton = () => {
  return (
    <button
    className="login-carousel-next absolute top-4  right-4 z-20 flex items-center justify-center w-8
     h-8 rounded-full bg-transparent transition-colors hover:bg-gray-100"
    aria-label="Next slide"
    >
       <ChevronRight size={24} className="text-gray-600" />
   </button>
  )
}

export default SliderButton