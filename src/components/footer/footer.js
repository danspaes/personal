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
        <li><a href="https://www.facebook.com/daniel.paes.399"><i className="fa fa-facebook" /></a></li>
        <li><a href="https://twitter.com/@danspaes"><i className="fa fa-twitter" /></a></li>
        <li><a href="https://github.com/danspaes?tab=repositories"><i className="fa fa-github" /></a></li>
        <li><a href="https://www.linkedin.com/in/daniel-paes-a0a15910/"><i className="fa fa-linkedin" /></a></li>
        <li><a href="https://www.instagram.com/danspaes/"><i className="fa fa-instagram" /></a></li>
	<li><a href="https://stackoverflow.com/users/10571995/daniel-paes?tab=profile/"><i className="fa fa-stack-overflow" /></a></li>
        <li><a href="skype:danspaes?call"><i className="fa fa-skype" /></a></li> 
      </ul>
      <ul classname="copyright">            
         <li>.. Copyright 2018 Daniel Paes</li>  
      </ul>
    </div>
    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
  </div>
</footer> {/* Footer End*/}
      </React.Fragment>
    );
  }
}
