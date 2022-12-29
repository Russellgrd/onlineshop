
const UserLogin = () => {

    return(
        <div className="userlogin">
            <form onSubmit="/userlogin">
                <label for="email" name="email">email address</label>
                <input id="email" />
                <label for="password" name="password">password</label>
                <input id="password" />
                <button>login</button>
            </form>
        </div>
    )
};

export default UserLogin;