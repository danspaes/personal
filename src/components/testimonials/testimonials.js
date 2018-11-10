import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
	{/* Testimonials Section
   ================================================== */}
<section id="testimonials">
  <div className="text-container">
    <div className="row">
      <div className="two columns header-col">
        <h1><span>Want to hear from some clients? Here are what some said. . .</span></h1>
      </div>
      <div className="ten columns flex-container">
        <div className="flexslider">
          <ul className="slides">
            <li>
              <blockquote>
                <p>Daniel is the professional that every good company should have. Excellent analytical and technical capacity, great posture as leader. Emphasize your ability to solve complex problems quickly and correctly.
                </p>
                <cite>Accenture</cite>
              </blockquote>
            </li> {/* slide ends */}
            <li>
              <blockquote>
                <p>Daniel was a great developer. Always attentive to the details of each project and always ready to assist your co-workers.
                </p>
                <cite>Icatu</cite>
              </blockquote>
            </li> {/* slide ends */}
            <li>
              <blockquote>
                <p>Daniel is a professional with technical qualification and above-average commitment.
                </p>
                <cite>Oi Telecom</cite>
              </blockquote>
            </li> {/* slide ends */}
          </ul>
        </div> {/* div.flexslider ends */}
      </div> {/* div.flex-container ends */}
    </div> {/* row ends */}
  </div>  {/* text-container ends */}
</section> {/* Testimonials Section End*/}

      </React.Fragment>
    );
  }
}
