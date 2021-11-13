import React from 'react';
import { Accordion } from 'react-bootstrap';
import logo from '../../../images/logo.png'

const AboutUs = () => {
  return (
    <div className="pt-3">
      <h2 className="fw-bold text-primary text-center">ABOUT US?</h2>
      <div className="container">
        <div className="border p-3 bg-light text-center">

          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">

              <img className="pt-5 img-fluid " src={logo} alt="" />


            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h4 className="pt-5 fw-bold text-primary text-center">Why We?</h4>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Pens Galaxy</Accordion.Header>
                  <Accordion.Body>
                    At Pens Galaxy BD you will find all the fine writing instrument starting from world renowned brands at a competitive price range. We are Authorized Distributor and Dealer of various brands. There are plethora of options to choose from. Check our wide range of stationery products - Collections. Our goal is to introduce world class writing instruments in Bangladesh.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Founder Species</Accordion.Header>
                  <Accordion.Body>
                    It all started when a single pen enthusiast - Founder - Jahid Hasan Antor got frustrated due to the lack of authentic products specially fountain pens and bullet journal essentials in Bangladesh and finally decided to import from USA. While keeping up his hobby he decided to open up an Online store just to check whether there is a demand or not.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Renowned Brands</Accordion.Header>
                  <Accordion.Body>
                    Gradually acquiring dealership programs from the renowned brands in 2021 that we carry, we finally decided to open up our ecommerce website just to make it even a better shopping experience for our loyal customers.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Manufacturing Pen Cases</Accordion.Header>
                  <Accordion.Body>
                    That being said, Jahid Hasan Antor to build his own signature Leather Pen Cases during 2020. He finally realized the cost for foreign pen pouches are way too expensive hence took the decision to take it to the next level on manufacturing pen cases in Bangladesh.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutUs;