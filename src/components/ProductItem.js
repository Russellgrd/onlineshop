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
            <h1>{item.description}</h1>
            <p>{item.full_description}</p>
            <p>{item.price}</p>
            <img src={item.filename} />
        </div>
    )
};

export default ProductItem;