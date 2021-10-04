import React from 'react';
import img from '../../images/banner-1.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-section text-center mb-3">
      <img className="img-fluid" src={img} alt="" />
      <div className="banner-info">
        <h3 className="display-4 fw-bold">Welcome to Edomi</h3>
        <p className="fw-bold text-secondary">
          Edomi is world fastest growing online teaching plate form, We provide
          Largest Selection of Courses
        </p>
        <h3 className="fw-bold">The Best Trainers and Build Your Future</h3>
        <div className="search-area input-group w-25 mx-auto p-3">
          <input
            className="form-control mx-auto p-2"
            type="text"
            placeholder="Search Courses"
          />
          <button className="btn btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
