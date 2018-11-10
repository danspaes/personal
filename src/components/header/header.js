import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let headerData = this.props.headerData;
    return (
      <React.Fragment>
{/* Header
   ================================================== */}
<header id="home">
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    <ul id="nav" className="nav">
      <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
      <li><a className="smoothscroll" href="#about">About</a></li>
      <li><a className="smoothscroll" href="#skills">Skills</a></li>
      <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
      <li><a className="smoothscroll" href="#clients">Clients</a></li>
    </ul> {/* end #nav */}
  </nav> {/* end #nav-wrap */}
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I am {headerData.name}.</h1>
      <h3>I'm a Montrealer based {headerData.role} consultant. I help my clients to understand their customers based on their data,
	  have insights on their data. Building together a solid brand.  Keep <a className="smoothscroll" href="#about">
          scrolling</a> to know a little more about me.</h3>
      <hr />
      <ul className="social">
        <li><a href="https://www.facebook.com/daniel.paes.399" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" /></a></li>
        <li><a href="https://twitter.com/@danspaes" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a></li>
        <li><a href="https://github.com/danspaes?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" /></a></li>
        <li><a href="https://medium.com/@danspaes" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium" /></a></li>
        <li><a href="https://www.linkedin.com/in/daniel-paes-a0a15910/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a></li>
        <li><a href="https://www.instagram.com/danspaes/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a></li>
        <li><a href="https://stackoverflow.com/users/10571995/daniel-paes?tab=profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-stack-overflow" /></a></li>
        <li><a href="skype:danspaes?call"><i className="fab fa-skype" /></a></li>
      </ul>
    </div>
  </div>
</header> {/* Header End */}
      </React.Fragment>
    );
  }
}
