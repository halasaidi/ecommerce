import React from 'react'
import arrow_icon from './Assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const {product}=props
  return (
    <div className='breadcrum flex items-center gap-2 text-slate-800 text-base font-medium mt-[120px] mb-[40px] ml-[90px] mx-[170 px] capitalize '>
      HOME <img src={arrow_icon} alt=''/>SHOP <img src={arrow_icon} alt=''/> {product.category} <img src={arrow_icon} alt='' /> {product.name}
    </div>
  )
}

export default Breadcrum
