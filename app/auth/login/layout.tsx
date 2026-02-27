import SliderButton from '@/components/auth/ui/login-right-slider-button';
import LoginCarouselContainer from '@/components/auth/login-coursel-slider/login-coursel-countainter';
import images from '@/public/images'
import LoginTitle from '@/components/auth/login-title';

export default function AuthLayout({children}: {children:React.ReactNode}) {
    return (
    <main className="w-full">
        <div className="flex w-107.5 h-screen flex-col items-center  pt-10 mx-auto ">
                <SliderButton />
                <LoginCarouselContainer />
              <div className='w-full pt-10 mt-2 flex flex-col items-center
                border-t rounded-t-[40px] border-[#F2F2F2] shadow-[0_-4px_10px_rgba(0,0,0,0.1)]
                '>
                <LoginTitle  
                    images={images} 
                    title="جهت ورود، لطفا کدملی و در ادامه شماره موبایل خود را وارد کنید." 
                  />
                    {children}
              </div>
            </div>
     </main>
    )
}