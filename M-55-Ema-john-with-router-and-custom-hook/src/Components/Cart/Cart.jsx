import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart}) => {
    console.log(cart)
    let totalPrice=0;
    let totalShipping =0;
    let quantity=0

    for (let product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
        quantity=quantity+product.quantity
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    
    return (
        <div className='bg-orange-200 p-6 sticky top-0'>
            <h4 className='text-center text-xl font-medium'>Order Summary</h4>
            <p className='my-2'>Selected Items: {quantity}</p> 
            <p>Total Price: $<span className='font-medium'>{totalPrice}</span></p>
            <p className='my-2'>Shipping: $<span className='font-medium'>{totalShipping}</span></p>
            <p>Tax: $<span className='font-medium'>{tax}</span></p>
            <h6 className='mt-2 font-medium'>Grand Total: $<span className='font-semibold'>{grandTotal}</span></h6>
            <div className='flex justify-between bg-red-500 my-3 p-2 rounded'>
                <p>Clear Cart</p>
                <button className=''>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
            <div className='flex justify-between bg-orange-400 p-2 rounded gap-1'>
                <p>Proceed Checkout</p>
                <button className=''>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Cart;