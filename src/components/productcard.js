import addcart from '../images/addcart.png'
import UserCart from '../userCart';

const ProductCard = ({prodObject}) => {


    const handleAddCart = (prodObject) => {
        let userCartExists = localStorage.getItem('userCart');
        if(!userCartExists) {
            let userCart = new UserCart();
        }


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