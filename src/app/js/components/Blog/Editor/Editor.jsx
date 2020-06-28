import React, { useState } from 'react';
import {
    Card, Button
} from "react-bootstrap";
import SunEditor from 'suneditor-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './Editor.scss';
import 'suneditor/dist/css/suneditor.min.css';

const Editor = () => {
    const [title, setTitle] = useState('');
    const [preview, setPreview] = useState('');
    const [content, setContent] = useState('');

    function handleChangeTitle(editorTitle) {
        setTitle(editorTitle.target.value);
    }

    function handleChangePreview(editorPreview) {
        setPreview(editorPreview.target.value);
    }

    function handleChangeContent(editorContent) {
        setContent(editorContent);
    }

    function saveResults() {
        const newPost = {
            title,
            content,
            date: Date.now(),
            preview,
        }
        console.log(newPost);
    }

    return (
        <div className="editor">
            <div className="editor__header">New post</div>
            <div className="editor__wrapper">
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <div className="editor__label">News title</div>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <input className="editor__input" onChange={handleChangeTitle} type="text"></input>
                        </Card.Subtitle>
                        <Card.Title>
                            <div className="editor__label">Preview</div>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <textarea className="editor__input editor-preview" onChange={handleChangePreview} type="text"></textarea>
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{ moment(new Date()).format('DD.MM.YYYY') }</Card.Subtitle>
                        <div className="editor__container">
                            <SunEditor width="100%" placeholder="Please type here..."
                                       setDefaultStyle="height: 300px;"
                                       setOptions={{
                                           buttonList: [
                                               ['undo', 'redo', 'removeFormat'],
                                               ['font', 'fontSize', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                               ['align', 'indent', 'outdent', 'list'],
                                               ['link']
                                           ]
                                       }}
                                       onChange={ handleChangeContent }
                            />
                        </div>
                        <div className="editor__btn-group">
                            <label htmlFor="file-upload-image" className="btn btn-light editor__upload" value="upload">
                                <input id="file-upload-image" type="file" className="editor__upload-image-input"/>
                                    Add image
                            </label>

                            <div className="editor__upload">
                                <Button variant="light">
                                    Add youtube link
                                </Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <Button className="editor__save-btn" variant="success" onClick={ saveResults }>
                Save
            </Button>
        </div>
    );
};

Editor.propTypes = {

};

export default Editor;
