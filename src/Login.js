import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const validateEmail = () => {
        // Basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePassword = () => {
        // Basic password validation - at least 8 characters
        return password.length >= 8;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate email
        if (!email) {
            setErrorMessage('Email is required');
            return;
        }

        if (!validateEmail()) {
            setErrorMessage('Invalid email address');
            return;
        }

        // Validate password
        if (!password) {
            setErrorMessage('Password is required');
            return;
        }

        if (!validatePassword()) {
            setErrorMessage('Password should be at least 8 characters long');
            return;
        }

        // If validations pass, proceed with the login logic
        axios.post('http://localhost:3000/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    navigate('/home');
                } else {
                    setErrorMessage('Invalid credentials');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                </form>
                <p>Already Have an Account</p>
                <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Signup</Link>
            </div>
        </div>
    );
}

export default Login;
