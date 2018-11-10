import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Skills from './components/skills/skills';
import headerData from './components/header/headerData';
import Clients from './components/clients/clients';
import Testimonials from  './components/testimonials/testimonials';
import Footer from './components/footer/footer';
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Helmet>
          <title>Daniel Paes</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
      </Helmet>
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
