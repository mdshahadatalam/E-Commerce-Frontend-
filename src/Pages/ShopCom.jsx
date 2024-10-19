import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";

import colths from '../assets/images/Colths2/2Colths (1).jpg'
import colths1 from '../assets/images/Colths2/2Colths (2).jpg'
import colths2 from '../assets/images/Colths2/2Colths (3).jpg'
import colths3 from '../assets/images/Colths2/2Colths (4).jpg'

export const ShopCom = () => {
  return (
    <>


<section className='AboutU d-flex justify-content-center align-items-center'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className='aboutUS'>Compare</h4>
           <p className='Home-About'>Home  /  About Us</p>

          </div>
        </div>
      </div>
    </section>
    
    <section className='py-5'>
      
        
          <div className="table-container">

            <input type="text" className='searchProduct' placeholder='Search product' />

          <table>
      <tr>
        <th> <p className='product'>Remove </p></th>
        <th className='text-center cardCom '><span className='tableIcons' ><RiDeleteBin5Line /></span> </th>
        <th className='text-center cardCom ' ><span className='tableIcons' ><RiDeleteBin5Line /></span> </th>
        <th className='text-center cardCom ' ><span className='tableIcons' ><RiDeleteBin5Line /></span> </th>
        <th className='text-center cardCom ' ><span className='tableIcons' ><RiDeleteBin5Line /></span> </th>
      </tr>


      <tr>
        <td><p className='product' >Product</p></td>
        <td>  <img className='img-fluid tableImg ' src={colths} alt="" /> </td>
        <td>  <img className='img-fluid tableImg ' src={colths1} alt="" /> </td>
        <td>  <img className='img-fluid tableImg ' src={colths2} alt="" /> </td>
        <td>  <img className='img-fluid tableImg ' src={colths3} alt="" /> </td>
      </tr>

      <tr> <td> <p className='text-center product' >Description</p></td> 
      <td><p className='text-center tableDami  ' >Assertively incentivize multimedia based collaboration and idea-share</p></td>
      <td> <p className='text-center tableDami ' >Assertively incentivize multimedia based collaboration and idea-share</p></td>
      <td> <p className='text-center tableDami ' >Assertively incentivize multimedia based collaboration and idea-share</p></td>
      <td> <p className='text-center tableDami ' >Assertively incentivize multimedia based collaboration and idea-share</p></td>

      </tr>

      <tr>

        <td><p
         className='text-center product'>Price</p></td>
        <td><p
        className='text-center OrChild '
        >$130.00</p></td> 
        <td><p
        className='text-center OrChild'
        >$220.00</p></td>
        <td><p
        className='text-center OrChild'
        >$100.00</p></td>
        <td><p
        className='text-center OrChild'
        >$80.00</p></td>
      </tr>

      <tr>

        <td><p  className='text-center product' >Color</p></td>
        <td><p  className='text-center OrChild' >Brown</p></td>
        <td><p  className='text-center OrChild' >Black</p></td>
        <td><p  className='text-center OrChild' >Blue</p></td>
        <td><p  className='text-center OrChild' >Blue & Brown</p></td>
      </tr>


      
      <tr>

        <td><p className='text-center product' >Stock</p></td>
        <td><p className='text-center OrChild' >In Stock</p></td>
        <td><p className='text-center OrChild' >In Stock</p></td>
        <td><p className='text-center OrChild' >In Stock</p></td>
        <td><p className='text-center OrChild' >In Stock</p></td>
      </tr>


      <tr>

      <td><p className='text-center product' >Add to Cart</p></td>
      <td className='text-center'> <button className='AddToCart' >Add to Cart</button></td>
      <td className='text-center' > <button className='AddToCart' >Add to Cart</button></td>
      <td className='text-center' > <button className='AddToCart' >Add to Cart</button></td>
      <td className='text-center' > <button className='AddToCart' >Add to Cart</button></td>
     </tr>



        </table>


          </div>

      
    </section>
    
    </>
  )
}
