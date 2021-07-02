import React from "react";
import { Row, Col } from "react-bootstrap";
import TabGroup from "../../components/TabGroup/TabGroup";
import "./MyAccountPage.css";
import MyAccountComponent from "../../components/MyAccountComponent/MyAccountComponent";
import { useMediaQuery } from "react-responsive";
const MyAccountPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className="body">
      {!isMobile ? (
        <div className="overall-container">
          <Row className="row">
            <Col md={2} className="col col-left">
              <TabGroup tabNum="fifth" />
            </Col>
            <Col md={10} className="col col-right">
              <MyAccountComponent />
            </Col>
          </Row>
        </div>
      ) : (
        <div className="overall-container">
          <TabGroup tabNum="fifth" />
          <MyAccountComponent />
        </div>
      )}
    </div>
  );
};

export default MyAccountPage;
