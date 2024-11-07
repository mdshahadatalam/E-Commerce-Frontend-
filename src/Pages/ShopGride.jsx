import React, { useEffect } from 'react'


import { GiEternalLove } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";
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
import { Link, useLocation } from 'react-router-dom';

// Aos animation 
import Aos from 'aos'
import 'aos/dist/aos.css'



export const ShopGride = () => {

  useEffect( ()=>{
    Aos.init();
  })

  const location = useLocation()
  return (
    <>
    <section className='AboutU d-flex justify-content-center align-items-center'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 data-aos="zoom-in" data-aos-duration="1500" className='aboutUS'>Shop-Gride</h4>
           <p  data-aos="zoom-in" data-aos-duration="1500" className='Home-About'>Home  /  About Us</p>

          </div>
        </div>
      </div>
    </section>


    {/* shop-product */}

    <section className='py-5'>
      <div className="container">
        <h4 className='showing py-4'>Showing 12 of 16 Post</h4>
        <div className="row aroberaDirection ">
          <div className="col-lg-3 aroberaRes ">

           <Link to={'/shopD'}>  <img className='img-fluid ProImg' src={colths1} alt="image" /></Link>

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
           <Link to={'/shopD'}>  <img className='img-fluid' src={colths2} alt="image" /></Link>

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
            <Link to={'/shopD'}> <img className='img-fluid' src={colths3} alt="image" /></Link>
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
            <Link to={'/shopD'}> <img className='img-fluid' src={colths4} alt="image" /></Link>
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
            <Link to={'/shopD'}> <img className='img-fluid ProImg' src={colths5} alt="image" /></Link>
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
            <Link to={'/shopD'}> <img className='img-fluid' src={colths7} alt="image" /></Link>
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
            <Link to={'/shopD'}> <img className='img-fluid' src={colths8} alt="image" /></Link>
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
            <Link to={'/shopD'}><img className='img-fluid ProImg' src={colths9} alt="image" /></Link>
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
            <Link to={'/shopD'}> <img className='img-fluid' src={colths10} alt="image" /></Link>

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
            <Link to={'/shopD'}> <img className='img-fluid' src={colths11} alt="image" /></Link>
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
           <Link to={'/shopD'}>  <img className='img-fluid' src={colths12} alt="image" /></Link>
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

            <Link to={'/ShopGride2'} >
             <span className='NumberCu'>2</span> 
             </Link>
            Next  <span><IoIosArrowRoundForward /> </span>   
            </p>
        </div>
      </div>
    </section>

    </>
  )
}
