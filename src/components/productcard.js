import addcart from '../images/add-to-cart.png';
import UserCart from '../userCart';
import { useEffect, useState } from 'react';
import { checkIfCartExists, parseCartToObject  } from '../helpers';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({prodObject, setUserCartChanged}) => {

    const navigate = useNavigate();

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

    const handleClick = (e) => {
        e.preventDefault();
        let prodItem = e.target.parentElement;
        //TODO:  INJECT ITEM DETAILS INTO STATE
        navigate('/productitem',{state:{itemId:"item id"}});
    }

    return(
        <div className="productCard" key={prodObject.id}>
            <div className='productCard-heading-box'>
                <p className="productCard-heading">{prodObject.name}</p> 
            </div>
            <img onClick={(e) => {handleClick(e)}} className="productCard-img" src={prodObject.filename} alt={prodObject.filename}/>
            <button onClick={(e) => {handleAddCart(prodObject)}} className="productCard-button"> add to cart </button>
            <div className='productCard-text-box'>
                <p className="productCard-text">{prodObject.description}</p>
                <p className="productCard-text">{"£" + prodObject.price}</p>
                <p className="productCard-text">{"qty in stock: " +prodObject.quantity}</p>
            </div>

        </div>
    )
};

export default ProductCard;