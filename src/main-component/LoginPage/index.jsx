import React, { useState } from 'react';
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";

import './style.scss';

const LoginPage = (props) => {
    const push = useNavigate();

    const [value, setValue] = useState({
        email: 'user@gmail.com',
        password: '123456',
        remember: false,
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const validateField = (name, val) => {
        let errorMsg = '';
        if (name === 'email') {
            if (!val) {
                errorMsg = 'The email field is required.';
            } else if (!/\S+@\S+\.\S+/.test(val)) {
                errorMsg = 'The email must be a valid email address.';
            }
        }
        if (name === 'password') {
            if (!val) {
                errorMsg = 'The password field is required.';
            }
        }
        return errorMsg;
    };

    const changeHandler = (e) => {
        const { name, value: fieldVal } = e.target;
        setValue({ ...value, [name]: fieldVal });
        
        const errorMsg = validateField(name, fieldVal);
        setErrors(prev => ({ ...prev, [name]: errorMsg }));
    };

    const rememberHandler = () => {
        setValue({ ...value, remember: !value.remember });
    };

    const submitForm = (e) => {
        e.preventDefault();

        const emailErr = validateField('email', value.email);
        const passwordErr = validateField('password', value.password);

        if (emailErr || passwordErr) {
            setErrors({ email: emailErr, password: passwordErr });
            toast.error('Empty field is not allowed!');
            return;
        }

        const userRegex = /^user+.*/gm;
        const email = value.email;

        if (email.match(userRegex)) {
            toast.success('You successfully Login on Varaus !');
            setValue({ email: '', password: '', remember: false });
            setErrors({ email: '', password: '' });
            push('/home');
        } else {
            toast.error('Invalid user criteria.');
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
                                // Replaced InputLabelProps with modern safe slotProps
                                slotProps={{
                                    label: { shrink: true }
                                }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                                error={Boolean(errors.email)}
                                helperText={errors.email}
                            />
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
                                // Replaced InputLabelProps with modern safe slotProps
                                slotProps={{
                                    label: { shrink: true }
                                }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                                error={Boolean(errors.password)}
                                helperText={errors.password}
                            />
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
    );
};

export default LoginPage;
