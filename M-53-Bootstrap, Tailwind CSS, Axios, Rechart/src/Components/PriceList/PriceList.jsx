import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices]=useState([])

    useEffect(()=>{
        fetch('prices.json')
        .then(res=>res.json())
        .then(data=>setPrices(data))
    },[])

    return (
        <div>
            <h2 className='text-3xl text-center text-purple-950 bg-purple-300 font-bold p-4'>Awesome Affordable Prices</h2>
            <div className='grid-cols-3 grid gap-7'>
                {
                    prices.map(price=> 
                        <PriceCard
                            key ={price.id}
                            price ={price}
                        ></PriceCard>
                    )
                }
            </div>
        </div>
    );
};

export default PriceList;

