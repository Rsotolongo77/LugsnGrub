import React from 'react';
import { Container } from "../../components/Grid";
import API from "../../utils/API"
import { usernameTransfer } from "../../components/Login";
// import Cajunfoodtruck from "../TruckImages/Cajun foodtruck.jpg";
import { Link } from 'react-router-dom';
import './style.css';


let truckId;


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
    getId = (id) => {
        truckId = id
        this.routeChange()

    }

    routeChange() {
        let path = "/updateform";
        this.props.history.push(path);
    }

    deleteTruck = id => {
        API.deleteTruck(id)
            .then(res => this.getTrucks())
            .catch(err => console.log(err));
    };

    render() {
        return (

            <Container fluid >

                <div id='contDiv'>

                    <h1 id='header'>Truck Management Page</h1>
                    <Link id='createBtn' to="/users"
                    >
                        Create Truck
                                </Link>


                    <hr id='line'></hr>
                    {this.state.user.map((truck, i) => (



                        < div key={i} >
                            <br></br>
                            <br></br>
                            <h2 id='truckHeadMain'>Truck Name: {truck.truckName}</h2>
                            <img src={truck.truckPic} alt={'Feature truck'} id='detailsPic' />
                            <div className='details'>



                                <h3 id='truckHead'>Menu: <img src={truck.truckMenu} alt={'Truck Menu'} id='menuPic' /></h3>





                                {/* <button type="button" className="btn btn-primary" id="modalBtn" data-toggle="modal" data-target=".bd-example-modal-lg">View Menu</button>

                                    <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content" id="menuModal">
                                                <img src={truck.truckMenu} alt={'Truck Menu'} id='menuPic' />
                                            </div>
                                        </div>
                                    </div> */}


                                {/* <img src={truck.truckMenu} alt={'Truck Menu'} id='menuPic' /> */}
                                {/* <h3 id='truckHead'>Menu: {truck.truckMenu}</h3> */}


                                <h3 id='truckHead'>Schedule: {truck.truckSchedule}</h3>
                                <h3 id='truckHead'>Cuisine: {truck.truckCuisine}</h3>
                                <Link id='updateBtn'
                                    onClick={() => this.getId(truck._id)}
                                    to="/updateform"
                                >
                                    Update Truck
                                </Link>
                                <Link id='deleteBtn'
                                    onClick={() => this.deleteTruck(truck._id)}
                                    to="/truckmgt"
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

export { TruckMgt, truckId };