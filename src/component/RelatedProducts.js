import React from 'react'
import data_product from './Assets/data'
import Item from './Item'

const RelatedProducts = () => {
  return (
    <div className='RelatedProducts flex flex-col items-center gap-10 h-[90vh]'>
    <h1 className=' text-gray-900 text-[23px] font-[600] '>Related Products</h1>
    <hr className='w-[90px] h-[2px] -mt-6 rounded-sm bg-slate-800' />
<div className="relatedproduvts-item mt-[50px] flex gap-11">
    {data_product.map((item,i)=>{
        return <Item  key={i} id={item.id} name={item.name}
        image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
</div>
    </div>
  )
}

export default RelatedProducts
