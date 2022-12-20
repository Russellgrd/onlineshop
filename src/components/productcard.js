import addcart from '../images/addcart.png'
import UserCart from '../userCart';
import { useEffect, useState } from 'react';
import { checkIfCartExists, parseCartToObject  } from '../helpers';

const ProductCard = ({prodObject, setCartChanged}) => {



    const handleAddCart = (prodObject) => {
        let userCart;
        let cartExists = checkIfCartExists();
        if(!cartExists) {
            userCart = new UserCart();
        } else {
            userCart = parseCartToObject();
        }
        userCart.items.push(prodObject);
        localStorage.setItem('userCart', JSON.stringify(userCart));
        setCartChanged(true);
    }

    return(
        <div className="productCard" key={prodObject.id}>
            <h4 className="productCard-heading">{prodObject.name}</h4>
            <img className="productCard-img" src={prodObject.filename} alt={prodObject.filename}/>
            <p className="productCard-text">{prodObject.description}</p>
            <p className="productCard-text">{"£" + prodObject.price}</p>
            <p className="productCard-text">{"qty in stock: " +prodObject.quantity}</p>
            <button onClick={(e) => {handleAddCart(prodObject)}} className="productCard-button"> <img className="productCard-button-img" src={addcart} alt="cart"/> </button>
        </div>
    )
};

export default ProductCard;