import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product, handleCartBtn}) => {
    // console.log(product)
    const { img, name, seller, ratings, price } = product;
    return (
        <div className='p-2 border border-slate-400 rounded relative pb-10'>
            <img className='rounded' src={img ? img : `./`} alt="" />
            <div className=''>
                <h6 className='font-2xl text-slate-800 font-semibold my-2'>{name}</h6>
                <p>Price: $<span className='font-bold'>{price}</span></p>
                <p className='my-2'>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handleCartBtn(product)} className='mt-2 w-full bg-orange-200 hover:bg-orange-400 border-slate-400 rounded-b absolute bottom-0 inset-x-0 py-1'>
                <span className='mr-2'>Add to Cart</span>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;