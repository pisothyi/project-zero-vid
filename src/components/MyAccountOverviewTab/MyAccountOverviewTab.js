import React, { useEffect, useState } from "react";
import "./MyAccountOverviewTab.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "../../../node_modules/bootstrap-daterangepicker/daterangepicker.css";
import { InputGroup, Button, FormControl, Carousel } from "react-bootstrap";
import {
  CalendarDateFill,
  GeoAltFill,
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "react-bootstrap-icons";
import { db } from "../../firebase/firebaseApp";

const MyAccountOverviewTab = () => {
  const [prevLocations, setPrevLocations] = useState([]);
  const [familyMembers, setFamilyMembers] = useState([]);
  useEffect(() => {
    db.collection("users")
      .doc("hyE5U786nBoiR6EZenhA")
      .collection("previousLocations")
      .orderBy("timestamp", "desc")
      //.where("timestamp", ">", new Date(start["_d"] / 1000).getTime())
      //.where("timestamp", "<", new Date(end["_d"] / 1000).getTime())
      .onSnapshot((snapshot) => {
        setPrevLocations(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    db.collection("users")
      .doc("hyE5U786nBoiR6EZenhA")
      .collection("familyMembers")
      .onSnapshot((snapshot) => {
        setFamilyMembers(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  const createItemDateString = (inputDate) => {
    return new Date(inputDate * 1000).toLocaleString("en-US", {
      day: "numeric", // numeric, 2-digit
      month: "short", // numeric, 2-digit, long, short, narrow
      year: "numeric", // numeric, 2-digit
    });
  };
  return (
    <div className="overview-tab-container">
      <div className="health-related-container">
        <div className="health-related-card">
          <div className="health-related-text-container">
            <div className="health-related-icon health-icon"></div>
            <div className="health-related-text">Health: </div>
          </div>
          <div className="health-related-data">Normal</div>
        </div>

        <div className="health-related-card">
          <div className="health-related-text-container">
            <div className="health-related-icon vaccinated-icon"></div>
            <div className="health-related-text">Vaccinated: </div>
          </div>
          <div className="health-related-data">Yes</div>
        </div>

        <div className="health-related-card">
          <div className="health-related-text-container">
            <div className="health-related-icon qr-icon"></div>
            <div className="health-related-text">QR Scanned: </div>
          </div>
          <div className="health-related-data">5</div>
        </div>
      </div>
      <div className="overview-tab-second-container">
        <div className="overview-tab-location-list-container">
          <div>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Location Name"
                aria-label="country"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <DateRangePicker
                  initialSettings={{
                    startDate: "05/01/2021",
                    endDate: "05/06/2021",
                  }}
                >
                  <Button
                    variant="primary"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <CalendarDateFill />
                  </Button>
                </DateRangePicker>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <div className="overview-tab-location-list">
            {prevLocations.map((location) => (
              <div
                className="overview-tab-location-list-item"
                key={location.id}
              >
                <div className="d-flex flex-direction-row align-items-center">
                  <GeoAltFill />
                  <div className="location-name-item">
                    {location.data.locationName}
                  </div>
                </div>

                <div className="location-status-item">Status: Normal</div>
              </div>
            ))}
          </div>
        </div>
        <div className="overview-tab-family-health-container">
          <Carousel
            className="family-health-carousel"
            nextIcon={
              <ArrowRightCircleFill className="carousel-control-icon" />
            }
            prevIcon={<ArrowLeftCircleFill className="carousel-control-icon" />}
          >
            {familyMembers.map(({ id, data }) => (
              <Carousel.Item key={id}>
                <img alt="" className="family-member-profile" />
                <div className="family-health-name">{data.name}</div>
                <div className="family-health-status">Health: Normal</div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MyAccountOverviewTab;
