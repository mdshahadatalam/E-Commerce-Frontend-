import React from 'react'
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


export const Blogs = () => {
  return (
    <>
     <section className='AboutU d-flex justify-content-center align-items-center'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className='aboutUS'>Blogs</h4>
           <p className='Home-About'>Home  /  About Us</p>

          </div>
        </div>
      </div>
    </section>

    <section className='py-5'>
      <div className="container">
        <div className="row blogRes ">
          <div className="col-lg-4">
            <div className='shadow-lg bg-light rounded mt-2 januaryPossi'>
              <img className='img-fluid' src={blog1} alt="" />

              <span className='january'>January 04, 2022</span>

              <div className='p-3'>
              <h4 className='color py-1'>Color, Size, Material Swatches</h4>
              <p className='author py-1'>Authoritatively innovate reliable users for team building intellectual capital. Assertively.</p>
              <span className='readMore'>Read More <IoIosArrowRoundForward /> </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className='shadow-lg bg-light rounded mt-2 januaryPossi'>
              <img className='img-fluid' src={blog2} alt="" />
              <span className='january'>January 04, 2022</span>

              <div className='p-3'>
              <h4 className='color py-1'>Fashion coats 2022: key trends</h4>
              <p className='author py-1'>Authoritatively innovate reliable users for team building intellectual capital. Assertively.</p>
              <span className='readMore'>Read More <IoIosArrowRoundForward /> </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className='shadow-lg bg-light rounded mt- januaryPossi'>
              <img className='img-fluid' src={blog3} alt="" />
              <span className='january'>January 04, 2022</span>

              <div className='p-3'>
              <h4 className='color py-1'>Fashion Women Long Skat </h4>
              <p className='author py-1'>Authoritatively innovate reliable users for team building intellectual capital. Assertively.</p>
              <span className='readMore'>Read More <IoIosArrowRoundForward /> </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row blogRes ">
          <div className="col-lg-4">
            <div className='shadow-lg bg-light rounded mt-2 januaryPossi'>
              <img className='img-fluid' src={blog4} alt="" />
              <span className='january'>January 04, 2022</span>

              <div className='p-3'>
              <h4 className='color py-1'>Minimal Design Inspiration</h4>
              <p className='author py-1'>Authoritatively innovate reliable users for team building intellectual capital. Assertively.</p>
              <span className='readMore'>Read More <IoIosArrowRoundForward /> </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className='shadow-lg bg-light rounded mt-2 januaryPossi'>
              <img className='img-fluid' src={blog5} alt="" />
              <span className='january'>January 04, 2022</span>

              <div className='p-3'>
              <h4 className='color py-1'>Fashion T-shirt 2022: key trends</h4>
              <p className='author py-1'>Authoritatively innovate reliable users for team building intellectual capital. Assertively.</p>
              <span className='readMore'>Read More <IoIosArrowRoundForward /> </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className='shadow-lg bg-light rounded mt-2 januaryPossi'>
              <img className='img-fluid' src={blog6} alt="" />
              <span className='january'>January 04, 2022</span>

              <div className='p-3'>
              <h4 className='color py-1'>Women Stylish Bag & Shose </h4>
              <p className='author py-1'>Authoritatively innovate reliable users for team building intellectual capital. Assertively.</p>
              <span className='readMore'>Read More <IoIosArrowRoundForward /> </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row blogRes ">
          <div className="col-lg-4">
            <div className='shadow-lg bg-light rounded mt-2 januaryPossi'>
              <img className='img-fluid' src={blog8} alt="" />
              <span className='january'>January 04, 2022</span>

              <div className='p-3'>
              <h4 className='color py-1'>Women Fashionable Coats 2022</h4>
              <p className='author py-1'>Authoritatively innovate reliable users for team building intellectual capital. Assertively.</p>
              <span className='readMore'>Read More <IoIosArrowRoundForward /> </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className='shadow-lg bg-light rounded mt-2 januaryPossi'>
              <img className='img-fluid' src={blog8} alt="" />
              <span className='january'>January 04, 2022</span>

              <div className='p-3'>
              <h4 className='color py-1'>Fashion Women New key trends</h4>
              <p className='author py-1'>Authoritatively innovate reliable users for team building intellectual capital. Assertively.</p>
              <span className='readMore'>Read More <IoIosArrowRoundForward /> </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className='shadow-lg bg-light rounded mt-2 januaryPossi'>
              <img className='img-fluid' src={blog9} alt="" />
              <span className='january'>January 04, 2022</span>

              <div className='p-3'>
              <h4 className='color py-1'>New Trends Hudi Sweater </h4>
              <p className='author py-1'>Authoritatively innovate reliable users for team building intellectual capital. Assertively.</p>
              <span className='readMore'>Read More <IoIosArrowRoundForward /> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
