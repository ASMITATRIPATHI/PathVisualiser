import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FiInfo } from "react-icons/fi";

export default function InfoModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <FiInfo className="mr-sm-2" />
          About Pathfinder Visualiser
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Hey, I'm Asmita ! Thanks for looking at my project!</p>
        <h5>About Project</h5>
        <p>
          This project is a visualisation of pathfinding algorithms present in
          many software applications. The pathfinding algorithms in this project
          include Breadth-first Search, Depth-first Search and Dijkstra's
          Algorithm, with more to come in the future. Some practical uses for
          pathfinding algorithms include Google Maps and the internet.
        </p>
        <p>
          Here is the{" "}
          <a href="https://github.com/ASMITATRIPATHI/PathVisualiser">
            GitHub link
          </a>{" "}
          to the project. To exit this popup, click on 'Close' below or click
          outside of the popup.
        </p>
        <p>
          Also, connect with me on{" "}
          <a href="https://www.linkedin.com/in/asmita-tripathi-b95a27229/">LinkedIn!</a>
        </p>
        <p>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/google" title="Google">
            {" "}
            Google{" "}
          </a>
          and{" "}
          <a href="https://icon54.com/" title="Pixel perfect">
            {" "}
            Pixel perfect{" "}
          </a>
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
