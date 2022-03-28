import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../styles/about/about.css";
import "../../styles/home/home.css";
import Download from "./Download";
import CardElement from "../common/CardElement";
import art from "../../assets/ab-img.png";

const About = () => {
  return (
    <Container>
      <Row className="row">
        <Col md={6}>
          {/**ArtWork */}
          <img
            src={art}
            alt="art"
            className="art"
            style={{
              paddingRight: "2rem"
            }}
          />
        </Col>
        <Col md={6}>
          <AboutInfo />
          <Download></Download>
        </Col>
      </Row>
      <WhatIdo what={whatIdo}></WhatIdo>
    </Container>
  );
};
const WhatIdo = ({ what }) => {
  const cards = what.map(item => {
    return (
      <Col>
        <CardElement
          title={
            <>
              <span>{item.icon}</span>
              <h2 style={{ marginTop: "1rem" }}>{item.title}</h2>
            </>
          }
          content={<Card.Text className="content">{item.content}</Card.Text>}
        ></CardElement>
      </Col>
    );
  });

  return (
    <div className="whatido">
      <h1>What I Do</h1>
      <Row>{cards}</Row>
    </div>
  );
};

const AboutInfo = () => {
  const languages = ["React", "Angular", ".Net Core API", "C#", "MongoDb", "SQL", "Microservices"];
  return (
    <div
      style={{
        paddingLeft: "2rem"
      }}
    >
      <h1 className="name-tag">About Me</h1>
      <p>
        I'm an algerian <i>Full Stack Developper</i> at ATM Mobilis ,inspired web
        developer, <i>machine learning</i> and <i>datascience</i> enthusiast. am
        currently good at .
      </p>

      <Tools tools={languages} />
    </div>
  );
};
const Tools = ({ tools }) => {
  const listItems = tools.map(tool => {
    return (
      <li>
        <p>{tool}</p>
      </li>
    );
  });
  return <ul className="tools">{listItems}</ul>;
};

const whatIdo = [
  {
    title: "Solution Architect",
    icon: <i className="fas fa-database"></i>,
    content: `I thrive to be a solution architect , thats why i research this topic as much as i can and try to build real-life projects`
  },
  {
    title: "Full Stack Developper",
    icon: <i className="fas fa-globe"></i>,
    content: `I like building things , bringing my ideas to reality , and web developement is the tool that made it possible for me , thats why am always up-to-date in this topic`
  },

];
export default About;
