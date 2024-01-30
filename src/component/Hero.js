import React from 'react'
import hand_icon from './Assets/hand_icon.png'
import arrow_icon from './Assets/arrow.png'
import hero_img from './Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero h-2/3  bg-gradient-to-r from-slate-50 to-red-200 flex  '>
      <div className='hero-left flex-1 flex  flex-col justify-center gap-10 px-48 leading-5 '>
<h2 className='  text-slate-950 font-semibold '>NEW ARRIVALS ONLY</h2>
<div>
    <div className="hero-hand-icon flex items-center  gap-5">
        <p className='text-zinc-900 font-bold text-6xl'>new</p>
        <img className=' w-12'  src={hand_icon} alt="" />
    </div>
    <p  className='text-zinc-900 font-bold text-6xl'>collections</p>
    <p  className='text-zinc-900 font-bold text-6xl'>for everyone</p>
</div>
<div className="hero-latest-btn flex justify-center items-center gap-14 w-72 h-16 rounded-3xl mt-1 bg-red-500 text-white text-base font-medium ">
<div>Latest Collecction</div>
<img src={arrow_icon} alt="" />
</div>
      </div>

      <div className='hero-right flex-1 flex  items-center justify-center mt-10 '>
<img className=' h-4/5 mt-24' src={hero_img} alt="" />
</div>

    </div>
  )
}

export default Hero
