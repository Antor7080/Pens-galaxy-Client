import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';
import './AddReview.css'

const AddReview = () => {
    const { user, databaseUrl } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const url = databaseUrl('reviews');
    const onSubmit = (data) => {
        axios.post(url, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Send Successfull');
                    reset();
                }
            })
    };
    return (
        <div className="container">
            <div className="review-form py-5 mt-5">
            <h2 className="text-center">We Want Your Feedback for Improving </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 50 })} value={user?.displayName} />
                <input type="email" {...register("email", { required: true })} value={user?.email} />
                <textarea  {...register("review", { required: true })} placeholder="Your Opinion" />
                <input type="hidden" {...register("img", { required: true, hidden: true })} value="https://i.ibb.co/F3S6q5Q/avatar.png" />
                <input type="number" {...register("rate", { required: true, maxLength: 50 })} min="1" max="5" placeholder="Rating Between (1-5))" />
                <input className="btn btn-primary" type="submit" value="Send Review" />

            </form>
        </div>
        </div>
    );
};

export default AddReview;