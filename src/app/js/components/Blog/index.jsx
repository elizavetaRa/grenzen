import React, { Component } from 'react';
import NewsCard from "./NewsCard"
import PropTypes from 'prop-types';
import data from "./newsElems.json"

const index = props => {
    const cardsList = data.data.map(card => (<NewsCard card={card}></NewsCard>));

    return (
        <div>
            <div className="container">
                { cardsList }
            </div>
        </div>
    );
};

index.propTypes = {

};

export default index;
