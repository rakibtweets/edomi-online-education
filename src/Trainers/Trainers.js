import React, { useEffect, useState } from 'react';
import Trainer from '../Trainer/Trainer';
import './Trainers.css';

const Trainers = () => {
  const [trainers, setTraiers] = useState([]);
  useEffect(() => {
    fetch('./person.json')
      .then((res) => res.json())
      .then((data) => setTraiers(data));
  }, []);

  return (
    <div className="trainer-container container">
      <h2 className="text-center text-success fw-bold py-5">
        Our Best Trainer
      </h2>
      <div className="row">
        {trainers.map((trainer) => (
          <Trainer key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default Trainers;
