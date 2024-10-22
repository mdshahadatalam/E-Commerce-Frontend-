// import React from 'react'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import {  Autoplay,Navigation } from 'swiper/modules';

import { IoIosArrowRoundForward } from "react-icons/io";
import blog1 from '../assets/images/Blogs/blog (1).jpg'
import blog2 from '../assets/images/Blogs/blog (2).jpg'
import blog3 from '../assets/images/Blogs/blog (3).jpg'
import blog4 from '../assets/images/Blogs/blog (4).jpg'
import blog5 from '../assets/images/Blogs/blog (5).jpg'
import blog6 from '../assets/images/Blogs/blog (6).jpg'
import blog7 from '../assets/images/Blogs/blog (7).jpg'
import blog8 from '../assets/images/Blogs/blog (8).jpg'
import blog9 from '../assets/images/Blogs/blog (9).jpg'
import { Link } from 'react-router-dom';
// import { BlogClassic } from './BlogClassic';

export const BlogClassic = () => {
  return (
    <>
        <section className='AboutU d-flex justify-content-center align-items-center'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
               <h4 className='aboutUS'>Blog - Classic</h4>
                <p className='Home-About'>Home  /  About Us</p>

              </div>
            </div>
          </div>
        </section>
 
     {/* slider-1  */}
        <section className='py-5'>
          <div className="container">
           <div className='shadow-lg bg-white rounded p-2'>
           <Swiper
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
           modules={[Autoplay, Navigation]}
           className="mySwiper">

                   <SwiperSlide>
                           <div className="container">
                               <img className='img-fluid' src={blog1} alt="" />
                          </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog2} alt="" />
                       </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog3} alt="" />
                       </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog4} alt="" />
                       </div>
                  </SwiperSlide>
              </Swiper>
                       <div className='px-3'>
                         <small className='fashion py-1'>Michel-Fashion Admin || January 04, 2022</small>
                         <h4 className='color py-1'>Color, Size, Material Swatches</h4>
                           <p className='author py-1'>Compellingly extend client-based catalysts for change with adaptive information. Appropriately repurpose inexpensive networks vis-a-vis turnkey customer service. <br/> Distinctively drive viral catalysts for change whereas high-payoff supply chains. Progressively myocardinate highly efficient meta-services via cutting-edge core competencies. <br/> Dynamically target mission.</p>
                          <Link  to={'/blogClWith'} className='link' ><span className='readMore py-1'>Read More <IoIosArrowRoundForward /></span></Link>
                        </div>
             </div>
      

          </div>
        </section>

        {/* slider-2  */}
        <section className='py-5'>
          <div className="container">
           <div className='shadow-lg bg-white rounded p-2'>
           <Swiper
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
           modules={[Autoplay, Navigation]}
           className="mySwiper">

                   <SwiperSlide>
                           <div className="container">
                               <img className='img-fluid' src={blog2} alt="" />
                          </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog5} alt="" />
                       </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog8} alt="" />
                       </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog9} alt="" />
                       </div>
                  </SwiperSlide>
              </Swiper>
                       <div className='px-3'>
                         <small className='fashion py-1'>Michel-Fashion Admin || January 04, 2022</small>
                         <h4 className='color py-1'>Fashion coats 2022: key trends</h4>
                           <p className='author py-1'>Seamlessly cultivate low-risk high-yield processes whereas effective platforms. Professionally restore mission-critical process improvements after error-free results. Interactiv <br/>- ely monetize intermandated experiences through equity invested customer service. Dramatically engage user friendly paradigms via fully tested collaboration and idea-sharing.<br/> Energistically pursue wireless quality vectors without end-to-end strategic theme areas.</p>
                           <Link  to={'/blogClWith'} className='link' ><span className='readMore py-1'>Read More <IoIosArrowRoundForward /></span></Link>
                        </div>
             </div>
      

          </div>
        </section>

        {/* slider-3  */}
        <section className='py-5'>
          <div className="container">
           <div className='shadow-lg bg-white rounded p-2'>
           <Swiper
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
           modules={[Autoplay, Navigation]}
           className="mySwiper">

                   <SwiperSlide>
                           <div className="container">
                               <img className='img-fluid' src={blog3} alt="" />
                          </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog4} alt="" />
                       </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog6} alt="" />
                       </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog9} alt="" />
                       </div>
                  </SwiperSlide>
              </Swiper>
                       <div className='px-3'>
                         <small className='fashion py-1'>Michel-Fashion Admin || January 04, 2022</small>
                         <h4 className='color py-1'>Minimal Design Inspiration</h4>
                           <p className='author py-1'>Seamlessly cultivate low-risk high-yield processes whereas effective platforms. Professionally restore mission-critical process improvements after error-free results. Interactiv <br/>- ely monetize intermandated experiences through equity invested customer service. Dramatically engage user friendly paradigms via fully tested collaboration and idea-sharing.<br/> Energistically pursue wireless quality vectors without end-to-end strategic theme areas.</p>
                           <Link  to={'/blogClWith'} className='link' ><span className='readMore py-1'>Read More <IoIosArrowRoundForward /></span></Link>
                        </div>
             </div>
      

          </div>
        </section>

        {/* slider-4  */}
        <section className='py-5'>
          <div className="container">
           <div className='shadow-lg bg-white rounded p-2'>
           <Swiper
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
           modules={[Autoplay, Navigation]}
           className="mySwiper">

                   <SwiperSlide>
                           <div className="container">
                               <img className='img-fluid' src={blog4} alt="" />
                          </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog4} alt="" />
                       </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog6} alt="" />
                       </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog9} alt="" />
                       </div>
                  </SwiperSlide>
              </Swiper>
                       <div className='px-3'>
                         <small className='fashion py-1'>Michel-Fashion Admin || January 04, 2022</small>
                         <h4 className='color py-1'>Fashion T-shirt 2022: key trends</h4>
                           <p className='author py-1'>Seamlessly cultivate low-risk high-yield processes whereas effective platforms. Professionally restore mission-critical process improvements after error-free results. Interactiv <br/>- ely monetize intermandated experiences through equity invested customer service. Dramatically engage user friendly paradigms via fully tested collaboration and idea-sharing.<br/> Energistically pursue wireless quality vectors without end-to-end strategic theme areas.</p>
                           <Link  to={'/blogClWith'} className='link' ><span className='readMore py-1'>Read More <IoIosArrowRoundForward /></span></Link>
                        </div>
             </div>
      

          </div>
        </section>

        {/* slider-5  */}

        <section className='py-5'>
          <div className="container">
           <div className='shadow-lg bg-white rounded p-2'>
           <Swiper
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
           modules={[Autoplay, Navigation]}
           className="mySwiper">

                   <SwiperSlide>
                           <div className="container">
                               <img className='img-fluid' src={blog5} alt="" />
                          </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog4} alt="" />
                       </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog6} alt="" />
                       </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog9} alt="" />
                       </div>
                  </SwiperSlide>
              </Swiper>
                       <div className='px-3'>
                         <small className='fashion py-1'>Michel-Fashion Admin || January 04, 2022</small>
                         <h4 className='color py-1'>Women Fashionable Coats 2022</h4>
                           <p className='author py-1'>Seamlessly cultivate low-risk high-yield processes whereas effective platforms. Professionally restore mission-critical process improvements after error-free results. Interactiv <br/>- ely monetize intermandated experiences through equity invested customer service. Dramatically engage user friendly paradigms via fully tested collaboration and idea-sharing.<br/> Energistically pursue wireless quality vectors without end-to-end strategic theme areas.</p>
                           <Link  to={'/blogClWith'} className='link' ><span className='readMore py-1'>Read More <IoIosArrowRoundForward /></span></Link>
                        </div>
             </div>
      

          </div>
        </section>

        {/* slider-6  */}

        <section className='py-5'>
          <div className="container">
           <div className='shadow-lg bg-white rounded p-2'>
           <Swiper
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
           modules={[Autoplay, Navigation]}
           className="mySwiper">

                   <SwiperSlide>
                           <div className="container">
                               <img className='img-fluid' src={blog5} alt="" />
                          </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog4} alt="" />
                       </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog6} alt="" />
                       </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="container">
                            <img className='img-fluid' src={blog9} alt="" />
                       </div>
                  </SwiperSlide>
              </Swiper>
                       <div className='px-3'>
                         <small className='fashion py-1'>Michel-Fashion Admin || January 04, 2022</small>
                         <h4 className='color py-1'>Fashion Women New key trends</h4>
                           <p className='author py-1'>Seamlessly cultivate low-risk high-yield processes whereas effective platforms. Professionally restore mission-critical process improvements after error-free results. Interactiv <br/>- ely monetize intermandated experiences through equity invested customer service. Dramatically engage user friendly paradigms via fully tested collaboration and idea-sharing.<br/> Energistically pursue wireless quality vectors without end-to-end strategic theme areas.</p>
                           <Link  to={'/blogClWith'} className='link' ><span className='readMore py-1'>Read More <IoIosArrowRoundForward /></span></Link>
                        </div>
             </div>
      

          </div>
        </section>

        


    </>
  )
}
