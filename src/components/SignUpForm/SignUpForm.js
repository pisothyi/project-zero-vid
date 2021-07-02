import React, { useState, useRef } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./SignUpForm.css";
import defaultProfile from "../../assets/default_user.jpg";
import provinces from "./provinces";
import axios from "axios";
const SignUpForm = () => {
  const form = useRef(null);
  const [user, setUser] = useState({
    gender: "Gender",
    profilePicture: {
      preview: "",
      raw: "",
      type: "",
    },
    nationalIdPicture: {
      preview: "",
      raw: "",
      type: "",
    },
  });
  function renameFile(originalFile, newName) {
    return new File([originalFile], newName, {
      type: originalFile.type,
      lastModified: originalFile.lastModified,
    });
  }

  const handleSelectGender = (e) => {
    setUser({ ...user, gender: e });
  };
  const handleChangeIdImg = (e) => {
    if (e.target.files.length) {
      setUser({
        ...user,
        nationalIdPicture: {
          preview: URL.createObjectURL(e.target.files[0]),
          raw: renameFile(e.target.files[0], "nationalId"),
          type: renameFile(e.target.files[0], "nationalId").type,
        },
      });
    }
  };
  const handleChangeProfilePicture = (e) => {
    if (e.target.files.length) {
      setUser({
        ...user,
        profilePicture: {
          preview: URL.createObjectURL(e.target.files[0]),
          raw: renameFile(e.target.files[0], "profile"),
          type: renameFile(e.target.files[0], "profile").type,
        },
      });
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8081/api/new-user/signup",
        data: user,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    console.log("hello there I am working");
    console.log(user);
  }

  return (
    <div>
      <div className="profile-picture-container d-flex align-items-center">
        {user.profilePicture.preview ? (
          <img
            alt="Profile"
            src={user.profilePicture.preview}
            className="profile-picture"
          />
        ) : (
          <>
            <img
              alt="Profile"
              src={defaultProfile}
              className="profile-picture"
            />
          </>
        )}

        <input
          className="mr-2"
          type="file"
          name="profilePicture"
          onChange={handleChangeProfilePicture}
        />
      </div>
      <Form ref={form}>
        <Row className="d-flex align-items-center">
          <Col md={3}>
            <Form.Group controlId="firstName">
              <Form.Label className="float-left">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={user.firstName || ""}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="lastName">
              <Form.Label className="float-left">Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={user.lastName || ""}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="phoneNumber">
              <Form.Label className="float-left">Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                value={user.phoneNumber || ""}
                onChange={(e) =>
                  setUser({ ...user, phoneNumber: e.target.value })
                }
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <DropdownButton
              id="gender"
              name="gender"
              title={user.gender}
              value={user.gender || ""}
              className="gender-dropdown"
              onSelect={handleSelectGender}
            >
              <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
              <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
              <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>

        <Row className="d-flex align-items-center">
          <Col md={5}>
            <Form.Group controlId="email">
              <Form.Label className="float-left">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={user.email || ""}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </Form.Group>
          </Col>

          <Col md={5}>
            <Form.Group controlId="password">
              <Form.Label className="float-left">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={user.password || ""}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group controlId="address">
              <Form.Label className="float-left">Address</Form.Label>
              <Form.Control
                placeholder="House No., Road No., Sangkat, Khan, City/Province"
                name="address"
                value={user.address || ""}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <Form.Group controlId="city">
              <Form.Label className="float-left">City</Form.Label>
              <Form.Control
                name="city"
                placeholder="City"
                value={user.city || ""}
                onChange={(e) => setUser({ ...user, city: e.target.value })}
              />
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="province">
              <Form.Label className="float-left">Province</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                name="province"
                value={user.province || ""}
                onChange={(e) => setUser({ ...user, province: e.target.value })}
              >
                <option>Choose Province</option>
                {provinces.map((province) => {
                  return <option>{province}</option>;
                })}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="zip">
              <Form.Label className="float-left">Zip Code</Form.Label>
              <Form.Control
                name="zip"
                value={user.zip || ""}
                onChange={(e) => setUser({ ...user, zip: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="d-flex align-items-center">
          <Col md={3}>
            <Form.Group controlId="nationalId">
              <Form.Label className="float-left">National ID</Form.Label>
              <Form.Control
                name="nationalId"
                value={user.nationalId || ""}
                onChange={(e) =>
                  setUser({ ...user, nationalId: e.target.value })
                }
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <p className="mt-4">Please Upload a Picture Of Your National ID</p>
          </Col>
          <Col md={3}>
            <input
              className="mr-2 btn-margin-top"
              type="file"
              onChange={handleChangeIdImg}
            />
          </Col>
        </Row>

        <Button variant="primary" className="mt-3" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUpForm;
