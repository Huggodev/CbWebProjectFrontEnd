import React from "react";
import LoginStyles from "./Login.module.css"
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {

    return (

        <div className={LoginStyles.containerLoginForm}>
            <div className={LoginStyles.textLoginH1}>
                <h1>Login</h1>
            </div>
            <div className={LoginStyles.formLogin}> 
                <LoginForm />
            </div>
        </div>
    )

}

export default Login;


