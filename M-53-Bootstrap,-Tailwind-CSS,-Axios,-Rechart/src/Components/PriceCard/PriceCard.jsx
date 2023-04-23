import React from 'react';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col relative'>
            <div className='text-center'>
                <h2><span className='text-purple-500 text-3xl font-bold'>{price.price}</span> <span className='text-white'>/Mon</span></h2>
                <h3 className='font-bold text-xl'>{price.name}</h3>
            </div>
            <div className=' pb-8'>
                <p className='underline-offset-2 underline text-white mt-3'>Features:</p>
                <p>
                    {
                        price.features.map(feature=> 
                            <Feature
                                feature={feature}
                            ></Feature>
                        )
                    }
                </p>
                <button className='bg-green-400 p-1 border rounded w-full text-white mt-4 absolute bottom-2 left-0'>Buy Now</button>
            </div>
        </div>
    );
};

const Feature=({feature})=>{
    return(
        <div className='flex items-center gap-2'>
            <span>
                <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                >
                <path d="M10 17l-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8m-7-6A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z" />
                </svg>
            </span> 
            <span>{feature}</span>
        </div>
    )
}

export default PriceCard;