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
	 <img alt="spark" src="../images/icons/spark.jpg"></img>
	 <img alt="spark-streaming" src="../images/icons/spark-st.jpg"></img>
	 <img alt="kafka" src="../images/icons/kafka.jpg"></img>
	 <img alt="akka" src="../images/icons/akka.jpg"></img>
	 <img alt="rest-api" src="../images/icons/rest.jpg"></img>
	 <img alt="python" src="../images/icons/python.jpg"></img>
	 <img alt="scala" src="../images/icons/scala.jpg"></img>
	 <img alt="javascript" src="../images/icons/js.jpg"></img>
	 <img alt="html" src="../images/icons/html.jpg"></img>
	 <img alt="css" src="../images/icons/css3.jpg"></img>
	 <img alt="react-js" src="../images/icons/react.jpg"></img>
	 <img alt="node-js" src="../images/icons/node.jpg"></img>
	 <img alt="express-js" src="../images/icons/express.jpg"></img>
	 <img alt="mongo-db" src="../images/icons/mongo.jpg"></img>
	 <img alt="oracle-db" src="../images/icons/oracle.jpg"></img>
	 <img alt="maria-db" src="../images/icons/mariadb.jpg"></img>
	 <img alt="bigquery" src="../images/icons/bigquery.jpg"></img>
	 <img alt="hdp" src="../images/icons/hdp.jpg"></img>
	 <img alt="docker" src="../images/icons/docker.jpg"></img>
      </div>
        <div className="nine columns">
	 <img alt="google-analytics" src="../images/icons/ga.jpg"></img>
        </div>
      </div>
  </div> {/* End Work */}

</section> {/* skills Section End*/}

      </React.Fragment>
    );
  }
}
