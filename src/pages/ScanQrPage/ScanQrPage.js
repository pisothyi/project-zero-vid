import React from "react";
import { Row, Col } from "react-bootstrap";
import TabGroup from "../../components/TabGroup/TabGroup";
import "./ScanQrPage.css";
import QrScanner from "../../components/QrScanner/QrScanner";
import TopBar from "../../components/TopBar/TopBar";
import { useMediaQuery } from "react-responsive";
const ScanQrPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className="body">
      {!isMobile ? (
        <div className="overall-container">
          <Row className="row">
            <Col md={2} className="col col-left">
              <TabGroup tabNum="third" />
            </Col>
            <Col md={10} className="col col-right">
              <TopBar />

              <QrScanner />
            </Col>
          </Row>
        </div>
      ) : (
        <div className="overall-container">
          <TabGroup tabNum="third" />
          <QrScanner />
        </div>
      )}
    </div>
  );
};

export default ScanQrPage;
