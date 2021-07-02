import React, { useState, useEffect } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "../../../node_modules/bootstrap-daterangepicker/daterangepicker.css";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import GoogleMapPrevLocation from "../GoogleMapPrevLocation/GoogleMapPrevLocation";
import { CalendarDateFill } from "react-bootstrap-icons";
import "./PreviousLocationsTab.css";
import { db } from "../../firebase/firebaseApp";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import { useMediaQuery } from "react-responsive";
const PreviousLocationsTab = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [sortedResult, setSortedResult] = useState([]);
  const [prevLocations, setPrevLocations] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemClickedEvent, setItemClickedEvent] = useState(null);
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

  const createItemDateString = (inputDate) => {
    return new Date(inputDate * 1000).toLocaleString("en-US", {
      day: "numeric", // numeric, 2-digit
      month: "short", // numeric, 2-digit, long, short, narrow
      year: "numeric", // numeric, 2-digit
    });
  };

  const handleOnClickItem = (event, location) => {
    setSelectedItem(location);
    setItemClickedEvent(event);
    //console.log(location);
  };

  const handleCancel = () => {
    setSortedResult([]);
  };
  const handleApply = (event, picker) => {
    //console.log(picker);
    let startTime = new Date(picker.startDate["_d"] / 1000).getTime();
    let endTime = new Date(picker.endDate["_d"] / 1000).getTime();
    let sorted = [];
    for (let index in prevLocations) {
      if (
        prevLocations[index].data.timestamp >= startTime &&
        prevLocations[index].data.timestamp <= endTime
      ) {
        sorted.push(prevLocations[index]);
      }
    }
    setSortedResult(sorted);
  };

  return (
    <div className="previous-location-tab-container">
      <div className="location-search-bar-container">
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
                onApply={handleApply}
                onCancel={handleCancel}
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
        {sortedResult.length !== 0 && !isMobile ? (
          <div className="prev-location-search-result-container">
            <div className="prev-location-search-items-container">
              {sortedResult.map((result) => (
                <div
                  className="prev-location-search-item"
                  key={result.id}
                  onClick={(event) => handleOnClickItem(event, result)}
                >
                  <div className="item-location-name-container">
                    {result.data.locationName}
                  </div>
                  <div className="item-timestamp-container">
                    {createItemDateString(result.data.timestamp)}
                  </div>
                  <ArrowRightCircleFill />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <GoogleMapPrevLocation
        locationsData={sortedResult}
        selectedItem={selectedItem}
        itemClickedEvent={itemClickedEvent}
      />
    </div>
  );
};

export default PreviousLocationsTab;
