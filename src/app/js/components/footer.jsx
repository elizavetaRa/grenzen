import React, { Component } from "react";

class footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <footer className="footer">
          <div>
            <a href="https://coreui.io">Impressum</a>
          </div>
          <div className="ml-auto">
            <span>Datenschutz</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default footer;
