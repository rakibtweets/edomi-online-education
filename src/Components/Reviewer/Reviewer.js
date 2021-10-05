import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import './Reviewer.css';

const Reviewer = (props) => {
  const { name, reviews, image, rating } = props.reviewer;
  return (
    <div className="reviewer p-2">
      <Card className="p-2 reviewer-card ">
        <img className="reviewer-img" src={image} alt="" />
        <Card.Body>
          <Card.Title className="fw-bold text-center pb-2">{name}</Card.Title>
          <Card.Text className="text-center">
            <Rating
              initialRating={rating}
              emptySymbol="far fa-star text-warning fa-1x"
              fullSymbol="fa fa-star text-warning fa-1x"
              readonly
            />
            <p className="py-2">{reviews}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Reviewer;
