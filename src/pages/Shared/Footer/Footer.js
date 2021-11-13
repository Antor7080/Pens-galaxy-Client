import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <footer className="container-fluid pt-5 footer-container bg-dark mt-5 text-light">
        <div className="row text-center">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">

                <h3>About Us</h3>
                <p> At Pens Galaxy BD you will find all the fine writing instrument starting from world renowned brands at a competitive price range. We are Authorized Distributor and Dealer of various brands. There are plethora of options to choose from. Check our wide range of stationery products - Collections. Our goal is to introduce world class writing instruments in Bangladesh.</p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">

                <img width="100"
                    height="80" src={logo} alt="" />

                <h5>Email: Penglaxuy@gmail.com</h5>
                <h5>Cell: +88019888888888</h5>

            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">

                <h3> Useful Link</h3>
                <NavLink to="/home">Home</NavLink>
                <br />
                <NavLink to="/allPens">All Pens</NavLink>
                <br />
                <NavLink to="/about">About Us</NavLink>
                <br />
                <NavLink to="/#">Facebook</NavLink>
                <br />
                <NavLink to="/#">Youtube</NavLink>
            </div>
            <p>
                <small>© Copyright 2021 | All rights reserved.</small>
            </p>
        </div>
    </footer>
    );
};

export default Footer;