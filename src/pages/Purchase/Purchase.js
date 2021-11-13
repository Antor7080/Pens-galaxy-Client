import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Purchase.css'

const Purchase = () => {
    const { user } = useAuth();
    const [purchaseItem, setPuchaseItem] = useState();
    const { id } = useParams()
    const { databaseUrl } = useAuth();
    const url = databaseUrl(`pens/${id}`);
    const postUrl = databaseUrl('orders');
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(info => setPuchaseItem(info))
    }, [url])
    console.log(url)
    console.log(purchaseItem);

    const onSubmit = data => {

        axios.post(postUrl, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Successfully');
                    reset();
                }
            })
    };

    return (
        <div>
            <Header></Header>
            <div className="container">
                <h1 className="text-center text-info mt-5 pt-5">{purchaseItem?.name}</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="p-2">
                            <img className="img-fluid rounded mt-5 mb-3" src={purchaseItem?.img} alt="" />
                            <p className="text-center mx-3">{purchaseItem?.details}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="purchases-information mt-5">
                            <h4 className="text-center">Confirm Your Order</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input {...register("name", { required: true, maxLength: 50 })} readOnly defaultValue={user?.displayName} />
                                <input type="email" readOnly {...register("email", { required: true })} placeholder="Email" value={user?.email} />
                                <input {...register("title", { required: true })} readOnly defaultValue={purchaseItem?.name} />
                                <input {...register("cost", { required: true })} readOnly defaultValue={purchaseItem?.cost} />
                                <input {...register("address", { required: true })} placeholder="Address" />
                                <input {...register("number", { required: true })} placeholder="Phone Number" />
                                <input type="hidden" {...register("status", { hidden: true })} defaultValue="Pending" />
                                <input className="btn btn-primary" type="submit" value="Purchase Now" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;