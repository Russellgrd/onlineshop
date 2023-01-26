import { useLocation, useNavigate } from "react-router-dom";
  
const ProductItem = () => {
    
    const location = useLocation();
    const item = location.state.data[0];
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return(
        <div className="productItem">
            <button onClick={handleClick}>back</button>
            <h1 className="procuctItem-heading">{item.description}</h1>
            <p className="productItem-description">{item.full_description}</p>
            <p className="productItem-price">price: £{item.price}</p>
            <img className="productItem-image" src={item.filename} />
        </div>
    )
};

export default ProductItem;