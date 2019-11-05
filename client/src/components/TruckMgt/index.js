import React from 'react';
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API"
import './style.css';
import { usernameTransfer } from "../../components/Login";
import Cajunfoodtruck from "../TruckImages/Cajun foodtruck.jpg";
import './style.css';


class TruckMgt extends React.Component {

    state = {
        user: []
    }
    componentDidMount() {
        console.log("TRUCKMGMT")
        this.getTrucks()
    }

    getTrucks = () => {
        console.log(usernameTransfer)
        API.getTrucks(usernameTransfer)
            .then(data => {

                this.setState({
                    user: data.data[0].trucks

                })
                console.log(this.state.user)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid >

                <div id='contDiv'>

                    <h1 id='header'>Truck Management Page</h1>
                    {this.state.user.map(truck => (
                        <div>
                            <br></br>
                            <h2 id='truckHeadMain'>Truck Name: {truck.truckName}</h2>
                            <img src={Cajunfoodtruck} alt={'Feature truck'} />
                            <h3 id='truckHead'>Truck Menu: {truck.truckMenu}</h3>
                            <h3 id='truckHead'>Truck Schedule: {truck.truckSchedule}</h3>
                            <h3 id='truckHead'>Truck Cuisine: {truck.truckCuisine}</h3>
                            <br></br>
                        </div>

                    ))


                    }

                </div>

            </ Container >

        )
    }

}

export default TruckMgt;