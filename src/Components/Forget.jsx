import React, { useState } from 'react'
import './Forget.css'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';



export const Forget = () => {
    const navigate = useNavigate()
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [loader,setLoader] = useState(false)

      const handleEmailReset =(e)=>{
        setEmail(e.target.value)
      }
     const handleSubmit = async (e)=>{
           e.preventDefault()
           setLoader(true)
        sendPasswordResetEmail(auth,email)
        .then(() => {
          setLoader(false)
            setEmail('')
            setTimeout(()=>{
                navigate('/signIn')
            },2500)
                           toast.success('Email verification Send', {
                               position: "top-right",
                               autoClose: 5000,
                               hideProgressBar: false,
                               closeOnClick: false,
                               pauseOnHover: true,
                               draggable: true,
                               progress: undefined,
                               theme: "light",
                               // transition: Bounce,
                               });
        })
        .catch((error) => {
          setLoader(false)
          console.log(error);
                          toast.error('Enter correct email', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                // transition: Bounce,
                                });
          
        });
     }
  return (
    <>
       <div className='Forget'>
            <div className=' bg-black p-4 text-center text-white ForgetSmall'>
                <h1 className='forgetHeader'>Forget Password</h1>
                   <p className='text-white py-3 forgetText'>With that email you registered that's the email enter the fields below.</p>
                 <form onSubmit={handleSubmit} action="">
                      <input value={email} onChange={handleEmailReset} className='forgetIn' type="email" placeholder='Enter your email'  required/>

                        <button className='Reset'>
                          {
                            loader?<PulseLoader size={5} color='black' />:"Reset"
                          }
                          </button>
                 </form>
            </div>
       </div>

       <ToastContainer />
    </>
  )
}
