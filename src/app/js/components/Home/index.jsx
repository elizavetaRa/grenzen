import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SERVER_NAME } from "../../constants";
import api from '../../utils/api';
import './Home.scss';
import {
  Container, Row, Col, Dropdown, Button, ButtonGroup
} from "react-bootstrap";
import NewsCard from "../Blog/NewsCard/NewsCard"

const Home = props => {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    api.get(
      `${SERVER_NAME}/api/blog/newsitems/1`
    ).then(data => {
      setPostsList(data);
    })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div className="container">

      <div className="row">
        <div className="col-sm text-center d-flex flex-column align-items-center justify-content-center">
          <h1>Kunstform Wissenschaft</h1>
          <br></br>
          <p>Beschreibung hier. Lorem ipsum dolore Lorem ipsum dolore Lorem ipsum dolore Lorem ipsum dolore</p>
        </div>
        <div className="col-sm text-center">
          <h4>Aktuelles</h4>

          {
            postsList.length ? postsList.slice(0, 3).map(card => (
              <div className="blog-container__news-card">
                <NewsCard key={card._id} card={card}></NewsCard>
              </div>
            )) : null
          }


        </div>

      </div>
    </div>
  );
};




export default Home;

