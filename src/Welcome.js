import React, { Component } from 'react';
import ava from './theme/img/ava.jpg'
 
class Welcome extends Component {
  render() {
    return (
      <div className="intro section" id="about">
        <div className="container">
          <p>Hi, I’m Matias  a.k.a.</p>
          <div className="units-row units-split wrap">
            <div className="unit-20">
              <img src={ava} alt="Avatar" />
            </div>
            <div className="unit-80">
              <h1>I live in<br /><span id="typed"></span></h1>
            </div>
            <p>
              I am immensely passionate about creating innovative digital experiences, motivated to combine the art of design with the art of programming. My responsibilities include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application.
            </p>
            
            <ul className="skill-list list-flat"> 
              <li><i className="fas fa-bolt"></i> Develop new user-facing features</li>
              <li><i className="fas fa-bolt"></i> Build reusable code and libraries for future use</li>
              <li><i className="fas fa-bolt"></i> Ensure the technical feasibility of UI/UX designs</li>
              <li><i className="fas fa-bolt"></i> Optimize application for maximum speed and scalability</li>
              <li><i className="fas fa-bolt"></i> Assure that all user input is validated before submitting to back-end</li>
              <li><i className="fas fa-bolt"></i> Collaborate with other team members and stakeholders</li>
            </ul>
            
          </div>
        </div>
      </div>

    );
  }
}
 
export default Welcome;

