import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('./courses.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="all-courses container">
      <h3 className="text-primary py-3 text-center fw-bold">
        All Edomi courses
      </h3>
      <div className="row g-3">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
