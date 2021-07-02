import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import "./LocationLogsTab.css";
import { db } from "../../firebase/firebaseApp";
import { useMediaQuery } from "react-responsive";
const LocationLogsTab = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [locationLogs, setLocationLogs] = useState([]);
  useEffect(() => {
    db.collection("users")
      .doc("hyE5U786nBoiR6EZenhA")
      .collection("previousLocations")
      .orderBy("timestamp", "desc")
      //.where("timestamp", ">", new Date(start["_d"] / 1000).getTime())
      //.where("timestamp", "<", new Date(end["_d"] / 1000).getTime())
      .onSnapshot((snapshot) => {
        setLocationLogs(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  const convertDateToString = (inputDate) => {
    let stringDate = new Date(inputDate * 1000).toLocaleString("en-US", {
      weekday: "short", // long, short, narrow
      day: "numeric", // numeric, 2-digit
      year: "numeric", // numeric, 2-digit
      month: "long", // numeric, 2-digit, long, short, narrow
      hour: "numeric", // numeric, 2-digit
      minute: "numeric", // numeric, 2-digit
      second: "numeric", // numeric, 2-digit
    });
    return stringDate;
  };

  return (
    <div>
      {isMobile ? (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Location Name</th>
              <th>Timestamp</th>
              <th>View in GMap</th>
            </tr>
          </thead>
          <tbody>
            {locationLogs.length !== 0 ? (
              locationLogs.map((locationLog) => (
                <tr key={locationLog.id}>
                  <td>{locationLog.data.id}</td>
                  <td>{locationLog.data.locationName}</td>
                  <td>{convertDateToString(locationLog.data.timestamp)}</td>
                  <td>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${locationLog.data.position["_lat"]},${locationLog.data.position["_long"]}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="primary" key={locationLog.id}>
                        View
                      </Button>
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </Table>
      ) : (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Location Name</th>
              <th>Lat</th>
              <th>Long</th>
              <th>Timestamp</th>
              <th>View in GMap</th>
            </tr>
          </thead>
          <tbody>
            {locationLogs.length !== 0 ? (
              locationLogs.map((locationLog) => (
                <tr key={locationLog.id}>
                  <td>{locationLog.data.id}</td>
                  <td>{locationLog.data.locationName}</td>
                  <td>{locationLog.data.position.lat}</td>
                  <td>{locationLog.data.position.lng}</td>
                  <td>{convertDateToString(locationLog.data.timestamp)}</td>
                  <td>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${locationLog.data.position["_lat"]},${locationLog.data.position["_long"]}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="primary" key={locationLog.id}>
                        View
                      </Button>
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default LocationLogsTab;
