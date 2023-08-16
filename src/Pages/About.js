import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Components/navbar';

const About = () => {
  return (
    <div>
    <NavBar></NavBar>
    <div className="container">
      <h1 className="mt-5">About Us</h1>
      <p className="lead">We are a passionate team dedicated to help students hone their academic skills</p>
      <div className="row">
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>To help students all over Canada get into their program of choice</p>
        </div>
        <div className="col-md-6">
          <h2>Our Values</h2>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;