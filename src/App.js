import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./firebase/Auth";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homePage/HomePage";
import "./bootstrap/dist/css/bootstrap.min.css";
import RequestPermitPage from "./pages/requestPermitPage/RequestPermitPage";
import ScanQrPage from "./pages/ScanQrPage/ScanQrPage";
//import RequestListPage from "./pages/requestListPage/RequestListPage";
import FamilyMemberPage from "./pages/familyMemberPage/FamilyMemberPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import MyAccountPage from "./pages/myAccountPage/MyAccountPage";
import CryptoWalletPage from "./pages/CryptoWalletPage/CryptoWalletPage";
import QuickAccessPage from "./pages/QuickAccessPage/QuickAccessPage";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <PrivateRoute
            exact
            path="/family-member"
            component={FamilyMemberPage}
          />
          {/*<PrivateRoute
            exact
            path="/request-list"
            component={RequestListPage}
          />*/}
          <PrivateRoute
            exact
            path="/crypto-wallet"
            component={CryptoWalletPage}
          />
          <PrivateRoute exact path="/qr-locations" component={ScanQrPage} />
          <PrivateRoute exact path="/my-account" component={MyAccountPage} />
          <PrivateRoute exact path="/home" component={HomePage} />
          <PrivateRoute
            exact
            path="/request-permit"
            component={RequestPermitPage}
          />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/sign-up" component={SignUpPage} />
          <Route exact path="/" component={QuickAccessPage} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
