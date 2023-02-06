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
            <button className="productItem-btn" onClick={handleClick}>back</button>
            <div className="productItem-card">
                <div className="productItem-card-left">
                    <img className="productItem-card-left-image" src={item.filename} alt={item.name}/>
                </div>

                <div className="productItem-card-right">
                    <h4 className="productItem-heading">{item.description}</h4>
                    <p className="productItem-card-right-text">{item.full_description}</p>
                    <p className="productItem-price">price: £{item.price}</p>
                    <div className="productItem-card-right-imagesBox">
                        <img className="productItem-card-right-imagesBox-image" src={item.more_images1} />
                        <img className="productItem-card-right-imagesBox-image" src={item.more_images2} />
                        <img className="productItem-card-right-imagesBox-image" src={item.more_images3} />
                    </div>
                </div>
            </div>            
        </div>
    )
};

export default ProductItem;