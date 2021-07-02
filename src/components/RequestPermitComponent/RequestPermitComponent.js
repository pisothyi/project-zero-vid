import React from "react";
import { Tabs, Tab, Form, Button, Card } from "react-bootstrap";
import TopBar from "../TopBar/TopBar";
import "./RequestPermitComponent.css";
import defaultQr from "../../assets/frame.png";
import { useMediaQuery } from "react-responsive";
const RequestPermitComponent = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div>
      {isMobile ? <></> : <TopBar />}
      <h1 className="title">Request Permit</h1>

      <div className="p-2">
        <Form>
          <Form.Group controlId="formGridEmail">
            <Form.Label className="float-left">
              Please fill in your reason below for your travel permit request.
            </Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter reason"
            />
            <Button variant="primary" type="submit" className="mt-4">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>

      <div>
        <Tabs defaultActiveKey="active-permits" id="permit-tabs">
          <Tab eventKey="active-permits" title="Active Permits">
            <div className="p-3 permit-tabpane">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={defaultQr} />
                <Card.Body>
                  <Card.Title>Travel Permit #2</Card.Title>
                  <Card.Text>Your permit will expire in 24h.</Card.Text>
                  <Button variant="primary">Use Permit</Button>
                </Card.Body>
              </Card>
            </div>
          </Tab>
          <Tab eventKey="expired-permits" title="Expired Permits">
            <div className="p-3 permit-tabpane">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={defaultQr} />
                <Card.Body>
                  <Card.Title>My Travel Permit #1</Card.Title>
                  <Card.Text>
                    This permit is expired. You may not use this permit anymore.
                  </Card.Text>
                  <Button variant="primary" disabled>
                    Expired
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Tab>
          <Tab eventKey="requested-permits" title="Requested Permits">
            <div className="p-3 permit-tabpane">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={defaultQr} />
                <Card.Body>
                  <Card.Title>Permit #1</Card.Title>
                  <Card.Text>
                    Your request has been sent. Waiting for approval.
                  </Card.Text>
                  <Button variant="primary" disabled>
                    Pending
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default RequestPermitComponent;
