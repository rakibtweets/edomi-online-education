import React from 'react';
import { Card } from 'react-bootstrap';

const Trainer = (props) => {
  const { name, job, image } = props.trainer;
  return (
    <div className="trainer col-md-4">
      <div className="">
        <Card className="p-1">
          <img className="img-fluid trainer-img" src={image} alt="" />
          <Card.Body>
            <h5 className="card-title text-center py-1">{name}</h5>
            <Card.Text className="text-center">
              <p>{job}</p>
              <p>
                {' '}
                <i className="fas fa-briefcase pe-2"></i>5yrs experience
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Trainer;
