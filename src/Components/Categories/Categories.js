import React from 'react';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories-container text-center container mx-auto mt-4 row gx-3">
      <h2 className="my-4 text-success fw-bold">Course Categories</h2>
      <div className=" categories  col-md-4">
        <div className="text-center card p-3">
          <div className="icon">
            <i className="fas fa-code fa-3x"></i>
          </div>
          <div className="title text-center">
            <h4>Web Development</h4>
            <p className="text-danger">28 Lectures</p>
          </div>
        </div>
      </div>
      <div className=" categories col-md-4">
        <div className="text-center card p-3">
          <div className="icon">
            <i className="far fa-window-restore fa-3x"></i>
          </div>
          <div className="title">
            <h4>Design</h4>
            <p className="text-danger">35 Lectures</p>
          </div>
        </div>
      </div>
      <div className=" categories col-md-4">
        <div className=" text-center card p-3">
          <div className="icon">
            <i className="fas fa-money-check-alt fa-3x"></i>
          </div>
          <div className="title">
            <h4>Banking</h4>
            <p className="text-danger">22 Lectures</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
