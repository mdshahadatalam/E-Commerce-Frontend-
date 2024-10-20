import React from 'react'
import { FiSend } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";

const FirstSection = () => {
  return (
    <>
<section className='firstSection py-3 shadow-md align-items-center'>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="d-flex Plan justify-content-between">
                    <div>
                        <p className='firstHeader'>
                            <span className='sendIcons'><FiSend /></span>
                            FREE SHIPPING worldwide for all orders over <span className='dolar'>$150</span>
                        </p>
                    </div>
                    <div className='d-flex Plan align-items-center'>
                        <p className='firstHeader2'>Track Your Order</p>
                        <p className='firstHeader2'>English <span><IoIosArrowDown /></span></p>
                        <p className='firstHeader2'>USD <span><IoIosArrowDown /></span></p>
                        <div className='d-flex Plan'>
                            <div><span className='firstContactIcon'><FaFacebookF /></span></div>
                            <div><span className='firstContactIcon'><FaTwitter /></span></div>
                            <div><span className='firstContactIcon'><FaInstagram /></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



    </>
  )
}

export default FirstSection