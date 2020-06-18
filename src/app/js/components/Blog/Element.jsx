import React, { Component } from 'react';
import {
    Card,
    Button,
} from "react-bootstrap";

class Element extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Card >
                    <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" />
                    <Card.Body>
                        <Card.Title>News Titel</Card.Title>
                        <Card.Text>
                            Etwas spannendes zu berichten hier. Total spannend, guckt rein.
    </Card.Text>
                        <Button variant="primary">Mehr</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Element;