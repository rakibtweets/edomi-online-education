import React, { useEffect, useState } from 'react';
import Reviwers from '../Reviwers/Reviwers';
import Trainer from '../Trainer/Trainer';
import './Trainers.css';

const Trainers = () => {
  const [trainers, setTraiers] = useState([]);
  //loading api data
  useEffect(() => {
    fetch('./person.json')
      .then((res) => res.json())
      .then((data) => setTraiers(data));
  }, []);

  return (
    <>
      <div className="trainer-container container">
        <h2 className="text-center text-success fw-bold py-3">
          Our Best Trainer
        </h2>
        <div className="row">
          {/* Mapping through trainers (array) to get singile trainer(object) */}
          {trainers.slice(0, 3).map((trainer) => (
            <Trainer key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
      {/* Review carousel slider */}
      <div className="reviewers mt-5">
        <Reviwers />
      </div>
    </>
  );
};

export default Trainers;
