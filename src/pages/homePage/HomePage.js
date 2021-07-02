import React from "react";
import { Row, Col } from "react-bootstrap";
import TabGroup from "../../components/TabGroup/TabGroup";
import Dashboard from "../../components/Dashboard/Dashboard";
import "./HomePage.css";
import { useMediaQuery } from "react-responsive";
const HomePage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className="body">
      {!isMobile ? (
        <div className="overall-container">
          <Row className="row">
            <Col md={2} className="col col-left">
              <TabGroup tabNum="first" />
            </Col>
            <Col md={10} className="col col-right">
              <Dashboard />
            </Col>
          </Row>
        </div>
      ) : (
        <div className="overall-container">
          <TabGroup tabNum="first" />
          <Dashboard />
        </div>
      )}
    </div>
  );
};

export default HomePage;
