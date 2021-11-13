import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';

const MyOrder = () => {
    const { user, databaseUrl } = useAuth();
    const [order, setOrder] = useState([]);

    const url = databaseUrl(`orders?email=${user.email}`)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [order, url]);
    console.log(order);
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Are you sure want to delete");
        if (proceed) {
            const url = databaseUrl(`orders/${id}`);
            console.log(url);
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Deleted successfully");
                        const remainingOrders = order.filter((order) => order._id !== id);
                        setOrder(remainingOrders);
                    }
                });
        }

    };

    return (
        <div className="container pt-5  table-responsive">
            <h2 className="pt-5 pb-3 text-primary text-center">MY ALL ORDER</h2>
            <Table striped bordered hover variant="secondary text-center">
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Pen Name</th>
                        <th>Number</th>
                        <th>Cost</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {order?.map(data =>
                    <tbody key={data._id}>
                        <tr>

                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.title} </td>
                            <td>{data.number} </td>
                            <td>{data.cost} </td>

                            <td>
                                <p className="text-primary fw-bold">{data.status}</p>
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDeleteOrder(data._id)}
                                    className="btn btn-danger">
                                    X
                                </button>
                            </td>
                        </tr>

                    </tbody>
                )}
            </Table>
        </div>
    );
};

export default MyOrder;