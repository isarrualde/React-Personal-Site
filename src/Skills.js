import React, { Component } from 'react';
const ArchorSpace = {
  paddingTop: "40px",
  marginTop: "-40px",
}

 
class Skills extends Component {
  render() {
    return (
      //<!-- Technical Skills -->
      <div className="skills section second" id="skills" style={ArchorSpace}>
        <div className="container">
          <h1>Technical<br />Skills</h1>
          <ul className="skill-list list-flat">
            <li>Web Technology</li>
            <li>HTML / CSS / SASS / React.JS / Javascript</li>
          </ul>
          <ul className="skill-list list-flat">
            <li>Design</li>
            <li>User Experience Techniques / Visual Design</li>
          </ul>
          <ul className="skill-list list-flat">
            <li>Framework</li>
            <li>Bootstrap / Sharepoint Designer / InVision App / Agile Methodologies / Git </li>
          </ul>
        </div>
      </div>

    );
  }
}
 
export default Skills;

