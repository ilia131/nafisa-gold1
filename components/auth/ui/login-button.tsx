
const LoginButton = ({children}:{children:string}) => {
  return (
    <button 
     type="submit"
     aria-label="login-button"
     className='bg-[#336655]   w-full h-12 rounded-xl text-center text-[14px] text-[#FFFFFF]' >
    {children}
   </button> 
  )
}

export default LoginButton