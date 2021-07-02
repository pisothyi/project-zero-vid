import React, { useState } from "react";
import "./TopBar.css";
import defaultUserImg from "../../assets/default_user.jpg";
import { Alert, Toast } from "react-bootstrap";
import { firebaseApp } from "../../firebase/firebaseApp";
import { useMediaQuery } from "react-responsive";
import { TelephoneOutboundFill, Telephone } from "react-bootstrap-icons";
import EmergencyCallIcon from "../../assets/emergency-call.png";
function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="info" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Announcement Alert!</Alert.Heading>
      </Alert>
    );
  }
  return <div></div>;
  //return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

const TopBar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [showEmergencyLines, setShowEmergencyLines] = useState(false);
  const toggleShowEmergencyLines = () =>
    setShowEmergencyLines(!showEmergencyLines);
  return (
    <div className="topBar-container">
      <div className="announcement-container">
        <AlertDismissibleExample />
      </div>

      {isMobile ? (
        <div className="top-right-userInfo-container">
          <TelephoneOutboundFill
            size={20}
            onClick={() => setShowEmergencyLines(!showEmergencyLines)}
          />
        </div>
      ) : (
        <div className="top-right-userInfo-container">
          <div className="user-image-container">
            <img alt="Default User" src={defaultUserImg}></img>
          </div>

          <div className="userInfo">
            <p className="user-name">Pisoth Yi</p>
            <p className="user-email">{firebaseApp.auth().currentUser.email}</p>
          </div>
        </div>
      )}
      <Toast
        className="emergency-lines-toast"
        show={showEmergencyLines}
        onClose={toggleShowEmergencyLines}
      >
        <Toast.Header>
          <img
            src={EmergencyCallIcon}
            className="rounded mr-4 emergency-call-icon"
            alt=""
          />
          <strong className="mr-auto emergency-lines-text">
            Emergency Lines
          </strong>
        </Toast.Header>
        <Toast.Body>
          <div className="emergency-line mb-3">
            <a href="callto:115">
              <Telephone className="mr-2" />
              115
            </a>
          </div>
          <div className="emergency-line mb-3">
            <a href="callto:012825424">
              <Telephone className="mr-2" />
              012 825 424
            </a>
          </div>
          <div className="emergency-line mb-3">
            <a href="callto:012488868">
              <Telephone className="mr-2" />
              012 488 868
            </a>
          </div>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default TopBar;
