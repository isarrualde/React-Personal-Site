import React, { Component } from 'react';
const ArchorSpace = {
  paddingTop: "40px",
  marginTop: "-40px",
}

 
class Work extends Component {
  render() {
    return (
      //<!-- Work Experience -->
    <div className="work section second" id="experiences" style={ArchorSpace}>
      <div className="container">
        <h1>Work<br />Experiences</h1>
        <ul className="work-list">
          <li>2017-Present</li>
          <li><a href="">WeTech SA</a></li>
          <li>FrontEnd Dev</li>
          <li>
            Created and maintained the front-end standards document and oversaw production of Javascript, HTML & CSS.<br /> 
            Maintained brand standards under company guidelines.<br />
            Participated in projects in all stages of the product life cycle.<br />
            Tested front-end code in multiple browsers to ensure cross-browser compatibility. <br />

          </li>
        </ul>
        <ul className="work-list">
          <li>2011-2016</li>
          <li><a href="https://www.linkedin.com/company/avanade/">Avanade Corp</a></li>
          <li>UI Designer-FE</li>
          <li>
            Conceive user-centered solutions, deliver compelling visual and interaction designs, keep deliverables engaging and on-brand, and support multiple projects. <br />Design visual layouts and graphics for web sites, often including Style Guides.
          </li>
        </ul>
        <ul className="work-list">
          <li>2008-2010</li>
          <li><a href="http://www.paginar.com/">Paginar.net</a></li>
          <li>FrontEnd Dev</li>
          <li>Stays up to date with modern CSS techniques and emerging web standards, and strives to achieve clean, semantic, accessible markup.</li>
        </ul>
      </div>
    </div>

    );
  }
}
 
export default Work;

