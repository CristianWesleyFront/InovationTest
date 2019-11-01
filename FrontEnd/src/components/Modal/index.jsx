import React from "react";
import { Grid, Row, Col, Modal, Button } from "react-bootstrap";

export default function Form(props) {
  const {
    show,
    handleClose,
    handleSubmit,
    component,
    title,
    isDisabled,
    submited
  } = props;
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{component}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        {submited ? (
          <Button
            variant="primary"
            type={"submit"}
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Submit
          </Button>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
}
