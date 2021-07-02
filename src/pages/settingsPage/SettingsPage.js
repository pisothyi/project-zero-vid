import React from "react";
import { Row, Col } from "react-bootstrap";
import TabGroup from "../../components/TabGroup/TabGroup";
import "./SettingsPage.css";
import SettingsComponent from "../../components/SettingsComponent/SettingsComponent";
const SettingsPage = () => {
  return (
    <div className="body">
      <div className="overall-container">
        <Row className="row">
          <Col md={2} className="col col-left">
            <TabGroup tabNum="sixth" />
          </Col>
          <Col md={10} className="col col-right">
            <SettingsComponent />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SettingsPage;
