import React, { useState } from "react";
import { Tab, Row, Nav, Navbar } from "react-bootstrap";
import "./TabGroup.css";
import { useHistory } from "react-router-dom";
import { firebaseApp } from "../../firebase/firebaseApp";
import { useMediaQuery } from "react-responsive";
import { List, X } from "react-bootstrap-icons";
import SideBarMenu from "./SideBarMenu";
const TabGroup = ({ tabNum }) => {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div>
      {isMobile ? (
        <Navbar bg="primary" variant="dark" className="responsive-nav-bar">
          <Navbar.Brand href="/home" className="brand-name">
            <b>Project Zero Vid</b>
          </Navbar.Brand>
          {showSideBar ? (
            <X size={30} color="white" onClick={toggleSideBar} />
          ) : (
            <List size={30} color="white" onClick={toggleSideBar} />
          )}
        </Navbar>
      ) : (
        <div className="tabgroup-container">
          <div className="logo-container"></div>
          <Tab.Container defaultActiveKey={tabNum}>
            <Row className="tabgroup-row">
              <Nav variant="pills" className="nav-container">
                <Nav.Item>
                  <Nav.Link
                    onClick={() => history.push("/home")}
                    eventKey="first"
                  >
                    Dashboard
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={() => history.push("/request-permit")}
                    eventKey="second"
                  >
                    Request Permit
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={() => history.push("/qr-locations")}
                    eventKey="third"
                  >
                    QR & Locations
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={() => history.push("/crypto-wallet")}
                    eventKey="fourth"
                  >
                    Crypto Wallet
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    eventKey="fifth"
                    onClick={() => history.push("/my-account")}
                  >
                    My Account
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    onClick={() => firebaseApp.auth().signOut()}
                    eventKey="sixth"
                  >
                    Log Out
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
          </Tab.Container>
          <div className="credit">Made with ❤ by Pisoth Yi</div>
        </div>
      )}
      {showSideBar ? <SideBarMenu /> : <></>}
    </div>
  );
};

export default TabGroup;
