// import React from 'react'



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


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

import bcsl from '../assets/images/blogClaSli/BCSL.jpg'
// import { BlogClassic } from './BlogClassic';

import { IoSearchOutline } from "react-icons/io5";

export const BlogClWithSi = () => {
  return (
    <>
     <section className='AboutU d-flex justify-content-center align-items-center'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
               <h4 className='aboutUS'>Blog - Classic With Sidebar</h4>
                <p className='Home-About'>Home  /  About Us</p>

              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
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
                           <p className='author py-1'>Compellingly extend client-based catalysts for change with adaptive information. Appropriately repurpose inexpensive networks vis-a-vis turnkey customer service.Distinctively drive viral catalysts for change whereas high-payoff supply chains. Progressively myocardinate highly efficient meta-services via cutting-edge core competencies. Dynamically target mission.</p>
                          <span className='readMore py-1'>Read More <IoIosArrowRoundForward /></span>
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
                           <p className='author py-1'>Seamlessly cultivate low-risk high-yield processes whereas effective platforms. Professionally restore mission-critical process improvements after error-free results. Interactiv - ely monetize intermandated experiences through equity invested customer service. Dramatically engage user friendly paradigms via fully tested collaboration and idea-sharing. Energistically pursue wireless quality vectors without end-to-end strategic theme areas.</p>
                          <span className='readMore py-1'>Read More <IoIosArrowRoundForward /></span>
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
                           <p className='author py-1'>Seamlessly cultivate low-risk high-yield processes whereas effective platforms. Professionally restore mission-critical process improvements after error-free results. Interactiv - ely monetize intermandated experiences through equity invested customer service. Dramatically engage user friendly paradigms via fully tested collaboration and idea-sharing. Energistically pursue wireless quality vectors without end-to-end strategic theme areas.</p>
                          <span className='readMore py-1'>Read More <IoIosArrowRoundForward /></span>
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
                           <p className='author py-1'>Seamlessly cultivate low-risk high-yield processes whereas effective platforms. Professionally restore mission-critical process improvements after error-free results. Interactiv- ely monetize intermandated experiences through equity invested customer service. Dramatically engage user friendly paradigms via fully tested collaboration and idea-sharing. Energistically pursue wireless quality vectors without end-to-end strategic theme areas.</p>
                          <span className='readMore py-1'>Read More <IoIosArrowRoundForward /></span>
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
                           <p className='author py-1'>Seamlessly cultivate low-risk high-yield processes whereas effective platforms. Professionally restore mission-critical process improvements after error-free results. Interactiv- ely monetize intermandated experiences through equity invested customer service. Dramatically engage user friendly paradigms via fully tested collaboration and idea-sharing. Energistically pursue wireless quality vectors without end-to-end strategic theme areas.</p>
                          <span className='readMore py-1'>Read More <IoIosArrowRoundForward /></span>
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
                           <p className='author py-1'>Seamlessly cultivate low-risk high-yield processes whereas effective platforms. Professionally restore mission-critical process improvements after error-free results. Interactiv - ely monetize intermandated experiences through equity invested customer service. Dramatically engage user friendly paradigms via fully tested collaboration and idea-sharing. Energistically pursue wireless quality vectors without end-to-end strategic theme areas.</p>
                          <span className='readMore py-1'>Read More <IoIosArrowRoundForward /></span>
                        </div>
             </div>
      

          </div>
        </section>
              </div>

              <div className="col-lg-4">

                <form className='btn-group pt-5' action="">
                <input className='searchHere' type="text" placeholder='Search Here...' />
                <button className='searchbtn'><IoSearchOutline /></button>
                </form>

                <div className='pt-3'>
                  <h4 className='cata'>Categories</h4>

                  <div className='d-flex justify-content-between'>
                    <div><p className='blogClassSlidFashion' >Fashion</p></div>
                    <div><p className='blogClassSlidFashion' >(5)</p></div>
                   </div>
                    <hr className='m-0' />

                    <div className='d-flex justify-content-between'>
                    <div><p className='blogClassSlidFashion' >Furnitures</p></div>
                    <div><p className='blogClassSlidFashion' >(2)</p></div>
                    </div>
                    <hr className='m-0' />

                    <div className='d-flex justify-content-between'>
                    <div><p className='blogClassSlidFashion' >Electronics</p></div>
                    <div><p className='blogClassSlidFashion' >(3)</p></div>
                    </div>

                    <hr className='m-0'/>

                    <div className='d-flex justify-content-between'>
                    <div><p className='blogClassSlidFashion' >Cosmetics</p></div>
                    <div><p className='blogClassSlidFashion' >(6)</p></div>
                    </div>
                    <hr className='m-0' />

                    <div className='d-flex justify-content-between'>
                    <div><p className='blogClassSlidFashion' >Wine</p></div>
                    <div><p className='blogClassSlidFashion' >(2)</p></div>
                    </div>
                    <hr className='m-0' />

                    <div className='d-flex justify-content-between'>
                    <div><p className='blogClassSlidFashion' >Frame Sunglasses</p></div>
                    <div><p className='blogClassSlidFashion' >(2)</p></div>
                    </div>
                    <hr className='m-0' />


                    <div className='d-flex justify-content-between'>
                    <div><p className='blogClassSlidFashion' >Jewellery</p></div>
                    <div><p className='blogClassSlidFashion' >(4)</p></div>
                    </div>
                    <hr className='m-0' />

                    <div className='d-flex justify-content-between'>
                    <div><p className='blogClassSlidFashion' >Accessories</p></div>
                    <div><p className='blogClassSlidFashion' >(3)</p></div>
                    </div>
                    <hr className='m-0' />


                    <div className='d-flex justify-content-between'>
                    <div><p className='blogClassSlidFashion' >New Arrivals</p></div>
                    <div><p className='blogClassSlidFashion' >(7)</p></div>
                    </div>
                    <hr className='m-0' />

                    <div className='d-flex justify-content-between'>
                    <div><p className='blogClassSlidFashion' >Medicine</p></div>
                    <div><p className='blogClassSlidFashion' >(5)</p></div>
                    </div>
                    <hr className='m-0' />


                </div>

                <div className='pt-3'>
                <h4 className='cata'>Recent Posts</h4>

               <div className='d-flex py-2'>
                <div><img className='img-fluid BCSLi ' src={bcsl} alt="" /></div>
                <div className='px-2'>
                <h4 className='BSDami m-0'>Fashion Women New Key Trends</h4>
                <small className='fashion py-1'>January 04, 2022</small>
                </div>
               </div>
               <hr />

               <div className='d-flex py-2'>
                <div><img className='img-fluid BCSLi ' src={bcsl} alt="" /></div>
                <div className='px-2'>
                <h4 className='BSDami m-0'>Fashion Women New Key Trends</h4>
                <small className='fashion py-1'>January 04, 2022</small>
                </div>
               </div>
               <hr />

               <div className='d-flex py-2'>
                <div><img className='img-fluid BCSLi ' src={bcsl} alt="" /></div>
                <div className='px-2'>
                <h4 className='BSDami m-0'>Fashion Women New Key Trends</h4>
                <small className='fashion py-1'>January 04, 2022</small>
                </div>
               </div>
               <hr />

                </div>


                <div>
                <h4 className='cata'>Tags</h4>

                <div>
                  <span className='tags' >Accessories</span> <span className='tags' >Fashion</span> <span className='tags' >Sports</span> <span className='tags' >Food</span>
                  <span className='tags' >Furnitures</span> <span className='tags' >Jewellery</span> <span className='tags' >Mobile</span> <span className='tags' >Toyes</span>
                  <span className='tags' >Technology</span> <span className='tags' >Tips</span>
                </div>
                </div>


                <div className='pt-5 position-relative'>
                  <img className='img-fluid' src={bcsl} alt="" />

                  <div className='discountBlse'>
                    <h4 className='discountBl'>#Black Friday</h4>
                    <h4 className='discountBl'>SALE</h4>
                    <h4 className='discountBl'>50%</h4>
                    <p>Modern Dress</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>
    </>
  )
}
