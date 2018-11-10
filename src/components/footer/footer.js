import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
	{/* footer  ================================================== */}
<footer>
  <div className="row">
    <div className="twelve columns">
      <ul className="social-links">
        <li><a href="https://www.facebook.com/daniel.paes.399" target="_blank"><i className="fab fa-facebook" /></a></li>
        <li><a href="https://twitter.com/@danspaes" target="_blank"><i className="fab fa-twitter" /></a></li>
        <li><a href="https://github.com/danspaes?tab=repositories" target="_blank"><i className="fab fa-github" /></a></li>
        <li><a href="https://medium.com/@danspaes" target="_blank"><i className="fab fa-medium" /></a></li>
        <li><a href="https://www.linkedin.com/in/daniel-paes-a0a15910/" target="_blank"><i className="fab fa-linkedin" /></a></li>
        <li><a href="https://www.instagram.com/danspaes/" target="_blank"><i className="fab fa-instagram" /></a></li>
	    <li><a href="https://stackoverflow.com/users/10571995/daniel-paes?tab=profile/" target="_blank"><i className="fab fa-stack-overflow" /></a></li>
        <li><a href="skype:danspaes?call"><i className="fab fa-skype" /></a></li>
      </ul>
      <ul classname="copyright">            
         <li> Copyright 2018 Daniel Paes</li>
      </ul>
    </div>
    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
  </div>
</footer> {/* Footer End*/}
      </React.Fragment>
    );
  }
}
