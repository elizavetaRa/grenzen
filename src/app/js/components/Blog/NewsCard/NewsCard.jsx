import React from 'react';
import {
    Card
} from "react-bootstrap";
import moment from 'moment-with-locales-es6';
import './NewsCard.scss';


const NewsCard = ({card}) => {
    const formatDate = (date) => {
        moment.locale('de');
        return moment(new Date(date)).format('L');
    };

    const cardDate = formatDate(card.date);

    return  (
        <Card>
            {/*<Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" />*/}
            <Card.Body>
                <Card.Title>{ card.title }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{ cardDate }</Card.Subtitle>
                <Card.Text>
                    <iframe className='news-card' srcDoc={ card.content }></iframe>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default NewsCard;

