import React from 'react';
import { Card } from 'react-bootstrap';
import './Trainers.css';

const Trainers = () => {
  return (
    <div className="trainer-container container">
      <h2 className="text-center text-success fw-bold py-5">
        Our Best Trainer
      </h2>
      <div className="row trainer-card g-4">
        <div className="col-md-4">
          <Card className="p-1">
            <img
              className="img-fluid trainer-img"
              src="https://spruko.com/demo/edomi/Edomi/assets/images/trainers/4.jpg"
              alt=""
            />
            <Card.Body>
              <h5 className="card-title text-center py-1">Joel Anderson</h5>
              <Card.Text className="text-center">
                <p>React Trainer</p>
                <p>
                  {' '}
                  <i class="fas fa-briefcase pe-2"></i>5yrs exp
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="p-1">
            <img
              className="img-fluid trainer-img"
              src="https://spruko.com/demo/edomi/Edomi/assets/images/trainers/6.jpg"
              alt=""
            />
            <Card.Body>
              <h5 className="card-title text-center py-1">Criss Morise</h5>
              <Card.Text className="text-center">
                <p>Javascript Trainer</p>
                <p>
                  {' '}
                  <i class="fas fa-briefcase pe-2"></i>10yrs exp
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="p-1">
            <img
              className="img-fluid trainer-img"
              src="https://spruko.com/demo/edomi/Edomi/assets/images/trainers/3.jpg"
              alt=""
            />
            <Card.Body>
              <h5 className="card-title text-center py-1">Glenda Long</h5>
              <Card.Text className="text-center">
                <p>Web Design Trainer</p>
                <p>
                  {' '}
                  <i class="fas fa-briefcase pe-2"></i>12yrs exp
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
