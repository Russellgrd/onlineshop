import { useState, useEffect } from 'react';
import ProductCard from './productcard';

const Shop = () => {

    let [ products, setProducts ] = useState(null);
    const getProducts = async (url) => {
        let resp = await fetch(url);
        let data = await resp.json();
         setProducts(data);
     }

    useEffect(() => {
        getProducts('http://localhost:3001/getproducts');
    },[]);


    return(
        <div className="shop">
            { products && products.map((prodObject) => {
                return <ProductCard prodObject={prodObject} key={prodObject.id}/>
            })}
        </div>
    )
};

export default Shop;