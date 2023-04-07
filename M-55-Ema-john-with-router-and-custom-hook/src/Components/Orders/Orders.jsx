import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products=useLoaderData();
    console.log(products)
    return (
        <div className='flex justify-between container mx-auto'>
            <div className='border-slate-400 rounded p-4 grid grid-cols-3 gap-3 items-center'>
                <img className='w-10 h-10 rounded' src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg" alt="" />
                <div>
                    <h2 className='text-xl'>Ultraboost 22 Shoes</h2>
                    <p>Price: <span className='text-orange-400'>$190</span> </p>
                    <p>Shipping Charge : <span className='text-orange-400'>$5</span> </p>
                </div>
                <FontAwesomeIcon icon={faTrashAlt} />
            </div>
            <div className='bg-orange-200 p-6 top-0'>
                <Cart cart={[]} countItem={[]}></Cart>

                {/* <h4 className='text-center text-xl font-medium'>Order Summary</h4>
                <p className='my-2'>Selected Items: {0}</p> 
                <p>Total Price: $<span className='font-medium'>{0}</span></p>
                <p className='my-2'>Shipping: $<span className='font-medium'>{0}</span></p>
                <p>Tax: $<span className='font-medium'>{0}</span></p>
                <h6 className='mt-2 font-medium'>Grand Total: $<span className='font-semibold'>{0}</span></h6>
                <div className='flex justify-between bg-red-500 my-3 p-2 rounded'>
                    <p>Clear Cart</p>
                    <button className=''>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
                <div className='flex justify-between bg-red-500 p-2 rounded'>
                    <p>Proceed Checkout</p>
                    <button className=''>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default Orders;