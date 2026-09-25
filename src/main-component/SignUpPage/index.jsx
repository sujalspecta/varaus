import React, {useState} from 'react';
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";


const SignUpPage = (props) => {

    const push = useNavigate()

    const [value, setValue] = useState({
        email: '',
        full_name: '',
        password: '',
        confirm_password: '',
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));


    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: '',
                full_name: '',
                password: '',
                confirm_password: '',
            });
            validator.hideMessages();
            toast.success('Registration Complete successfully!');
            push('/login');
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
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
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('full name', value.full_name, 'required|alpha')}
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
                                label="Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </div>
                        <div className='col-12 mb-4'>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Confirm Password"
                                value={value.password}
                                variant="outlined"
                                name="confirm_password"
                                label="Confirm Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('confirm password', value.confirm_password, `in:${value.password}`)}
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
    )
};

export default SignUpPage;