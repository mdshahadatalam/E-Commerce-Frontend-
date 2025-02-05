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
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import { getAuth, signOut } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch} from 'react-redux';
import { loggedInUser } from '../Feuature/Slice/LoginSlice';
import { CiSettings } from 'react-icons/ci';

export const Navber = () => {

    const [ show,SetShow] = useState(false)
    const auth = getAuth();
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
      
 const handleSitting =(e)=>{
  e.preventDefault()
  navigate('/forget')
 }
    

    const ShowSearch = (e)=>{
        e.preventDefault()
        SetShow(true)
    }

    const cross = ()=>{
      SetShow(false)
    }

    
  
    // const handleLogOut =(e)=>{
    //   e.preventDefault()
    //   signOut(auth).then(() => {
    //     setTimeout(()=>{
    //       navigate('/')
    //       dispatch(loggedInUser())
    //      localStorage.removeItem('user')
    //   },2000)

    //      toast.success('Successfully log out', {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: false,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //       // transition: Bounce,
    //        });
    //   }).catch((error) => {
    //     // An error happened.
    //      toast.error('Try again', {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: false,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //       // transition: Bounce,
    //       });
    //   });
    // }
   

     
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
                <span title='Search' className='icons'><IoMdSearch /></span>
            </a>
        </li>
        <li><a href=""><span title='Wish' className='icons'><GiSelfLove /></span></a></li>
      
      
           <li className='last'>
               <a href="">
                <span className='icons'><FaShoppingBag />
                <span className='number'>0</span>
                 </span>
              </a>
        </li>
        <li><a href=""><span onClick={handleSitting} title='Password Reset' className='icons'>< CiSettings   /></span> </a></li>
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

<NavLink to={'/'}  className={`${location.pathname == '/' ? "text-danger" : ""} edit`} >
<li data-bs-dismiss="offcanvas"  className="nav-item">
    <a className="nav-link" href="#">Home</a>
  </li>
</NavLink>

  
<NavLink to={'/shopGride'}  className={`${location.pathname == '/shopGride' ? "text-danger" : ""} edit`} >
      <li data-bs-dismiss="offcanvas"  className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li>
      </NavLink>

  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Pages
    </a>
    <ul data-bs-dismiss="offcanvas"  className="dropdown-menu">
      <NavLink to={'/about'}  className={'edit'} > <li><a className="dropdown-item" href="#">About Us</a></li></NavLink>
     </ul>
  </li>
  
  <NavLink to={'/feature'}  className={`${location.pathname == '/feature' ? "text-danger" : ""} edit`} >
      <li data-bs-dismiss="offcanvas"  className="nav-item">
          <a className="nav-link" href="#">Feature</a>
        </li>
      </NavLink>


  <NavLink to={'/blog'}  className={`${location.pathname == '/blog' ? "text-danger" : ""} edit`} >
      <li data-bs-dismiss="offcanvas"  className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
      </NavLink>



 <NavLink to={'/contact'}   className={`${location.pathname == '/contact' ? "text-danger" : ""} edit`}>
 <li data-bs-dismiss="offcanvas"  className="nav-item">
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
  <li><a href=""><span  onClick={handleSitting} className='icons'><CiSettings /></span></a></li>
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

<ToastContainer />
    </>
  )
}
