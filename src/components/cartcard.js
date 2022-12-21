import uuid from 'react-uuid';

const CartCard = ({productObject, handleDeleteCartItem}) => { 
    return(
        <div className="cartcard" key={uuid()} data-cartitemid={productObject.cartId}>
            <h4 className="cartcard-heading">{productObject.name}</h4>
            <img className="cartcard-img" src={productObject.filename} />
            <p className="cartcard-text">{productObject.price}</p>
            <a onClick={(e) => {handleDeleteCartItem(e.target)}} className="cartcard-btn" href="#">X</a>
        </div>
    )
}

export default CartCard;