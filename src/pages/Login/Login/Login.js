/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import Header from '../../Shared/Header/Header';
import { useForm } from "react-hook-form";
import img from '../../../images/login.jpg'
import useAuth from '../../../Hooks/useAuth';
import { Alert, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { loginUser, user, signInWithGoogle } = useAuth()
    const location = useLocation();
    const histroy = useHistory()
    const rediract = location.state?.from || "/";

    useEffect(() => {
        user?.email ? histroy.push(rediract) : "";
    }, [user, histroy, rediract]);
    const onSubmit = (data) => {
        loginUser(data.email, data.password, location, histroy)
    };
    return (
        <div>
            <Header></Header>
            <div className="container text-center pt-5 mt-5">
                <div className="row">
                    <h2 className="py-3">Please Login </h2>
                    <div className="col-md-6 col-lg-6 col-12">
                        <img className="img-fluid rounded" src={img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                        <div className="register-form mt-5">
                            {
                                !user?.email && <>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input type="email" {...register("email")} placeholder="Email" />
                                        <input type="password" {...register("password", { required: true })} placeholder="Password" />
                                        <input className="btn btn-primary" type="submit" value="Login" />

                                    </form>
                                    <p>New User?  <Link to="/register"> Register </Link></p>
                                    <Button onClick={signInWithGoogle}>Google Sign in</Button>
                                </>
                            }
                            {
                                user?.email && <Alert variant="success">
                                    You are Login
                                </Alert>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;