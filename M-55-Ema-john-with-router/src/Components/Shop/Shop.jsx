import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    // set of products in shop
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    // set of carts in shop
    const [countItem, setCountItem] = useState(0);
    const [cart, setCart]=useState([])
    useEffect( () =>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the addedProduct
        for(const id in storedCart){
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log('added Product', addedProduct)
        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])


    const handleCartBtn=(product)=>{
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart= [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart)
        setCountItem(countItem + 1)
        addToDb(product.id)
    }

    return (
        <div className='container mx-auto md:flex gap-4 mt-4'>
            <div className="grid grid-cols-3 md:w-3/4 w-full gap-10">
                {
                    products.map(product => 
                        <Product
                            key={product.id}
                            product={product}
                            handleCartBtn={handleCartBtn}
                        ></Product>
                    )
                }
            </div>
            <div className="cart-container md:w-1/4 w-full">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;