import React from "react";
import { Row, Col } from "react-bootstrap";
import TabGroup from "../../components/TabGroup/TabGroup";
import "./CryptoWalletPage.css";
import CryptoWallet from "../../components/CryptoWallet/CryptoWallet";
import { useMediaQuery } from "react-responsive";
const CryptoWalletPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className="body">
      {!isMobile ? (
        <div className="overall-container">
          <Row className="row">
            <Col md={2} className="col col-left">
              <TabGroup tabNum="fourth" />
            </Col>
            <Col md={10} className="col col-right">
              <CryptoWallet />
            </Col>
          </Row>
        </div>
      ) : (
        <div className="overall-container">
          <TabGroup tabNum="fourth" />
          <CryptoWallet />
        </div>
      )}
    </div>
  );
};

export default CryptoWalletPage;
