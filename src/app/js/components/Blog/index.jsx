import React, { Component } from 'react';
import {
    Container, Row, Col, Dropdown, Button
} from "react-bootstrap";
import NewsCard from "./NewsCard/NewsCard"
import PropTypes from 'prop-types';
import data from "./newsElems.json"
import './index.scss';
import {Link} from "react-router-dom";

const index = () => {
    const cardsList = data.data.map(card => (<div className="blog-container__news-card"><NewsCard key={card.id} card={card}></NewsCard></div>));

    return (
        <div className="blog-container">
           <Container>
               <Row>
                   <Col md={2} className="blog-container__aside">
                       <Dropdown>
                           <Dropdown.Toggle variant="dark" id="dropdown-basic">
                               Filter
                           </Dropdown.Toggle>
                           <Dropdown.Menu>
                               <Dropdown.Item>Action</Dropdown.Item>
                               <Dropdown.Item>Another action</Dropdown.Item>
                               <Dropdown.Item>Something else</Dropdown.Item>
                           </Dropdown.Menu>
                       </Dropdown>
                       <div className="blog-container__empty"></div>
                       <Button variant="dark">
                           <Link className="link nav-link" to="/blog/new">
                               New post
                           </Link>
                       </Button>
                   </Col>
                   <Col md={8}>{ cardsList }</Col>
                   <Col md={2}>md=2</Col>
               </Row>
           </Container>
        </div>
    );
};

index.propTypes = {

};

export default index;
