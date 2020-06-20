import React, { Component } from 'react';
import {
    Card,
    Button,
} from "react-bootstrap";
import data from "./newsElems.json"


class NewsCard extends Component {

    constructor(props) {
        super(props);

    }


    render() {

        console.log(data)
        return (
            <div>
                <Card>
                    {/*<Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" />*/}
                    <Card.Body>
                        <Card.Title>{data.data[0].title}</Card.Title>
                        <Card.Text>
                            {data.data[0].content}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default NewsCard;

