import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from 'universal-cookie';


const UserLogin = () => {

    let [email, setEmail] = useState(null);
    let [password, setPassword] = useState(null);
    let [login, setLogin] = useState(false);
    const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const navigate = useNavigate();
    const cookies = new Cookies();
    const handleLogin = async (e) => {
        e.preventDefault();
        let validEmail = validateEmail.test(email);
        if( validEmail && password.length > 5 ){
            let respObj = await fetch('http://localhost:4242/userlogin', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email, password})
            });
            let data = await respObj.json();
            cookies.set('Authorization',`Bearer ${data.jwtToken}`);
            cookies.set('useremail',`${data.email}`)
            navigate('/');
        } else {
            document.querySelector('.userlogin-validation-message').textContent = "Please enter a valid email and password"
        }
    }



    return(
        <div className="userlogin">
            <p className="userlogin-validation-message"></p>
            <form className="userlogin-form">
                <label htmlFor="email" name="email">email address</label>
                <input onChange={(e) => {setEmail(e.target.value)}} id="email" />
                <label htmlFor="password" name="password">password</label>
                <input onChange={(e) => {setPassword(e.target.value)}} id="password" />
                { login || <button onClick={handleLogin}>login</button>}
                <Link to="/createaccount">create an account</Link>
            </form>
        </div>
    )
};


export default UserLogin;