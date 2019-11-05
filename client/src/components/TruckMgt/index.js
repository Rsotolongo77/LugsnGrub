import React from 'react';
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API"
import './style.css';
import { usernameTransfer } from "../../components/Login";


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
                <br></br>
                <br></br>

                <div className='truckLanding'>
                    <Row>
                        {this.state.user.map(truck => (
                            <div>
                                <p>{truck.truckName}</p>
                                <p>{truck.truckPic}</p>
                                <p>{truck.truckMenu}</p>
                                <p>{truck.truckSchedule}</p>
                            </div>

                        ))


                        }

                    </Row>
                </div>
            </ Container >

        )
    }

}

export default TruckMgt;