import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./header.css";
import { Link } from '@inertiajs/react';
const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  // Toggles the offcanvas menu
  const handleToggle = () => {
    setIsOffcanvasOpen((prevState) => !prevState);
  };

  // Adds sticky behavior to the header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header-section");
      const isScrolled = window.scrollY >= 120;
      header?.classList.toggle("is-sticky", isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header-section">
      <Container>
        <Navbar expand="lg" className="p-0">
          {/* Logo */}
          <Navbar.Brand>
            <NavLink to="/" className="logo">Jet Setters</NavLink>
          </Navbar.Brand>

          {/* Offcanvas for navigation */}
          <Navbar.Offcanvas
            show={isOffcanvasOpen}
            onHide={() => setIsOffcanvasOpen(false)}
            placement="start"
            className="offcanvas-nav"
          >
            {/* Offcanvas Header */}
            <Offcanvas.Header>
              <h1 className="logo">Jet Setters</h1>
              <span className="close-btn" onClick={handleToggle}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>

            {/* Navigation Links */}
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                <NavLink className="nav-link" to="/">Cruise</NavLink>
                <NavLink className="nav-link" to="/">Flights</NavLink>
                <NavLink className="nav-link" to="/">Packages</NavLink>
                <NavLink className="nav-link" to="/">Rentals</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* Right Section */}
          <div className="ms-md-4 ms-2">
            <NavLink className="primaryBtn modernBtn d-none d-sm-inline-block">
              <Link   href={route('login')}>Login</Link>
            </NavLink>
             <NavLink className="primaryBtn modernBtn d-none d-sm-inline-block">
              <Link   href={route('register')}>Sign Up</Link>
            </NavLink>
            <span className="toggle_btn d-inline-block d-lg-none ms-3" onClick={handleToggle}>
              <i className={isOffcanvasOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
            </span>
          </div>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
