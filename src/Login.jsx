import React, { useRef } from 'react'
import { MdDriveFileRenameOutline } from "react-icons/md";
const Login = () => {
  // correct useref of inilization
  const email=useRef()
  const password=useRef()
  

  const Submit=async(event)=>{
    event.preventDefault()
    
    const FormData={
     
      email:email.current.value,
      password:password.current.value

    }
    try {
      const response=await fetch("http://localhost:3000/api/v1/login",{
        method:"POST",
headers:{
  "Content-Type":"application/json",
},
body:JSON.stringify(FormData)
      })

      if (!response.ok) {
        const errdata=await response.json()
        throw new error(err||"registraion failed")
      }
      const data =await response.json()
      console.log("register successfully");
      
    } catch (err) {
      console.log("network error",err.message);
      
    }
  }
  return (
    <>
    <div className='gap-5 flex   justify-center items-center min-h-screen px-4 '>
      <div className='w-full max-md p-8 space-y-8' >


      <h1 className='flex justify-center'> Login</h1>

    <form  className='flex justify-center  gap-6' onSubmit={Submit}>
    
 
<label class="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    class="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg><br /><br />
  <input type="text" class="grow" placeholder="Email" ref={email} />
</label>

<label class="input input-bordered flex items-center gap-2">
  <svg
    // xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    class="h-4 w-4 opacity-70">
    <path
      fill-rule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clip-rule="evenodd" />
  </svg><br /><br />
  <input type="password" class="grow"  ref={password} />
</label>
<button class="    btn btn-active btn-neutral text-center" type='submit'>Register</button></form>
      </div>
      </div>
    </>
    
  )
}

export default Login