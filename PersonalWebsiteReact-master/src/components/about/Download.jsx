import React from "react";
import { Button } from "react-bootstrap";
const Download = () => {
  return (
    <div>
      <Button href="./MalikRyadCV.pdf" download>
        <i className="fas fa-download"></i> Download CV
      </Button>
    </div>
  );
};

export default Download;
