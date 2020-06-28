import React, { Component } from 'react';
import {
    Container, Row, Col
} from "react-bootstrap";
import NewsCard from "./NewsCard/NewsCard"
import PropTypes from 'prop-types';
import data from "./newsElems.json"
import './index.scss';

const index = () => {
    const cardsList = data.data.map(card => (<div className="blog-container__news-card"><NewsCard key={card.id} card={card}></NewsCard></div>));

    return (
        <div className="blog-container">
           <Container>
               <Row>
                   <Col md={2}>md=2</Col>
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
