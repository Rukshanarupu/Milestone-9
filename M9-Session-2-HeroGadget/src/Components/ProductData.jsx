import React from 'react';

const ProductData = ({product, handleAddToCart}) => {
    const { name, picture, price, category, id} = product
  return (
    <div className='bg-gray-100 p-6 rounded shadow-lg'>
      <img
        className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
        src={picture}
        alt=''
      />
      <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
      <p className='text-gray-700 '>Category: {category}</p>
      <p className='text-gray-700 font-bold'>Price: {price}$</p>
      <button
        onClick={() => handleAddToCart(id)}
        type='button'
        className='btn-primary w-full block'
      >
        Add To Cart
      </button>
    </div>
  )
};

export default ProductData;
