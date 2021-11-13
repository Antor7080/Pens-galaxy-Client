import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';
import './AddAdmin.css'

const AddAdmin = () => {
    const { databaseUrl } = useAuth()
    const url = databaseUrl('users/admin')
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch(url, {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('successfully Added')
                    reset()
                }
            })
    };
    return (
        <div style={{ overflow: 'hidden' }} className="container  mt-5">
            <div className="add-admin">
                <h2 className="pt-5 pb-3 text-primary text-center">Make Admin</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" {...register("email", { required: true })} placeholder="Entar a Email to Make Admin" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;