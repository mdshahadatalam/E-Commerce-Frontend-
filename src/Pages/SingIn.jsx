import React, { useEffect, useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ShowNav } from '../Components/ShowNav';

import { GiEternalLove } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";

import product1 from '../assets/images/arobelaPro/Group 29.png'
import product2 from '../assets/images/arobelaPro/Group 30.png'
import product3 from '../assets/images/arobelaPro/product 3.png'
import product4 from '../assets/images/arobelaPro/product 4.png'

import item1 from '../assets/images/Items/Item 1.png'
import item2 from '../assets/images/Items/Item 2.png'
import item3 from '../assets/images/Items/Item 3.png'
import { Link, useNavigate } from 'react-router-dom';

import { RxCross2 } from "react-icons/rx";
import { useFormik } from 'formik';
import { signIn, signUp } from '../Validation/Validation';

import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loggedInUser } from '../Feuature/Slice/LoginSlice';
import { PulseLoader } from 'react-spinners';
import { Google } from '../Components/Google';
import { Footer } from './Footer';

import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";


import colths1 from '../assets/images/Colths/colths (1).jpg'
import colths2 from '../assets/images/Colths/colths (2).jpg'
import colths3 from '../assets/images/Colths/colths (3).jpg'
import colths4 from '../assets/images/Colths/colths (4).jpg'
import colths5 from '../assets/images/Colths/colths (5).jpg'
import colths6 from '../assets/images/Colths/colths (6).jpg'
import colths7 from '../assets/images/Colths/colths (7).jpg'
import colths8 from '../assets/images/Colths/colths (8).jpg'
import colths9 from '../assets/images/Colths/colths (9).jpg'
import colths10 from '../assets/images/Colths/colths (10).jpg'
import colths11 from '../assets/images/Colths/colths (11).jpg'
import colths12 from '../assets/images/Colths/colths (12).jpg'



export const SignIn = () => {
     const auth = getAuth();
     const [show,setShow] = useState(false)
     const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate()
     const dispatch = useDispatch()
     const [loader,setLoader] = useState(false)
   const handleClose =() =>{
     setShow(false)
   }

   const handleShow =()=>{
     setShow(true)
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

   {/* ShowNav  */}
   <ShowNav setShow={setShow}/>



   


 {/* beuati section  */}
 

 <section className='py-5'>
         <div className="container">
           <div className="row justify-content-center align-items-center">
           <div className="col-lg-5 ">
             <Link to={''}> <img onClick={handleShow} data-aos="zoom-in" data-aos-duration="1500" className='img-fluid' src={item1} alt="image" /></Link>
             <Link to={''}> <img onClick={handleShow} data-aos="zoom-in" data-aos-duration="1500" className='pt-4 img-fluid' src={item3} alt="image" /></Link>
           </div>
           <div className="col-lg-7 d-flex justify-content-center">
           <Link to={''}>   <img onClick={handleShow}  data-aos="zoom-in" data-aos-duration="1500" className='img-fluid pt-1' src={item2} alt="image" /></Link>
           </div>
           </div>
         </div>
       </section>

       {/* arobera  */}

       <section className='py-4'>
              <div className="container">
                
                 <div className='align-items-center d-flex justify-content-around py-4'>
                 <div>
                        <div> <span onClick={handleShow} className='py-2'><GiEternalLove /></span></div>
                       <div><span onClick={handleShow} className='py-2'><FaEye /></span></div>
                       <div><span onClick={handleShow} className='py-2'><BsBarChartLineFill /></span> </div>
                 </div>
       
                 <h4 className='new'>New Arrivals Products</h4>    </div> 
        
               <div className="row aroberaDirection ">
                 <div className="col-lg-3 aroberaRes ">
                   <Link to={''} className='link'> <img onClick={handleShow} className='img-fluid ProImg' src={product1} alt="image" /></Link>
                      <div className='IconPossi'>
                       <div> <Link to={''} className='link' > <span  onClick={handleShow} className='iconsWish'><GiEternalLove /></span></Link> </div>
                       <div> <Link to={''} className='link' > <span onClick={handleShow} className='iconsWish'><FaEye /></span></Link> </div>
                       <div> <Link to={''} className='link' > <span  onClick={handleShow}className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
                      </div>
                   <div>
                   <h4 className='price pt-1'>$150.65</h4>
                   <h4 className='lotion'>Lotion Shower gel</h4>
                   </div>
       
                 </div>
       
       
                 <div className="col-lg-3 aroberaRes ">
                  <Link to={''} className='link'>  <img onClick={handleShow} className='img-fluid' src={product2} alt="image" /></Link>
       
                   <span className='discount'>-45%</span>
                   <div className='IconPossi'>
                       <div> <Link to={''} className='link' > <span onClick={handleShow} className='iconsWish'><GiEternalLove /></span></Link> </div>
                       <div> <Link to={''} className='link' > <span onClick={handleShow} className='iconsWish'><FaEye /></span></Link> </div>
                       <div> <Link to={''} className='link' > <span onClick={handleShow} className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
                      </div>
                   <div>
                   <h4 className='price pt-1'>$250.65</h4>
                   <h4 className='lotion'>Argan Cream Body Butter</h4>
                   </div>
                 </div>
       
                 <div className="col-lg-3 aroberaRes ">
                   <Link to={''} className='link'> <img onClick={handleShow} className='img-fluid' src={product3} alt="image" /></Link>
                   <span className='discount'>50%</span>
                   <div className='IconPossi'>
                       <div> <Link to={''} className='link' > <span onClick={handleShow} className='iconsWish'><GiEternalLove /></span></Link> </div>
                       <div> <Link to={''} className='link' > <span onClick={handleShow} className='iconsWish'><FaEye /></span></Link> </div>
                       <div> <Link to={''} className='link' > <span onClick={handleShow} className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
                      </div>
                   
                   <h4 className='price pt-1'>$175.65</h4>
                   <h4 className='lotion'>Manicure Gel</h4>
                 </div>
                 <div className="col-lg-3 aroberaRes ">
                   <Link to={''} className='link'> <img onClick={handleShow} className='img-fluid' src={product4} alt="image" /></Link>
                   <span className='discount'>New</span>
                   <div className='IconPossi'>
                       <div> <Link to={''} className='link' > <span onClick={handleShow} className='iconsWish'><GiEternalLove /></span></Link> </div>
                       <div> <Link to={''} className='link' > <span onClick={handleShow} className='iconsWish'><FaEye /></span></Link> </div>
                       <div> <Link to={''} className='link' > <span onClick={handleShow} className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
                      </div>
                  <div>
                  <h4 className='price pt-1'>$75.65</h4>
                  <h4 className='lotion'>Manicure Gel nails, makeup</h4>
                  </div>
                 </div>
               </div>
             </div>
           </section>




  {
     show ?  <section className='signup'>
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
    </section> : null
  }

   <section className='py-5'>
         <div className="container">
           <h4 className='showing py-4'>Showing 12 of 16 Post</h4>
           <div className="row aroberaDirection ">
             <div className="col-lg-3 aroberaRes ">
   
              <Link to={'/signUp'}>  <img className='img-fluid ProImg' src={colths1} alt="image" /></Link>
   
               <span className='discount'>New</span>
   
               <div data-coreui-toggle="rating" data-coreui-value="3"></div>
   
                  <div className='IconShopping'>
                  <div>  <Link to={'/shopCard'}> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></Link>  </div>
                   <div> <Link  to={'/shopWish'} className='link' > <span className='iconsWishShopping'><GiEternalLove /></span> </Link></div>
                   <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishShopping'><FaEye /></span></Link> </div>
                   <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishShopping'><BsBarChartLineFill /></span></Link> </div>
                   
                  </div>
   
               <div>
               <h4 className='price pt-1'>$150.65</h4>
               <h4 className='lotion'>Lotion Shower gel</h4>
               </div>
   
             </div>
   
   
             <div className="col-lg-3 aroberaRes ">
              <Link to={'/signUp'}>  <img className='img-fluid' src={colths2} alt="image" /></Link>
   
               <span className='discount'>New</span>
   
               <div className='IconShopping'>
                  <div>  <Link to={'/shopCard'}> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></Link>  </div>
                   <div> <Link  to={'/shopWish'} className='link' > <span className='iconsWishShopping'><GiEternalLove /></span> </Link></div>
                   <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishShopping'><FaEye /></span></Link> </div>
                   <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishShopping'><BsBarChartLineFill /></span></Link> </div>
                   
                  </div>
   
               <div>
               <h4 className='price pt-1'>$250.65</h4>
               <h4 className='lotion'>Argan Cream Body Butter</h4>
               </div>
             </div>
   
             <div className="col-lg-3 aroberaRes ">
               <Link to={'/signUp'}> <img className='img-fluid' src={colths3} alt="image" /></Link>
               <span className='discount'>New</span>
               <div className='IconShopping'>
                  <div>  <Link to={'/shopCard'}> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></Link>  </div>
                   <div> <Link  to={'/shopWish'} className='link' > <span className='iconsWishShopping'><GiEternalLove /></span> </Link></div>
                   <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishShopping'><FaEye /></span></Link> </div>
                   <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishShopping'><BsBarChartLineFill /></span></Link> </div>
                   
                  </div>
               
               <h4 className='price pt-1'>$175.65</h4>
               <h4 className='lotion'>Manicure Gel</h4>
             </div>
             <div className="col-lg-3 aroberaRes ">
               <Link to={'/signUp'}> <img className='img-fluid' src={colths4} alt="image" /></Link>
               <span className='discount'>New</span>
               <div className='IconShopping'>
                  <div>  <Link to={'/shopCard'}> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></Link>  </div>
                   <div> <Link  to={'/shopWish'} className='link' > <span className='iconsWishShopping'><GiEternalLove /></span> </Link></div>
                   <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishShopping'><FaEye /></span></Link> </div>
                   <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishShopping'><BsBarChartLineFill /></span></Link> </div>
                   
                  </div>
              <div>
              <h4 className='price pt-1'>$75.65</h4>
              <h4 className='lotion'>Manicure Gel nails, makeup</h4>
              </div>
             </div>
           </div>
   
   
           <div className="row aroberaDirection ">
             <div className="col-lg-3 aroberaRes ">
               <Link to={'/signUp'}> <img className='img-fluid ProImg' src={colths5} alt="image" /></Link>
               <span className='discount'>New</span>
               <div data-coreui-toggle="rating" data-coreui-value="3"></div>
               <div className='IconShopping'>
                  <div>  <Link to={'/shopCard'}> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></Link>  </div>
                   <div> <Link  to={'/shopWish'} className='link' > <span className='iconsWishShopping'><GiEternalLove /></span> </Link></div>
                   <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishShopping'><FaEye /></span></Link> </div>
                   <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishShopping'><BsBarChartLineFill /></span></Link> </div>
                   
                  </div>
               <div>
               <h4 className='price pt-1'>$150.65</h4>
               <h4 className='lotion'>Lotion Shower gel</h4>
               </div>
   
             </div>
   
   
             <div className="col-lg-3 aroberaRes ">
             <Link to={'/shopD'}>   <img className='img-fluid' src={colths6} alt="image" /></Link>
   
               <span className='discount'>New</span>
               <div className='IconShopping'>
                  <div>  <Link to={'/shopCard'}> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></Link>  </div>
                   <div> <Link  to={'/shopWish'} className='link' > <span className='iconsWishShopping'><GiEternalLove /></span> </Link></div>
                   <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishShopping'><FaEye /></span></Link> </div>
                   <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishShopping'><BsBarChartLineFill /></span></Link> </div>
                   
                  </div>
               <div>
               <h4 className='price pt-1'>$250.65</h4>
               <h4 className='lotion'>Argan Cream Body Butter</h4>
               </div>
             </div>
   
             <div className="col-lg-3 aroberaRes ">
               <Link to={'/signUp'}> <img className='img-fluid' src={colths7} alt="image" /></Link>
               <span className='discount'>New</span>
               <div className='IconShopping'>
                  <div>  <Link to={'/shopCard'}> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></Link>  </div>
                   <div> <Link  to={'/shopWish'} className='link' > <span className='iconsWishShopping'><GiEternalLove /></span> </Link></div>
                   <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishShopping'><FaEye /></span></Link> </div>
                   <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishShopping'><BsBarChartLineFill /></span></Link> </div>
                   
                  </div>
               
               <h4 className='price pt-1'>$175.65</h4>
               <h4 className='lotion'>Manicure Gel</h4>
             </div>
             <div className="col-lg-3 aroberaRes ">
               <Link to={'/signUp'}> <img className='img-fluid' src={colths8} alt="image" /></Link>
               <span className='discount'>New</span>
               <div className='IconShopping'>
                  <div>  <Link to={'/shopCard'}> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></Link>  </div>
                   <div> <Link  to={'/shopWish'} className='link' > <span className='iconsWishShopping'><GiEternalLove /></span> </Link></div>
                   <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishShopping'><FaEye /></span></Link> </div>
                   <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishShopping'><BsBarChartLineFill /></span></Link> </div>
                   
                  </div>
              <div>
              <h4 className='price pt-1'>$75.65</h4>
              <h4 className='lotion'>Manicure Gel nails, makeup</h4>
              </div>
             </div>
           </div>
   
   
   
           <div className="row aroberaDirection ">
             <div className="col-lg-3 aroberaRes ">
               <Link to={'/signUp'}><img className='img-fluid ProImg' src={colths9} alt="image" /></Link>
               <span className='discount'>New</span>
               <div data-coreui-toggle="rating" data-coreui-value="3"></div>
               <div className='IconShopping'>
                  <div>  <Link to={'/shopCard'}> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></Link>  </div>
                   <div> <Link  to={'/shopWish'} className='link' > <span className='iconsWishShopping'><GiEternalLove /></span> </Link></div>
                   <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishShopping'><FaEye /></span></Link> </div>
                   <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishShopping'><BsBarChartLineFill /></span></Link> </div>
                   
                  </div>
               <div>
               <h4 className='price pt-1'>$150.65</h4>
               <h4 className='lotion'>Lotion Shower gel</h4>
               </div>
   
             </div>
   
   
             <div className="col-lg-3 aroberaRes ">
               <Link to={'/signUp'}> <img className='img-fluid' src={colths10} alt="image" /></Link>
   
               <span className='discount'>New</span>
               <div className='IconShopping'>
                  <div>  <Link to={'/shopCard'}> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></Link>  </div>
                   <div> <Link  to={'/shopWish'} className='link' > <span className='iconsWishShopping'><GiEternalLove /></span> </Link></div>
                   <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishShopping'><FaEye /></span></Link> </div>
                   <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishShopping'><BsBarChartLineFill /></span></Link> </div>
                   
                  </div>
               <div>
               <h4 className='price pt-1'>$250.65</h4>
               <h4 className='lotion'>Argan Cream Body Butter</h4>
               </div>
             </div>
   
             <div className="col-lg-3 aroberaRes ">
               <Link to={'/signUp'}> <img className='img-fluid' src={colths11} alt="image" /></Link>
               <span className='discount'>New</span>
               <div className='IconShopping'>
                  <div>  <Link to={'/shopCard'}> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></Link>  </div>
                   <div> <Link  to={'/shopWish'} className='link' > <span className='iconsWishShopping'><GiEternalLove /></span> </Link></div>
                   <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishShopping'><FaEye /></span></Link> </div>
                   <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishShopping'><BsBarChartLineFill /></span></Link> </div>
                   
                  </div>
               
               <h4 className='price pt-1'>$175.65</h4>
               <h4 className='lotion'>Manicure Gel</h4>
             </div>
             <div className="col-lg-3 aroberaRes ">
              <Link to={'/signUp'}>  <img className='img-fluid' src={colths12} alt="image" /></Link>
               <span className='discount'>New</span>
               <div className='IconShopping'>
                  <div>  <Link to={'/shopCard'}> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></Link>  </div>
                   <div> <Link  to={'/shopWish'} className='link' > <span className='iconsWishShopping'><GiEternalLove /></span> </Link></div>
                   <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishShopping'><FaEye /></span></Link> </div>
                   <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishShopping'><BsBarChartLineFill /></span></Link> </div>
                   
                  </div>
              <div>
              <h4 className='price pt-1'>$75.65</h4>
              <h4 className='lotion'>Manicure Gel nails, makeup</h4>
              </div>
             </div>
           </div>
   
           <div className='pt-4'>
              <p className='text-center'>
                <span><IoIosArrowRoundBack /></span>
                 Pre  
               <span className={`${location.pathname == '/ShopGride' ?  "bg-dark text-light":""} NumberCu` }>1</span> 
   
               <Link to={'/signUp'} >
                <span className='NumberCu'>2</span> 
                </Link>
               Next  <span><IoIosArrowRoundForward /> </span>   
               </p>
           </div>
         </div>
       </section>




  <Footer/>
<ToastContainer />

   </>
  )
}
