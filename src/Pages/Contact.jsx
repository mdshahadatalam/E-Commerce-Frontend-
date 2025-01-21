import React, { useEffect, useState } from 'react'

import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io"
import { MdOutlineFollowTheSigns } from "react-icons/md";


import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import blogs from '../assets/images/Blogs/blog (3).jpg'

// Aos animation 
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Contact = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [title,setTitle] = useState("")
  const [message,setMessage] = useState("")

  const handleName =(e)=>{
    setName(e.target.value)
  }

  const handleEmail =(e)=>{
    setEmail(e.target.value)
  }
  const handleNumber =(e)=>{
    setPhone(e.target.value)
  }
  
   const handleTitle =(e)=>{
    setTitle(e.target.value)
   }

   const handleMessage =(e)=>{
    setMessage(e.target.value)
   }

   const handleSubmit =()=>{
    console.log(name,email,phone,title,message);
    
   }

  useEffect( ()=>{
    Aos.init();
  })
  return (
  <>
  
<section className='AboutU d-flex justify-content-center align-items-center'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
               <h4 data-aos="zoom-in" data-aos-duration="1500" className='aboutUS'>Contact</h4>
                <p data-aos="zoom-in" data-aos-duration="1500" className='Home-About'>Home  /  About Us</p>

              </div>
            </div>
          </div>
        </section>



        <section className='py-5'>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">

                <div data-aos="zoom-in" data-aos-duration="1500" className='shadow-lg bg-white rounded d-flex p-4 mt-2'>
                  <div> <span className='callIcon'><IoCall /></span></div>

                  <div>
                    <h4 className='callTo'>Call to Us:</h4>
                    <p className='available'>We’re available from 08 am – 10pm USA,7 days a week.</p>
                  <h4 className='customar'>Customer Support:</h4>
                  <small className='available'>+13008660286</small>

                  <h4 className='customar'>Head Office Support:</h4>
                  <small className='available'>+13008660290</small>
                    
                  </div>
                </div>

              </div>
              <div className="col-lg-4">
              <div data-aos="zoom-in" data-aos-duration="1500" className='shadow-lg bg-white rounded d-flex p-4 mt-2'>
                  <div> <span className='callIcon'><IoMdMail /></span></div>

                  <div>
                    <h4 className='callTo'>Write to Email Us:</h4>
                    <p className='available'>Fill out our form and we will contact you
                    within 24 hours.</p>
                  <h4 className='customar'>Customer Support:</h4>
                  <small className='available'>aetor.info@gmail.com</small>

                  <h4 className='customar'>Head Office Support:</h4>
                  <small className='available'>aetorhead.@example.com</small>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
              <div data-aos="zoom-in" data-aos-duration="1500" className='shadow-lg bg-white rounded d-flex p-4 mt-2'>
                  <div> <span className='callIcon'><MdOutlineFollowTheSigns /></span></div>

                  <div>
                    <h4 className='callTo'>Follow to Us:</h4>
                    <p className='available'>Visit specific sites to find us online  innovate bricks-and-clicks materials.</p>
                  <h4 className='customar'>Customer Support:</h4>

                  <div className='d-flex p-1'>

                        <div>  <span className='contactI'><FaFacebookF /></span>  </div>
                        <div>  <span className='contactI'><FaTwitter /></span>  </div>
                        <div>  <span className='contactI'><FaInstagram /></span>  </div>
                    </div>

                  <h4 className='customar'>Head Office Support:</h4>
                  <div className='d-flex p-0'>

                        <div>  <span className='contactI'><FaFacebookF /></span>  </div>
                        <div>  <span className='contactI'><FaTwitter /></span>  </div>
                        <div>  <span className='contactI'><FaInstagram /></span>  </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-5'>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 p-0">
                <div className='shadow-lg bg-white rounded p-3'>
                  <h4 className='getIn'>Get in touch</h4>

                    <input
                     className='conInpt'
                      type="text"
                      placeholder='Your name*' 
                      id='name'
                      name='name'
                      onChange={handleName}
                      />

                    <input
                     className='conInpt'
                      type="email"
                       placeholder='Your email*'
                       id='email'
                       name='email'
                       onChange={handleEmail}
                        />

                    <input
                     className='conInpt'
                      type="number" 
                      placeholder='Your number*'
                      id='number'
                      name='number'
                      onChange={handleNumber}
                       />

                    <input
                     className='conInpt'
                      type="text" 
                      laceholder='Your title*' 
                      id='title'
                      name='title'
                      onChange={handleTitle}
                      />

                    <textarea 
                     className='conTnMes' 
                      name="message"
                       id="message" 
                      placeholder='Message*'
                      onChange={handleMessage}
                      ></textarea>



                    <div className='text-center'>
                      <button onClick={handleSubmit} className='contBtn'>Send Massage</button>
                    </div>
                </div>
              </div>
              <div className="col-lg-6 p-0">
              <img className='img-fluid h-100' src={blogs} alt="" />
              </div>
            </div>
          </div>
        </section>

        
  </>
  )
}
