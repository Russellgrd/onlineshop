
const CartCard = ({productObject}) => { 

    return(
        <div className="cartcard">
            <h4 className="cartcard-heading">{productObject.name}</h4>
            <img className="cartcard-img" src={productObject.filename} />
            <p className="cartcard-text">{productObject.price}</p>
            <a className="cartcard-btn" href="#">X</a>;
        </div>
    )
}

export default CartCard;