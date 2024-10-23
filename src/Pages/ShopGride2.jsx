import React from 'react'

import { GiEternalLove } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

import Colt1 from '../assets/images/Colths2/2Colths (1).jpg'
import colt2 from '../assets/images/Colths2/2Colths (2).jpg'
import colt3 from '../assets/images/Colths2/2Colths (3).jpg'
import colt4 from '../assets/images/Colths2/2Colths (4).jpg'
import colt5 from '../assets/images/Colths2/2Colths (5).jpg'
import colt6 from '../assets/images/Colths2/2Colths (6).jpg'
import colt7 from '../assets/images/Colths2/2Colths (7).jpg'
import colt8 from '../assets/images/Colths2/2Colths (8).jpg'
import colt9 from '../assets/images/Colths2/2Colths (9).jpg'
import colt10 from '../assets/images/Colths2/2Colths (10).jpg'
import colt11 from '../assets/images/Colths2/2Colths (11).jpg'
import colt12 from '../assets/images/Colths2/2Colths (12).jpg'





import { Link, useLocation } from 'react-router-dom';

export const ShopGride2 = () => {

 const location = useLocation()

  return (
    <>
    <section className='py-5'>
      <div className="container">
        <h4 className='showing py-4'>Showing 12 of 16 Post</h4>
        <div className="row aroberaDirection ">
          <div className="col-lg-3 aroberaRes ">
        <Link to={'/shopD'}>    <img className='img-fluid ProImg' src={Colt1} alt="image" /></Link>
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
          <Link to={'/shopD'}> <img className='img-fluid' src={colt2} alt="image" /></Link>

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
           <Link to={'/shopD'}> <img className='img-fluid' src={colt3} alt="image" /></Link>
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
            <Link to={'/shopD'}> <img className='img-fluid' src={colt4} alt="image" /></Link>
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
           <Link to={'/shopD'}>  <img className='img-fluid ProImg' src={colt5} alt="image" /></Link>
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
            <Link to={'/shopD'}> <img className='img-fluid' src={colt6} alt="image" /></Link>

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
            <Link to={'/shopD'}> <img className='img-fluid' src={colt7} alt="image" /></Link>
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
            <Link to={'/shopD'}> <img className='img-fluid' src={colt8} alt="image" /></Link>
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
            <Link to={'/shopD'}> <img className='img-fluid ProImg' src={colt9} alt="image" /></Link>
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
            <Link to={'/shopD'}> <img className='img-fluid' src={colt10} alt="image" /></Link>

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
            <Link to={'/shopD'}> <img className='img-fluid' src={colt11} alt="image" /></Link>
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
            <Link to={'/shopD'}> <img className='img-fluid' src={colt12} alt="image" /></Link>
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
           <p className='text-center'> <span><IoIosArrowRoundBack /></span> Pre  
            <Link to={'/ShopGride'} > <span className='NumberCu'>1</span> </Link>
             <span className={`${ location.pathname == '/ShopGride2' ?  "bg-dark text-light":""}  NumberCu`} >2</span> 
            Next  <span><IoIosArrowRoundForward /> </span>   
            </p>
        </div>
      </div>
    </section>
    </>
  )
}
