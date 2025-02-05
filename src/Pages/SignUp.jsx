import React, { useEffect, useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ShowNav } from '../Components/ShowNav';

import { Link, useNavigate } from 'react-router-dom';
import { use } from 'react';


import { useFormik } from 'formik';
import { signUp } from '../Validation/Validation';

import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

import { getAuth, createUserWithEmailAndPassword,sendEmailVerification  } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import { Google } from '../Components/Google';
import { RxCross2 } from 'react-icons/rx';



export const SignUp = () => {
     const auth = getAuth();
     const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate()
     const [loader,setLoader] = useState(false)

   const handleClose =() =>{
    navigate('/')
   }


     useEffect( ()=>{
         Aos.init();
       })   

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };





       const initialValues ={
          name:'',
          phone:'',
          email:'',
          password:''
       }
       
       const formik = useFormik({
          initialValues,
          onSubmit: (values,{resetForm}) => {
               createdNewUser()
               resetForm({values:''})
          },
          validationSchema:signUp

       })

       const createdNewUser =()=>{
          // console.log(formik.values);
          setLoader(true)
          createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password)
  .then(() => {
     console.log("sign up");
     setLoader(false)
     sendEmailVerification(auth.currentUser)
       
     setTimeout(()=>{
      navigate('/signIn')
     },2000)


     toast.success('Email verification send', {
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
    setLoader(false)
    toast.error('Please try again', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    
  });
          
       }




  return (
   <>

   {/* ShowNav  */}
   <ShowNav/>



 {/* beuati section  */}
 





  <section className='signup'>
     <div className="container">
          <div className="row ">
               <div className="col-lg-2"></div>
               <div className="col-lg-8 inpoSec">
                        <div>
                            <span onClick={handleClose} className='iconsCross'><RxCross2 /></span>
                         </div>
                    <div className='text-center'>
                               <h4 className='signUp'>Sign up new journey</h4>


                               <form onSubmit={formik.handleSubmit} action="">
                               <input
                          className='SignUpInput my-2 mx-2'
                           type="text"
                            placeholder='Your full name' 
                            id='name'
                            name='name'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            />
                            {
                              formik.errors.name && formik.touched.name && <div className="text-red-500"> {formik.errors.name} </div>
                            }

                         <input
                          className='SignUpInput my-2 mx-2'
                           type="number"
                            placeholder='Your phone' 
                            id='phone'
                            name='phone'
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            />

                            {
                              formik.errors.phone && formik.touched.phone && <div className="text-red-500"> {formik.errors.phone} </div>
                            }

                         <input
                          className='SignUpInput my-2 mx-2'
                           type="email" 
                           placeholder=' Your email' 
                           id='email'
                           name='email'
                           onChange={formik.handleChange}
                           value={formik.values.email}
                           />
                           {
                              formik.errors.email && formik.touched.email && <div className="text-red-500"> {formik.errors.email} </div>
                            }

                         <input 
                         className='SignUpInput my-2 mx-2'
                          type={showPassword ? "text" : "password"}
                           placeholder='New password'
                           id='password'
                           name='password'
                           onChange={formik.handleChange}
                           value={formik.values.password}
                           
                            />
                            {
                              formik.errors.password && formik.touched.password && <div className="text-red-500"> {formik.errors.password} </div>
                            }
                            
                            <div>
                               <button
                               className="Icon"
                               type="button"
                               onClick={togglePasswordVisibility} >
                               {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                               </button>
                            </div>




                           <div className='my-3'>
                           <button  type='submit' className='submit'>
                            {
                              loader? <PulseLoader size={5} color='white' />: "Submit"
                            }
                          
                            </button>
                           </div>
                               </form>
                         

 
                           
                    </div>
                     <p className='have'>Have a account? <Link className='PageLink'  to={'/SignIn'}>Sign In</Link></p>

                     <Google/>
               </div>
               <div className="col-lg-2"></div>
                
          </div>
     </div>
    </section> 



<ToastContainer />

   </>
  )
}
