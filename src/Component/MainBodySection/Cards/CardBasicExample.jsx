import React from "react";
import { Card, Button } from "react-bootstrap";
export const CardBasicExample = () => {
  return (
    <div className="mt-2"><br/>
    === Basics example of card also we add Card.Header, Card.Subtitle, Card.Text,Card.Link ===
    <br/>
    <br/>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="Assets/Rose.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
