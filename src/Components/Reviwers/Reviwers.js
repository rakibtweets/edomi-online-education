import React, { useEffect, useState } from 'react';
import Carousel from 'react-grid-carousel';
import Reviewer from '../Reviewer/Reviewer';
import './Reviewers.css';

const Reviwers = () => {
  const [reviewers, setReviewers] = useState([]);
  useEffect(() => {
    fetch('./person.json')
      .then((res) => res.json())
      .then((data) => setReviewers(data));
  }, []);
  return (
    <div className="reviewers-container">
      <h3 className="text-center fw-bold">
        Students <span className="text-info">Reviews</span>
      </h3>
      <p className="text-center mb-5">
        We have millions of student who reviews our courses
      </p>
      {/* carousel start */}
      <div className="single-reviewer container">
        <Carousel cols={3} rows={1} gap={10} loop>
          {reviewers.map((reviewer) => (
            <Carousel.Item className="px-2">
              {' '}
              <Reviewer key={reviewer.id} reviewer={reviewer} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* carousel end */}
    </div>
  );
};

export default Reviwers;
