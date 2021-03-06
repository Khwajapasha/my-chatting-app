import React from "react";
import { Nav } from "react-bootstrap";
export const NavVerticalAlignment = () => {
  return (
    <div>
      <br />
      <h4>=== Vertically Aligned Nav ===</h4>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </div>
  );
};
