import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../../Services/AuthService";
import InputBox from "../Inputs/InputBox";
import Loading from "../Loading/Loading";


function LoginForm() {

    const dispatch = useDispatch();


    const { RX_AUTH: { signInStart, signInSuccess, signInFail } } = useSelector(state => state)

    const onSubmit = () => {
        dispatch(SignIn(request))
    }

    const [request, setrequest] = useState({
        email: "",
        password: "",
    });

    const setEmailValue = (value) => {
        setrequest({ ...request, email: value });
    };

    const setPassword = (value) => {
        setrequest({ ...request, password: value });
    };

    return (
        <div className="form_login">
            <h1>LOG IN</h1>
            <div className="forget_link">Forgot Your Password?</div>

            <InputBox
                name={"Email"}
                inputValue={request.email}
                setInputValue={setEmailValue}
                InputType={"email"}
                errorMessage={"Please enter a valid e-mail address"}
                labelText={"Email"}
                required={true}
            />
            <InputBox
                name={"password"}
                inputValue={request.password}
                setInputValue={setPassword}
                InputType={"password"}
                errorMessage={"Incorrect email/password – please check and retry"}
                labelText={"Password"}
                required={true}
            />

            <div className="btn_wrapper">
                <button
                    type="button"
                    onClick={(e) => { onSubmit() }}
                    className="btn_primary"
                > {signInStart ? <div className="loader"></div> :
                    <> <span>LOG IN </span>
                        <HiOutlineArrowNarrowRight size={25} /></>
                    }
                </button>
            </div>
            <div className="terms">
                <span>
                    By clicking 'Log In' you agree to our website Creators Club Terms &
                    Conditions, adidas Privacy Notice and Terms & Conditions.
        </span>
            </div>
            <br />
            <h4>OR</h4>
            <br />
            <button type='button' className="btn_social_auth_form">
                <span>Facebook</span>  <svg viewBox="0 0 24 24"><title>facebook</title><g fill="none" fillRule="evenodd"><path d="M0 24h24V0H0z"></path><path d="M23 12.067C23 5.955 18.075 1 12 1S1 5.955 1 12.067C1 17.591 5.023 22.17 10.281 23v-7.734H7.488v-3.199h2.793V9.63c0-2.774 1.642-4.306 4.155-4.306 1.204 0 2.462.216 2.462.216v2.724h-1.387c-1.366 0-1.792.853-1.792 1.728v2.076h3.05l-.487 3.2h-2.563V23C18.977 22.17 23 17.591 23 12.067" fill="#1877F2"></path></g></svg>

            </button>  <br />
            <button type='button' className="btn_social_auth_form">
                <span>Google</span>
                <svg viewBox="0 0 24 24"><title>google</title><g fill="none" fillRule="evenodd"><path d="M21.56 11.25c0-.78-.07-1.53-.2-2.25H11v4.255h5.92a5.06 5.06 0 01-2.195 3.32v2.76h3.555c2.08-1.915 3.28-4.735 3.28-8.085z" fill="#4285F4" transform="translate(1 1)"></path><path d="M11 22c2.97 0 5.46-.985 7.28-2.665l-3.555-2.76c-.985.66-2.245 1.05-3.725 1.05-2.865 0-5.29-1.935-6.155-4.535H1.17v2.85A10.996 10.996 0 0011 22z" fill="#34A853" transform="translate(1 1)"></path><path d="M4.845 13.09A6.612 6.612 0 014.5 11c0-.725.125-1.43.345-2.09V6.06H1.17A10.996 10.996 0 000 11c0 1.775.425 3.455 1.17 4.94l3.675-2.85z" fill="#FBBC05" transform="translate(1 1)"></path><path d="M11 4.375c1.615 0 3.065.555 4.205 1.645l3.155-3.155C16.455 1.09 13.965 0 11 0 6.7 0 2.98 2.465 1.17 6.06l3.675 2.85C5.71 6.31 8.135 4.375 11 4.375z" fill="#EA4335" transform="translate(1 1)"></path><path d="M0 0h22v22H0z" transform="translate(1 1)"></path></g></svg>

            </button>
        </div>
    );
}

export default LoginForm;
