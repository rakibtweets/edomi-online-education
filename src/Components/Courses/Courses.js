import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('./courses.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="courses mt-5 pt-5 text-center">
      <h3 className="text-secondary fw-bold">
        Explore Featured <span className="text-primary">Courses</span>
      </h3>
      <p className="text-secondary w-50 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <div className="all-courses container mx-auto row">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
