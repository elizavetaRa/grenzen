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
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Element;