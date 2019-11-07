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
import API from "../../utils/API"

/*ToDo*/
/**
 * Let's get some styling in here
 */

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class PublicRoute extends Component {

    state = {
        cuisine: "",
        results: []
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        // this.setState({ cuisine: event.target.value });
        this.setState({
            cuisine: event.target.value
        })

    }

    submitForm = () => {
        console.log(this.state.cuisine)

        API.getTrucksByCategory(this.state.cuisine)
            .then(data => {
                // console.log(data.data)
                this.setState({
                    results: data.data
                })

                console.log(this.state.results)



            })
            .catch(err => console.log(err))

    }


    render() {
        return (

            <Container fluid>
                <br></br>
                <div id='bluredCont'>
                    <div id='vibes'>
                        <h2 id='glow'>Good Vibes Only</h2>
                    </div>
                    {/* <img src={dropDownImg} alt={'Feature truck'} id='bluredImgHome' /> */}

                    <div id='dropDownCont'>

                        <div className="input-group mb-3" id='dropDown'>
                            <select value={this.state.cuisine} className="custom-select" id="inputGroupSelect02" onChange={this.handleChange}>
                                <option>Choose Food Cuisine</option>
                                <option value="Cajun">Cajun</option>
                                <option value="Tacos">Tacos</option>
                                <option value="Hot Dogs">Hot Dogs</option>
                                <option value="Seafood">Seafood</option>
                                <option value="Chinese">Chinese</option>
                            </select>
                            <div className="input-group-append" onClick={this.submitForm}>
                                <label class="input-group-text" for="inputGroupSelect02">Submit</label>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1><b>Welcome to Lugs N' Grub!</b></h1>
                            <h4>Let's face it, lunch trucks now-days are an incredibly great thing. We simply aim to connect you with this greatness. So whether
                            you want to checkout the featured trucks below, or you want to find where your next delicious meal will be, we are here to help!</h4>
                        </Jumbotron>
                    </Col>
                </Row>
                <br></br>

                <br></br>

                <Row>
                    {this.state.results.map(item => (
                        <div id="leftCol">
                            <Col size="lg-6 sm-12">
                                <div className="imgCont">
                                    <img src={placeHolder1} alt={'Feature truck'} id='truckImgHome' />
                                    <p className='featuredDisc'>{item.truckName}</p>
                                </div>
                            </Col>
                        </div>

                    ))}
                </Row>



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