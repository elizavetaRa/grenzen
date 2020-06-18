import React, { Component } from "react";
import { Link } from "react-router-dom";

class exh extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="container">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Projekt X</h5>
            <p class="card-text">Interessante Beschreibung hier. Noch mehr Beschreibung.</p>
            <a href="#" class="btn btn-primary">Entdecken</a>
          </div>
          <img class="card-img-bottom" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" alt="Card image cap" />
        </div>
      </div>
    );

  }
}

export default exh;
