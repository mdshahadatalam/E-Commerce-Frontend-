import React, { useEffect, useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ShowNav } from '../Components/ShowNav';

import { Link, useNavigate } from 'react-router-dom';

import { RxCross2 } from "react-icons/rx";
import { useFormik } from 'formik';
import { signIn, signUp } from '../Validation/Validation';

import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch} from 'react-redux';
import { loggedInUser } from '../Feuature/Slice/LoginSlice';
import { PulseLoader } from 'react-spinners';
import { Google } from '../Components/Google';
import { Footer } from './Footer';







export const SignIn = () => {
     const auth = getAuth();
     const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate()
     const dispatch = useDispatch()
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
            signInUser()
               resetForm({values:''})
          },
          validationSchema:signIn

       })

       const signInUser =()=>{
          // console.log(formik.values);
          setLoader(true)
          signInWithEmailAndPassword(auth,formik.values.email, formik.values.password)
          .then((user) => {
            console.log("signIn");
            setLoader(false)

            if(user.user.emailVerified == true){
              dispatch(loggedInUser(user))
              localStorage.setItem("user",JSON.stringify(user))
              navigate('/')

               toast.success('welcome🥰', {
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
            }else{
               toast.error('Your email is not verified', {
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
            }
            
          })
          .catch((error) => {
            setLoader(false)
            console.log(error);
            if(error.message.includes('auth/invalid-credential')){
              toast.error('Email or Password Incorrect', {
                 position: "top-right",
                 autoClose: 1000,
                 hideProgressBar: true,
                 closeOnClick: true,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
                 theme: "light",
                 
                 });
                }
            
          });
          
       }




  return (
   <>

  

   <section className='signup'>
    <div className="container">
         <div className="row ">
              <div className="col-lg-3"></div>
              <div className="col-lg-6 inpoSec">

              <div>
               <span onClick={handleClose} className='iconsCross'><RxCross2 /></span>
             </div>
                   <div className='text-center'>
                   <h4 className='signUp'>Sign in new journey</h4>


                   <form onSubmit={formik.handleSubmit} action="">
                            

                        <input
                         className='SignInInput my-2'
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

                           <br />

                        <input 
                        className='SignInInput my-2'
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




                          <div className='my-2'>
                          <button  type='submit' className='submit shadow-lg'>
                           {
                             loader?<PulseLoader size={5} color='white' />: " Submit"
                           }
                          
                           </button>
                          </div>
                              </form>
                        


                          
                   </div>
                      <p className='have m-0 py-1'> <Link className='PageLink' to={'/forget'}>Forget password?</Link> </p>
                    <p className='have m-0'>Don't have a account? <Link className='PageLink' to={'/signUp'}>Sign up</Link> </p>

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
