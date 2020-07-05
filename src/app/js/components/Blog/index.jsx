import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {
    Container, Row, Col, Dropdown, Button, ButtonGroup
} from "react-bootstrap";
import ReactPaginate from 'react-paginate';

import NewsCard from "./NewsCard/NewsCard"
import { SERVER_NAME } from "../../constants";
import api from '../../utils/api';
import './index.scss';

const index = () => {
    const [postsList, setPostsList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        api.get(
            `${SERVER_NAME}/api/blog/newsitems`
        ).then(data => {
            setPostsList(data);
        })
            .catch(err => {
                console.log(err)
            })

    }, []);

    function handlePageClick(event) {
        window.scrollTo(0, 0);
        setPageNumber(event.selected);
    }

    return (
        <div className="blog-container">
            <Container>
                <Row>
                    <Col md={2} className="blog-container__aside">
                        <Dropdown className="blog-container__dropdown-filter">
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
                        {localStorage.getItem('identity') && <Button variant="dark" className="blog-container__new-post-button">
                            <Link className="link nav-link" to="/blog/new">
                                New post
                           </Link>
                        </Button>}
                    </Col>
                    <Col md={8}>
                        {
                            postsList.length ? postsList[pageNumber].map(card => (
                                <div className="blog-container__news-card">
                                    <NewsCard key={card._id} card={card}></NewsCard>
                                </div>
                            )) : null
                        }

                        <ReactPaginate
                            pageCount={postsList.length}
                            previousLabel={'<<'}
                            nextLabel={'>>'}
                            pageRangeDisplayed={4}
                            marginPagesDisplayed={3}
                            containerClassName="blog-container__pagination"
                            pageClassName="pagination-btn"
                            activeClassName="pagination-active-btn"
                            previousClassName="pagination-arrow-btn"
                            nextClassName="pagination-arrow-btn"
                            breakClassName="pagination-break"
                            onPageChange={(event) => handlePageClick(event)}></ReactPaginate>
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
