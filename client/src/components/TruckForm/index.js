import React from 'react';
import {
    // BrowserRouter as Router,
    // Route,
    // Link,
    Redirect,
    // Switch,
    // withRouter
} from 'react-router-dom';
import Form from '../Form';
import truckplaceholder from './truckplaceholder.jpg';
import { Col, Row, Container } from "../../components/Grid";
import './style.css';
import API from "../../utils/API"
import { usernameTransfer } from "../../components/Login";




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
            username: usernameTransfer,
            truckName: this.state.truckName,
            truckPic: this.state.truckPic,
            truckMenu: this.state.truckMenu,
            truckSchedule: this.state.truckSchedule,
            truckCuisine: this.state.truckCuisine

        })
            .then(res => {
                console.log(res)
                // window.location = "/truckmgt";
                // return < Redirect to='/truckmgt' />
                this.routeChange()
            })
            .catch(err => console.log(err));
    }

    routeChange() {
        let path = "/truckmgt";
        this.props.history.push(path);
    }


    render() {
        return (
            <Container fluid >
                <br></br>
                <br></br>

                <div className='truckLanding'>
                    <Row>
                        {/* <Link to="/truckmgt">Truck Management</Link> */}
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