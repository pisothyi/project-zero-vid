import React, { useState, useEffect } from "react";
import "./FamilyMembers.css";
import { Card, Button } from "react-bootstrap";
import { db } from "../../firebase/firebaseApp";
import defaultUserProfile from "../../assets/default_user.jpg";
const FamilyMembers = () => {
  const [familyMembers, setFamilyMembers] = useState([]);
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

  return (
    <div>
      <Button variant="primary">Add Member</Button>
      <div className="family-card-container">
        {familyMembers.map(({ id, data }) => (
          <Card className="family-member-card" key={id}>
            <Card.Img variant="top" src={defaultUserProfile} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>Health: Normal</Card.Text>
              <Button variant="primary">More Info</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FamilyMembers;
