import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className={["container mt-5 d-flex justify-content-center align-items-center flex-column"].join(' ')}>
            <h2 className="mr-auto text-uppercase">Register</h2>
            <p className="mr-auto mb-5">Create your account to access other features</p>
            <form className="w-50">
                <div class="form-group">
                    <label for="exampleInputEmail1">Name:</label>
                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name..." />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email..." />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password:</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password..." />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password Confirm:</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter confirm password..." />
                </div>
                <p className="mb-4">Already have an account? Login from <Link to="/login">here</Link></p>
                <button type="submit" class="btn btn-success text-uppercase w-100">Register</button>
            </form>
        </div>
    )
}

export default Register;
