import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import {
    Card, Container
} from "react-bootstrap";

import moment from 'moment';
import PropTypes from 'prop-types';

import './Post.scss';
import { SERVER_NAME } from "../../../constants";
import api from "../../../utils/api";

const Post = (props) => {
    const [post, setPost] = useState({
        title: '',
        content: '',
        preview: '',
        date: 0,
        image: 'https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=fda28812dc06498b55f2e615455183c3',
        youtube: 'https://www.youtube.com/watch?v=WEkSYw3o5is',
        hashtags: []
    });
    const postId = props.match.params.id ? props.match.params.id : null;

    useEffect(() => {
        window.scrollTo(0, 0);
        if (postId) {
            api.get(
                `${SERVER_NAME}/api/auth/newsitem/${postId}`
            ).then(data => {
                setPost(data.item);
            })
                .catch(err => {
                    console.log(err)
                })
        }

        return () => { }
    }, [postId]);

    return (
        <div className="post">
            <div className="post__container container">
                <h2 className="post__title">{post.title}</h2>
                <div className="post__sub-title">{moment(new Date()).format('DD.MM.YYYY')}</div>
                <iframe className="post__content container" srcDoc={post.content}></iframe>
            </div>
        </div>
    );
};

Post.propTypes = {

};

export default withRouter(Post);
