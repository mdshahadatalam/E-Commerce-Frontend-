import React, { useState } from 'react'
import colths from '../assets/images/Colths2/2Colths (1).jpg'
import { RiDeleteBin5Line } from "react-icons/ri";

export const ShopCheck = () => {


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
            <h4 className='aboutUS'>Checkout</h4>
           <p className='Home-About'>Home  /  About Us</p>

          </div>
        </div>
      </div>
    </section>


    <section className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form action="">
              <h4 className='billing py-3'>Billing Information</h4>
              <input className='name' type="text" placeholder='Your first name' />
              <input className='name' type="text" placeholder='Your last name' /> <br />

              <input className='others' type="text" placeholder='Company name' /> <br />
              <input className='others' type="email" placeholder='Your email' /> <br />
              <input className='others' type="number" placeholder='Phone number' /> <br />

              <select className='others' name="" id="">
                <option value="" disabled >Select Country</option>
                <option value="">Bangladesh</option>
                <option value="">India</option>
                <option value="">USA</option>
                <option value="">London</option>
                <option value="">China</option>
                <option value="">Canada</option>
              </select> <br />

              <input className='others' type="text" placeholder='Your address' /> <br />
              
               <select className='others' name="" id="">
                <option value="" disabled >Select town/city</option>
                <option value="">Dhaka</option>
                <option value="">Mumbai</option>
                <option value="">New York</option>
                <option value="">London</option>
                <option value="">Chaipu</option>
                <option value="">Canada</option>
              </select> <br />

              <input className='others' type="number" placeholder='Post code' />

            </form>
          </div>
          <div className="col-lg-6">
            <h4 className='billing py-3'>Additional Information</h4>
            <textarea name="" id="" className='message' placeholder='Notes about your order, e.g. special notes for delivery.'></textarea>
          </div>
        </div>
      </div>
    </section>



    <section>
      <div className="container">
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


      <tr>
        <td className='subtotal'>Subtotal</td>
        <td></td>
        <td></td>
        <td></td>
        <td><p> $130.00</p></td>
        <td></td>
      </tr>

      <tr>
      <td className='subtotal'>Subtotal</td>
      <td></td>
      <td></td>
      <td></td>
      <td><p className='text-danger'>$130.00</p> </td>
      <td></td>
      </tr>
          </table>
        </div>
      </div>
    </section>


    <section className='py-5'>
      <div className="container">
        <div>
        <h4 className='cheekLast'>Direct bank transfer</h4>
        <p className='cheekDami'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our <br/>
        account.</p>
        </div>


        <div>
        <h4 className='cheekLast'>Check payments</h4>
        <p className='cheekDami'>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
        </div>

        <div>
          <h4 className='cheekLast'>Cash on delivery</h4>
          <p className='cheekDami'>Pay with cash upon delivery.</p>
        </div>

        <p className='cheekDamiLast'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>


        <button className='placeOrder' >Place Order</button>
      </div>
    </section>
    </>
  )
}
