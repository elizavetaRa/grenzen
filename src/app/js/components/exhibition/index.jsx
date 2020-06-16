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
<div>
      <FirstComponent></FirstComponent>
   <SecondComponent></SecondComponent>
</div>
    )
      
  }
}