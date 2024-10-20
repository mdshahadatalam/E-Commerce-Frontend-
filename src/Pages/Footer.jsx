import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from '../assets/images/logo/Logo (1).png'


import visa from '../assets/images/logo/visa.png'
import paypal from '../assets/images/logo/paypal.png'
import discover from '../assets/images/logo/discover.png'
import world from '../assets/images/logo/bang.png'
import logo2 from '../assets/images/logo/logo2.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io";

export const Footer = () => {
  return (
    <>
   

   <section className='py-5 footerSec'>
        <div className="container">
            <div className="row justify-content-center align-items-center py-4">
                <div className="col-lg-4">
                    <div className='d-flex p-0'>

                        <div>  <span className='ConIconL shadow-lg'><FaFacebookF /></span>  </div>
                        <div>  <span className='ConIconL shadow-lg'><FaTwitter /></span>  </div>
                        <div>  <span className='ConIconL shadow-lg'><FaInstagram /></span>  </div>
                    </div>
                </div>
                <div className="col-lg-4">
                <img className='img-fluid' src={logo2} alt="" />
                     
                </div>
                <div className="col-lg-4">

                    <div className='d-flex pt-3'>
                        <div> <a href=""> <img className='img-fluid PaymentIssu' src={paypal} alt="" /> </a> </div>
                        <div>  <a href=""><img className='img-fluid PaymentIssu' src={visa} alt="" /></a>  </div>
                        <div>  <a href=""><img className='img-fluid PaymentIssu' src={ world} alt="" /> </a> </div>
                        <div>  <a href=""><img className='img-fluid PaymentIssu' src={discover} alt="" /> </a>  </div>
                    </div>
                </div>
            </div>

            <hr className='text-light'  />


            <div className="row py-4">
                <div className="col-lg-2">
                    <h4 className='MyAccount'>My Account</h4>
                    <p className='WhistList'>My Account</p>
                    <p className='WhistList'>View Cart</p>
                    <p className='WhistList'>Wishlist</p>
                    <p className='WhistList'>Compare</p>
                    <p className='WhistList'>New Products</p>

                </div>
                <div className="col-lg-2">
                    <h4 className='MyAccount'>Support</h4>

                    <p className='WhistList' >Help</p>
                    <p className='WhistList' >Contact Us</p>
                    <p className='WhistList' >Feedback</p>
                    <p className='WhistList' >Customer Service</p>
                    <p className='WhistList' >Store Locations</p>
                </div>
                <div className="col-lg-2">
                    <h4 className='MyAccount'>Opening Time</h4>

                    <p  className='WhistList' >Mon-Tue:    8AM - 10PM</p>
                    <p  className='WhistList' >Wed:          8AM - 7PM</p>
                    <p  className='WhistList' >Fri:          7AM - 12PM</p>
                    <p  className='WhistList' >Sat:          9AM - 8PM</p>
                    <p  className='WhistList' >Sun:          Closed</p>
                </div>
                <div className="col-lg-2">
                    <h4 className='MyAccount'>Contact Us</h4>


                    <div className='d-flex'>
                        <div> <span className='WhistList'><FaLocationDot /></span>  </div>

                        <div className='ps-1'><p  className='WhistList' >830 Broad way, New York, NY 10003,
                        United States</p></div>
                    </div>

                    <div className='d-flex'>
                        <div><span className='WhistList' ><FaPhone /></span></div>
                        <p className='WhistList ps-1'>+18008660286</p>

                    </div>

                    <div className='d-flex'>
                        <div className='ps-1'><span className='WhistList' ><IoMdMail /></span></div>

                        <p className='WhistList ps-1' >aetor.info@gmail.com info@aetor.com</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h4 className='MyAccount ps-1'>News Letter</h4>


                    <p className='WhistList'>Authoritatively morph 24/7 potentialities with error-free partnerships.</p>

                  <form className=' btn-group pt-2' action="">
                    <input className='InEmail' 
                    type="email"
                    id='email'
                    name='email' 
                    placeholder='Enter your email' />
                    <button className='btn btn-danger'> Subscribe</button>

                  </form>
                    
                </div>
            </div>

          </div>    
    </section>


    <section className='lastSec'>
        <div className="container">
        <footer className='All'>© 2022 All Rights Reserved <span className='Aytor' >Aytor</span> By <span className='Aytor' >Angfuzsoft</span>.</footer>
        </div>
    </section>
    </>
  )
}
