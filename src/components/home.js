import Shop from "./shop";
import Cart from "./cart";
import Nav from "./nav"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";


const Home = () => {

    const [userCartChanged, setUserCartChanged] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setUserCartChanged(false);
    },[userCartChanged])


    return(
        <div className="home">
            <Nav />
            <div className="home-container">
                <Shop setUserCartChanged={setUserCartChanged} userCartChanged={userCartChanged}/>
                <Cart setUserCartChanged={setUserCartChanged} userCartChanged={userCartChanged}/>
            </div>
            <Footer />
        </div>
    )
};

export default Home;