import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';

const MangePen = () => {
    const { databaseUrl } = useAuth();
    const [pens, setPens] = useState([]);

    const url = databaseUrl('pens')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPens(data))
    }, [url, pens]);
    
    const handleDeletePen = (id) => {
        const proceed = window.confirm("Are you sure want to delete");
        if (proceed) {
            const url = databaseUrl(`pens/${id}`);
            
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Deleted successfully");
                        const remainingPens = pens.filter((order) => order._id !== id);
                        setPens(remainingPens);
                    }
                });
        }

    };
   
    return (
        <div className="container mt-5">
            <h2 className="my-5 pt-5 text-center">Manage All Items</h2>
            <Table striped bordered hover variant="secondary pt-5 text-center">
                <thead>
                    <tr>

                        
                        <th>Pen Name</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {pens?.map(data =>
                    <tbody keu={data._id}>
                        <tr>

                            <td>{data.name}</td>
                            <td>{data.cost}</td>
                            <td>{data.date} </td>
        
                            <td>
                                <button
                                    onClick={() => handleDeletePen(data._id)}
                                    className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>

                    </tbody>
                )}
            </Table> 
        </div>
    );
};

export default MangePen;