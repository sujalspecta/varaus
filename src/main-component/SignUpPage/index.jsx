import React, { useState } from 'react';
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = (props) => {
    const push = useNavigate();

    const [value, setValue] = useState({
        email: '',
        full_name: '',
        password: '',
        confirm_password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        full_name: '',
        password: '',
        confirm_password: '',
    });

    // Validates inputs dynamically using native rules matching your old configuration
    const validateField = (name, val, allValues = value) => {
        let errorMsg = '';
        
        if (name === 'full_name') {
            if (!val) {
                errorMsg = 'The name field is required.';
            } else if (!/^[A-Za-z\s]+$/.test(val)) {
                errorMsg = 'The name may only contain letters.';
            }
        }
        
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
        
        if (name === 'confirm_password') {
            if (!val) {
                errorMsg = 'The confirm password field is required.';
            } else if (val !== allValues.password) {
                errorMsg = 'The confirm password confirmation does not match.';
            }
        }

        return errorMsg;
    };

    const changeHandler = (e) => {
        const { name, value: fieldVal } = e.target;
        const updatedValues = { ...value, [name]: fieldVal };
        setValue(updatedValues);
        
        // Handle validation changes dynamically
        const errorMsg = validateField(name, fieldVal, updatedValues);
        setErrors(prev => ({ ...prev, [name]: errorMsg }));

        // Cross-validate confirm password if the main password updates
        if (name === 'password' && value.confirm_password) {
            const confirmErr = validateField('confirm_password', value.confirm_password, updatedValues);
            setErrors(prev => ({ ...prev, confirm_password: confirmErr }));
        }
    };

    const submitForm = (e) => {
        e.preventDefault();

        // Run final checks across all fields
        const nameErr = validateField('full_name', value.full_name);
        const emailErr = validateField('email', value.email);
        const passwordErr = validateField('password', value.password);
        const confirmErr = validateField('confirm_password', value.confirm_password);

        if (nameErr || emailErr || passwordErr || confirmErr) {
            setErrors({
                full_name: nameErr,
                email: emailErr,
                password: passwordErr,
                confirm_password: confirmErr
            });
            toast.error('Empty field is not allowed!');
            return;
        }

        toast.success('Registration Complete successfully!');
        setValue({
            email: '',
            full_name: '',
            password: '',
            confirm_password: '',
        });
        setErrors({
            email: '',
            full_name: '',
            password: '',
            confirm_password: '',
        });
        push('/login');
    };

    return (
        <div className="loginWrapper">
            <div className="loginForm">
                <h2>Signup</h2>
                <p>Signup your account</p>
                <form onSubmit={submitForm}>
                    <div className='row'>
                        <div className='col-12 mb-4'>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Full Name"
                                value={value.full_name}
                                variant="outlined"
                                name="full_name"
                                label="Name"
                                slotProps={{
                                    label: { shrink: true }
                                }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                                error={Boolean(errors.full_name)}
                                helperText={errors.full_name}
                            />
                        </div>
                        <div className='col-12 mb-4'>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="E-mail"
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
                                slotProps={{
                                    label: { shrink: true }
                                }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                                error={Boolean(errors.password)}
                                helperText={errors.password}
                            />
                        </div>
                        <div className='col-12 mb-4'>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Confirm Password"
                                value={value.confirm_password} // Fixed typo here
                                variant="outlined"
                                name="confirm_password"
                                type="password"
                                label="Confirm Password"
                                slotProps={{
                                    label: { shrink: true }
                                }}
                                onBlur={changeHandler}
                                onChange={changeHandler}
                                error={Boolean(errors.confirm_password)}
                                helperText={errors.confirm_password}
                            />
                        </div>
                        <div className='col-12'>
                            <div className="formFooter">
                                <Button fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">Sign Up</Button>
                            </div>
                            <div className="loginWithSocial">
                                <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                            </div>
                            <p className="noteHelp">Already have an account? <Link to="/login">Return to Sign In</Link>
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

export default SignUpPage;
