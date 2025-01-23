import React, { useState } from 'react'
import './Forget.css'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



export const Forget = () => {
    const navigate = useNavigate()
    const auth = getAuth();
    const [email, setEmail] = useState("");

      const handleEmailReset =(e)=>{
        setEmail(e.target.value)
      }
     const handleSubmit = async (e)=>{
           e.preventDefault()
        sendPasswordResetEmail(auth,email)
        .then(() => {
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
            <div>
                <h1 className='forgetHeader'>Forget Password</h1>

                 <form onSubmit={handleSubmit} action="">
                       <label className='enterE' htmlFor="">Enter email</label>
                      <input value={email} onChange={handleEmailReset} className='forgetIn' type="email" placeholder='Enter your email' />

                        <button className='Reset'>Reset</button>
                 </form>
            </div>
       </div>

       <ToastContainer />
    </>
  )
}
