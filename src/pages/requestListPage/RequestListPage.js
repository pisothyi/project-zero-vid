import React from "react";
import { Row, Col } from "react-bootstrap";
import TabGroup from "../../components/TabGroup/TabGroup";
import "./RequestListPage.css";
import RequestList from "../../components/RequestList/RequestList";
const RequestListPage = () => {
  return (
    <div className="body">
      <div className="overall-container">
        <Row className="row">
          <Col md={2} className="col col-left">
            <TabGroup tabNum="fourth" />
          </Col>
          <Col md={10} className="col col-right">
            <RequestList />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RequestListPage;
