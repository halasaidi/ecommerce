import React, { useContext } from 'react'
import star_dull_icon from './Assets/star_dull_icon.png'
import start_icon from './Assets/star_icon.png'
import { ShopContext } from '../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product}=props
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='productdisplay flex mx-0 sm:mx-170'>
      <div className="productdisplay-left flex gap-5 ml-[90px] ">
<div className="img-list flex-col flex gap-2">
<img className=' h-[150px]' src={product.image} alt="" />
<img className=' h-[150px]' src={product.image} alt="" />
<img className=' h-[150px]' src={product.image} alt="" />
<img className=' h-[150px]' src={product.image} alt="" />

</div>
<div className="productdisplay-img me-10">
<img className='productdisply-main-img w-[500px] h-[620px]  ' src={product.image} alt="" />
    
</div>
      </div>
      <div className="productdisplay-right  flex flex-col ">
<h1 className=' text-slate-800 font-semibold text-2xl mb-[20px]'>{product.name}</h1>
<div className="productdisplay-right-star flex items-center mt-[20px] mb-[20px] gap-1 text-slate-400 text-[16px] ">
    <img src={start_icon} alt="" />
    <img src={start_icon} alt="" />
    <img src={start_icon} alt="" />
    <img src={star_dull_icon} alt="" />
<p>(122)</p>
</div>
<div className="productdisplay-right-prices flex my-[10px] gap-2 font-normal text-base  ">
    <div className="productdisplay-right-price-old  ">
        ${product.old_price}
        </div>
        <div className="productdisplay-right-price-new text-red-900">
            ${product.new_price}
        </div>
        <div className="productdisplay-right-description mt-14 -ml-[92px] ">
            A lightweight , usually knitted , pullover shirt, close-fiting and with a<br/> round neckline  and short sleeves,worn as an undershirt or outer garment
        </div>
        <div className="productdisplay-roght-sizemt mt-[150px] -ml-[580px]  ">
            <h1 className=' text-slate-600 text-base font-medium mb-5 '>Select Size</h1>
            <div className="proguct-right-size flex my-[10px] gap-3  mb-16">
                <div className='px-[16px] py-[10px] h-10 bg-slate-200 border-solid border-sky-100 rounded-sm cursor-pointer' >S</div>
                <div className='px-[16px] py-[10px] h-10 bg-slate-200 border-solid border-sky-100 rounded-sm cursor-pointer'>M</div>
                <div className='px-[16px] py-[10px] h-10 bg-slate-200 border-solid border-sky-100 rounded-sm cursor-pointer'>L</div>
                <div className='px-[16px] py-[10px] h-10 bg-slate-200 border-solid border-sky-100 rounded-sm cursor-pointer'>XL</div>
                <div className='px-[16px] py-[10px] h-10 bg-slate-200 border-solid border-sky-100 rounded-sm cursor-pointer'>XXL</div>
            

            </div>
            <button onClick={()=>{addToCart(product.id)}}  className='px-[10px] py-[10px] w-[150px] text-base font-medium text-slate-100 bg-red-600 mb-[40px] border-none outline-none cursor-pointer'>ADD TO CART</button>
            <p className='productdisplay-right-category  mt-6'><span className=' font-semibold'>Category :</span>Women ,T-Shirt , Crop Top </p>
            <p className='productdisplay-right-category mt-6'><span className=' font-semibold'>Tags :</span>Modern ,Latest , Crop Top </p>

        </div>
    </div>
</div>
      </div>
  
  )
}

export default ProductDisplay
