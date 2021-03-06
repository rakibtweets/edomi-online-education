import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container sticky-top">
      <Navbar>
        <Container>
          <Link className="fw-bold nav-link h3 text-secondary" to="/home">
            <i className="fas fa-laptop-code brand-logo"></i> Edomi
          </Link>
          <Nav>
            <Link className="menu-items" to="/home">
              Home
            </Link>
            <Link className="menu-items" to="/about">
              About
            </Link>
            <Link className="menu-items" to="/courses">
              Courses
            </Link>
            <Link className="menu-items" to="/reviews">
              Reviews
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
