import React from 'react';
import { withRouter } from "react-router-dom";
import {
    Card, Button
} from "react-bootstrap";
import moment from 'moment';

import './NewsCard.scss';
import { SERVER_NAME } from "../../../constants";
import api from '../../../utils/api';

const NewsCard = withRouter(({ history, card }) => {
    function formatDate(date) {
        return moment(new Date(date)).format('DD.MM.YYYY');
    };

    const cardDate = formatDate(card.date);

    function onCardClick() {
        history.push(`/blog/post/${card._id}`);
    }

    function onEditClick(event) {
        event.stopPropagation();
        history.push(`/blog/edit/${card._id}`);
    }

    function onDeleteClick(event) {
        event.stopPropagation();
        api.get(
            `${SERVER_NAME}/api/blog/newsitem/${card._id}`
        ).then(data => {})
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <Card className="news-card" onClick={ onCardClick }>
            {/*<Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" />*/}
            <Card.Body>
                <div className="news-card__header">
                    <Card.Title>{card.title}</Card.Title>
                    {localStorage.getItem('identity') &&
                    <div>
                        <Button variant="dark" className="news-card__edit" onClick={ (event) => onEditClick(event) }>
                            Edit
                        </Button>
                        <Button variant="light" onClick={ (event) => onDeleteClick(event) }>
                            Delete
                        </Button>
                    </div>
                    }
                </div>
                <Card.Subtitle className="mb-2 text-muted news-card__date">{cardDate}</Card.Subtitle>
                <Card.Text>
                    <div className='news-card__preview'>{card.preview}</div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
});

export default NewsCard;

