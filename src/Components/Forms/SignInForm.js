import React, { useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import InputBox from '../Inputs/InputBox';

function SignInForm() {

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
        <div className="form_signin">
            <h4 style={{ marginBottom: '1em' }}>JOIN OUR CREATORS CLUB & GET 15% OFF</h4>
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
            <p style={{ color: 'gray', marginTop: '-2em', marginLeft: '10px', marginBottom: "1.5em", fontSize: '14px' }}>Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters</p>
            <div className="btn_wrapper">
                <button
                    type="button"
                    onClick={(e) => { console.log(request); }}
                    className="btn_primary"
                >
                    <span>SIGN UP FOR FREE</span>
                    <HiOutlineArrowNarrowRight size={25} />
                </button>
            </div>

            <br />
            <h4>OR</h4>
            <br />
            <button type='button' className="btn_social_auth_form">
                <span>Facebook</span>  <svg viewBox="0 0 24 24"><title>facebook</title><g fill="none" fillRule="evenodd"><path d="M0 24h24V0H0z"></path><path d="M23 12.067C23 5.955 18.075 1 12 1S1 5.955 1 12.067C1 17.591 5.023 22.17 10.281 23v-7.734H7.488v-3.199h2.793V9.63c0-2.774 1.642-4.306 4.155-4.306 1.204 0 2.462.216 2.462.216v2.724h-1.387c-1.366 0-1.792.853-1.792 1.728v2.076h3.05l-.487 3.2h-2.563V23C18.977 22.17 23 17.591 23 12.067" fill="#1877F2"></path></g></svg>
            </button>
            <br />
            <button type='button' className="btn_social_auth_form">
                <span>Google</span>
                <svg viewBox="0 0 24 24"><title>google</title><g fill="none" fillRule="evenodd"><path d="M21.56 11.25c0-.78-.07-1.53-.2-2.25H11v4.255h5.92a5.06 5.06 0 01-2.195 3.32v2.76h3.555c2.08-1.915 3.28-4.735 3.28-8.085z" fill="#4285F4" transform="translate(1 1)"></path><path d="M11 22c2.97 0 5.46-.985 7.28-2.665l-3.555-2.76c-.985.66-2.245 1.05-3.725 1.05-2.865 0-5.29-1.935-6.155-4.535H1.17v2.85A10.996 10.996 0 0011 22z" fill="#34A853" transform="translate(1 1)"></path><path d="M4.845 13.09A6.612 6.612 0 014.5 11c0-.725.125-1.43.345-2.09V6.06H1.17A10.996 10.996 0 000 11c0 1.775.425 3.455 1.17 4.94l3.675-2.85z" fill="#FBBC05" transform="translate(1 1)"></path><path d="M11 4.375c1.615 0 3.065.555 4.205 1.645l3.155-3.155C16.455 1.09 13.965 0 11 0 6.7 0 2.98 2.465 1.17 6.06l3.675 2.85C5.71 6.31 8.135 4.375 11 4.375z" fill="#EA4335" transform="translate(1 1)"></path><path d="M0 0h22v22H0z" transform="translate(1 1)"></path></g></svg>

            </button>
            <br />
            <button type='button' className="btn_social_auth_form">
                <span>Yahoo</span>
                <svg viewBox="0 0 24 24"><title>yahoo</title><path d="M17.12 3.374l-.132.21c-.124.197-.236.366-.391.6-.208.31-.595.924-1.06 1.713l-.452.764c-.313.527-.668 1.124-.944 1.6l-.352.613a539.98 539.98 0 00-1.864 3.267v.546c0 .757.016 1.58.045 2.318.014.335.027.933.041 1.565.018.753.035 1.531.054 1.925l.006.118v.015l-.127-.036c-.05-.015-.1-.027-.152-.04a4.418 4.418 0 00-.487-.075 3.822 3.822 0 00-.305-.012h-.003c-.103 0-.204.004-.305.012a4.418 4.418 0 00-.487.075 2.585 2.585 0 00-.152.04l-.128.036.001-.015.006-.118c.019-.393.037-1.171.054-1.925.014-.632.028-1.23.041-1.565.029-.737.045-1.56.045-2.318v-.546L9.138 10.5c-.304-.536-.622-1.09-.93-1.625l-.352-.613a149.81 149.81 0 00-.944-1.6l-.452-.764A38.257 38.257 0 005.4 4.184a26.954 26.954 0 01-.391-.6l-.132-.21-.001-.001.24.068c.307.088.62.131.955.131.335 0 .657-.043.957-.128l.073-.02.036.066c.594 1.072 2.188 3.692 3.14 5.258.33.54.59.967.719 1.184l.001-.002.002.002c.129-.217.39-.645.718-1.184.952-1.566 2.547-4.186 3.14-5.258l.037-.066.072.02c.3.085.622.128.957.128.336 0 .648-.043.955-.13l.24-.07.003.002zm-6.092-1.878C7.14 1.496 3.466.986 0 0v22c3.466-.985 7.14-1.496 11.028-1.496 3.842 0 7.505.5 10.972 1.496V0c-3.467.997-7.13 1.496-10.972 1.496z" transform="matrix(-1 0 0 1 23 1)" fill="#400090" fillRule="evenodd"></path></svg>
            </button>
            <div className="terms">
                <span style={{ color: 'gray', marginTop: '-2em', fontSize: '14px' }}>
                    By clicking 'Log In' you agree to our website Creators Club Terms &
                    Conditions, adidas Privacy Notice and Terms & Conditions.
</span>
            </div>
        </div>
    )
}

export default SignInForm
