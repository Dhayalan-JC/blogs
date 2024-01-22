import React from "react";
// import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  // const [name, setName] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigateToContacts();
    // event.stopPropagation();
    const form = event.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const navigateToContacts = () => {
    // 👇️ navigate to /postdetails
    navigate("/postdetails");
  };
  return (
    <>
      <div className="container">
        <h4>Create Blogpost </h4>
        <div className="col-sm-12 py-4">
          {/* <form noValidate onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <div>
                <input
                  type="text"
                  value={name}
                  name="Main Blog post Title"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-sm-12">
                <Button variant="btn btn-md btn-success" type="submit">
                  Create post
                </Button>
              </div>
            </div>
          </form> */}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Blogpost Title</Form.Label>
              <Form.Control placeholder="Main Blog post Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Blogpost Description</Form.Label>
              <Form.Control placeholder="Main Blog post Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Heading</Form.Label>
              <Form.Control placeholder="Heading" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder="Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Subheading title 1</Form.Label>
              <Form.Control placeholder="Subheading Title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Subheading Description</Form.Label>
              <Form.Control placeholder="Subheading Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Subheading title 2</Form.Label>
              <Form.Control placeholder="Subheading Title 2" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Subheading Description</Form.Label>
              <Form.Control placeholder="Subheading Description" />
            </Form.Group>

            <Form.Group className="mb-3 text-right">
              <Button variant="btn btn-md btn-success" type="submit">
                Create post
              </Button>
            </Form.Group>
          </Form>
        </div>
        {/* 
        Another blog Post Title
        Another Blogpost Description
        New Feature 
        New Feature  Description*/}
      </div>
    </>
  );
};
export default CreatePost;
