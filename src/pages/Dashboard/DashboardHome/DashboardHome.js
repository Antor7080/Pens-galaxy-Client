import React from 'react';
import img from '../../../images/logo.png'

const DashboardHome = () => {
    return (
        <div className="container">
          <div className="pt-3 mt-5">
              <div className="text-center">
                  <img className=" w-25" src={img} alt="" />
                  <h1 className="text-warning">Wellcome to Dashboard</h1>
              </div>
          </div>
        </div>
    );
};

export default DashboardHome;