import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from "../../components/Grid";
import placeHolder1 from './placeHolder1.jpg';
import placeHolder2 from './placeHolder2.jpg';
import placeHolder3 from './placeHolder3.jpg';
import placeHolder4 from './placeHolder4.jpg';
import placeHolder5 from './placeHolder5.jpg';
import placeHolder6 from './placeHolder6.jpg';
import { Link } from "react-router-dom";
import API from "../../utils/API"

/*ToDo*/
/**
 * Let's get some styling in here
 */

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
                        <h2 id='glow'>Lugs N' Grub</h2>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <Container>
                    <Row>
                        <Jumbotron>
                            <h1><b>Welcome to Lugs N' Grub!</b></h1>
                            <h4>Let's face it, food trucks now-days are an incredibly great thing. We simply aim to connect you with this greatness. So whether
                            you want to checkout the featured trucks below, or you want to find where your next delicious meal will be, we are here to help!</h4>
                        </Jumbotron>
                    </Row>
                </Container>
                <div id='dropDownCont'>

                    <div className="input-group mb-3" id='dropDown'>
                        <select value={this.state.cuisine} className="custom-select" id="inputGroupSelect02" onChange={this.handleChange}>
                            <option>Choose Food Cuisine</option>
                            <option value="Cajun">Cajun</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Hot Dogs">Hot Dogs</option>
                            <option value="Seafood">Seafood</option>
                            <option value="Chinese">Chinese</option>
                        </select>
                        <div className="input-group-append" onClick={this.submitForm}>
                            <label className="input-group-text" htmlFor="inputGroupSelect02" id='cuisineBtn'>Submit</label>
                        </div>
                    </div>
                </div>
                <br></br>

                <br></br>


                {/* <Row id='homeRow1'> */}
                {this.state.results.map(item => (
                    <Col size="lg-12 sm-12" id="leftCol2">
                        <div className="imgCont2">
                            <h1 className='details2'>Truck: {item.truckName}</h1>
                            <img src={item.truckPic} alt={'Feature truck'} id='truckImgHome2' />
                            <div className='details'>
                                <h3 id='truckHead'>Menu: <img src={item.truckMenu} alt={'Truck Menu'} id='menuPic' /></h3>
                                <h3 id='truckHead'>Schedule: <img src={item.truckSchedule} alt={'Truck Schedule'} id='menuPic' /></h3>
                            </div>

                        </div>
                    </Col>
                ))}
                {/* </Row> */}


                <Container>
                    <Row>
                        <Col size="lg-12 sm-12">
                            <div className='featured'>
                                <p><b>Featured Trucks!</b></p>
                            </div>
                        </Col>
                    </Row>

                    <Row id='homeRow'>
                        <div className="imgCont">
                            <img src={placeHolder1} alt={'Feature truck'} id='truckImgHome' />
                            <Link className='featuredDisc' to='/featured1'>Sweet Temptations</Link>
                        </div>
                        <div className="imgCont">
                            <img src={placeHolder2} alt={'Feature truck'} id='truckImgHome' />
                            <Link className='featuredDisc' to='/featured2'>Hotdog Heaven</Link>
                        </div>
                    </Row>

                    <Row id='homeRow'>
                        <div className="imgCont">
                            <img src={placeHolder3} alt={'Feature truck'} id='truckImgHome' />
                            <Link className='featuredDisc' to='/featured3'>Zatachitos</Link>
                        </div>
                        <div className="imgCont">
                            <img src={placeHolder4} alt={'Feature truck'} id='truckImgHome' />
                            <Link className='featuredDisc' to='/featured4'>England Visits</Link>
                        </div>
                    </Row>
                    <Row id='homeRow'>
                        <div className="imgCont">
                            <img src={placeHolder5} alt={'Feature truck'} id='truckImgHome' />
                            <Link className='featuredDisc' to='/featured5'>Doughnut Delights</Link>
                        </div>
                        <div className="imgCont">
                            <img src={placeHolder6} alt={'Feature truck'} id='truckImgHome' />
                            <Link className='featuredDisc' to='/featured6'>The Teal Tavern</Link>
                        </div>
                    </Row>
                </Container>
            </Container >
        )
    }
}

export default PublicRoute