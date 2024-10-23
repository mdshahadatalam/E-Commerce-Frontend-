// import React from 'react'
import AboutPic from '../assets/images/About/Group 37.png'
import item from '../assets/images/Items/Item 2.png'
import play from '../assets/images/About/Play Button.png'

import author from '../assets/images/About/author.jpg'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';


import BestPro1 from '../assets/images/Carosel2/BestPro (1).jpg'
import BestPro2 from '../assets/images/Carosel2/BestPro (2).jpg'
import BestPro3 from '../assets/images/Carosel2/BestPro (3).jpg'
import BestPro4 from '../assets/images/Carosel2/BestPro (4).jpg'


import { GiEternalLove } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Ins1 from '../assets/images/Intagram/Ins1.jpg'
import Ins2 from '../assets/images/Intagram/Ins2.jpg'
import Ins3 from '../assets/images/Intagram/Ins3.jpg'
import Ins4 from '../assets/images/Intagram/Ins4.jpg'
import Ins5 from '../assets/images/Intagram/Ins5.jpg'
import Ins6 from '../assets/images/Intagram/Ins6.jpg'

export const About = () => {

  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
    <section className='AboutU d-flex justify-content-center align-items-center'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className='aboutUS'>About Us</h4>
           <p className='Home-About'>Home  /  About Us</p>

          </div>
        </div>
      </div>
    </section>

    <section className='py-5 AB'>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-7">
            <img  className='img-fluid' src={AboutPic} alt="" />

          </div>
          <div className="col-lg-5">
            <h4 className='learn'>Learn About Aetor Shop</h4>

            <p className='AboutDami'>Interactively underwhelm effective relationships whereas team driven paradigms. Uniquely impact impactful meta-services vis -a-vis fully tested best practices. Appropriately e-enable fully.</p>


            <ul className='py-4'>
            <li className='ListSty'>Assertively customize robust potentialities and economical</li>
            <li className='ListSty'>Seamlessly disintermediate distributed intellectual capital.</li>
            <li className='ListSty'>Credibly enable B2C potentialities after strategic.</li>
            </ul>
         
           

            <button className='DiscoverMore'>Discover More</button>
          </div>
        </div>
      </div>
    </section>


{/* about section  */}

    <section className='ourStory'>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <h4 className='Our'>Our Story</h4>
             
             <p className='ourDami'>Synergistically pontificate focused services whereas intuitive leadership. Competently predominate ubiquitous services rather than client-centric scenarios. Distinctively mesh B2C benefits for superior customer service. Interactively e-enable inexpensive total linkage without quality materials. Phosfluorescently negotiate.</p>

             <p className='ourDami'>Professionally exploit user-centric technology for seamless solutions. Objectively morph unique strategic theme areas without cross functional mindshare. Synergistically aggregate adaptive functionalities rather than enterprise-wide experiences. Completely maintain.</p>
          </div>
          <div className="col-lg-6 playSet ">
            <img className='img-fluid' src={item} alt="" />


            <a href=""> <img className='PlayBt' src={play} alt="" /></a>
          </div>
        </div>
      </div>
    </section>

{/* FreeShipping  */}

<section className='py-5'>
  <div className="container py-2 shadow-lg rounded-1">
    <div className="row FreeShippingRes ">
      <div className="col-lg-3 FREEshIP py-2">
       <div className='d-flex align-items-center'>
        <div className='cercle'>  </div>
        <div className='ps-2'>
          <h4 className='m-0 free' >FREE SHIPING</h4>
          <p className='m-0 allOrder' >all orders over <span className='PriceFree' >$150</span></p>
        </div>

       </div>

      </div>
      <div className="col-lg-3 FREEshIP py-2">
      <div className='d-flex align-items-center'>
        <div className='cercle'>  </div>
        <div className='ps-2'>
          <h4 className='m-0 free' >QUICK PAYM:</h4>
          <p className='m-0 allOrder' >100% secure payment</p>
        </div>

       </div>
      </div>
      <div className="col-lg-3 FREEshIP py-2">
      <div className='d-flex align-items-center'>
        <div className='cercle'>  </div>
        <div className='ps-2'>
          <h4 className='m-0 free' >FREE RETURNS</h4>
          <p className='m-0 allOrder' >Return money within</p>
        </div>

       </div>
      </div>
      <div className="col-lg-3 FREEshIP py-2">
      <div className='d-flex align-items-center'>
        <div className='cercle'>  </div>
        <div className='ps-2'>
          <h4 className='m-0 free' >24/7 SUPPORT</h4>
          <p className='m-0 allOrder' >Quick Support</p>
        </div>

       </div>
      </div>
    </div>
  </div>
</section>

{/* slider  */}


<div className="container">
<h3 className='text-center pt-5'>Leadership Expart Team</h3>
</div>

<Swiper
  onSwiper={setSwiperRef}
  slidesPerView={3}
  centeredSlides={true}
  spaceBetween={30}
  pagination={{
    type: 'fraction',
  }}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  navigation={true}
  modules={[ Autoplay,Pagination, Navigation]}
  className="mySwiper3"
>

<SwiperSlide>
  <div class="card shadow-md"> 
<img src={author} class="card-img-top OverView " alt="image"/>
       {/* <div className='IconCard'>
         <div><span className='iconsWishCard'><GiEternalLove /></span></div>
         <div><span className='iconsWishCard'><FaEye /></span></div>
          <div><span className='iconsWishCard'><BsBarChartLineFill /></span></div>
      </div> */}
     <div class="card-body p-2">
        <h4 className='name m-0'>Michel Richard</h4>
        <p className='founder m-0'>Founder</p>

     <div className='d-flex justify-content-center p-0'>
     <span className='py-2 px-2'><FaFacebookF /></span> 
     <span className='py-2 px-2'><FaTwitter /></span> 
    <span className='py-2 px-2'><FaInstagram /></span>
     </div>
  
    </div>

     </div>
     

  
</SwiperSlide>



<SwiperSlide>
  <div class="card shadow-md"> 
<img src={author} class="card-img-top OverView " alt="image"/>
       {/* <div className='IconCard'>
         <div><span className='iconsWishCard'><GiEternalLove /></span></div>
         <div><span className='iconsWishCard'><FaEye /></span></div>
          <div><span className='iconsWishCard'><BsBarChartLineFill /></span></div>
      </div> */}
     <div class="card-body p-2">
        <h4 className='name m-0'>Imon Hossain</h4>
        <p className='founder m-0'>Founder</p>

     <div className='d-flex justify-content-center p-0'>
     <span className='py-2 px-2'><FaFacebookF /></span> 
     <span className='py-2 px-2'><FaTwitter /></span> 
    <span className='py-2 px-2'><FaInstagram /></span>
     </div>
  
    </div>

     </div>
     

  
</SwiperSlide>

<SwiperSlide>
  <div class="card shadow-md"> 
<img src={author} class="card-img-top OverView " alt="image"/>
       {/* <div className='IconCard'>
         <div><span className='iconsWishCard'><GiEternalLove /></span></div>
         <div><span className='iconsWishCard'><FaEye /></span></div>
          <div><span className='iconsWishCard'><BsBarChartLineFill /></span></div>
      </div> */}
     <div class="card-body p-2">
        <h4 className='name m-0'>Sudjida Lufz</h4>
        <p className='founder m-0'>Founder</p>

     <div className='d-flex justify-content-center p-0'>
     <span className='py-2 px-2'><FaFacebookF /></span> 
     <span className='py-2 px-2'><FaTwitter /></span> 
    <span className='py-2 px-2'><FaInstagram /></span>
     </div>
  
    </div>

     </div>
     

  
</SwiperSlide>


<SwiperSlide>
  <div class="card shadow-md"> 
<img src={author} class="card-img-top OverView " alt="image"/>

       {/* <div className='IconCard'>
         <div><span className='iconsWishCard'><GiEternalLove /></span></div>
         <div><span className='iconsWishCard'><FaEye /></span></div>
          <div><span className='iconsWishCard'><BsBarChartLineFill /></span></div>
      </div> */}

     <div class="card-body p-2">
        <h4 className='name m-0'>Henry Josep</h4>
        <p className='founder m-0'>Founder</p>

     <div className='d-flex justify-content-center p-0'>
     <span className='py-2 px-2'><FaFacebookF /></span> 
     <span className='py-2 px-2'><FaTwitter /></span> 
    <span className='py-2 px-2'><FaInstagram /></span>
     </div>
  
    </div>

     </div>
     

  
</SwiperSlide>

  




</Swiper>



<section className='py-5'>
  <div className="container">
    <h4 className='aetorIns py-3'>@Aetor Instagram</h4>
    <div className="row InsSecRes ">
      <div className="col-lg-2 InstaRes ">
        <img className='img-fluid InsTagramImg ' src={Ins1} alt="" />

        <span className='FaINs'><FaInstagram /></span>

      </div>
      <div className="col-lg-2 InstaRes ">
        <img className='img-fluid InsTagramImg ' src={Ins2} alt="" />
        <span className='FaINs'><FaInstagram /></span>
      </div>
      <div className="col-lg-2 InstaRes ">
        <img className='img-fluid InsTagramImg ' src={Ins3} alt="" />
        <span className='FaINs'><FaInstagram /></span>
      </div>
      <div className="col-lg-2 InstaRes ">
        <img className='img-fluid InsTagramImg ' src={Ins4} alt="" />
        <span className='FaINs'><FaInstagram /></span>
      </div>
      <div className="col-lg-2 InstaRes ">
        <img className='img-fluid InsTagramImg ' src={Ins5} alt="" />
        <span className='FaINs'><FaInstagram /></span>
      </div>
      <div className="col-lg-2 InstaRes ">
        <img className='img-fluid InsTagramImg ' src={Ins6} alt="" />
        <span className='FaINs'><FaInstagram /></span>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
