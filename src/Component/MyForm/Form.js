import { React, useState } from "react";
import axios from "axios";
import { ArrowLeft } from "react-bootstrap-icons";
import { Form, Button, Container, Col } from "react-bootstrap";

const MyForm = () => {
  const [name, setName] = useState("");
  const [salary, setSalry] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const allData = { name, salary, age };
    axios
      .post("http://dummy.restapiexample.com/api/v1/create", {
        name: "test",
        salary: "123",
        age: "23",
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    // console.log(allData)
  };
  return (
    <>
      <Container fluid>
        <Col md={8} style={{ background: "#80808036" }}>
          <Button
            variant="light"
            style={{
              margin: "100px 0px 75px 40px",
              background: "transparent",
              border: "none",
            }}
          >
            <ArrowLeft />
            Back
          </Button>
          <Form onSubmit={submitHandler}>
            <Col
              md={4}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <h3
                style={{
                  width: "80%",

                  marginBottom: "70px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Leave us your email to send you the full report
              </h3>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  style={{ borderRadius: "8px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{ borderRadius: "8px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Disclaimer statement page" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="You allow us to use your data and contact you latter"
                />
              </Form.Group>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    margin: "auto",
                  }}
                >
                  Submit
                </Button>{" "}
              </div>
            </Col>
          </Form>
        </Col>
      </Container>
    </>
  );
};

export default MyForm;
