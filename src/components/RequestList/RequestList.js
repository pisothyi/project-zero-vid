import React from "react";
import TopBar from "../TopBar/TopBar";
import "./RequestList.css";
import { Table, Button } from "react-bootstrap";
const RequestList = () => {
  return (
    <div>
      <TopBar />
      <h1 className="title">All Requests</h1>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Category</th>
              <th>Approve</th>
              <th>More Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Medicine</td>
              <td>
                <Button variant="success">Approve</Button>
              </td>
              <td>
                <Button variant="info">More Info</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Work</td>
              <td>
                <Button variant="success">Approve</Button>
              </td>
              <td>
                <Button variant="info">More Info</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Medicine</td>
              <td>
                <Button variant="success">Approve</Button>
              </td>
              <td>
                <Button variant="info">More Info</Button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Work</td>
              <td>
                <Button variant="success">Approve</Button>
              </td>
              <td>
                <Button variant="info">More Info</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RequestList;
