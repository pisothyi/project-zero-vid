import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./QrScanner.css";
import QrReader from "react-qr-reader";
import { Button } from "react-bootstrap";
import axios from "axios";
import { firebaseApp } from "../../firebase/firebaseApp";
import QRCode from "qrcode.react";
import LocationLogsTab from "../LocationLogsTab/LocationLogsTab";
import PreviousLocationsTab from "../PreviousLocationsTab/PreviousLocationsTab";
const key = process.env.REACT_APP_ENCRYPTION_KEY;
const encryptor = require("simple-encryptor")(key);

const QrScanner = () => {
  const [isDetected, setIsDetected] = useState(false);
  const [showQrScanner, setShowQrScanner] = useState(false);
  const [showMyQr, setShowMyQr] = useState(false);

  async function postData(data) {
    try {
      /*const response = await axios({
        method: "post",
        url: "http://localhost:8081/api/user/qr",
        data: {
          userId: "hyE5U786nBoiR6EZenhA",
          username: "user",
          email: firebaseApp.auth().currentUser.email,
          data: data,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);*/
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleShowQRScanner = () => {
    setShowQrScanner(true);
    setShowMyQr(false);
  };

  const handleShowMyQR = () => {
    setShowQrScanner(false);
    setShowMyQr(true);
  };

  const handleScan = (data) => {
    if (data != null) {
      postData(data);
      setIsDetected(true);
    }
    console.log(data);
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h1 className="title">QR & Locations</h1>

      <Tabs defaultActiveKey="scanQr" id="qr-location-tabs">
        <Tab eventKey="scanQr" title="Scan QR">
          <div className="tab-container">
            <div className="btn-group-container">
              <Button variant="primary" onClick={handleShowQRScanner}>
                Scan QR
              </Button>
              <Button variant="primary" onClick={handleShowMyQR}>
                My QR
              </Button>
            </div>
            {showQrScanner ? (
              <div className="qr-reader-container">
                {isDetected ? (
                  <div>
                    <h1>Success</h1>
                    <Button onClick={() => setIsDetected(false)}>
                      Scan Again
                    </Button>
                  </div>
                ) : (
                  <QrReader
                    delay={500}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: "100%" }}
                  />
                )}
              </div>
            ) : null}

            {showMyQr ? (
              <div className="my-qr-container">
                <QRCode value="Testing" renderAs="svg" size="300" />
              </div>
            ) : null}
          </div>
        </Tab>
        <Tab eventKey="previousLocation" title="My Previous Locations">
          <div className="tab-container">
            <PreviousLocationsTab />
          </div>
        </Tab>
        <Tab eventKey="locationLogs" title="Location Logs">
          <div className="tab-container">
            <LocationLogsTab />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default QrScanner;
