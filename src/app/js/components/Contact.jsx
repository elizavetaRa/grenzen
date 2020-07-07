import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import api from '../utils/api'
import { SERVER_NAME } from "../constants";

const Contact = props => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    function resetForm() {
        setEmail("");
        setMessage("")
    }

    function onEmailChange(e) {
        setEmail(e.target.value)
    }

    function onMessageChange(e) {
        setMessage(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (email && message) {

            api.post(`${SERVER_NAME}/api/auth/contact`, { email, message }).then((response) => {
                if (response.data.status === 'success') {
                    alert("Message Sent.");
                    resetForm()
                    setError("")
                } else if (response.data.status === 'fail') {
                    alert("Message failed to send.")
                }
            }).catch(err => console.log(err))
        } else {
            setError("Füllen Sie die *Felder")
        }

    }

    return (

        <div className="container">


            <Form onSubmit={handleSubmit} method="POST">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control value={email} onChange={onEmailChange} type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Nachricht*</Form.Label>
                    <Form.Control value={message} onChange={onMessageChange} as="textarea" rows="3" />
                </Form.Group>
                {error && (<p>{error}</p>)}
                <Button variant="primary" type="submit">
                    Submit
</Button>
            </Form>
        </div>
    );
};

Contact.propTypes = {

};

export default Contact;