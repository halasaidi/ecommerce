import React from 'react'

const NewLatter = () => {
  return (
    <div className='newletter w-5/6 flex flex-col items-center justify-center m-auto pt-0 pb-0 px-72 py-72 mb-96 bg-gradient-to-t to-red-200 from-white  gap-28 mt-[50%]'> 
      <h1 className=' mt-20 text-4xl text-slate-800 font-mono'>Get Exclusive Offers On Your Email</h1>
      <p className=' -mt-20'>Subscribe to our newletter and stay updated</p>
   <div className='-mt-16 mb-20 flex items-center justify-center bg-white w-[630px] h-[54px] rounded-full border-neutral-50 ' >
    <input className='w-[160px]  ml-[60px] border-none outline-none text-slate-400 font-Poppins text-base '  type="email" placeholder='Your Email '/>
   <button className=' w-[450px] h-[50px] rounded-full bg-black text-white text-base cursor-pointer ml-[260px] '>Subscribe</button>
   </div>

    </div>
  )
}

export default NewLatter
