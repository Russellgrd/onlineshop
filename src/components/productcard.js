import addcart from '../images/add-to-cart.png';
import UserCart from '../userCart';
import { useEffect, useState } from 'react';
import { checkIfCartExists, parseCartToObject  } from '../helpers';
import uuid from 'react-uuid';

const ProductCard = ({prodObject, setUserCartChanged}) => {

    const handleAddCart = (prodObject) => {
        let userCart;
        let cartExists = checkIfCartExists();
        if(!cartExists) {
            userCart = new UserCart();
        } else {
            userCart = parseCartToObject();
        }
        let totalCost = 0;
        let totalItems = 0;
        prodObject.cartId = uuid();
        userCart.items.push(prodObject);
        userCart.items.forEach((item) => {
           console.log(item.price);
           totalCost += item.price;
           totalItems++;
        });
        userCart.totalCost = totalCost;
        localStorage.setItem('userCart', JSON.stringify(userCart));
        setUserCartChanged(true);
    }

    return(
        <div className="productCard" key={prodObject.id}>
            <h4 className="productCard-heading">{prodObject.name}</h4>
            <img className="productCard-img" src={prodObject.filename} alt={prodObject.filename}/>
            <p className="productCard-text">{prodObject.description}</p>
            <p className="productCard-text">{"£" + prodObject.price}</p>
            <p className="productCard-text">{"qty in stock: " +prodObject.quantity}</p>
            <button onClick={(e) => {handleAddCart(prodObject)}} className="productCard-button"> add to cart </button>
        </div>
    )
};

export default ProductCard;