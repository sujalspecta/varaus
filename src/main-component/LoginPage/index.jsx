import React, {useState} from 'react';
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Link, useNavigate} from "react-router-dom";

import './style.scss';



const LoginPage = (props) => {

    const push = useNavigate()

    const [value, setValue] = useState({
        email: 'user@gmail.com',
        password: '123456',
        remember: false,
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({...value, remember: !value.remember});
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));



    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: '',
                password: '',
                remember: false
            });
            validator.hideMessages();

            const userRegex = /^user+.*/gm;
            const email = value.email;

            if (email.match(userRegex)) {
                toast.success('You successfully Login on Varaus !');
                push('/home');
            }
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (
        <div className="loginWrapper">
            <div className="loginForm">
                <h2>Sign In</h2>
                <p>Sign in to your account</p>
                <form onSubmit={submitForm}>
                    <div className='row'>
                        <div className='col-12 mb-4'>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('email', value.email, 'required|email')}
                        </div>
                        <div className='col-12 mb-4'>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                type="password"
                                label="Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </div>
                        <div className='col-12'>
                            <div className="formAction">
                                <FormControlLabel
                                    control={<Checkbox checked={value.remember} onChange={rememberHandler}/>}
                                    label="Remember Me"
                                />
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </div>
                            <div className="formFooter">
                                <Button fullWidth className="cBtnTheme" type="submit">Login</Button>
                            </div>
                            <div className="loginWithSocial">
                                <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                            </div>
                            <p className="noteHelp">Don't have an account? <Link to="/register">Create free account</Link>
                            </p>
                        </div>
                    </div>
                </form>
                <div className="shape-img">
                    <i className="fi flaticon-honeycomb"></i>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;