// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart', id)
    
  
    // add quantity
    
}

export { addToDb }