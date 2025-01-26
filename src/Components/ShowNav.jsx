import React, { useState } from 'react'
import './Navber.css'
import logo from '../assets/images/logo/Logo (1).png'
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { Search } from './Search';
import { IoSearchSharp } from "react-icons/io5";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { NavLink, useLocation } from 'react-router-dom';

export const ShowNav = ({setShow}) => {

    const [ show,SetShow] = useState(false)
    
    const location = useLocation()
    // console.log(location.pathname);
    

    const ShowSearch = (e)=>{
        e.preventDefault()
        SetShow(true)
    }

    const cross = ()=>{
      SetShow(false)
    }

    const handleShow = (e)=>{
        setShow(!show)
        e.preventDefault()
    }



  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container">
    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
    <button className="navbar-toggler" 
    type="button"
    data-bs-toggle="offcanvas"
    href="#offcanvasExample"
    role="button"
    aria-controls="offcanvasExample">
      {/* <span className="navbar-toggler-icon"></span> */}
      <span><HiMiniBars3BottomRight /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">

      <NavLink to={''}  className={`${location.pathname == '/' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li onClick={handleShow} className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
      </NavLink>

        
      <NavLink to={''}  className={`${location.pathname == '/shopGride' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li onClick={handleShow} className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li>
      </NavLink>

        <li onClick={handleShow} className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu">
            <NavLink to={''}  className={'edit'} > <li><a className="dropdown-item" href="#">About Us</a></li></NavLink>
           </ul>
        </li>
        
        

    <NavLink to={''}  className={`${location.pathname == '/feature' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li onClick={handleShow} className="nav-item">
          <a className="nav-link" href="#">Feature</a>
        </li>
      </NavLink>




      <NavLink to={''}  className={`${location.pathname == '/blog' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li onClick={handleShow} className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
      </NavLink>

       <NavLink to={''}   className={`${location.pathname == '/contact' ? " border-1 border-dark border-bottom" : ""} edit`}>
       <li onClick={handleShow} className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
       </NavLink>
        
      </ul>

      <ul className='m-0 d-flex'>
        <li>
            <a href="" onClick={ShowSearch}>
                <span className='icons'><IoMdSearch /></span>
            </a>
        </li>
        <li onClick={handleShow}><a href=""><span className='icons'><FaRegUser /></span></a></li>
        <li onClick={handleShow}><a href=""><span className='icons'><GiSelfLove /></span></a></li>
      
      
           <li className='last'>
               <a href="">
                <span className='icons'><FaShoppingBag />
                <span className='number'>0</span>
                 </span>
              </a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>





{/* Offcanbase  */}

 

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel"> <img src={logo} className='img-fluid' alt="" /> </h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
    <div class="dropdown mt-3">
      
<ul className="navbar-nav m-auto mb-2 mb-lg-0">

<NavLink to={''}  className={`${location.pathname == '/' ? "text-danger" : ""} edit`} >
<li onClick={handleShow} data-bs-dismiss="offcanvas"  className="nav-item">
    <a className="nav-link" href="#">Home</a>
  </li>
</NavLink>

  
<NavLink to={''}  className={`${location.pathname == '/shopGride' ? "text-danger" : ""} edit`} >
      <li onClick={handleShow} data-bs-dismiss="offcanvas"  className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li>
      </NavLink>

  <li onClick={handleShow} data-bs-dismiss="offcanvas" className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Pages
    </a>
    <ul data-bs-dismiss="offcanvas"  className="dropdown-menu">
      <NavLink to={''}  className={'edit'} > <li><a className="dropdown-item" href="#">About Us</a></li></NavLink>
     </ul>
  </li>
  
  <NavLink to={''}  className={`${location.pathname == '/feature' ? "text-danger" : ""} edit`} >
      <li onClick={handleShow} data-bs-dismiss="offcanvas"  className="nav-item">
          <a className="nav-link" href="#">Feature</a>
        </li>
      </NavLink>


  <NavLink to={''}  className={`${location.pathname == '/blog' ? "text-danger" : ""} edit`} >
      <li onClick={handleShow} data-bs-dismiss="offcanvas"  className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
      </NavLink>



 <NavLink to={''}   className={`${location.pathname == '/contact' ? "text-danger" : ""} edit`}>
 <li onClick={handleShow} data-bs-dismiss="offcanvas"  className="nav-item">
    <a className="nav-link" href="#">Contact</a>
  </li>
 </NavLink>
  
</ul>

<ul className='m-0 d-flex'>
  <li data-bs-dismiss="offcanvas" >
      <a href="" onClick={ShowSearch}>
          <span className='icons'><IoMdSearch /></span>
      </a>
  </li>
  <li data-bs-dismiss="offcanvas" ><a href=""><span onClick={handleShow} className='icons'><FaRegUser /></span></a></li>
  <li><a href=""><span className='icons'><GiSelfLove /></span></a></li>


     <li className='last'>
         <a href="">
          <span className='icons'><FaShoppingBag />
          <span className='number'>0</span>
           </span>
        </a>
  </li>
</ul>
    </div>
  </div>
</div>



<Search open= {show} cross={cross} />
    </>
  )
}
