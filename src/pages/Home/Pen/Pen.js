import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pen = ({ pen }) => {
    const { name, cost, img, _id, date } = pen;
    return (
        <div className="col-lg-4 col-md-4 p-2 col-12">
            <Card className="g-3 my-2  h-100 rounded p-2">

                <Card.Body className="text-center ">

                    <Card.Img variant="top" className="img-fluid  rounded mb-3" src={img} />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text >
                        <h6>
                            {cost} Taka
                        </h6>
                        <p className="">Last Update: {date}</p>
                    </Card.Text>
                    <Link to={`/purchase/${_id}`}>
                        <button className="btn-secondary text-center rounded py-2 px-3">Buy Now</button>
                    </Link>
                </Card.Body>
            </Card>




        </div>
    );
};

export default Pen;