import React from "react";
import "./SideBarMenu.css";
import { useHistory } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import { firebaseApp } from "../../firebase/firebaseApp";
const SideBarMenu = () => {
  const history = useHistory();
  const sideMenu = [
    {
      name: "Dashboard",
      dir: "/home",
    },
    {
      name: "Request Permit",
      dir: "/request-permit",
    },
    {
      name: "QR & Locations",
      dir: "/qr-locations",
    },
    {
      name: "Crypto Wallet",
      dir: "/crypto-wallet",
    },
    {
      name: "My Account",
      dir: "/my-account",
    },
  ];
  return (
    <div className="side-bar-container">
      <Nav className="side-bar-item-list">
        {sideMenu.map((item) => (
          <Nav.Link
            onClick={() => history.push(item.dir)}
            className="side-bar-item"
          >
            {item.name}
          </Nav.Link>
        ))}
      </Nav>
      <Button
        variant="outline-light"
        className="log-out-button"
        onClick={() => firebaseApp.auth().signOut()}
      >
        Log Out
      </Button>
    </div>
  );
};

export default SideBarMenu;
