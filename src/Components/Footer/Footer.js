import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container container-fluid text-secondary mt-5 p-5">
      <div className="footer-info row text-white">
        <div className="col-md-6">
          <h4 className="text-warning fw-bold">Edomi Online Education</h4>
          <h6>Do You Need Help With Anything?</h6>
          <p className="text-secondary">
            Receive updates, tutorials, discounts sent straignt in your inbox
            every month
          </p>
          <div className="search-area input-group p-3">
            <input
              className="form-control w-50 p-3"
              type="text"
              placeholder="Email Address"
            />
            <button className="btn btn btn-primary">Subscribe</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col md-6">
              <h4 className="text-white">Layout</h4>
              <div className="links">
                <Link className="footer-link text-secondary" to="/home">
                  Home
                </Link>
                <Link className="footer-link text-secondary" to="/about">
                  About
                </Link>
                <Link className="footer-link text-secondary" to="/courses">
                  Courses
                </Link>
                <Link className="footer-link text-secondary" to="/reviews">
                  Reviews
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="all-categories">
                <h4>All Categories</h4>
                <div className="course-link">
                  <ul>
                    <li className="footer-link text-secondary">
                      Web development
                    </li>
                    <li className="footer-link text-secondary">Design</li>
                    <li className="footer-link text-secondary">Banking</li>
                    <li className="footer-link text-secondary">Programming</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>&copy; 2021 Edomi. Designd By RakibHasan.</p>
      </div>
    </div>
  );
};

export default Footer;
