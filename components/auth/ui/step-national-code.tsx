import NationalCodeIcons from "@/public/icons/NationalCodeIcons"
import { Field } from "formik"
const StepNationalCode = () => {
  return (
    <div className='flex gap-1 items-center  h-14  px-3  border border-[#E6E6E6] rounded-xl'>
    <div className='flex items-center gap-2'>
        <NationalCodeIcons />
        <label id='text' className='text-[14px] text-[#666666]'>کدملی</label>		
    </div>
    <Field 
         name="nationalCode"
         type="text"
         className='border-none focus:outline-none bg-transparent w-full 
         text-[14px] text-[#666666] px-1 placeholder:text-[#a6a6a6]'  
         placeholder='کد ملی را وارد کنید' 
     />
     
     </div>
  )
}

export default StepNationalCode