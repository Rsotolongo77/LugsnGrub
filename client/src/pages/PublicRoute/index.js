import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from "../../components/Grid";
import placeHolder1 from './placeHolder1.jpg';
import placeHolder2 from './placeHolder2.jpg';
import placeHolder3 from './placeHolder3.jpg';
import placeHolder4 from './placeHolder4.jpg';
import placeHolder5 from './placeHolder5.jpg';
import placeHolder6 from './placeHolder6.jpg';
import placeHolder7 from './placeHolder7.jpg';
import dropDownImg from './dropDown.jpg';

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
                <br></br>
                <div id='bluredCont'>
                    <div id='vibes'>
                        <h2 id='glow'>Good Vibes Only</h2>
                    </div>
                    {/* <img src={dropDownImg} alt={'Feature truck'} id='bluredImgHome' /> */}

                    <div id='dropDownCont'>

                        <div className="input-group mb-3" id='dropDown'>
                            <select className="custom-select" id="inputGroupSelect02">
                                <option selected>Choose Food Cuisine</option>
                                <option value="1">Cajun</option>
                                <option value="2">Tacos</option>
                                <option value="3">Hot Dogs</option>
                                <option value="4">Fish</option>
                                <option value="5">Chinese</option>
                            </select>
                            <div className="input-group-append">
                                <label class="input-group-text" for="inputGroupSelect02">Options</label>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
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
                <Row id='homeRow'>
                    <div id='leftCol'>
                        <Col size="lg-6 sm-12" id="rightCol">
                            <div className="imgCont">
                                <img src={placeHolder5} alt={'Feature truck'} id='truckImgHome' />
                                <p className='featuredDisc'>Doughnut Delights</p>
                            </div>
                        </Col>
                    </div>
                    <div id='rightCol'>
                        <Col size="lg-6 sm-12" id="rightCol">
                            <div className="imgCont">
                                <img src={placeHolder6} alt={'Feature truck'} id='truckImgHome' />
                                <p className='featuredDisc'>The Teal Tavern</p>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container >
        )
    }
}

export default PublicRoute