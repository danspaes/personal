import React, { Component } from 'react';
export default class Skills extends Component {
  render() {
    return (
      <React.Fragment>
	{/* skills Section
   ================================================== */}
<section id="skills">
  {/* Tools----------------------------------------------- */}
  <div className="row">
    <div className="three columns header-col">
      <h1><span>Tools I like to use: </span></h1>
      </div>

      <div className="row skills-icons">
        <div className="skills-cols">
	 <img src="../images/icons/spark.jpg"></img>
	 <img src="../images/icons/spark-st.jpg"></img>
	 <img src="../images/icons/kafka.jpg"></img>
	 <img src="../images/icons/akka.jpg"></img>
	 <img src="../images/icons/rest.jpg"></img>
	 <img src="../images/icons/python.jpg"></img>
	 <img src="../images/icons/scala.jpg"></img><figcaption>Scala</figcaption>
	 <img src="../images/icons/js.jpg"></img>
	 <img src="../images/icons/html.jpg"></img><figcaption>HTML</figcaption>
	 <img src="../images/icons/css3.jpg"></img><figcaption>CSS3</figcaption>
	 <img src="../images/icons/react.jpg"></img><figcaption>React JS</figcaption>
	 <img src="../images/icons/node.jpg"></img><figcaption>Node JS</figcaption>
	 <img src="../images/icons/express.jpg"></img>
	 <img src="../images/icons/mongo.jpg"></img>
	 <img src="../images/icons/oracle.jpg"></img>
	 <img src="../images/icons/mariadb.jpg"></img>
	 <img src="../images/icons/bigquery.jpg"></img>
	 <img src="../images/icons/hdp.jpg"></img>
	 <img src="../images/icons/docker.jpg"></img><figcaption>Docker</figcaption>
      </div>
        <div className="nine columns">
	 <img src="../images/icons/ga.jpg"></img>
        </div>
      </div>
  </div> {/* End Work */}

</section> {/* skills Section End*/}

      </React.Fragment>
    );
  }
}
