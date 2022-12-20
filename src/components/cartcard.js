const CartCard = ({productObject}) => { 

    const handleDelete = (item) => {
        console.log(item.parentElement);
    }

    return(
        <div className="cartcard">
            <h4 className="cartcard-heading">{productObject.name}</h4>
            <img className="cartcard-img" src={productObject.filename} />
            <p className="cartcard-text">{productObject.price}</p>
            <a onClick={(e) => {handleDelete(e.target)}} className="cartcard-btn" href="#">X</a>
        </div>
    )
}

export default CartCard;