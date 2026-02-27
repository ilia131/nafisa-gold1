'use client'
import MobileNumberIcons from "@/public/icons/MobileNumberIcons"
import { Field } from "formik"
const StepPhone = () => {
  return (
    <> 
     <div className="gap-4 flex flex-col">
     <div className='flex gap-1 items-center  h-12 border border-[#B1D1C7] bg-[#b1d1c745]  rounded-xl pr-6 pl-7 justify-between'>
        <p className="text-[16px] text-[#478570] font-medium">12345678</p>
        <p className="text-[16px] text-[#478570] font-medium">ویرایش</p>
     </div>
      <div className='flex gap-1 items-center  h-13.5 border border-[#E6E6E6] rounded-xl pr-3 '>
        <div className='flex items-center gap-2 w-23.5  justify-between'>
         <MobileNumberIcons />
         <label id='text' className='text-[14px] text-[#666666] font-medium'>شماره موبایل</label>		
     </div>
     <Field 
         name="phone"
         type="text"
         className='border-none focus:outline-none bg-transparent h-full 
         text-[14px] text-[#666666] px-1 placeholder:text-[#a6a6a6]'  
         placeholder='شماره موبایل خود را وارد کنید'
     />
     </div>
     
     </div>
  
   </>
  )
}

export default StepPhone