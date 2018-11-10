import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Skills from './components/skills/skills';
import resumeData from './components/skills/resumeData';
import Clients from './components/clients/clients';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
	<Header resumeData={resumeData}/>
        <About />
        <Testimonials />
        <Skills />
        <Clients />
        <Footer />
      </div>
    );
  }
}
export default App;
