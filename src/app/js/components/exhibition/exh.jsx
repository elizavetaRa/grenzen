import React, { Component } from "react";
import { Link } from "react-router-dom";

class exh extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.dir == 0) {
      return (
        <div>
          <div className="fullwidth">
            <div className="row height33 bg-success">
              <div className="col-auto d-flex flex-column align-items-center justify-content-center .p-1">
                <div className="row justify-content-center ">
                  <h3>{this.props.title}</h3>
                </div>

                <div className="row justify-content-center ">
                  <p className="text-center">{this.props.teaser}</p>{" "}
                </div>

                <div className="row justify-content-center ">
                  <Link to="/current-project/exponat1">
                    <button className="btn bg-dark text-white">
                      Entdecken
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col bg-dark p-0 m-0 width66">
                <img src="background.jpg" className="height33 width66" />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="fullwidth">
            <div className="row height33 bg-success">
              <div className="col-auto bg-dark p-0 m-0 width66">
                <img src="background.jpg" className="height33 width66" />
              </div>
              <div className="col d-flex flex-column align-items-center justify-content-center .ml-1">
                <div className="row justify-content-center ">
                  <h3>{this.props.title}</h3>
                </div>

                <div className="row justify-content-center ">
                  <p className="text-center">{this.props.teaser}</p>{" "}
                </div>

                <div className="row justify-content-center ">
                  <Link to="/current-project/exponat1">
                    {" "}
                    <button className="btn bg-dark text-white">
                      Entdecken
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default exh;
