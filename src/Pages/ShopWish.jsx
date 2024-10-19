import React from 'react'
import { RxCross2 } from "react-icons/rx";
import colths from '../assets/images/Colths2/2Colths (1).jpg'
import colths1 from '../assets/images/Colths2/2Colths (2).jpg'
import colths2 from '../assets/images/Colths2/2Colths (3).jpg'
import colths3 from '../assets/images/Colths2/2Colths (4).jpg' 


export const ShopWish = () => {
  return (
    <>
     <section className='AboutU d-flex justify-content-center align-items-center'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className='aboutUS'>Wishlist</h4>
           <p className='Home-About'>Home  /  About Us</p>

          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="table-container">
          <table>
            <tr>
              <th></th>
              <th><p className='cardDW ' >Product</p></th>
              <th><p className='cardDW ' >Price/Unit</p></th>
              <th><p className='cardDW ' >Stock Status</p></th>
              <th></th>
            </tr>

            <tr>
              <td> <span><RxCross2 /></span></td>
              <td> <img className='img-fluid CardImg p-2' src={colths} alt="" /> <span>Jacket Hoodie Sweater</span> </td>
              <td><p>$130.00</p></td>
              <td><p className='OrChild'>In Stock</p></td>
              <td>  
                <button className='AddTo'> Add to Cart</button>
              </td>
            </tr>


            <tr>
              <td> <span><RxCross2 /></span></td>
              <td> <img className='img-fluid CardImg p-2' src={colths1} alt="" /> <span>Jacket Hoodie Sweater</span> </td>
              <td><p>$130.00</p></td>
              <td><p className='OrChild'>In Stock</p></td>
              <td>  
                <button className='AddTo'> Add to Cart</button>
              </td>
            </tr>
            <tr>
              <td> <span><RxCross2 /></span></td>
              <td> <img className='img-fluid CardImg p-2' src={colths2} alt="" /> <span>Jacket Hoodie Sweater</span> </td>
              <td><p>$130.00</p></td>
              <td><p className='OrChild'>In Stock</p></td>
              <td>  
                <button className='AddTo'> Add to Cart</button>
              </td>
            </tr>
            <tr>
              <td> <span><RxCross2 /></span></td>
              <td> <img className='img-fluid CardImg p-2' src={colths3} alt="" /> <span>Jacket Hoodie Sweater</span> </td>
              <td><p>$130.00</p></td>
              <td><p className='OrChild'>In Stock</p></td>
              <td>  
                <button className='AddTo'> Add to Cart</button>
              </td>
            </tr>


          </table>
        </div>
      </div>
    </section>
    </>
  )
}
