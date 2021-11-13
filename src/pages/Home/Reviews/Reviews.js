import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Review from '../Review/Review';

const Reviews = () => {

    const { databaseUrl } = useAuth();
    const url = databaseUrl('reviews');
    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [url, reviews])


    return (
        <div className="container">
            <h2 className="text-center mt-5 pb-2">Some Customer Review</h2>
            <div className="row">
                {
                    reviews?.map(review => <Review review={review}
                        key={review._id}
                    >

                    </Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;