import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className={["container mt-5 d-flex justify-content-center align-items-center flex-column"].join(' ')}>
            <h2 className="mr-auto text-uppercase">Login</h2>
            <p className="mr-auto mb-5">Connect with your account to access other features</p>
            <form className="w-50">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email..." />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password:</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password..." />
                </div>
                <p className="mb-4">Don't have an account? Register from <Link to="/register">here</Link></p>
                <button type="submit" class="btn btn-success text-uppercase w-100">Login</button>
            </form>
        </div>
    )
}

export default Login
