import React from 'react'
import './Search.css'
import { RxCross2 } from "react-icons/rx";

export const Search = ({open,cross }) => {
  return (
    <>
   <div className='posi'>
   <div className={ `parent  ${open ? 'showed' : ''}` }>
    <form action="">
        <input className='search' type="text" name='search' placeholder='search' />
        <button className='btSearch'>Search</button>
    </form>

    <span className='cross'>
    <RxCross2 onClick={cross} />
    </span>
    </div>
   </div>
    </>
  )
}
