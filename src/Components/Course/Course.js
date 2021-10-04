import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
  console.log(props.course);
  const { CourseName, category, image, instructor, enrolled, price } =
    props.course;
  return (
    <div className="single-course col-md-4">
      <Card className="p-1">
        <img className=" img-fluid p-3" src={image} alt="" />
        <Card.Body>
          <h5 className="card-title small py-3">{CourseName}</h5>
          <Card.Text>
            <div className=" d-flex justify-content-between">
              <p className="category">{category}</p>
              <p>
                <span className="text-secondary fw-bold">{enrolled}</span>{' '}
                Enrolled
              </p>
            </div>
          </Card.Text>
          <div className=" d-flex justify-content-between">
            <p className="text-start fw-bold">{instructor}</p>
            <p className="text-start fw-bold">
              $ <span className="text-info ">{price}</span>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
