import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Skills from './components/skills/skills';
import headerData from './components/header/headerData';
import Clients from './components/clients/clients';
import Testimonials from  './components/testimonials/testimonials';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
	    <Header headerData={headerData}/>
        <About />
        <Skills />
        <Testimonials />
        <Clients />
        <Footer />
      </div>
    );
  }
}
export default App;
