import React from "react";
import { Row, Col } from "react-bootstrap";
import TabGroup from "../../components/TabGroup/TabGroup";
import "./FamilyMemberPage.css";
import FamilyMembers from "../../components/FamilyMembers/FamilyMembers";
const FamilyMemberPage = () => {
  return (
    <div className="body">
      <div className="overall-container">
        <Row className="row">
          <Col md={2} className="col col-left">
            <TabGroup tabNum="fifth" />
          </Col>
          <Col md={10} className="col col-right">
            <FamilyMembers />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FamilyMemberPage;
