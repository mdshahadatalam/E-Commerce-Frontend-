// import React from 'react'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';
import item1 from '../assets/images/Items/Item 1.png'
import item2 from '../assets/images/Items/Item 2.png'
import item3 from '../assets/images/Items/Item 3.png'
import product1 from '../assets/images/arobelaPro/Group 29.png'
import product2 from '../assets/images/arobelaPro/Group 30.png'
import product3 from '../assets/images/arobelaPro/product 3.png'
import product4 from '../assets/images/arobelaPro/product 4.png'
import Best from '../assets/images/bestPro/bt1.jpg'
import  Best2 from '../assets/images/bestPro/bt2.jpg'
import Best3 from '../assets/images/bestPro/bt3.jpg'
import Best4 from '../assets/images/bestPro/bt4.jpg'
import Best5 from '../assets/images/bestPro/bt5.jpg'
import Best6 from '../assets/images/bestPro/bt6.jpg'
import Best7 from '../assets/images/bestPro/bt7.jpg'
import Best8 from '../assets/images/bestPro/bt8.jpg'

import BestPro1 from '../assets/images/Carosel2/BestPro (1).jpg'
import BestPro2 from '../assets/images/Carosel2/BestPro (2).jpg'
import BestPro3 from '../assets/images/Carosel2/BestPro (3).jpg'
import BestPro4 from '../assets/images/Carosel2/BestPro (4).jpg'





import { GiEternalLove } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";
import { Link } from 'react-router-dom';



const Home = () => {

  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>

    {/* banner-slider  */}

    <Swiper
     autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    loop={true}
     pagination={{
      el:'.test',
       clickable:true 
       }} 
     navigation={true} modules={[Navigation,Pagination,Autoplay]}
      className="mySwiper">

        <SwiperSlide className='sliderBanner'>
          
          <div className="container">
            <p className='mega'>Mega Sale</p>
            <h3 className='upTo'>Up To 35% Off</h3>
           <p className='objective'>Objectively incubate enabled innovation through leveraged <br />  mindshare. Competently.</p>
          <a className='shopNow' href="">Shop Now</a>
          </div>

          
        </SwiperSlide>
        <SwiperSlide className='sliderBanner1'>
          <div className="container">
            <p className='mega'>Mega Sale</p>
            <h3 className='upTo'>Up To 35% Off</h3>
           <p className='objective'>Objectively incubate enabled innovation through leveraged <br />  mindshare. Competently.</p>
          <a className='shopNow' href="">Shop Now</a>
          </div>

          
        </SwiperSlide>
        <SwiperSlide className='sliderBanner2'>
          <div className="container">
            <p className='mega'>Mega Sale</p>
            <h3 className='upTo'>Up To 35% Off</h3>
           <p className='objective'>Objectively incubate enabled innovation through leveraged <br />  mindshare. Competently.</p>
          <a className='shopNow' href="">Shop Now</a>
          </div>

          
        </SwiperSlide>

        <div className="container test"></div>
        
        
      </Swiper>

      {/* beauti-section  */}

      <section className='py-5'>
        <div className="container">
          <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 ">
            <img className='img-fluid' src={item1} alt="" />
            <img className='pt-4 img-fluid' src={item3} alt="" />
          </div>
          <div className="col-lg-7 d-flex justify-content-center">
            <img  className='img-fluid pt-1' src={item2} alt="" />
          </div>
          </div>
        </div>
      </section>

    {/* new arobela-product-section  */}

    <section className='py-4'>
       <div className="container">
         
          <div className='align-items-center d-flex justify-content-around py-4'>
          <div>
                 <div> <span className='py-2'><GiEternalLove /></span></div>
                <div><span className='py-2'><FaEye /></span></div>
                <div><span className='py-2'><BsBarChartLineFill /></span> </div>
          </div>

          <h4 className='new'>New Arrivals Products</h4>    </div> 
 
        <div className="row aroberaDirection ">
          <div className="col-lg-3 aroberaRes ">
            <Link to={'/shopD'} className='link'> <img className='img-fluid ProImg' src={product1} alt="image" /></Link>
            <div data-coreui-toggle="rating" data-coreui-value="3"></div>
               <div className='IconPossi'>
                <div> <Link to={'/shopWish'} className='link' > <span className='iconsWish'><GiEternalLove /></span></Link> </div>
                <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWish'><FaEye /></span></Link> </div>
                <div> <Link to={'/shopCom'} className='link' > <span className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
               </div>
            <div>
            <h4 className='price pt-1'>$150.65</h4>
            <h4 className='lotion'>Lotion Shower gel</h4>
            </div>

          </div>


          <div className="col-lg-3 aroberaRes ">
           <Link to={'/shopD'} className='link'>  <img className='img-fluid' src={product2} alt="image" /></Link>

            <span className='discount'>-45%</span>
            <div className='IconPossi'>
                <div> <Link to={'/shopWish'} className='link' > <span className='iconsWish'><GiEternalLove /></span></Link> </div>
                <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWish'><FaEye /></span></Link> </div>
                <div> <Link to={'/shopCom'} className='link' > <span className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
               </div>
            <div>
            <h4 className='price pt-1'>$250.65</h4>
            <h4 className='lotion'>Argan Cream Body Butter</h4>
            </div>
          </div>

          <div className="col-lg-3 aroberaRes ">
            <Link to={'/shopD'} className='link'> <img className='img-fluid' src={product3} alt="image" /></Link>
            <span className='discount'>50%</span>
            <div className='IconPossi'>
                <div> <Link to={'/shopWish'} className='link' > <span className='iconsWish'><GiEternalLove /></span></Link> </div>
                <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWish'><FaEye /></span></Link> </div>
                <div> <Link to={'/shopCom'} className='link' > <span className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
               </div>
            
            <h4 className='price pt-1'>$175.65</h4>
            <h4 className='lotion'>Manicure Gel</h4>
          </div>
          <div className="col-lg-3 aroberaRes ">
            <Link to={'/shopD'} className='link'> <img className='img-fluid' src={product4} alt="image" /></Link>
            <span className='discount'>New</span>
            <div className='IconPossi'>
                <div> <Link to={'/shopWish'} className='link' > <span className='iconsWish'><GiEternalLove /></span></Link> </div>
                <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWish'><FaEye /></span></Link> </div>
                <div> <Link to={'/shopCom'} className='link' > <span className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
               </div>
           <div>
           <h4 className='price pt-1'>$75.65</h4>
           <h4 className='lotion'>Manicure Gel nails, makeup</h4>
           </div>
          </div>
        </div>
      </div>
    </section>


    {/* banner 2 section  */}

    <section className='banner2'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
           <div className='BannerDamiText'>
           <h3 className='bannerGet'>Get Up To 35% Off all   <br/>
              Best Spa Cosmetics <br/>
              Cream</h3>

              <p className='banner2Dami'>Holisticly maximize interoperable action items for effective <br/> e-business. Globally impact enterprise-wide niche markets <br/> through dynamic.</p>
   
               <a className=' bnShopNow' href="">Shop Now</a>
           </div>
          </div>
        </div>
      </div>
    </section>
{/* best seller product  */}

    <section className='py-5'>
      <div className="container">
        <h4 className='BestPro py-4'>Best Seller Products</h4>
        <div className="row aroberaDirection ">
          <div className="col-lg-3 aroberaRes ">
            <Link to={'/shopD'}> <img className='img-fluid ProImg' src={Best} alt="image" /></Link>
            <span className='discount'>New</span>
            <div data-coreui-toggle="rating" data-coreui-value="3"></div>
            <div className='IconPossi'>
                <div> <Link to={'/shopWish'} className='link' > <span className='iconsWish'><GiEternalLove /></span></Link> </div>
                <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWish'><FaEye /></span></Link> </div>
                <div> <Link to={'/shopCom'} className='link' > <span className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
               </div>
            <div>
            <h4 className='price pt-1'>$150.65</h4>
            <h4 className='lotion'>Lotion Shower gel</h4>
            </div>

          </div>


          <div className="col-lg-3 aroberaRes ">
            <Link to={'/shopD'}> <img className='img-fluid' src={Best2} alt="image" /></Link>

            <span className='discount'>-45%</span>
            <div className='IconPossi'>
                <div> <Link to={'/shopWish'} className='link' > <span className='iconsWish'><GiEternalLove /></span></Link> </div>
                <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWish'><FaEye /></span></Link> </div>
                <div> <Link to={'/shopCom'} className='link' > <span className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
               </div>
            <div>
            <h4 className='price pt-1'>$250.65</h4>
            <h4 className='lotion'>Argan Cream Body Butter</h4>
            </div>
          </div>

          <div className="col-lg-3 aroberaRes ">
            <Link to={'/shopD'}> <img className='img-fluid' src={Best3} alt="image" /></Link>
            <span className='discount'>sale</span>
            <div className='IconPossi'>
                <div> <Link to={'/shopWish'} className='link' > <span className='iconsWish'><GiEternalLove /></span></Link> </div>
                <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWish'><FaEye /></span></Link> </div>
                <div> <Link to={'/shopCom'} className='link' > <span className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
               </div>
            
            <h4 className='price pt-1'>$175.65</h4>
            <h4 className='lotion'>Manicure Gel</h4>
          </div>
          <div className="col-lg-3 aroberaRes ">
            <Link to={'/shopD'}> <img className='img-fluid' src={Best4} alt="image" /></Link>
            <span className='discount'>New</span>
            <div className='IconPossi'>
                <div> <Link to={'/shopWish'} className='link' > <span className='iconsWish'><GiEternalLove /></span></Link> </div>
                <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWish'><FaEye /></span></Link> </div>
                <div> <Link to={'/shopCom'} className='link' > <span className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
               </div>
           <div>
           <h4 className='price pt-1'>$75.65</h4>
           <h4 className='lotion'>Manicure Gel nails, makeup</h4>
           </div>
          </div>
        </div>


        <div className="row aroberaDirection ">
          <div className="col-lg-3 aroberaRes ">
            <Link to={'/shopD'}> <img className='img-fluid ProImg' src={Best5} alt="image" /></Link>
            <span className='discount'>New</span>
            <div data-coreui-toggle="rating" data-coreui-value="3"></div>
            <div className='IconPossi'>
                <div> <Link to={'/shopWish'} className='link' > <span className='iconsWish'><GiEternalLove /></span></Link> </div>
                <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWish'><FaEye /></span></Link> </div>
                <div> <Link to={'/shopCom'} className='link' > <span className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
               </div>
            <div>
            <h4 className='price pt-1'>$150.65</h4>
            <h4 className='lotion'>Lotion Shower gel</h4>
            </div>

          </div>


          <div className="col-lg-3 aroberaRes ">
            <Link to={'/shopD'}> <img className='img-fluid' src={Best6} alt="image" /></Link>

            <span className='discount'>-45%</span>
            <div className='IconPossi'>
                <div> <Link to={'/shopWish'} className='link' > <span className='iconsWish'><GiEternalLove /></span></Link> </div>
                <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWish'><FaEye /></span></Link> </div>
                <div> <Link to={'/shopCom'} className='link' > <span className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
               </div>
            <div>
            <h4 className='price pt-1'>$250.65</h4>
            <h4 className='lotion'>Argan Cream Body Butter</h4>
            </div>
          </div>

          <div className="col-lg-3 aroberaRes ">
          <Link to={'/shopD'}>   <img className='img-fluid' src={Best7} alt="image" /></Link>
            <span className='discount'>sale</span>
            <div className='IconPossi'>
                <div> <Link to={'/shopWish'} className='link' > <span className='iconsWish'><GiEternalLove /></span></Link> </div>
                <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWish'><FaEye /></span></Link> </div>
                <div> <Link to={'/shopCom'} className='link' > <span className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
               </div>
            
            <h4 className='price pt-1'>$175.65</h4>
            <h4 className='lotion'>Manicure Gel</h4>
          </div>
          <div className="col-lg-3 aroberaRes ">
            <Link to={'/shopD'}> <img className='img-fluid' src={Best8} alt="image" /></Link>
            <span className='discount'>New</span>
            <div className='IconPossi'>
                <div> <Link to={'/shopWish'} className='link' > <span className='iconsWish'><GiEternalLove /></span></Link> </div>
                <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWish'><FaEye /></span></Link> </div>
                <div> <Link to={'/shopCom'} className='link' > <span className='iconsWish'><BsBarChartLineFill /></span></Link> </div>
               </div>
           <div>
           <h4 className='price pt-1'>$75.65</h4>
           <h4 className='lotion'>Manicure Gel nails, makeup</h4>
           </div>
          </div>
        </div>

        <div className='d-flex justify-content-center pt-5'>
          <button className='seeAll'>See All Products</button>
        </div>
      </div>
    </section>

    {/* Beauty Inspired by Real */}
  

   <Swiper
     autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    loop={true}
     pagination={{
      el:'.test',
       clickable:true 
       }} 
     navigation={true} modules={[Navigation,Pagination,Autoplay]}
      className="mySwiper">

        <SwiperSlide className='slider2'>
          <div className="container">
            <p className='mega'>SPECIAL OFFER</p>
            <h3 className='upTo'>Beauty Inspired by Real  <br/>
            </h3>
           <p className='objective'>Completely grow maintainable niches via tactical 
            services. <br /> Progressively synthesize market positioning paradigms for <br />
             functional architectures. Professionally aggregate</p>
          <a className='shopNow' href="">Explore More</a>
          </div>

          
        </SwiperSlide>
        <SwiperSlide className='slider3'>
          <div className="container">
          <p className='mega'>SPECIAL OFFER</p>
            <h3 className='upTo'>Beauty Inspired by Real  <br/>
            Shine In Life </h3>
           <p className='objective'>Completely grow maintainable niches via tactical 
            services. <br /> Progressively synthesize market positioning paradigms for <br />
             functional architectures. Professionally aggregate</p>
          <a className='shopNow' href="">Explore More</a>
          </div>

          
        </SwiperSlide>
        <SwiperSlide className='slider4'>
          <div className="container">
          <p className='mega'>SPECIAL OFFER</p>
            <h3 className='upTo'>Beauty Inspired by Real  <br/>
            Shine In Life </h3>
           <p className='objective'>Completely grow maintainable niches via tactical 
            services. <br /> Progressively synthesize market positioning paradigms for <br />
             functional architectures. Professionally aggregate</p>
          <a className='shopNow' href="">Explore More</a>
          </div>

          
        </SwiperSlide>

        <div className="container test"></div>
        
        
      </Swiper>


{/* caroselPart3  */}

<div className="container">
<h3 className='text-center pt-5'>Latest News</h3>
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

  <SwiperSlide className='Hid'>
  <div class="card shadow-md">
  <Link to={'/shopD'}> <img src={BestPro1} class="card-img-top  OverView" alt="image"/></Link>

  <div className='IconCard'>
    <div> <Link to={'/shopWish'} className='link' > <span className='iconsWishCard'><GiEternalLove /></span></Link> </div>
    <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishCard'><FaEye /></span></Link> </div>
    <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishCard'><BsBarChartLineFill /></span></Link> </div>
  </div>

  <div class="card-body p-1">
  <h4 className='cardHEader m-0'>Best  Beauty skin. </h4>
  <p className='CardDami m-0'>Appropriately seize 24/365 markets</p>
  </div>
</div>

  </SwiperSlide>

  <SwiperSlide>
  <div class="card shadow-md">
  <Link to={'/shopD'}> <img src={BestPro2} class="card-img-top OverView " alt="image"/></Link>
  <div className='IconCard'>
    <div> <Link to={'/shopWish'} className='link' > <span className='iconsWishCard'><GiEternalLove /></span></Link> </div>
    <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishCard'><FaEye /></span></Link> </div>
    <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishCard'><BsBarChartLineFill /></span></Link> </div>
  </div>
  <div class="card-body p-1">
  <h4 className='cardHEader m-0'>Herbal treatmen scal </h4>
  <p className='CardDami m-0'>Appropriately seize 24/365 markets</p>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>
  <div class="card shadow-md">
 <Link to={'/shopD'}>  <img src={BestPro3} class="card-img-top OverView" alt="image"/></Link>
  <div className='IconCard'>
    <div> <Link to={'/shopWish'} className='link' > <span className='iconsWishCard'><GiEternalLove /></span></Link> </div>
    <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishCard'><FaEye /></span></Link> </div>
    <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishCard'><BsBarChartLineFill /></span></Link> </div>
  </div>
  <div class="card-body p-1">
  <h4 className='cardHEader m-0'>Traveling Solo Is Awesome</h4>
  <p className='CardDami m-0'>Appropriately seize 24/365 markets</p>
  </div>
</div>

    
  </SwiperSlide>
  <SwiperSlide>
  <div class="card shadow-md">
  <Link to={'/shopD'}> <img src={BestPro4} class="card-img-top OverView" alt="image"/></Link>
  <div className='IconCard'>
    <div> <Link to={'/shopWish'} className='link' > <span className='iconsWishCard'><GiEternalLove /></span></Link> </div>
    <div> <Link to={'/shopCheck'} className='link' > <span className='iconsWishCard'><FaEye /></span></Link> </div>
    <div> <Link to={'/shopCom'} className='link' > <span className='iconsWishCard'><BsBarChartLineFill /></span></Link> </div>
  </div>
  <div class="card-body p-1">
  <h4 className='cardHEader m-0'>A Beautiful  Morning</h4>
  <p className='CardDami m-0'>Appropriately seize 24/365 markets</p>
  </div>
</div>

    
  </SwiperSlide>

  




</Swiper>



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







    </>
  )
}

export default Home