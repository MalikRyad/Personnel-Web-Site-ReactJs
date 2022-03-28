import React from "react";
import CardElement from "../common/CardElement";
import { Row, Col, Container } from "react-bootstrap";
const Academic = ({ id }) => {
  return (
    <section id={id}>
      <Container>
        <h1 className="title">Academic Profile</h1>
        <Row>
          <Col>
            <CardElement
              title={
                <>
                  Baccalaureat <i>2007</i>
                </>
              }
              content={
                <div>
                  <p>
                    <i>High school :</i> Ibn el Haitem
                  </p>
                  <p>
                    <i>Branch :</i> Mathematics
                  </p>
                 
                
                </div>
              }
            ></CardElement>
          </Col>
          <Col>
            <CardElement
              title={
                <>
                  Telecommunication <i>2007-2012</i>
                </>
              }
              content={
                <div>
                  <p>
                    <i>College :</i>{" "}
                    <a
                      href="http://www.usthb.dz/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                     Universite des sciences et de la technologie houari boumedien
                    </a>
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

export default Academic;
