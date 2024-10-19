import React, { useState } from 'react'
import shp from '../assets/images/ShopD/Shp.png'
import { FaShoppingCart } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";
import { FaEye } from "react-icons/fa";

import colths5 from '../assets/images/Colths/colths (5).jpg'
import colths6 from '../assets/images/Colths/colths (6).jpg'
import colths7 from '../assets/images/Colths/colths (7).jpg'
import colths8 from '../assets/images/Colths/colths (8).jpg'

// import { GiEternalLove } from "react-icons/gi";
// import { FaEye } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";

export const ShopD = () => {

 const [count,setCount] = useState(1)

const handleIncr =()=>{
  setCount(count + 1)
}

const handleDecr =()=>{
  setCount(count - 1)
}

  return (
    <>
    <section className='AboutU d-flex justify-content-center align-items-center'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className='aboutUS'>Shop - Details Style One</h4>
           <p className='Home-About'>Home  /  About Us</p>

          </div>
        </div>
      </div>
    </section>


    <section className='py-5'>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <img className='img-fluid rounded shadow-md' src={shp} alt="" />
          </div>
          <div className="col-lg-6">
            <h4 className='letter py-1'>Leather Jackets</h4>

            <span className='pricePro py-1'>$125.65</span> <span className='priceOr'>$150.65</span>
            <p className='shopDami py-1'>Quickly productivate holistic systems after 24/365 e-commerce. Continually synthesize superior catalysts for change via high standards in leadership skills. Collaboratively evisculate distributed functionalities rather than timely methods of empowerment.</p>

            <div className='d-flex'>
            <p className='pe-2 inSize'>Size: </p> 
            <select className='Size' name="number" id="">
              <option value="40">40</option> 
              <option value="42">42</option>
              <option value="46">46</option>
              <option value="48">48</option>
               </select>
            </div>

            <div className='d-flex pt-2'>
            <p className='pe-2 inSize'>Color: </p> 
            <select className='Size' name="text" id="">
              <option value="Gray">Gray</option> 
              <option value="Orange">Orange</option>
              <option value="Eash">Eash</option>
              <option value="Light">Light</option>
               </select>
            </div>

           <div>
           <p className='quantinty'>Quantity:</p>

           {/* <div className='d-flex'>
            <div><span className='CountBox' onClick={handleDecr} >-</span></div>
            <div><p className='CountBox'>{count} </p></div>
            <div><span className='CountBox' onClick={handleIncr} >+</span></div>

            <div> <button className='add'> <span><FaShoppingCart /></span> Add To Cart</button></div>
            <div className='d-flex shopIconsDell'>
            <div><span className='CountBoxIcon'><GiEternalLove /></span></div>
            <div> <span className='CountBoxIcon'><FaEye /></span></div>
            </div>
           </div> */}


<div className="d-flex justify-content-between align-items-center">
  
  <div className="d-flex align-items-center">
    <div>
      <span className="CountBox" onClick={handleDecr}>-</span>
    </div>
    <div>
      <p className="CountBox">{count}</p>
    </div>
    <div>
      <span className="CountBox" onClick={handleIncr}>+</span>
    </div>
  </div>

  <div className="d-flex align-items-start">
    <button className="add">
      <span><FaShoppingCart /></span> Add To Cart
    </button>
  </div>
</div>

<div className='d-flex'>
<div>
      <span className="CountBoxIcon"><GiEternalLove /></span>
    </div>
    <div>
      <span className="CountBoxIcon"><FaEye /></span>
    
  </div>
</div>






           </div>




          </div>
        </div>
      </div>
    </section>



    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

               <p className='text-center'><span className='py-2 px-3 bg-danger smallHed  shadow-md'>Product Description</span> <span  className='py-2 px-3 bg-black text-white smallHed  shadow-md'>Customer Review(1)</span> <span className='py-2 px-3 bg-black text-white smallHed  shadow-md'>Additional Information</span></p>


               <p className='SHodDamiTExt py-4'>Conveniently build adaptive users with front-end human capital. Appropriately unleash team building technology for goal-oriented paradigms. Dynamically generate interoperable e-business vis-a-vis goal-oriented value. Completely pursue fully tested content whereas multifunctional core competencies. Progressively scale team driven process improvements before premier functionalities. Holisticly cultivate intermandated methodologies rather than virtual technology. Monotonectally target interactive synergy without process-centric e-markets. Holisticly pursue enterprise-wide leadership skills for enterprise leadership. Collaboratively underwhelm standardized expertise after effective bandwidth. Conveniently productivate holistic collaboration and idea-sharing rather than granular strategic theme areas. <br/>

               Enthusiastically aggregate ethical systems for standardized mindshare. Energistically target resource maximizing leadership skills without backward-compatible action items. Credibly impact alternative expertise vis-a-vis economically sound results. Dynamically synergize empowered benefits through functional partnerships. Authoritatively empower prospective infomediaries for interactive content.
                Synergistically embrace 2.0 paradigms through professional intellectual capital. Interactively strategize parallel growth strategies without out-of-the-box web services. Assertively reinvent installed base.</p>
          </div>


        </div>
      </div>
    </section>

    <section className='py-5'>
      <div className="container">

        <h4 className='related py-3'>Releted Products</h4>
      <div className="row aroberaDirection ">
          <div className="col-lg-3 aroberaRes ">
            <img className='img-fluid ProImg' src={colths5} alt="" />
            <span className='discount'>New</span>
            <div data-coreui-toggle="rating" data-coreui-value="3"></div>
               <div className='IconShopping'>
               <div> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></div>
                <div><span className='iconsWishShopping'><GiEternalLove /></span></div>
                <div><span className='iconsWishShopping'><FaEye /></span></div>
                <div><span className='iconsWishShopping'><BsBarChartLineFill /></span></div>
               </div>
            <div>
            <h4 className='price pt-1'>$150.65</h4>
            <h4 className='lotion'>Lotion Shower gel</h4>
            </div>

          </div>


          <div className="col-lg-3 aroberaRes ">
            <img className='img-fluid' src={colths6} alt="" />

            <span className='discount'>New</span>
            <div className='IconShopping'>
            <div> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></div>
                <div><span className='iconsWishShopping'><GiEternalLove /></span></div>
                <div><span className='iconsWishShopping'><FaEye /></span></div>
                <div><span className='iconsWishShopping'><BsBarChartLineFill /></span></div>
               </div>
            <div>
            <h4 className='price pt-1'>$250.65</h4>
            <h4 className='lotion'>Argan Cream Body Butter</h4>
            </div>
          </div>

          <div className="col-lg-3 aroberaRes ">
            <img className='img-fluid' src={colths7} alt="" />
            <span className='discount'>New</span>
            <div className='IconShopping'>
            <div> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></div>
                <div><span className='iconsWishShopping'><GiEternalLove /></span></div>
                <div><span className='iconsWishShopping'><FaEye /></span></div>
                <div><span className='iconsWishShopping'><BsBarChartLineFill /></span></div>
               </div>
            
            <h4 className='price pt-1'>$175.65</h4>
            <h4 className='lotion'>Manicure Gel</h4>
          </div>
          <div className="col-lg-3 aroberaRes ">
            <img className='img-fluid' src={colths8} alt="" />
            <span className='discount'>New</span>
            <div className='IconShopping'>
            <div> <span className='iconsWishShopping text-danger'><CiShoppingCart /></span></div>
                <div><span className='iconsWishShopping'><GiEternalLove /></span></div>
                <div><span className='iconsWishShopping'><FaEye /></span></div>
                <div><span className='iconsWishShopping'><BsBarChartLineFill /></span></div>
               </div>
           <div>
           <h4 className='price pt-1'>$75.65</h4>
           <h4 className='lotion'>Manicure Gel nails, makeup</h4>
           </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
