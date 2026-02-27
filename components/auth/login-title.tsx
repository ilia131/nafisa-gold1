import Image from "next/image"
import { LoginTitleProps } from "./types/login-title-props"
const LoginTitle = ({images , title}:LoginTitleProps) => {
  return (
    <div className='flex flex-col gap-2 items-center  w-full'>
    <div className=' px-[65.5px]  mx-8'>
        <Image alt='authtext' src={images.authtext4} />
    </div>
    <p className='text-[14px] max-[376px]:text-[12px] font-sm text-[#999999]'>{title}</p>
   </div>
  )
}

export default LoginTitle