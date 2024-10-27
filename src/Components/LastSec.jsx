import React, { useState } from 'react'

import { FaRegUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { Search } from './Search';

export const LastSec = () => {

  const [ show,SetShow] = useState(false)

  
  const ShowSearch = (e)=>{
    e.preventDefault()
    SetShow(true)
}

const cross = ()=>{
  SetShow(false)
}
  return (
    <>

<section className='search-foot '>
    <div className="container">
      <div className="row">

        <div className="col-2 mx-auto text-center">
        <span className='userIcon' ><FaRegUser  /></span>
        </div>

        <div className="col-2 mx-auto text-center">
        <span className='down-Search' onClick={ShowSearch}><IoSearchSharp /></span>
        </div>

        <div  className="col-2 mx-auto text-center" >
        <div style={{position:'absolute'}}>
        <span className='userIcon'><FaShoppingBag /></span>
        <span className='downNu'>0</span>
        </div>
        </div>

      </div>
    </div>
  </section>

  <Search open= {show} cross={cross} />
    </>
  )
}
