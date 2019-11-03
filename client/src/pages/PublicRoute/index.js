import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from "../../components/Grid";
import placeHolder1 from './placeHolder1.jpg';
import placeHolder2 from './placeHolder2.jpg';
import placeHolder3 from './placeHolder3.jpg';
import placeHolder4 from './placeHolder4.jpg';

/*ToDo*/
/**
 * Let's get some styling in here
 */

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class PublicRoute extends Component {
    render() {
        return (

            <Container fluid>
                <Row>
                    <Col size="md-12 sm-12">
                        <Jumbotron fluid>

                        </Jumbotron>
                    </Col>
                </Row>


                <Row>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <img src={placeHolder1} alt={'Feature truck'} />
                        </Jumbotron>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <img src={placeHolder2} alt={'Feature truck'} />
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <img src={placeHolder3} alt={'Feature truck'} />
                        </Jumbotron>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <img src={placeHolder4} alt={'Feature truck'} />
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default PublicRoute