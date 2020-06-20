import React, { Component } from 'react';
import NewsCard from "./NewsCard"
import PropTypes from 'prop-types';

const index = props => {
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