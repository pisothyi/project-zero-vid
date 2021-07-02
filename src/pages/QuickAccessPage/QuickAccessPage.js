import React from "react";
import "./QuickAccessPage.css";
import { Link } from "react-router-dom";
const QuickAccessPage = () => {
  return (
    <div className="quick-access-container">
      <div className="quick-access-logo mb-4"></div>
      <h2 className="mb-4">
        <b>Quick Access</b>
      </h2>
      <div className="quick-access-link-container">
        <ul>
          <li className="mb-2">
            <Link to="/login">Login</Link>
          </li>
          <li className="mb-2">
            <Link to="/home">Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/qr-locations">Scan QR</Link>
          </li>
          <li className="mb-2">
            <Link to="/request-permit">Request Permit</Link>
          </li>
          <li className="mb-2">
            <Link to="/crypto-wallet">Crypto Wallet</Link>
          </li>
          <li className="mb-2">
            <Link to="/my-account">My Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuickAccessPage;
