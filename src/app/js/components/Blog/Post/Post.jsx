import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

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
    const [content, setContent] = useState('');
    const postId = props.match.params.id ? props.match.params.id : null;

    useEffect(() => {
        window.scrollTo(0, 0);
        if (postId) {
            props.setIsLoading(true);
            api.get(
                `${SERVER_NAME}/api/blog/newsitem/${postId}`
            ).then(data => {
                props.setIsLoading(false);
                setPost(data.item);
                setContent(data.item.content);
            })
            .catch(err => {
                console.log(err)
            })
        }

        return () => { }
    }, [postId]);

    function createMarkup(htmlString) {
        return {__html: htmlString};
    }

    return (
        <div className="post bg">
            <div className="post__container container">
                <h2 className="post__title">{post.title}</h2>
                <div className="post__sub-title">{moment(new Date()).format('DD.MM.YYYY')}</div>
                <div dangerouslySetInnerHTML={createMarkup(content)} className="post__content container"></div>

                {post.image && <img border="0" alt="image" src={post.image} width="200" className="post__image"></img> }
                { post.youtube && <div className="post__youtube">
                    <iframe width="560" height="315" src={post.youtube} frameBorder="0"
                            allowFullScreen className="post__video"></iframe>
                </div>}
            </div>
        </div>
    );
};

Post.propTypes = {

};

export default withRouter(Post);
