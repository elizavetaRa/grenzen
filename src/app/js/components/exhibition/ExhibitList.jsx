import React, { Component } from "react";
import Exh from "./exh";



class ExhibitList extends Component {
  constructor(props) {
    super(props);
 
  }

  render() {
    return (




      <div>
        <div className="row row20 d-flex flex-column align-items-center justify-content-center">
          <br></br>
          <h1>Entdecke die Exponate</h1>
          <br></br>
        </div>
        <Exh
          dir={0}
          title="Unsihtbare Grenzen"
          teaser="Eine Beschreibung, die dazu animieren soll, dass ich angeklikt werde."
        ></Exh>
        <br></br> <br></br>
        <Exh
          dir={1}
          title="Sichtbare Grenzen"
          teaser="Eine längere Beschreibung, die dazu animieren soll, dass ich angeklikt werde. Also los"
        ></Exh>
        <br></br> <br></br>
        <Exh
          dir={0}
          title="Unsihtbare Grenzen"
          teaser="Eine Beschreibung, die dazu animieren soll, dass ich angeklikt werde."
        ></Exh>
        <br></br> <br></br>
        <Exh
          dir={1}
          title="Sichtbare Grenzen"
          teaser="Eine Beschreibung, die dazu animieren soll, dass ich angeklikt werde."
        ></Exh>
        <br></br> <br></br>
      </div>
    );
  }
}

export default ExhibitList;
