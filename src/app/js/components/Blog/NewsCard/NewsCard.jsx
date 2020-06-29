import React from 'react';
import {Link} from "react-router-dom";
import {
    Card, Button
} from "react-bootstrap";
import moment from 'moment';

import './NewsCard.scss';

const NewsCard = ({card}) => {
    function formatDate(date) {
        return moment(new Date(date)).format('DD.MM.YYYY');
    };

    const cardDate = formatDate(card.date);

    return  (
        <Card>
            {/*<Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" />*/}
            <Card.Body>
                <div className="news-card-header">
                    <Card.Title>{ card.title }</Card.Title>
                    <Link to={ `/blog/edit/${card._id}` }>
                        <Button variant="success">
                           Edit
                        </Button>
                    </Link>
                </div>
                <Card.Subtitle className="mb-2 text-muted">{ cardDate }</Card.Subtitle>
                <Card.Text>
                    <div className='news-card-preview'>{ card.preview }</div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default NewsCard;

