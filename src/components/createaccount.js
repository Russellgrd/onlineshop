import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
    const [ firstname, setFirstName ] = useState('');
    const [ lastname, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ confirmEmail, setConfirmEmail ] = useState('');
    const [ password, setPassword ] = useState(null);
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validatePassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    let navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        let userObject = {
           firstname,
           lastname,
           email:String(email),
           confirmEmail:String(confirmEmail),
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

        let validaterArray = validateUserInformation(userObject);


        if(!validaterArray.includes(false)) {
            let resp = await fetch('https://onlineshop-backend.herokuapp.com/createnewuser', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(userObject)
            })
            let data = await resp.json();
            document.querySelector('.createaccount-popup').textContent = data.message;  
            setTimeout(() => {
                navigate('/login');
            },1500)

        } else {

            document.querySelector('.createaccount-popup').textContent = "form details incorrect, please review form rules"  
            return; 
        }
    }


    return(
        <div className="createaccount">
            <p className="createaccount-popup"></p>
            <form className="createaccount-form">
                <label name="firstname" htmlFor="firstname">first name</label>
                <input onChange={(e) => { 
                        setFirstName(e.target.value);
                            e.target.style.outline = e.target.value.length > 2 ? '2px solid green' : '2px solid orange';
                        }
                    } 
                    id="firstname" type="text"
                />

                <label name="label" htmlFor="label">last name</label>
                <input onChange={(e) => {
                        setLastName(e.target.value);
                        e.target.style.outline = e.target.value.length > 2 ? '2px solid green' : '2px solid orange';
                        }
                    }
                    id="lastname" 
                />

                <label name="email" htmlFor="email">email address</label>

                <input onChange={(e) => { 
                        setEmail(e.target.value);
                        let validEmail = validateEmail.test(e.target.value);
                        e.target.style.outline = validEmail ? '2px solid green' : '2px solid orange';

                        }
                    } 
                    id="email" 
                />

                <label name="confirmemail" htmlFor="confirmemail">confirm email</label>
                <input id="confirmemail" onChange={(e) => { 
                        setConfirmEmail(e.target.value);
                        let validEmail = validateEmail.test(e.target.value);
                        e.target.style.outline = validEmail && e.target.value === email ? '2px solid green' : '2px solid orange';
                        }
                    } 
                />
                <label name="password" htmlFor="password">choose a password</label>
                <input onChange={(e) => { 
                        setPassword(e.target.value);
                        let validPassword = validatePassword.test(e.target.value);
                        e.target.style.outline = validPassword ? '2px solid green' : '2px solid orange';
                    }
                    } 
                    id="password" type="password" 
                />
                <label name="confirmpassword" htmlFor="password">confirm password</label>
                <input onChange={(e) => { 
                        setConfirmPassword(e.target.value);
                        let validPassword = validatePassword.test(e.target.value);
                        e.target.style.outline = validPassword && e.target.value === password ? '2px solid green' : '2px solid orange';
                        }
                    } 
                    id="confirmpassword" type="password" 
                />
                <button onClick={(e) => { handleSubmit(e) }}>submit</button>
            </form>

            <div className="createaccount-formrules">
                <h4>Form Rules</h4>
                    <p className="createaccount-formrules-text">
                        first and last name cannot be less that 3 characters
                    </p>
                    <p className="createaccount-formrules-text">
                        email address should be valid and match each other
                    </p>
                    <p className="createaccount-formrules-text">
                        password should have atleast 1 special character and be between 6 and 16 characters in length
                    </p>
            </div>
        </div>
    )
};

export default CreateAccount;