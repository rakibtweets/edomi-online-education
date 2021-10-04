import React from 'react';
import Trainers from '../../Trainers/Trainers';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Courses from '../Courses/Courses';

const Main = () => {
  return (
    <div className="main-container my-3">
      <Banner />
      <Categories />
      <Courses />
      <Trainers />
    </div>
  );
};

export default Main;
