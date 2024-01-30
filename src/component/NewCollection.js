import React from 'react'
import new_collection from './Assets//new_collections'
import Item from './Item'
const NewCollection = () => {
  return (
    <div className='new-collection flex flex-col items-center gap-10 h-[90vh]  mt-20 mb-80'>
      <h1 className='text-slate-950 text-3xl font-semibold'>NEW COLLECTION</h1>
      <hr className=' w-52  border-2 border-black text-black -mt-5  '/>
      <div className="collection grid grid-cols-4  gap-10 mt-20">
{new_collection.map((item,i)=>{
return <Item key={i} id={item.id} name={item.name}
image={item.image} new_price={item.new_price} old_price={item.old_price}
/>
})}
      </div>
    </div>
  )
}

export default NewCollection
