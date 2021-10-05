import React from 'react';
import { Card } from 'react-bootstrap';
import './Trainer.css';

const Trainer = (props) => {
  const { name, job, image, bio } = props.trainer;
  return (
    <div className="trainer col-md-4">
      <Card className="p-1 trainer-card">
        <img className="img-fluid trainer-img" src={image} alt="" />
        <Card.Body>
          <Card.Title className="fw-bold text-center">{name}</Card.Title>
          <Card.Text className="text-center">
            <p className="text-secondary">{job}</p>
            <p className="experience rounded-pill">
              {' '}
              <i className="fas fa-briefcase pe-2"></i>5yrs experience
            </p>
            <p className="text-secondary text-center pt-3">{bio}</p>
          </Card.Text>
        </Card.Body>
        <div className="trainer-footer">
          <div className="social-media pb-3">
            <div className="media-icons">
              <i className="fab fa-facebook icons rounded-circle"></i>
              <i className="fab fa-linkedin icons rounded-circle"></i>
              <i className="fab fa-github icons rounded-circle"></i>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Trainer;
