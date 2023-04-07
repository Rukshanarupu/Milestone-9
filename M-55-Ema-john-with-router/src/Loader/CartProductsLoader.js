const CartProductsLoader=async ()=>{
    const responseCartProducts=await fetch('products.json')
    const CartProductsData=await responseCartProducts.json()

    // if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();

    const savedCart = [];

    console.log(storedCart)

    // if we use loop in object than we use (FOR IN LOOP)
    
    return(CartProductsData)
}

export default CartProductsLoader