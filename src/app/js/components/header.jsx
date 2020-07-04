import React, { Component } from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-md-12">
              <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                sticky="top"
                className=".transparent"
              >


                <Navbar.Brand href="/">Kunstform Wissenschaft</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    {/* <Nav className="mr-auto">
                    {/*<Nav.Link href="/current-project">
                      Aktuelles Projekt
                    </Nav.Link>

                    <NavDropdown title="Aktuelles Projekt" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/current-project">
                        GRENZEN
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/digitalisierung">
                        Digitalisierung
                      </NavDropdown.Item>
                    </NavDropdown>*/}

                    {/*  <NavDropdown title="Archiv" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/öffentlichkeit">
                        Öffentlichkeit
                      </NavDropdown.Item>
                  </NavDropdown>*/}



                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/über">Über uns</Nav.Link>
                    <Nav.Link href="/kontakt">Kontakt</Nav.Link>


                  </Nav>
                  <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kunstform.wissenschaft/"><div>
                    <i class="fa fa-instagram" aria-hidden="true"></i>

                  </div></Nav.Link>
                  <Nav.Link href=""><div>

                    <i class="fa fa-facebook-square" aria-hidden="true"></i>

                  </div></Nav.Link>

                  <Nav.Link href=""><div>

                    <i class="fa fa-youtube-square" aria-hidden="true"></i>

                  </div></Nav.Link>

                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Header;
