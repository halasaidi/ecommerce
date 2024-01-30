import React from 'react'
import data_product from './Assets/data'
import Item from './Item'
const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-10 h-[90vh]  mt-20'>
      <h1 className=' text-slate-950 text-3xl font-semibold '>POPULAR IN WOMEN</h1>
      <hr className=' w-52  border-2 border-black text-black -mt-5  '/>
      <div className="popular-item  flex gap-5 mt-10">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name}
            image={item.image} new_price={item.new_price} old_price={item.old_price}
            />
        })}
      </div>
    </div>
  )
}

export default Popular
