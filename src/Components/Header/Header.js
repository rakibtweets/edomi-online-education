import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container fixed">
      <Navbar>
        <Container>
          <Link className="fw-bold nav-link h3 text-secondary" to="/home">
            Edomi
          </Link>
          <Nav>
            <Link className="menu-items" to="/home">
              Home
            </Link>
            <Link className="menu-items" to="/about">
              About
            </Link>
            <Link className="menu-items" to="/services">
              Services
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
