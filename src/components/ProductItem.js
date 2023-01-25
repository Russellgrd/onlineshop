import { useLocation } from "react-router-dom";
  
const ProductItem = () => {
    
    const location = useLocation();
    
    return(
        <div>
            <h1>Product Item</h1>
            {console.log(location)}
        </div>
    )
};

export default ProductItem;