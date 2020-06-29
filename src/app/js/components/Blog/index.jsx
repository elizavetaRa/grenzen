import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {
    Container, Row, Col, Dropdown, Button, ButtonGroup
} from "react-bootstrap";

import NewsCard from "./NewsCard/NewsCard"
import { SERVER_NAME } from "../../constants";
import api from '../../utils/api';
import './index.scss';

const index = () => {
    const [postsList, setPostsList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        api.get(
            `${SERVER_NAME}/api/auth/newsitems`
        ).then(data => {
            setPostsList(data);
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    function handlePageClick(pageNumber) {
        setPageNumber(pageNumber);
        window.scrollTo(0, 0);
    }

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
                   <Col md={8}>
                       {
                           postsList.length ? postsList[pageNumber].map(card => (
                               <div className="blog-container__news-card">
                                   <NewsCard key={card._id} card={card}></NewsCard>
                               </div>
                           )) : null
                        }

                       <div className="blog-container__pagination">
                           <ButtonGroup className="mr-2" aria-label="Pagination">
                                { postsList.map((posts, index) => <Button onClick={() => handlePageClick(index)}>{ index+1 }</Button>) }
                            </ButtonGroup>
                       </div>
                   </Col>
                   <Col md={2}></Col>
               </Row>
           </Container>
        </div>
    );
};

index.propTypes = {

};

export default index;
