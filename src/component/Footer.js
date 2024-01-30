import React from 'react'
import footer_logo from './Assets/logo_big.png'
import instagram_icon from './Assets/instagram_icon.png'
import pintester_icon from './Assets/pintester_icon.png'
import whatsapp_icon from './Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer flex flex-col items-center gap-10 mt-40'>
      <div className="footer-logo flex items-center gap-10">
        <img className=' h-14' src={footer_logo} alt="" />
        <p className=' text-slate-900 text-xl font-semibold'>SHOPPER</p>
      </div>
      <ul className='flex border-none gap-11 text-gray-900 text-sm'>
        <li className=' cursor-pointer'>Company</li>
        <li className=' cursor-pointer'>Products</li>
        <li className=' cursor-pointer'>Offices</li>
        <li className=' cursor-pointer'>About</li>
        <li className=' cursor-pointer'>Contact</li>
      </ul>
      <div className="footer-social-icon flex gap-3 ml-[2%]  ">
        <div className="footer-icon-container p-2 pb-30 h-12 bg-slate-50 border-1 border-solid">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container p-2 pb-2 h-12 bg-slate-50 border-1 border-solid">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-container p-2 pb-2 h-12 bg-slate-50 border-1 border-solid">
          <img src={whatsapp_icon} alt="" />
        </div> 
        </div>
        <div className="footer-copyright flex flex-col items-center  text-gray-900 font-semibold -ml-[50%]">
          <hr className='ml-[60%] w-[1300px] border-1 rounded-md h-0 mt-[30px] border-slate-300' />
          <p className='mt-5 mb-5 ml-[55%]'>Copyright @ 2023 -All Right Reserved</p>
        </div>
     
    </div>
  )
}

export default Footer
