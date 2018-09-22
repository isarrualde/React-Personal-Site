import React, { Component } from 'react';
import './styles/main.css';
import './theme/css/kube.min.css';
import './theme/scss/custom.css';

import MainNav from './MainNav';
import Welcome from './Welcome';
import Work from './Work';
import Awards from './Awards';
import Skills from './Skills';
 
class App extends Component {
  render() {
    return (
      <div> 
        <MainNav />
        <Welcome />   
        <Work />   
        <Awards />   
        <Skills />   
      </div>
    );
  }
}
 
export default App;