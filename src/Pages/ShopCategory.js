import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../component/Assets/dropdown_icon.png';
import Item from '../component/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Assuming you want to filter products based on the category prop
  const filteredProducts = all_product.filter(item => item.category === props.category);

  return (
    <div className='shop-category mt-[8%]'>
      <img className='block m-[140px] auto w-[82%]' src={props.banner} alt='' />
      <div className='shopcategory-indexSort flex mt-0 mr-170 mb-0 ml-170 justify-between items-center'>
        <p className='ml-[9%]'>
          <span className='font-semibold'>Showing {filteredProducts.length}</span> out of {all_product.length} products
        </p>
        <div className='flex shopcategory-sort p-2 rounded-[40px] me-[9%] border mb-2 text-[14px]'>
          Sort by <img className='h-2 m-2  ' src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='shopcategory-products mt-5 mr-170 mb-20 ml-[8%] grid grid-cols-4 gap-12 w-[85%] '>
        {filteredProducts.map((item, i) => (
          <Item  
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center mt-[100px] mb-[150px] ml-auto mr-auto w-[200px] h-[40px] rounded-2xl bg-stone-300 text-slate-700 text-xl font-medium  hover:bg-gray-300">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
