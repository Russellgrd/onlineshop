const ProductCard = ({prodObject}) => {
    console.log('hi');
    return(
        <div className="productCart" id={prodObject.hash}>
            <h1>{prodObject.name}</h1>
            <img src={prodObject.filename} alt={prodObject.filename}/>
            <p>{prodObject.description}</p>
            <p>{prodObject.price}</p>
            <p>{prodObject.quantity}</p>
        </div>
    )
};

export default ProductCard;