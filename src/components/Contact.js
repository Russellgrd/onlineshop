import Footer from './Footer';
import Nav from './nav';
const Contact = () => {

    return(
        <div className="contact">
            <Nav />
            <h3 className="contact-heading">Contact</h3>
            <p className="contact-text">If you need any support at all please email our customer service team on the below email.</p>
            <p className="contact-text contact-email">support@viralaces.com</p>
            <p className='contact-text'>We will get back to you usually within 1 working day.</p>
            <Footer />
        </div>
    )
}

export default Contact;