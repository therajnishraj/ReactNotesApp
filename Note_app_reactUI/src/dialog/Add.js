import { React, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ConfigUrl from "../config/ConfigUrl";
import axiosInstance from "../auth/Intercept";
import {  toast } from "react-toastify";

export const Add = ({ show, close }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCloseDilog = () => {
    close(false);
  };

  const handleAddNote = () => {
    const data = { title, content }; // Payload for the API
    axiosInstance
      .post(ConfigUrl.ADD_NOTE, data)
      .then((response) => {
        toast.success("Note added successfully!");
        close(false);
      })
      .catch((error) => {
        toast.error("Technical Error..Couldn't be added note!");
      });
  };

  return (
    <>
      <Modal show={show} onHide={close} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={(event) => setTitle(event.target.value)}
                type="text"
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                onChange={(event) => setContent(event.target.value)}
                type="text"
                placeholder="Content"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDilog}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddNote}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
