import { Navbar as NavbarBs } from "react-bootstrap";
import { Container, Nav } from "react-bootstrap";
import type * as CSS from "csstype";

const navbar: CSS.Properties = {
  fontFamily: "Sono, sans-serif",
  fontWeight: "bold",
  position: "fixed",
  zIndex: "100",
  width: "100%",
};

export function Navbar() {
  return (
    <NavbarBs style={navbar} className="bg-white shadow-lg">
      <Container>
        <Nav className="d-flex justify-content-between w-100">
          <a href="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </a>
          <a href="/store" style={{ textDecoration: "none", color: "black" }}>
            Store
          </a>
          <a href="/about" style={{ textDecoration: "none", color: "black" }}>
            About
          </a>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
