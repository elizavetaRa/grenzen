import React, { Component } from "react";

class exhibit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row vh-100 m-5">
        <div className="container bg-dark m-5">
          <div className="row text-center align-items-center">
            <div className="col-sm bg-success m-1 h20 height33">Content</div>
            <div className="col-sm bg-success  m-1 h-20 height33">Content</div>
          </div>

          <div className="row text-center align-items-center">
            <div className="col-sm bg-success m-1 height33">Content</div>
            <div className="col-sm bg-success  m-1 h-20 height33">Content</div>
            <div className="col-sm bg-success  m-1 h-20 height33">Content</div>
          </div>

          <div className="row text-center align-items-center">
            <div className="col-sm bg-success m-1 h20 height33">Content</div>
            <div className="col-sm bg-success  m-1 h-20 height33">Content</div>
          </div>
        </div>
      </div>
    );
  }
}

export default exhibit;
