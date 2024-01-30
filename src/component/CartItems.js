// CartItems.js
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from './Assets/cart_cross_icon.png';

function CartItems() {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitem mx-[100px] py-[170px]'>
      <div className="cartitems-format-main grid grid-cols-6 items-center px-[20px] py-[0] gap-5 text-slate-500 text-[15px] font-[400] ">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='h-1 bg-slate-200 border-0'  />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format grid grid-cols-6 items-center px-[20px] py-[0] gap-5 text-slate-500 text-[14px] font-[400] mt-5">
                <img src={e.image} alt="" className='carticon-product-icon h-20' />
                <p className='-ml-[90px]'>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity  w-[55px] h-[45px] border-solid border-gray-200 bg-slate-50'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
               <img className=' cursor-pointer '  src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />

              </div>
              <hr />
            </div>
          );
        }
        return null; // added to handle the case when cartItems[e.id] <= 0
      })}
      <div className='cartitems-down flex my-[100px] mx-0'>
<div className='cartitems-total flex-1 flex flex-col me-[200px] gap-40'>
<h1 className='-mb-32 font-bold text-[16px]'>cart Totals</h1>
<div >
    <div className="cartitems-total-item px-0 py-4 justify-between flex mb-3  ">
        <p>Subtotal</p>
        <p>${getTotalCartAmount()}</p>
    </div>

    <hr />
    <div className="cartitems-total-item px-0 py-4  justify-between flex mb-3 ">
<p>Shipping Free</p>
<p>Free</p>
    </div>
    <hr />
    <div className="cartitems-total-item px-0 py-4  justify-between flex mb-3  ">
        <h3>Total</h3>
        <h3>${getTotalCartAmount()}</h3>
    </div>
</div>
<button className='w-[220px] h-[50px] outline-none border-none bg-red-500 text-white text-[14px] font-[400] cursor-pointer -mt-32' >PROCEED TO CHECKOUT</button>
</div>
 <div className="cartitems-promocode flex-1 ">
        <p>if you have a promo code , Enter it here</p>
        <div className="cartitem-promobox mt-2 border-solid border border-slate-500 w-[316px]">
            <input className='p-2' type="text" placeholder="Promo Code"/>
            <button className=' bg-slate-200 p-2 cursor-pointer w-24'>Submit</button>
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default CartItems;

