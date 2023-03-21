
// Login page

import React from "react"
import MiniForm from "./MiniForm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"

function Login() {

    var [validEmail, setValidEmail] = useState(true)         // Describes if the user entered a valid email or not

    var [Password, setPassword] = useState(true)           // Describes if the user entered a valid password or not

    var [emailChange, setEmailChange] = useState(false)            //  check if email input is changed

    var [PasswordChange, setPasswordChange] = useState(false)     // check if password input is changed

    var [disableButton, setDisableButton] = useState(false)           // Enable and Disable Register button


    /* ( emailChange & passwordChange ) these stats are responsible to make
        the Login button disabled at the begining without them the Login button will be enabled before the input changes 
        because the other stats starts with true */

    function handleEmail(event) {

        const change = event.target.value;

        setEmailChange(true)

        if (!change.includes("@") || !change.includes(".com")) {
            setValidEmail(false)
        } else {
            setValidEmail(true)
        }
    }

    function handlePassword(event) {

        const change = event.target.value

        setPasswordChange(true)

        if (change.length < 8) {
            setPassword(false)
        } else {
            setPassword(true)
        }
    }

    useEffect(function () {
        if (validEmail && Password && emailChange && PasswordChange) {
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
    }, [validEmail, Password, emailChange, PasswordChange])


    return <div>
        <Navbar />
        <div className="container register-div">
            <img className="register-img" src="/pics/earth.jpeg" alt="earth-pic" />
            <h3 className="register-h3">Log in to your account</h3>

            <MiniForm
                label="Email"
                change={handleEmail}
                type="email"
                placeholder=""
                list=""
                divClass="miniForm-in-register"
                inputClass="form-control register-input"
                labelClass="register-label"
            />

            {!validEmail && <p className="register-invalid">Please enter a valid email address</p>}

            <MiniForm
                label="Your password"
                change={handlePassword}
                type="password"
                placeholder=""
                list=""
                divClass="miniForm-in-register"
                inputClass="form-control register-input"
                labelClass="register-label"
            />

            {!Password && <p className="register-invalid">At least 8 characters long</p>}

            {disableButton ? <Link to="/"><button type="button" class="register-button btn btn-primary">Login</button></Link> : <Link to=""><button type="button" class="register-button btn btn-primary" disabled>Login</button></Link>}
        </div>
        <Footer />
    </div>
}

export default Login