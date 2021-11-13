import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = (props) => {
    const { name, rate, review, img, email } = props.review;
    return (
        <div className="col-lg-4 col-md-4  col-12">



            <Card className="h-100 p-3">
                <div className="d-flex align-items-center justify-content-evenly">
                    <img className="rounded-circle w-25 p-3" variant="top" src={img} alt="" />
                    <div>

                        <h6>{name}</h6>
                        <p>{email}</p>
                    </div>
                </div>
                <Card.Body>

                    <Card.Text>
                        {review}
                    </Card.Text>

                </Card.Body>
              
                    <p className="border-0 bg-0 text-center">
                        <small>

                            <Rating
                                className="text-warning mt-1"
                                initialRating={rate}
                                readonly
                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                            />
                        </small>
                    </p>
              
            </Card>

        </div >
    );
};

export default Review;


