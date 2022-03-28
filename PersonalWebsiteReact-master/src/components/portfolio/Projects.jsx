import React from "react";
import Project from "./Project";
import { Container, Row } from "react-bootstrap";
import github from "../../assets/github.png";
import weatherlab from "../../assets/icon.ico";
import logo from "../../logo.svg";
import CenteredIcon from "../common/CenteredIcon";
const Projects = ({ id }) => {
  const ps = projects.map(item => (
    <li
      style={{
        padding: "1rem"
      }}
    >
      <Project
        icon={item.icon}
        content={item.content}
        link={item.link}
      ></Project>
    </li>
  ));
  return (
    <section id={id}>
      <Container>
        <h1 className="title">Portfolio</h1>
        <Container
          style={{
            textAlign: "center"
          }}
        >
          <Row>
            <ul className="mr-auto ml-auto ">{ps}</ul>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

const projects = [
  {
    icon: <CenteredIcon icon={logo}></CenteredIcon>,
    content: <p className="centered-text">ReactJs Dashboard</p>,
    link: `https://github.com/MalikRyad/ReactJs-Dashboard`
  },
  {
    icon: <CenteredIcon icon={github}></CenteredIcon>,
    content: <p className="centered-text">Union Architecture .net core API</p>,
    link: `https://github.com/MalikRyad/SimpleUnionAPIExemple`
  },
  {
    icon: <CenteredIcon icon={weatherlab}></CenteredIcon>,
    content: <p className="centered-text">Situation Management Application</p>,
    link: `https://github.com/MalikRyad/MalikRyad-SituationManagementReactJSTemplate`
  }
];
export default Projects;
