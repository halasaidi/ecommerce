import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div>
    <div className="item w-80 hover:scale-105 hover:transition duration-500">
    <Link to={`/product/${props.id}`}>  <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>  
        <p className='mt-6 mb-6 ml-6 mr-6'>{props.name}</p>
        <div className="item-prices flex gap-20">
            <div className="item-price-new text-slate-600 text-lg font-semibold">
{props.new_price}
            </div>
            <div className="item-price-old text-slate-500 text-lg font-medium line-through">
{props.old_price}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Item
