export const checkIfCartExists = () => {
    let cartExists = localStorage.getItem('userCart');
    console.log('cart exists');
    return cartExists ? true : false;
};

export const parseCartToObject = () => {
    let cart = localStorage.getItem('userCart');
    return JSON.parse(cart);
};

export const localStorageChanged = () => {
    return true;
};

export const removeCartItemAndReload = (itemId) => {
    let cartExists = checkIfCartExists();

    if(cartExists) {
        console.log('ypphoo');
       let userCart = JSON.parse(localStorage.getItem('userCart'));
       let filteredCartItems = userCart.items.filter((item) => {
        return item.cartId !== itemId;
       });
       userCart.items = filteredCartItems;
       let totalCost = 0;
       let totalItems = 0;
       userCart.items.forEach((item) => {
          totalCost += item.price;
          totalItems++;
       });
       userCart.totalCost = totalCost;
       localStorage.setItem('userCart', JSON.stringify(userCart));
       console.log('item deleted from cart');
    } else {
        return null;
    }
}



