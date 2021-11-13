import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';

import './AddPen.css'


const AddPen = () => {

    const { databaseUrl } = useAuth()
    const url = databaseUrl('pens')
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post(url, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    };

    return (
        <div className="container mt-5">

            <div className="add-pen ">
                <h2 className="pt-5 pb-3 text-primary text-center">PLEASE ADD A PEN WITH DETAILS</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 50 })} placeholder="Name" />

                    <input {...register("img", { required: true })} placeholder="Image Link" />
                    <input type="number" {...register("cost", { required: true })} placeholder="Cost" />
                    <textarea {...register("details", { required: true })} placeholder="Details" />
                    <input type="date" {...register("date", { required: true })} placeholder="Last Update Date" />
                    <input type="submit" value="Add Pen" />
                </form>
            </div>
        </div>
    );
};

export default AddPen;