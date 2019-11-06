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
                <br></br>
                <Row>
                    <Col size="md-12 sm-12">
                        <Jumbotron fluid>
                            <h1><b>Welcome to Lugs N' Grub!</b></h1>
                            <h4>Let's face it, lunch trucks now-days are an incredibly great thing. We simply aim to connect you with this greatness. So whether
                            you want to checkout the featured trucks below, or you want to find where your next delicious meal will be, we are here to help!</h4>
                        </Jumbotron>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col size="md-12 sm-12">
                        <div className='featured'>
                            <p><b>Featured Trucks!</b></p>
                        </div>
                    </Col>
                </Row>

                <Row id='homeRow'>
                    <div id="leftCol">
                        <Col size="lg-6 sm-12">
                            <div className="imgCont">
                                <img src={placeHolder1} alt={'Feature truck'} id='truckImgHome' />
                                <p className='featuredDisc'>Happy Beginning</p>
                            </div>
                        </Col>
                    </div>
                    <div id='rightCol'>
                        <Col size="lg-6 sm-12">
                            <div className="imgCont">
                                <img src={placeHolder2} alt={'Feature truck'} id='truckImgHome' />
                                <p className='featuredDisc'>Hotdog Heaven</p>
                            </div>
                        </Col>
                    </div>
                </Row>

                <Row id='homeRow'>
                    <div id='leftCol'>
                        <Col size="lg-6 sm-12" id="rightCol">
                            <div className="imgCont">
                                <img src={placeHolder3} alt={'Feature truck'} id='truckImgHome' />
                                <p className='featuredDisc'>Zatachitos</p>
                            </div>
                        </Col>
                    </div>
                    <div id='rightCol'>
                        <Col size="lg-6 sm-12" id="rightCol">
                            <div className="imgCont">
                                <img src={placeHolder4} alt={'Feature truck'} id='truckImgHome' />
                                <p className='featuredDisc'>England Visits</p>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container >
        )
    }
}

export default PublicRoute