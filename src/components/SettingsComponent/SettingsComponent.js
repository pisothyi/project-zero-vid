import React from "react";
import "./SettingsComponent.css";
import {
  Form,
  Button,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import ProfilePicture from "../../assets/IMG_6953.jpg";
const SettingsComponent = ({ isMobile }) => {
  return (
    <div>
      <div className="settings-panel-container">
        <div className="profile-picture-container">
          <img alt="" src="" className="profile-picture" />
          <div className="d-flex align-items-center">
            <Button variant="primary" className="mr-2">
              Upload
            </Button>
            <Button variant="danger">Remove</Button>
          </div>
        </div>
        <Form>
          <Row className="d-flex align-items-center">
            <Col md={3}>
              <Form.Group controlId="formGridEmail">
                <Form.Label className="float-left">First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  value="Pisoth"
                />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group controlId="formGridPassword">
                <Form.Label className="float-left">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  value="Yi"
                />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group controlId="formGridPhoneNumber">
                <Form.Label className="float-left">Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone Number" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <DropdownButton
                id="dropdown-basic-button"
                title="Gender"
                className="gender-dropdown"
              >
                <Dropdown.Item href="#/action-1">Female</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Male</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>

          <Row className="d-flex align-items-center">
            <Col md={5} className=" mt-3">
              <Form.Group controlId="formGridEmail">
                <Form.Label className="float-left">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>

            <Col md={5}>
              <Form.Group controlId="formGridPassword">
                <Form.Label className="float-left">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>

            <Col md={2}>
              <Button variant="primary" className="btn-margin-top">
                Change Password
              </Button>
            </Col>
          </Row>
          {/*
          <Row>
            <Col md={12}>
              <Form.Group controlId="formGridAddress">
                <Form.Label className="float-left">Address</Form.Label>
                <Form.Control placeholder="House No., Road No., Sangkat, Khan, City/Province" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <Form.Group controlId="formGridCity">
                <Form.Label className="float-left">City</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group controlId="formGridState">
                <Form.Label className="float-left">Province</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group controlId="formGridZip">
                <Form.Label className="float-left">Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>
          </Row>
            
          */}
          <Row className="d-flex align-items-center">
            <Col md={3} className=" mt-3">
              <Form.Group controlId="formGridCity">
                <Form.Label className="float-left">National ID</Form.Label>
                <Form.Control />
              </Form.Group>
            </Col>

            <Col md={4}>
              <p className={isMobile ? " " : "mt-5"}>
                Please Upload a Picture Of Your National ID
              </p>
            </Col>
            <Col md={3} className={isMobile ? " " : "mt-3"}>
              <Button variant="primary" className="mr-2 btn-margin-top">
                Upload
              </Button>
              <Button variant="danger" className="btn-margin-top">
                Remove
              </Button>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="mt-4">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SettingsComponent;
