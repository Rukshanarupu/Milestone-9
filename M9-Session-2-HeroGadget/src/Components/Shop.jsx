import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductData from './ProductData';

const Shop = () => {
    const productsData=useLoaderData()
    console.log(productsData)

    //card button handler
    const handleAddToCart=(id)=>{
        console.log(id)
        addToDb(id)
    }
    return (
        <div className='my-container'>
        <h1 className='text-blue-700 text-3xl text-center'>This is Shop page</h1>
            <div className='product-container'>
                {
                    productsData.map(product=>
                        <ProductData 
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></ProductData>
                    )
                }
            </div>
        </div>
    );
};

export default Shop;
