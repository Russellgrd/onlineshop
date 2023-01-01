import { Link } from "react-router-dom";

const UserLogin = () => {

    const handleLogin = () => {

    }

    return(
        <div className="userlogin">
            <form className="userlogin-form" onSubmit="/userlogin">
                <label htmlFor="email" name="email">email address</label>
                <input id="email" />
                <label htmlFor="password" name="password">password</label>
                <input id="password" />
                <button onClick={handleLogin}>login</button>
                <Link to="/createaccount">create an account</Link>
            </form>
        </div>
    )
};

export default UserLogin;