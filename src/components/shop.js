import { useState, useEffect } from 'react';
import ProductCard from './productcard';

const Shop = ({setUserCartChanged}) => {

    let [ products, setProducts ] = useState(null);
    const getProducts = async (url) => {
        try {
            let resp = await fetch(url);
            let data = await resp.json();
            setProducts(data);
        } catch(err) {
            console.log('unable to connect to SQL database');
        }
     }

    useEffect(() => {
        getProducts('https://onlineshop-backend.herokuapp.com/getproducts');
    },[]);


    return(
        <div className="shop">
            { products && products.map((prodObject) => {
                return <ProductCard setUserCartChanged={setUserCartChanged} prodObject={prodObject} key={prodObject.id}/>
            })}
            
        </div>
    )
};

export default Shop;