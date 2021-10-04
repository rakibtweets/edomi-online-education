import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Courses from '../Courses/Courses';

const Main = () => {
  return (
    <div className="main-container my-3">
      <Banner />
      <Categories />
      <Courses />
    </div>
  );
};

export default Main;
