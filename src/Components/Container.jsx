import { useState } from "react";
import Form from "./Form";
import Profile from "./Profile";

let Container = () => {
    let [userLogged, setUserLogged] = useState(false);

    return (
        <div className="form-container">
            {!userLogged ? (
                <>
                <Form userLoggedIn={setUserLogged} />
                <span>Don’t have an account? <a href="https://google.com">Sign up</a></span>
                </>
            ) : (
                <Profile userLoggedIn={setUserLogged} />
            )}
        </div>
    )
}

export default Container;