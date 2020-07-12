import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import {
    Card, Button
} from "react-bootstrap";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import moment from 'moment';
import PropTypes from 'prop-types';

import './Editor.scss';
import { SERVER_NAME } from "../../../constants";
import api from "../../../utils/api";

const Editor = withRouter((props) => {
    const [editorContent, setEditorContent] = useState('');
    const [image, setImage] = useState('');
    const [post, setPost] = useState({
        title: '',
        content: '',
        preview: '',
        date: 0,
        //image: 'https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=fda28812dc06498b55f2e615455183c3',
        youtube: '',
        hashtags: []
    });

    const [currentHashTag, setCurrentHashTag] = useState('');
    const [hashTags, setHashTags] = useState([]);
    const postId = props.match.params.id ? props.match.params.id : null;

    useEffect(() => {
        window.scrollTo(0, 0);

        if (postId) {
            api.get(
                `${SERVER_NAME}/api/blog/newsitem/${postId}`
            ).then(data => {
                setPost(data.item);
                if (data.item.hashtags.length) setHashTags(data.item.hashtags.filter(tag => !!tag));
            })
            .catch(err => {
                console.log(err)
            })
        }

        return () => { }
    }, [postId]);

    function handleChangeTitle(event) {
        setPost({ ...post, title: event.target.value });
    }

    function handleChangeYoutubeLink(event) {
        setPost({ ...post, youtube: event.target.value });
    }

    function handleChangePreview(event) {
        setPost({ ...post, preview: event.target.value });
    }

    function handleChangeContent(content) {
        setEditorContent(content);
    }

    function handleHashTag(event) {
        setCurrentHashTag(event.target.value.replace(/[\s]/, ''));
    }

    function addHashTag() {
        if (!hashTags.includes(currentHashTag)) setHashTags([...hashTags, currentHashTag]);
        setCurrentHashTag('');
    }

    function onAddKeyDown(event) {
        if (event.keyCode === 13) addHashTag();
    }

    function deleteHashTag(tagToDelete) {
        const updatedHashTagList = hashTags.filter(tag => tag !== tagToDelete);
        setHashTags(updatedHashTagList);
    }

    function saveResults() {
        const postToSend = { ...post, content: editorContent, date: Date.now(), hashtags: hashTags };

        const onSaveResults = (id) => {
            props.history.push(`/blog/post/${id}`);
        };

        if (postId) {
            api.post(
                `${SERVER_NAME}/api/blog/edit-newsitem/${postId}`, postToSend, { image: image }
            ).then(() => onSaveResults(postId)).catch(err => {
                console.log('Server responded with error!')
            })
        } else {
            api.post(
                `${SERVER_NAME}/api/blog/newsitem`, postToSend, { image: image }
            ).then((data) => {
                onSaveResults(data.id);
            }).catch(err => {
                console.log('Server responded with error!')
            })
        }
    }

    return (
        <div className="editor">
            <div className="editor__header">{postId ? 'Edit post' : 'New post'}</div>
            <div className="editor__wrapper">
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <div className="editor__label">News title</div>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <input className="editor__input" onChange={handleChangeTitle} type="text" value={post.title}></input>
                        </Card.Subtitle>
                        <Card.Title>
                            <div className="editor__label">Preview</div>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <textarea className="editor__input editor-preview" onChange={handleChangePreview} type="text" value={post.preview}></textarea>
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{moment(new Date()).format('DD.MM.YYYY')}</Card.Subtitle>
                        <div className="editor__container">
                            <SunEditor width="100%" placeholder="Please type here..."
                                setContents={post.content}
                                setDefaultStyle="height: 300px;"
                                setOptions={{
                                    buttonList: [
                                        ['undo', 'redo', 'removeFormat'],
                                        ['font', 'fontSize', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                        ['align', 'indent', 'outdent', 'list'],
                                        ['link', 'image', 'video']
                                    ]
                                }}
                                onChange={handleChangeContent}
                            />
                        </div>
                        <div className="editor__btn-group">
                            {/*<label htmlFor="file-upload-image" className="btn btn-light editor__upload" value="upload">
                                <input id="file-upload-image" type="file" className="editor__upload-image-input" />
                                    Add image
                            </label>*/}

                            <input
                                type="file"
                                onChange={evt => setImage(evt.target.files[0])}
                                className="input"
                                placeholder="Bild hochladen"
                            />

                            <input type="text"
                                   className="form-control editor__add-youtube"
                                   placeholder="Add youtube link"
                                   onChange={handleChangeYoutubeLink}
                                   value={post.youtube}></input>

                            <Card.Title>
                                <div className="editor__label">Add hash tags</div>
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                <div className="editor__input-group">
                                    <input className="editor__input editor-hash-tags"
                                           onChange={handleHashTag}
                                           onKeyDown={onAddKeyDown}
                                           type="text"
                                           value={currentHashTag}></input>
                                    <Button variant="dark" className="add-hashtag-btn" onClick={addHashTag}>Add</Button>
                                </div>
                            </Card.Subtitle>
                            { !!hashTags.length &&
                                <div className="editor__hash-tags-container">
                                    {hashTags.map(tag =>
                                        (
                                            <div className="editor__hash-tag" key={tag}>
                                                {tag}
                                                <div className="hash-tag-delete" onClick={() => deleteHashTag(tag)}>&#215;</div>
                                            </div>
                                        ))}
                                </div>
                            }
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <Button className="editor__save-btn" variant="success" onClick={saveResults}>
                Save
            </Button>

        </div>
    );
});

Editor.propTypes = {

};

export default Editor;
