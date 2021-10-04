import React from 'react';

const About = () => {
  return (
    <div className="about-container container">
      <h2 className="text-center fw-bold p-3 text-success">About Edomi</h2>
      <p className="text-secondary w-75 mx-auto text-center pb-5">
        Edomi is online based educational platform that teaches millions of
        stuent online in various topic, Through online classes and Courses
      </p>
      <div className="about-edomi-text row">
        <div className="col-md-6">
          <p>
            There are many variations of Courses are available in Edomi online
            eduction, but the majority of our Courses area bases on online base.
            We have some well trained certified traniner that trains you and
            make you to work on professional world
          </p>
          <p>
            There are many variations of Courses are available in Edomi online
            eduction, but the majority of our Courses area bases on online base.
            We have some well trained certified traniner that trains you and
            make you to work on professional world
          </p>
        </div>
        <div className="col-md-6">
          <p>
            There are many variations of Courses are available in Edomi online
            eduction, but the majority of our Courses area bases on online base.
            We have some well trained certified traniner that trains you and
            make you to work on professional world
          </p>
          <p>
            There are many variations of Courses are available in Edomi online
            eduction, but the majority of our Courses area bases on online base.
            We have some well trained certified traniner that trains you and
            make you to work on professional world
          </p>
        </div>
      </div>
      <div className="edomi-promises pt-5 text-center">
        <h4 className="fw-bold">
          Why <span className="text-success ">Edomi Online Education?</span>{' '}
        </h4>
        <p className="w-50 mx-auto text-secondary">
          Edomi online Education promises you Quality Courses, Better Experice,
          help you to work professionaly
        </p>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card text-center p-3">
              <div className="icon">
                <i class="fas fa-user-check fa-3x text-success"></i>
              </div>
              <h4>Experience</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center p-3">
              <div className="icon">
                <i class="fas fa-user-tie fa-3x text-success"></i>
              </div>
              <h4>Professionality</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center p-3">
              <div className="icon">
                <i class="fas fa-thumbs-up fa-3x text-success"></i>
              </div>
              <h4>Guarantee</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center p-3">
              <div className="icon">
                <i class="fas fa-clipboard fa-3x text-success"></i>
              </div>
              <h4>Quality</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
