import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  // loading api data
  useEffect(() => {
    fetch('./courses.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="courses pt-5 text-center">
      <h3 className="text-secondary fw-bold">
        Explore Featured <span className="text-primary">Courses</span>
      </h3>
      <p className="text-secondary w-50 mx-auto">
        We have some awesome content in different categories like Desinging, Web
        development,Banking,Others necessary that you would like to learn. You
        can find all in our Edomi Education platform
      </p>
      <div className="all-courses container mx-auto row">
        {courses.slice(0, 3).map((course) => (
          <Course key={course.id} course={course} />
        ))}

        <div className="text-center mt-3">
          <Link className="nav-link view-all text-info mb-3" to="/courses">
            Explore More Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
