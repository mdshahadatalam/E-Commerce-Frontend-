import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export const Features = () => {
  return (
    <>
     <section className='Error d-flex justify-content-center align-items-center'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className='aboutUS'>PAGE NOT FOUND!</h4>
           <p className='Home-About'>Sorry, we couldn’t find the page you where looking for. <br/>
           We suggest that you return to homepage.</p>

          <div className='text-center'>
          <Link to={'/'} ><button className='backTo'>Back to Home <IoIosArrowRoundForward /> </button></Link>
          </div>

          </div>
        </div>
      </div>
    </section>

    </>
  )
}
