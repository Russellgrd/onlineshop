export const checkIfCartExists = () => {
    let cartExists = localStorage.getItem('userCart');
    return cartExists ? true : false;
};

export const parseCartToObject = () => {
    let cart = localStorage.getItem('userCart');
    return JSON.parse(cart);
};

export const localStorageChanged = () => {
    return true;
};

