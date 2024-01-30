import React from 'react';

const DescriptionBox = () => {
  return (
    <div className='DescriptionBox mx-[120px] my-[170px]'>
      <div className="description-navigator flex gap-2  mb-4">
        <div className="description-nav-box flex items-center justify-center text-base font-normal w-[140px] h-[50px] border-solid border-teal-100 bg-slate-100">Description</div>
        <div className="description-nav-box fade flex items-center justify-center text-base font-normal w-[140px] h-[50px] border-solid border-teal-100 bg-slate-100">Reviews (122)</div>
      </div>
      <div className="descriptinbox-description flex flex-col gap-6 border border-gray-300 p-4">
        <p>An e-commerce is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
        <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
