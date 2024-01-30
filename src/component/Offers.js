import React from 'react'
import exclucive_image from './Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers w-4/5 h-[55vh] flex m-auto pt-0 pr-36 pb-0 pl-36 mb-40 bg-gradient-to-t to-red-200  from-white mt-28' >
      <div className="offers-left flex-1 flex flex-col justify-center">
<h1 className=' text-slate-900 text-5xl font-semibold -mt-4'>Exclusive</h1>
<h1 className=' text-slate-900 text-5xl font-semibold mt-2'>Offers For You</h1>
<p className='text-slate-900 text-lg font-medium mt-5'>ONLY ON BEST SELLERS PRODUCTS </p>
<button className=' w-40 h-10 rounded-2xl bg-red-500 border-none text-white text-base mt-30 font-medium cursor-pointer mt-11 '>Check Now</button>
      </div>
      <div className="offers-right flex-1 flex  items-center justify-self-end pt-52 " >
<img className=' h-96  mx-72 -mt-[195px]' src={exclucive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
