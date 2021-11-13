import React from 'react';
import Header from '../../Shared/Header/Header';
import { useForm } from "react-hook-form";
import './Register.css'
import img from '../../../images/registration.jpg'
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router';

import { Spinner, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const { userRegister, user, isLoading, authError } = useAuth()
    const { register, handleSubmit } = useForm();
    const histroy = useHistory()
    const onSubmit = (data) => {
        if (data.password !== data.password2) {
            alert('Your PassWord Does Not Match')
        }
        else {
            userRegister(data.email, data.password, data.name, histroy)
        }
    };
    return (
        <div>
            <Header></Header>
            <div className="container">
            <h2 className="py-3 text-center">Please Register </h2>
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-12">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                        <div className="register-form mt-5">
                            {
                                !user?.email && !isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("name", { required: true, maxLength: 50 })} placeholder="Name" />
                                    <input type="email" {...register("email")} placeholder="Email" />
                                    <input type="password" {...register("password", { required: true })} placeholder="Password" />
                                    <input type="password" {...register("password2", { required: true })} placeholder="Retype Password" />
                                    <input className="btn btn-primary" type="submit" value="REGISTER" />
                                </form>}
                                <p className="text-center"> Already Account <Link to="/login">Login </Link></p>
                            {
                                isLoading && <div className="text-center p-5">
                                    <Button variant="primary" disabled>
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        Loading...
                                    </Button>
                                </div>
                            }
                            {
                                user?.email && <Alert variant="success">
                                    This is a  alert—check it out!
                                </Alert>
                            }

                            {
                                authError && <Alert variant="danger">
                                    {authError}
                                </Alert>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;