import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {
    Container, Row, Col, Dropdown, Button, Modal
} from "react-bootstrap";
import ReactPaginate from 'react-paginate';

import NewsCard from "./NewsCard/NewsCard"
import { SERVER_NAME } from "../../constants";
import api from '../../utils/api';
import './index.scss';

const index = ({setIsLoading, isLoading}) => {
    const [postsList, setPostsList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [isModalShown, setIsModalShown] = useState(false);
    const [postIdToDelete, setPostIdToDelete] = useState(null);

    useEffect(() => {
        getPostsList();
    }, []);

    function getPostsList() {
        setIsLoading(true);

        return api.get(
            `${SERVER_NAME}/api/blog/newsitems`
        ).then(data => {
            setIsLoading(false);
            setPostsList(data);
        })
        .catch(err => {
            console.log(err)
        })
    }

    function handlePageClick(event) {
        window.scrollTo(0, 0);
        setPageNumber(event.selected);
    }

    function showModal(id) {
        setPostIdToDelete(id);
        setIsModalShown(true);
    }

    function hideModal() {
        setPostIdToDelete(null);
        setIsModalShown(false);
    }

    function onDeletePost() {
        setIsLoading(true);
        hideModal();

        api.get(
            `${SERVER_NAME}/api/blog/delete/newsitem/${postIdToDelete}`
        ).then(() => {
            setIsLoading(false);
            setPostIdToDelete(null);
            getPostsList();
        })
        .catch(err => {
            console.log(err)
        })
    }

    function onCancelPostDelete() {
        setPostIdToDelete(null);
        setIsModalShown(false);
    }

    return (
        <div className="bg">
            <div className="blog-container">
                <Container>
                    <Row>
                        {!isLoading && <Col md={2} className="blog-container__aside">
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
                        </Col>}
                        {isLoading && <Col md={12}><div className="blog-container__loading"></div></Col>}
                        {!isLoading && <Col md={8}>
                            {
                                postsList.length ? postsList[pageNumber].map(card => (
                                    <div className="blog-container__news-card">
                                        <NewsCard key={card._id} card={card} onDelete={showModal}></NewsCard>
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
                        </Col> }
                        {!isLoading && <Col md={2}></Col>}
                    </Row>
                </Container>
            </div>
            <Modal className="editor__modal"
                          show={isModalShown}
                          onHide={hideModal}
                          backdrop="static"
                          keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Entfernen</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Der Post wird aus der Datenbank entfernt</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="light" onClick={onCancelPostDelete}>Nein</Button>
                    <Button variant="dark" onClick={onDeletePost}>Ja</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

index.propTypes = {

};

export default index;
