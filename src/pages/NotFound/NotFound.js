import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../images/notFound.PNG'


const NotFound = () => {
    return (
        <div>

            <div className="text-center">
                <img className="img-fluid" src={NotFoundImage} alt="" />
                <br/>
                <button className="btn-success"><Nav.Link as={Link} to="/home"> Back Home</Nav.Link></button>
            </div>
        </div>
    );
};


export default NotFound;