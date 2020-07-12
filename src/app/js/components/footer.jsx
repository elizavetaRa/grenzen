import React, { Component } from "react";

import {
  Card
} from "react-bootstrap";

import { Link } from "react-router-dom"

import pic1 from "../../style/images/1.jpg"
import pic2 from "../../style/images/2.jpg"
import pic3 from "../../style/images/3.jpg"
import pic4 from "../../style/images/4.jpg"
import pic5 from "../../style/images/5.jpg"
import pic6 from "../../style/images/6.jpg"

class footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex flex-column">

        <footer className="page-footer bg-dark font-small mdb-color lighten-3 pt-4">


          <div className="container-width">

            <br></br>

            <div className="row">

              <div className="col-sm-10"><h4 className="text-center text-white">Gefördert von:</h4></div>
              {window.innerWidth >= 992 && <div className="col-sm-2">
                <h4 className="text-center text-white"> Unterstützt durch:</h4></div>}
            </div>

            <div className="row">

              <div className="col-sm thumb">

                <a href="https://www.stw.berlin/" target="_blank" rel="noopener noreferrer" >
                  <Card className="h-100 p-2 justify-content-center">
                    <img className="img-fluid" src={pic1} alt="Studierendenwerk Berlin" />
                  </Card></a>

              </div>

              <div className="col-sm thumb">
                <a href="https://gwk.udk-berlin.de/fachschaftsrat/" target="_blank" rel="noopener noreferrer" >
                  <Card className="h-100  p-2 justify-content-center">
                    <img className="img-fluid" src={pic2} alt="Fachschaftsrat für Gesellschafts- und Wirtschaftskommunikation" />
                  </Card></a>

              </div>
              <div className="col-sm thumb">
                <a href="https://www.hug-berlin.de/" target="_blank" rel="noopener noreferrer" >
                  <Card className="h-100  p-2 justify-content-center">
                    <img className="img-fluid" src={pic3} alt="Humbold Universitätsgesellschaft" />
                  </Card></a>
              </div>
              <div className="col-sm thumb">
                <a href="https://bolognalab.hu-berlin.de/de" target="_blank" rel="noopener noreferrer" >
                  <Card className="h-100  p-2 justify-content-center">
                    <img className="img-fluid" src={pic4} alt="Bologna Lab" />
                  </Card></a>
              </div>

              <div className="col-sm thumb">
                <a href="https://www.hu-berlin.de/de" target="_blank" rel="noopener noreferrer" >
                  <Card className="h-100  p-2 justify-content-center">
                    <img className="img-fluid" src={pic5} alt="Humbold Universität zu Berlin" />
                  </Card></a>
              </div>

              <div className="col-sm thumb">
                {window.innerWidth < 992 &&
                  <h4 className="text-center text-white"> Unterstützt durch:</h4>}
                <a href="https://www.bmbf.de/" target="_blank" rel="noopener noreferrer" >
                  <Card className="h-100  p-2 justify-content-center">
                    <img className="img-fluid" src={pic6} alt="Bundesministerium für Bildung und Forschung" />
                  </Card></a>
              </div>


            </div>

            <br></br>

            <div className="row">
              <div className="col text-center text-white">
                <Link to={`/datenschutz`}>Datenschutz</Link>
                <br></br>
                <Link to={`/impressum`}>Impressum</Link></div>
            </div>
            <br></br><br></br>
          </div>
        </footer>
      </div>


    );
  }
}

export default footer;
