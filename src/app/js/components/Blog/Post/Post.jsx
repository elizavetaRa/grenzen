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
        image: '',
        youtube: 'https://www.youtube.com/watch?v=WEkSYw3o5is',
        hashtags: []
    });
    const postId = props.match.params.id ? props.match.params.id : null;

    useEffect(() => {
        window.scrollTo(0, 0);
        if (postId) {
            api.get(
                `${SERVER_NAME}/api/blog/newsitem/${postId}`
            ).then(data => {
                console.log(data.item)
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
                {post.image && <img border="0" alt="image" src={post.image} width="200"></img>}
                <iframe className="post__content container" srcDoc={post.content}></iframe>

            </div>
        </div>
    );
};

Post.propTypes = {

};

export default withRouter(Post);
