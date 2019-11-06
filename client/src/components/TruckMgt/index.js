import React from 'react';
import { Container } from "../../components/Grid";
import API from "../../utils/API"
import './style.css';
import { usernameTransfer } from "../../components/Login";
import Cajunfoodtruck from "../TruckImages/Cajun foodtruck.jpg";
import './style.css';
import { Link } from 'react-router-dom';


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
                    <hr id='line'></hr>
                    {this.state.user.map(truck => (
                        <div>
                            <br></br>
                            <br></br>
                            <h2 id='truckHeadMain'>Truck Name: {truck.truckName}</h2>
                            <img src={Cajunfoodtruck} alt={'Feature truck'} id='detailsPic' />
                            <div class='details'>

                                <h3 id='truckHead'>Menu: {truck.truckMenu}</h3>
                                <h3 id='truckHead'>Schedule: {truck.truckSchedule}</h3>
                                <h3 id='truckHead'>Cuisine: {truck.truckCuisine}</h3>
                                <Link id='updateBtn'
                                    onClick={this.toggleNav}
                                    className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                    to="/truckform"
                                >
                                    Update Truck
                                </Link>
                                <Link id='deleteBtn'
                                    onClick={this.toggleNav}
                                    className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                                    to="/truckform"
                                >
                                    Delete Truck
                                </Link>

                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
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