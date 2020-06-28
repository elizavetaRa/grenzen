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
    "image": "image",
    "youtube": "https://www.youtube.com/embed/BsWIe7YvF5g",
    "hashtags": [
        "new",
        "title"
    ]
}



const index = props => {

    useEffect(() => {
        /*   console.log("entered useEffect")
   
   
           console.log(api.post(
               `/api/auth/newsexhibit`, mock
           ))
   
           api.post(
               `/api/auth/newexhibit`, mock
           )
               .then(data => {
                   console.log("got data", data)
               })
               .catch(err => {
                   console.log(err)
               })*/

        //5ef8ccb95ea47930740b8210

        api.get(
            `/api/auth/newsitem/${"5ef8ccb95ea47930740b8210"}`
        )
            .then(data => {
                console.log("got data", data)
            })
            .catch(err => {
                console.log(err)
            })

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