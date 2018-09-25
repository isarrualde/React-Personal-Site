import React, { Component } from 'react';
 
class Footer extends Component {
  render() {
    return (
      //<!-- Footer -->
    <footer>
    <div className="container">
      <div className="units-row">
          <div className="unit-50">
            <p>Farouk 2018</p>
          </div>
          <div className="unit-50">
          <ul className="social list-flat right">
            <li><a rel="noopener noreferrer" target="_blank"  href="mailto:isarrualde@gmail.com"><i className="fas fa-at"></i></a></li>
            <li><a rel="noopener noreferrer" target="_blank"  href="http://twitter.com/isarrualde"><i className="fab fa-twitter"></i></a></li>
            <li><a rel="noopener noreferrer" target="_blank"  href="http://behance.com/isarrualde"><i className="fab fa-behance"></i></a></li>
            <li><a rel="noopener noreferrer" target="_blank"  href="https://github.com/isarrualde"><i className="fab fa-github"></i></a></li>
          </ul>
          </div>
      </div>
    </div>
  </footer>

    );
  }
}
 
export default Footer;

