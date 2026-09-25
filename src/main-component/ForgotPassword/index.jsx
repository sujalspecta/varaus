import React, { useState } from 'react';
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = (props) => {

    const push = useNavigate();

    const [value, setValue] = useState({
        email: '',
    });

    const [errors, setErrors] = useState({
        email: '',
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
        return errorMsg;
    };

    const changeHandler = (e) => {
        const { name, value: fieldVal } = e.target;
        setValue({ ...value, [name]: fieldVal });
        
        const errorMsg = validateField(name, fieldVal);
        setErrors(prev => ({ ...prev, [name]: errorMsg }));
    };

    const submitForm = (e) => {
        e.preventDefault();

        const emailErr = validateField('email', value.email);

        if (emailErr) {
            setErrors({ email: emailErr });
            toast.error('Empty field is not allowed!');
            return;
        }

        toast.success('Password reset link sent successfully!');
        setValue({
            email: '',
        });
        setErrors({
            email: '',
        });
        push('/login');
    };

    return (
        <div className="loginWrapper">
            <div className="loginForm">
                <h2>Forgot Password</h2>
                <p>Reset your account password</p>
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
                        <div className='col-12'>
                            <div className="formFooter">
                                <Button fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">
                                    Resend Password
                                </Button>
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

export default ForgotPassword;
