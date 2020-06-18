import React from "react";
import Pagination from 'react-bootstrap/Pagination'

import ReactPageScroller from "react-page-scroller";
import FirstComponent from "./ExhibitList";
import SecondComponent from "./ExhibitList";
import ThirdComponent from "./ExhibitList";
import FourthComponent from "./ExhibitList";
import FifthComponent from "./ExhibitList";



export default class FullPage extends React.Component {
  constructor(props) {
    super(props);

  }




  render() {


    return (
      <div className="container">
        <ul class="nav nav-pills nav-justified">
          <li class="nav-item">
            <a class="nav-link active" href="#über">Über die Ausstellung</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-primary" href="#projekte">Projekte</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-primary" href="#team">Team</a>
          </li>
        </ul>
        <FirstComponent></FirstComponent>


      </div>
    )

  }
}