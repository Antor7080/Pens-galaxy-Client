import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Pen from '../Pen/Pen';

const Pens = () => {
    const [pens, setPens] = useState();
    const { databaseUrl } = useAuth()
    const url = databaseUrl('pens')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPens(data))
    }, [url])

    return (
        <div className="container py-5">
             <h1 className="fw-bold text-info pb-3 text-center">Welcome to Pen Galaxy</h1>
             <h3 className=" text-center">Our Collection</h3>
            <div className="row">
                {
                    pens?.slice(0, 6).map(pen => <Pen
                        key={pen._id}
                        pen={pen}
                    ></Pen>)
                }
            </div>
        </div>
    );
};

export default Pens;