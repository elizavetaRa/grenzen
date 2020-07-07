import React, { Component } from "react";

class footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex flex-column">

        <footer className="page-footer bg-dark font-small mdb-color lighten-3 pt-4">


          <div className="container">
            <h4 className="text-center text-white">Gefördert von:</h4>
            <br></br>

            <div className="row">

              <div className="col-sm thumb">
                <a className="thumbnail" href="#">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" alt="" />
                </a>
              </div>

              <div className="col-sm thumb">
                <a className="thumbnail" href="#">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" alt="" />
                </a>
              </div>
              <div className="col-sm thumb">
                <a className="thumbnail" href="#">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" alt="" />
                </a>
              </div>
              <div className="col-sm thumb">
                <a className="thumbnail" href="#">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" alt="" />
                </a>
              </div>

              <div className="col-sm thumb">
                <a className="thumbnail" href="#">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" alt="" />
                </a>
              </div>


            </div>

            <br></br>

            <div className="row">
              <div className="col text-center text-white">Datenschutz Impressum Disclaimer</div>
            </div>
            <br></br><br></br>
          </div>
        </footer>
      </div>


    );
  }
}

export default footer;
