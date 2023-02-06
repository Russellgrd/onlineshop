import Nav from "./nav";
import Footer from './Footer';

const About = () => {

    return(
        <div className="about">
                 <Nav />
            <h1 className="about-heading">About us</h1>
            <p className="about-text">
            Thank you for visiting Viral Aces.

We are a new company and have recently launched our new website at the start of 2023 and are very excited to bring you our accessories catalogue which is mainly focused around bracelets, necklaces and items that we think would make the perfect gift for your friends and family.

We are based in Kent England however we also have staff working in Slovakia.

We are constantly looking to grow our brand and add more choice to our products, so please come back often to see what new items have arrived!
            </p>
            <div classsName="about-imagesbox">
                <img className="about-imagesbox-img" />
                <img className="about-imagesbox-img" />
                <img className="about-imagesbox-img" />
            </div>
            <footer />
        </div>
    )
};

export default About;