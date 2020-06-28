import React, { Component, useState, useEffect } from 'react';
import NewsCard from "./NewsCard"
import PropTypes from 'prop-types';
import axios from "axios";
import api from "../../utils/api"

const mock = {
    "id": 111,
    "date": 12163234823,
    "title": "News Title",
    "content": "html stuff",
    "preview": "Abracadabra Abracadabra Abracadabra Abracadabra Abracadabra",
    "image": "image",
    "youtube": "https://www.youtube.com/embed/BsWIe7YvF5g",
    "hashtags": [
        "new",
        "title"
    ]
}



const index = props => {

    useEffect(() => {


        //create  new NewsItem, returns id

        api.post(
            `/api/auth/newsitem`, mock
        )
            .then(data => {
                console.log("got data", data)
            })
            .catch(err => {
                console.log(err)
            })/**/



        //get NewsItem by id, returns item object
        // example_id: "5ef8ccb95ea47930740b8210"

        /*api.get(
            `/api/auth/newsitem/${"5ef8ccb95ea47930740b8210"}`
        )
            .then(data => {
                console.log("got data", data)
            })
            .catch(err => {
                console.log(err)
            })*//**/



        //get array of arrays (length 5) items

        /*  api.get(
              `https://grenzen.herokuapp.com/api/auth/newsitems`
          ).then(data => {
              console.log("got data", data)
          })
              .catch(err => {
                  console.log(err)
              })
  
          // edit post with given id, returns id of edited item
  
          /*api.post(`/api/auth/edit-newsitem/${"5ef8ccb95ea47930740b8210"}`).then(data => {
              console.log("got data", data)
          })
              .catch(err => {
                  console.log(err)
              })*/

    }, []);

    return (
        <div>
            <div className="card-columns">
                <NewsCard></NewsCard>
                <NewsCard></NewsCard>
                <NewsCard></NewsCard>
            </div>
        </div>
    );
};

index.propTypes = {

};

export default index;