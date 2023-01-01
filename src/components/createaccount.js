import { useState } from "react";
import uuid from 'react-uuid';

const CreateAccount = () => {
    const [ firstname, setFirstName ] = useState('');
    const [ lastname, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ confirmEmail, setConfirmEmail ] = useState('');
    const [ password, setPassword ] = useState(null);
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validatePassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    const handleSubmit = async (e) => {
        e.preventDefault();
        let userObject = {
           firstname,
           lastname,
           email,
           confirmEmail,
           datejoined:new Date().toLocaleDateString(),
           password,
           confirmPassword
        }

        const validateUserInformation = (userObject) => {
            let isFirstNameValid = userObject.firstname.length >= 2 ? true : false;
            let isLastNameValid = userObject.lastname.length >= 2 ? true: false;
            let emailValid = validateEmail.test(userObject.email);
            let emailMatch = userObject.email === userObject.confirmEmail ? true : false;
            let passwordIsValid = validatePassword.test(userObject.password);
            let passwordMatch = userObject.password === userObject.confirmPassword ? true: false;
            return [isFirstNameValid,isLastNameValid,emailValid,emailMatch,passwordIsValid,passwordMatch]
        }

        console.log('userobject',userObject);
        console.log(validateUserInformation(userObject));
        

         let resp = await fetch('http://localhost:4242/createnewuser', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userObject)
        })
        let data = await resp.json();
        console.log(data);
    };

    return(
        <div className="createaccount">
            <form className="createaccount-form">
                <label name="firstname" htmlFor="firstname">first name</label>
                <input onChange={(e) => { setFirstName(e.target.value) }} id="firstname" type="text"/>
                <label name="label" htmlFor="label">last name</label>
                <input onChange={(e) => { setLastName(e.target.value) }} id="lastname" />
                <label name="email" htmlFor="email">email address</label>
                <input onChange={(e) => { setEmail(e.target.value) }} id="email" />
                <label name="confirmemail" htmlFor="confirmemail">confirm email</label>
                <input id="confirmemail" onChange={(e) => { setConfirmEmail(e.target.value) }} />
                <label name="password" htmlFor="password">choose a password</label>
                <input onChange={(e) => { setPassword(e.target.value) }} id="password" type="password" />
                <label name="confirmpassword" htmlFor="password">confirm password</label>
                <input onChange={(e) => { setConfirmPassword(e.target.value) }} id="confirmpassword" type="password" />
                <button onClick={(e) => { handleSubmit(e) }}>submit</button>
            </form>
        </div>
    )
};

export default CreateAccount;