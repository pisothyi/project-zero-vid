import React from "react";
import "./MyAccountComponent.css";
import TopBar from "../TopBar/TopBar";
import { Tabs, Tab } from "react-bootstrap";
import SettingsComponent from "../SettingsComponent/SettingsComponent";
import FamilyMembers from "../FamilyMembers/FamilyMembers";
import MyAccountOverviewTab from "../MyAccountOverviewTab/MyAccountOverviewTab";
import { useMediaQuery } from "react-responsive";
const MyAccountComponent = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div>
      {isMobile ? <></> : <TopBar />}
      <h1 className="title">My Account</h1>
      <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
        <Tab eventKey="overview" title="Overview">
          <div className="tab-container">
            <MyAccountOverviewTab />
          </div>
        </Tab>
        <Tab eventKey="my-info" title="My Info">
          <div className="tab-container">
            <SettingsComponent isMobile={isMobile} />
          </div>
        </Tab>
        <Tab eventKey="family-members" title="Family Members">
          <div className="tab-container">
            <FamilyMembers />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MyAccountComponent;
