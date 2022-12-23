import Shop from "./shop";
import Cart from "./cart";
import { useState, useEffect } from "react";

const Home = () => {

    const [userCartChanged, setUserCartChanged] = useState(false);

    useEffect(() => {
        setUserCartChanged(false);
    },[userCartChanged])


    return(
        <div className="home">
            <Shop setUserCartChanged={setUserCartChanged} userCartChanged={userCartChanged}/>
            <Cart setUserCartChanged={setUserCartChanged} userCartChanged={userCartChanged}/>
        </div>
    )
};

export default Home;