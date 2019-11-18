import React from 'react';
import {
    // BrowserRouter as Router,
    // Route,
    // Link,
    // Redirect,
    // Switch,
    // withRouter
} from 'react-router-dom';
import Form from '../Form';
// import truckplaceholder from './truckplaceholder.jpg';
import { Col, Row, Container } from "../../components/Grid";
import './style.css';
import API from "../../utils/API"
// import { usernameTransfer } from "../../components/Login";
import { truckId } from "../TruckMgt"
import truckPlaceHolder from "../TruckImages/fishnchips foodtruck.jpg";
import axios from 'axios';


class TruckForm extends React.Component {
    // track all the form values in state
    state = {
        id: truckId,
        truckName: "",
        truckPic: "",
        truckMenu: "",
        truckSchedule: "",
        truckCuisine: "",
        image: "",
        menu: "",
        file: "",
        filename: "Choose a File",
        uploadedFile: {},
        message: "",
        displayImage: "",
        displayMenu: ""
    };
    componentDidMount() {
        console.log(truckId)
        this.getTruck()


    }

    getTruck = () => {
        console.log(truckId)
        API.getTruck(truckId)
            .then(data => {

                let truck = data.data[0]


                this.setState({
                    truckName: truck.truckName,
                    truckPic: truck.truckPic,
                    truckMenu: truck.truckMenu,
                    truckSchedule: truck.truckSchedule,
                    truckCuisine: truck.truckCuisine,
                    displayImage: truck.truckPic,
                    displayMenu: truck.truckMenu


                })
                console.log(this.state.user)
            })
            .catch(err => console.log(err))


    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onChange2 = e => {
        this.setState({
            file: e.target.files[0],
            filename: e.target.files[0].name
        })

    }

    onSubmit = async e => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", this.state.file);
        axios.post("/upload", formData)
            .then(res => {
                const { fileName, filePath } = res.data;
                console.log(filePath)
                this.setState({
                    uploadedFile: {
                        fileName: fileName,
                        filePath: filePath
                    },
                    displayImage: filePath,
                    displayMenu: filePath,
                    message: "File Uploaded"
                })
            })
            .catch(err => {
                if (err.response.status === 500) {
                    this.setState({
                        message: "There was a problem with the server"
                    })
                } else {
                    console.log(err.response.data.msg)
                    this.setState({
                        message: err.response.data.msg
                    })
                }
            })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.updateTruck(truckId, {
            truckName: this.state.truckName,
            truckPic: this.state.uploadedFile.filePath,
            // truckMenu: this.state.truckMenu,
            truckMenu: this.state.uploadedFile.filePath,
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
                        <Col size="md-6 sm-12">
                            <img src={this.state.displayImage} alt={'Truck Mgt'} id='truckPlaceHolder' />
                        </Col>
                        <Col size="md-6 sm-12">
                            <div className='truckDetails'>
                                <Form
                                    onChangeInput={this.onChange2}
                                    handleInputChange={this.handleInputChange}
                                    handleFormSubmit={this.handleFormSubmit}
                                    handleImageSubmit={this.onSubmit}
                                    truckName={this.state.truckName}
                                    id={this.state.truckName}
                                    truckPic={this.state.filename}
                                    imageInput={this.state.image}
                                    truckMenu={this.state.filename}
                                    // truckMenu={this.state.truckMenu}
                                    truckSchedule={this.state.truckSchedule}
                                    truckCuisine={this.state.truckCuisine}
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