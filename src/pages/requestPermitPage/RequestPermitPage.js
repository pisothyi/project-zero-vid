import React from "react";
import { Row, Col } from "react-bootstrap";
import TabGroup from "../../components/TabGroup/TabGroup";
import "./RequestPermitPage.css";
import RequestPermitComponent from "../../components/RequestPermitComponent/RequestPermitComponent";
import { useMediaQuery } from "react-responsive";
const RequestPermitPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className="body">
      {!isMobile ? (
        <div className="overall-container">
          <Row className="row">
            <Col md={2} className="col col-left">
              <TabGroup tabNum="second" />
            </Col>
            <Col md={10} className="col col-right">
              <RequestPermitComponent />
            </Col>
          </Row>
        </div>
      ) : (
        <div className="overall-container">
          <TabGroup tabNum="second" />
          <RequestPermitComponent />
        </div>
      )}
    </div>
  );
};

export default RequestPermitPage;
