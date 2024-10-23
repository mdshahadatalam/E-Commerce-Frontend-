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

export const Navber = () => {

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

      <NavLink to={'/'}  className={`${location.pathname == '/' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
      </NavLink>

        
      <NavLink to={'/shopGride'}  className={`${location.pathname == '/shopGride' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li>
      </NavLink>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu">
            <NavLink to={'/about'}  className={'edit'} > <li><a className="dropdown-item" href="#">About Us</a></li></NavLink>
           </ul>
        </li>
        
        

    <NavLink to={'/feature'}  className={`${location.pathname == '/feature' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li className="nav-item">
          <a className="nav-link" href="#">Feature</a>
        </li>
      </NavLink>




      <NavLink to={'/blog'}  className={`${location.pathname == '/blog' ? " border-1 border-dark border-bottom" : ""} edit`} >
      <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
      </NavLink>

       <NavLink to={'/contact'}   className={`${location.pathname == '/contact' ? " border-1 border-dark border-bottom" : ""} edit`}>
       <li className="nav-item">
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
        <li><a href=""><span className='icons'><FaRegUser /></span></a></li>
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
</nav>


  {/* <section className='search-foot d-lg-none'>
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
  </section> */}





 

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel"> <img src={logo} className='img-fluid' alt="" /> </h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
    <div class="dropdown mt-3">
      {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button> */}
      {/* <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item py-1 px-3">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item py-1 px-3">
          <a className="nav-link" href="#">Shop</a>
        </li>
        <li className="nav-item py-1 px-3">
          <a className="nav-link" href="#">Pages</a>
        </li>
        
        <li className="nav-item dropdown py-1 px-3">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Features1</a></li>
            <li><a className="dropdown-item" href="#">Features2</a></li>
            <li><a className="dropdown-item" href="#">Features3</a></li>
            <li><a className="dropdown-item" href="#">Features4</a></li>
             </ul>
        </li>

        <li className="nav-item py-1 px-3">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item py-1 px-3">
          <a className="nav-link" href="#">Contact</a>
        </li>
        
      </ul> */}


<ul className="navbar-nav m-auto mb-2 mb-lg-0">

<NavLink to={'/'}  className={`${location.pathname == '/' ? "text-danger" : ""} edit`} >
<li className="nav-item">
    <a className="nav-link" href="#">Home</a>
  </li>
</NavLink>

  
<NavLink to={'/shopGride'}  className={`${location.pathname == '/shopGride' ? "text-danger" : ""} edit`} >
      <li className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li>
      </NavLink>

  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Pages
    </a>
    <ul className="dropdown-menu">
      <NavLink to={'/about'}  className={'edit'} > <li><a className="dropdown-item" href="#">About Us</a></li></NavLink>
     </ul>
  </li>
  
  <NavLink to={'/feature'}  className={`${location.pathname == '/feature' ? "text-danger" : ""} edit`} >
      <li className="nav-item">
          <a className="nav-link" href="#">Feature</a>
        </li>
      </NavLink>


  <NavLink to={'/blog'}  className={`${location.pathname == '/blog' ? "text-danger" : ""} edit`} >
      <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
      </NavLink>



 <NavLink to={'/contact'}   className={`${location.pathname == '/contact' ? "text-danger" : ""} edit`}>
 <li className="nav-item">
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
  <li><a href=""><span className='icons'><FaRegUser /></span></a></li>
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
