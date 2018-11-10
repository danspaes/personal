import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
{/* About Section
   ================================================== */}
<section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src="images/avatar.jpg" alt />
    </div>
    <div className="nine columns main-col">
      <h2>About Me</h2>
      <p> 
	Experienced Business Intelligence professional with more than 10 years of experience mainly on consulting compagnies. I worked on all implementation phases, from conception to development and its implementation.
	Always committed to the quality of my work and focused on my self improvement, I have been working on big data projects as data enginneer with devops knowledge,
	and also on web development as a freelancer.

      </p>
      <div className="row">
        <div className="columns contact-details">
          <h2>Let's talk, I am always up for a coffee.</h2>
          <p className="address">
            <span><i className="fa fa-phone /"></i> +1 (514) 572-8119</span><br />
            <span><i className="fa fa-mail-foward /"></i> danspaes@gmail.com</span>
          </p>
        </div>
        <div className="columns download">
          <p>
            <a href="assets/CV-Daniel_Paes.pdf" className="button" download><i className="fa fa-download" />Download Resume</a>
          </p>
        </div>
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
</section> {/* About Section End*/}

      </React.Fragment>
    );
  }
}
