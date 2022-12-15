import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="warning">
        <nav className="nav-wrapper">
          <div className="container">
            <Link to="/" className="brand-logo">
              Shop Here
            </Link>

            <ul className="right">
              <li>
                <Link to="/Login">Login</Link>
              </li>
             
              <li>
                <Link to="/Products">Products</Link>
              </li>
              <li>
                <Link to="/Cart">My cart 🛒</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Container>
          <Link to="/category">
            <Navbar.Brand href="#" style={{ color: "blue" }}>
              Category
            </Navbar.Brand>
          </Link>
          <Link to="/brand">
            <Navbar.Brand href="#" style={{ color: "blue" }}>
              Brand
            </Navbar.Brand>
          </Link>
          <Link to="/gender">
            <Navbar.Brand href="#" style={{ color: "blue" }}>
              Gender
            </Navbar.Brand>
          </Link>
          <Link to="/gaol">
            <Navbar.Brand href="#" style={{ color: "blue" }}>
              Goal
            </Navbar.Brand>
          </Link>
          <Link to="/sellers">
            <Navbar.Brand href="#" style={{ color: "blue" }}>
              Best sellers
            </Navbar.Brand>
          </Link>
          <Link to="/details">
            <Navbar.Brand href="#" style={{ color: "blue" }}>
              Details
            </Navbar.Brand>
          </Link>
          <Link to="/gifts">
            <Navbar.Brand href="#" style={{ color: "blue" }}>
              Gift Card
            </Navbar.Brand>
          </Link>
          <Link to="/more">
            <Navbar.Brand href="#" style={{ color: "blue" }}>
              Blog,Videos&More
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
