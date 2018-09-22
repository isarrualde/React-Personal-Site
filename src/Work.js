import React, { Component } from 'react';
 
class Work extends Component {
  render() {
    return (
      //<!-- Work Experience -->
    <div className="work section second" >
      <div className="container">
        <h1>Work<br />Experiences</h1>
        <ul className="work-list">
          <li>2017-Present</li>
          <li><a href="">WeTech SA</a></li>
          <li>FrontEnd Dev</li>
        </ul>
        <ul className="work-list">
          <li>2012-2016</li>
          <li><a href="https://www.linkedin.com/company/avanade/">Avanade Corp</a></li>
          <li>UI Designer-FE</li>
        </ul>
        <ul className="work-list">
          <li>2014-2016</li>
          <li><a href="http://www.paginar.com/">Paginar.net</a></li>
          <li>FrontEnd Dev</li>
        </ul>
        <div id="achievements"> </div>
      </div>
    </div>

    );
  }
}
 
export default Work;

