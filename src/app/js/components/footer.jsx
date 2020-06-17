import React, { Component } from "react";

class footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex flex-column">

        <footer className="page-footer bg-dark font-small mdb-color lighten-3 pt-4">
          <h4>Partners</h4>

          <div className="container">
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

            <div className="footer-copyright text-center py-3">© 2020 Copyright:</div>
          </div>
        </footer>
      </div>


    );
  }
}

export default footer;
