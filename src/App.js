import React, { Component } from 'react';
import './styles/main.css';
import './theme/css/kube.min.css';
import './theme/scss/custom.css';

import MainNav from './MainNav';
import Welcome from './Welcome';
import Work from './Work';
import Awards from './Awards';
import Skills from './Skills';
import Footer from './Footer';
 
class App extends Component {
  render() {
    return (
      <div> 
        <MainNav />
        <Welcome />   
        <Work />   
        <Awards />   
        <Skills />   
        <Footer />   
      </div>
    );
  }
}
 
export default App;