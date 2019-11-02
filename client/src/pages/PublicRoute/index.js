import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from "../../components/Grid";
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
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Pic here </h1>
                        </Jumbotron>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Pic here </h1>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Pic here </h1>
                        </Jumbotron>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Pic here </h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default PublicRoute