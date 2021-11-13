import React from 'react';
import './DashboardNav.css'
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import AddAdmin from "../AdminDashboard/AddAdmin/AddAdmin";
import AddPen from "../AdminDashboard/AddPen/AddPen";
import ManageOrder from "../AdminDashboard/ManageOrder/ManageOrder";
import AddReview from "../UserDashBoard/AddReview/AddReview";
import MyOrder from "../UserDashBoard/MyOrder/MyOrder";
import Pay from "../UserDashBoard/Pay/Pay";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MangePen from '../AdminDashboard/MangePen/MangePen';
import useAuth from '../../../Hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';

function DashboardNav() {
    const { admin, logOut } = useAuth()
    let { path, url } = useRouteMatch();

    return (
        <div  >
            <Navbar bg="secondary" fixed="top" expand="lg">
                <Container className="text-center">

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">
                                Home</Nav.Link>



                        </Nav>
                        {
                            !admin && <>
                                <Nav.Link as={Link} to={`${url}/pay`} >Pay</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/addReview`} >Add Review</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/myOrder`} >My Order</Nav.Link>
                            </>
                        }
                        {
                            admin && <>
                                <Nav.Link as={Link} to={`${url}/makeAdmin`} >Make Admin</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/addPen`} >Add Pen</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/managePen`} >Manage Pen</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/manage-all-order`} >Manage Order</Nav.Link>
                            </>
                        }
                        <Button className="logout-btn" onClick={logOut} >Logout</Button>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container">

                <Switch>
                    <Route exact path={`${path}/`}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    {
                        admin && <>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <AddAdmin></AddAdmin>
                            </AdminRoute>

                            <AdminRoute path={`${path}/addPen`}>
                                <AddPen></AddPen>
                            </AdminRoute>

                            <AdminRoute path={`${path}/manage-all-order`}>
                                <ManageOrder></ManageOrder>
                            </AdminRoute>
                            <AdminRoute path={`${path}/managePen`}>
                                <MangePen></MangePen>
                            </AdminRoute>

                        </>
                    }


                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>


                </Switch>
            </div>

        </div >
    );
}

export default DashboardNav;