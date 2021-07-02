import React from "react";
import TopBar from "../TopBar/TopBar";
import LineGraph from "./LineGraph";
import data from "./data.json";
import { Col, Row } from "react-bootstrap";
import "./CryptoWallet.css";
import { useMediaQuery } from "react-responsive";
const CryptoWallet = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className="crypto-wallet-container">
      {isMobile ? <></> : <TopBar />}
      <h1 className="title">My Wallet</h1>
      <div>
        <div className="wallet-balance-container">
          Wallet Balance: 2,400,000 Riel
        </div>
        {isMobile ? (
          <Row className="crypto-chart-container">
            <Col
              xs={12}
              className="d-flex justify-content-center align-items-center mt-4"
            >
              <div className="pie-chart-container"></div>
            </Col>
            <Col xs={12}>
              <div className="crypto-line-graph-container">
                <LineGraph data={data} />
              </div>
            </Col>
          </Row>
        ) : (
          <Row className="crypto-chart-container">
            <Col md={8}>
              <div className="wallet-balance-container">
                Wallet Balance: 2,400,000 Riel
              </div>
              <div className="crypto-line-graph-container">
                <LineGraph data={data} />
              </div>
            </Col>
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="pie-chart-container"></div>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default CryptoWallet;
