import React, { useState } from 'react'
import colths from '../assets/images/Colths2/2Colths (1).jpg'
import { RiDeleteBin5Line } from "react-icons/ri";

export const ShopCard = () => {


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
            <h4 className='aboutUS'>Card</h4>
           <p className='Home-About'>Home  /  About Us</p>

          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="table-container">
        <table>
          
        <tr>
        <th className='text-center cardD '>   <p>Image</p>  </th>
        <th className='text-center cardD ' >   <p> Product Name</p>  </th>
        <th className='text-center cardD ' >   <p> Price/Unit</p>  </th>
        <th className='text-center cardD ' >   <p>Quantity</p>  </th>
        <th className='text-center cardD ' >   <p>Total</p>  </th>
        <th className='text-center cardD ' >   <p>Remove</p>  </th>


      </tr>

      <tr>
        <td>  <img className='img-fluid CardImg p-2' src={colths} alt="" /> </td>
        <td>  <p className='product'>Jacket Hoodie Sweater</p> </td>
        <td>  <p className='OrChild' >$130.00</p> </td>
        <td className='text-center'>

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
           </td>
           <td> <p className='OrChild'>$130.00</p></td>

           <td><span className='tableIcons' ><RiDeleteBin5Line /></span></td>
      </tr>

   <tr className='d-flex justify-content-between align-items-center'>


   <div className='pt-2'>
    <form className='btn-group' action="">
    <input  className='cardIn' type="text" placeholder='Enter your coupon code'/> 
    <button className='btn btn-danger'>Submit</button>
    </form>
   </div>


   <div className='d-flex pt-2'>
    <div> <button  className='CardBut'>Update Card</button></div>
    <button  className='CardBut2'>Continue Shopping</button>

   </div>

   </tr>



        </table>

        
   <section className='py-5'>

  <div className="container">

    <h4 className='text-start cardTotal'>Cart Total:</h4>
  <div className="table-container">
      <table className='w-25'>
        <tr>
          <th className='subtotal'>Subtotal</th>
          <th>$130.00</th>
        </tr>

        <tr>
          <td className='subtotal'>Total</td>
          <td>$130.00</td>
        </tr>
      </table>
    </div>
  </div>

   </section>

      </div>
    </section>
    </>
  )
}
