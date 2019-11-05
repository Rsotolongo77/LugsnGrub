import React from 'react';
import Form from '../Form';
import truckplaceholder from './truckplaceholder.jpg';
import { Col, Row, Container } from "../../components/Grid";
import './style.css';
import API from "../../utils/API"




class TruckForm extends React.Component {
    // track all the form values in state
    state = {
        id: "",
        truckName: "",
        truckPic: "",
        truckMenu: "",
        truckSchedule: "",
        truckCuisine: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.submitTruck({
            truckName: this.state.truckName,
            truckPic: this.state.truckPic,
            truckMenu: this.state.truckMenu,
            truckSchedule: this.state.truckSchedule,
            truckCuisine: this.state.truckCuisine

        })
            .then(res => console.log(res)
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid >
                <br></br>
                <br></br>

                <div className='truckLanding'>
                    <Row>
                        <Col size="md-6 sm-12">
                            <img src={truckplaceholder} alt={'Truck Mgt'} id='truckPlaceHolder' />
                        </Col>
                        <Col size="md-6 sm-12">
                            <div className='truckDetails'>
                                <Form
                                    handleInputChange={this.handleInputChange}
                                    handleFormSubmit={this.handleFormSubmit}
                                    id={this.state.truckName}
                                    truckName={this.state.truckName}
                                    truckPic={this.state.truckPic}
                                    truckMenu={this.state.truckMenu}
                                    truckSchedule={this.state.truckSchedule}
                                    truckQuisine={this.state.truckQuisine}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </ Container >

        )
    }
}

export default TruckForm;