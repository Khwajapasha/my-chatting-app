import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const GridVariableWidthContent = () => {
  return (
    <div className="mt-4">
      <br />
      <h5>
        Set the column value (for any breakpoint size) to "auto" to size columns
        based on the natural width of their content.
      </h5>
      <br />
      <Container>
        <Row
          className="justify-content-md-center"
          style={{ backgroundColor: "lightblue" }}
        >
          <Col xs lg="2">
            1 of 3
          </Col>
          <Col md="auto" style={{ backgroundColor: "yellow" }}>
            Variable width content{" "}
          </Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col>1 of 3</Col>
          <Col md="auto" style={{ backgroundColor: "yellow" }}>
            Variable width content
          </Col>
          <Col xs lg="2">
            3 of 3
          </Col>
        </Row>
      </Container>
    </div>
  );
};
