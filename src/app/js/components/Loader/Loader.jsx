import React from 'react';
import './Loader.scss';

const Loader = () => (
    <div className="loading-spinner">
        <div className="loading-spinner__circles">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);

Loader.propTypes = {

};

export default Loader;
