import React from "react";
import CardElement from "../common/CardElement";
import { Row, Col, Container } from "react-bootstrap";
import gdg from "../../assets/gdg-google-developer-group-logo.svg";

const Work = ({ id }) => {
  return (
    <section id={id}>
      <Container>
        <h1 className="title">Work Experience</h1>
        <Row>
          <Col>
            <CardElement
            
              content={
                <div>
                  <p>
                    <i>2012 :</i> Developpeur  at ATM MOBILIS
                  </p>
                  <p>
                    <i>2014 :</i> Senion Developpeur  at ATM MOBILIS
                  </p>
               
               
               
               </div>
              }
            ></CardElement>
          </Col>
          <Col>
            <CardElement
            
              content={
                <div>
                  <p>
                   <i>2017 :</i>    Head of Department at ATM MOBILIS
                 </p>
                  <p>
                   <i>2019 :</i> Project Manager at ATM MOBILIS
                 </p>
                </div>
              }
            ></CardElement>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Work;
