import { React, useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ConfigUrl from "../config/ConfigUrl";
import axiosInstance from "../auth/Intercept";
import {  toast } from "react-toastify";

const Update = ({ show, close, data }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCloseDilog = () => {
    close(false);
  };

  useEffect(() => {
    if (data) {
      setTitle(data.title || "");
      setContent(data.content || ""); 
    }
  }, [data]);

  const handleUpdateNote = () => {

    const updatedNote = {
      title: title,
      content: content,
      createdAt:data.createdAt,
      id:data.id,
      updatedAt: new Date().toISOString(), 
    };
    
    axiosInstance
      .put(`${ConfigUrl.UPDATE_NOTE_BY_ID}/${updatedNote.id}`,updatedNote)
      .then((response) => {
        toast.success("Note updated successfully!");
        close(false);
      })
      .catch((error) => {
        toast.error("Error ..Couldn't updated!");
      });
  };

  return (
    <>
      <Modal show={show} onHide={close} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                type="text"
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                value={content}
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
          <Button variant="primary" onClick={handleUpdateNote}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Update;
