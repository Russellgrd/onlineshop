import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import check from '../images/check.png'
import { useParams } from 'react-router-dom';
import { parseCartToObject } from '../helpers';

const Complete = () => {

    let [message, setMessage] = useState(null);
    let [userName,setUserName] = useState(null);

    useEffect(() => {
        console.log('use effect ran' + Math.random());
        let finalCart = localStorage.getItem('userCart');
        fetch('https://onlineshop-backend.herokuapp.com/purchasecomplete', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:finalCart
        })
        .then(resp => resp.json())
        .then((data) => {    
            console.log(data)
            let localStorageCart = parseCartToObject();
            console.log(localStorageCart.username);
            setUserName(localStorageCart.username);
            setMessage(data.message);
            console.log('clearing storage');
            localStorage.removeItem('userCart');
            let checkCartRemoved = localStorage.getItem('userCart');
            if(!checkCartRemoved) {
                console.log('storage successfully cleared')
            } else {
                console.log('storage not removed');
            }
        })
        .catch((err) => {
            console.log(err);
            setMessage(err.message);
        })
    },[]);


 

    return(
        <div className="complete">
            <li className='complete-listItem'>
                <Link className='complete-listItem-btn' to="/">Back home</Link>
            </li>
            { message &&  <h1> Thankyou{' ' + userName + ' ' + message}</h1>}
            <p>please check your email for full payment details</p>
            <p>do not refresh this page</p>
            <img className='complete-check-icon' src={check} />
        </div>
    )
};

export default Complete;