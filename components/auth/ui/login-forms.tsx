'use client'
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginButton from "./login-button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { nextStep , LoginStep } from "@/redux/features/auth/login/loginSlice";
import StepNationalCode from "./step-national-code";
import StepPhone from "./step-phone-number";

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const step = useAppSelector((state) => state.login.step);
 
    const validationSchemas = [
        Yup.object({
          nationalCode: Yup.string()
            .length(10, 'کد ملی باید ۱۰ رقم باشد')
            .required('کد ملی الزامی است'),
        }),
        Yup.object({
          phone: Yup.string()
            .required('شماره موبایل الزامی است'),
        }),
      ];
    

  return (
   <>
   <Formik 
      initialValues={{
        nationalCode: '',
        phone: '',
      }}
      validationSchema={validationSchemas[step]}
      onSubmit={(values) => {
        if (step === LoginStep.Phone) {
          console.log('Final Submit:', values);
          return;
        }

        dispatch(nextStep());
      }}
        
  >
           {() => (
    <Form className='w-full px-12    flex flex-col  mt-8'>     
                {step === LoginStep.NationalCode && <StepNationalCode />}
                {step === LoginStep.Phone && (<StepPhone  />)}
      <div className="h-6 pr-3.5 flex items-center">
            {step === LoginStep.NationalCode && (
              <ErrorMessage
                name="nationalCode"
                component="div"
                className="text-red-500 text-[12px]"
              />
            )}

            {step === LoginStep.Phone && (
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-[12px]"
              />
            )}
          </div>
       <LoginButton >
         {step === LoginStep.Phone ? 'قبول شرایط و ادامه' : 'ادامه'}
       </LoginButton>
      </Form>
          )}
    </Formik>
    {step === LoginStep.Phone && (
      <div className="w-full flex justify-center text-[12px] mt-2">
         <p>ورود به منزله مطالعه پذیرش <a className="text-blue-700 text-[13px] border-b border-blue-700">قوانین و مقررات</a> نفیسا گلد میباشد.</p>
      </div>
    )}
   </>
  )
}

export default LoginForm