import React from 'react';
import axios from "axios";
import {
    // BrowserRouter as Router,
    // Route,
    // Link,
    // Redirect,
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
        truckCuisine: "",
        image: "",
        file: "",
        filename: "Choose a File",
        uploadedFile: {},
        message: "",
        displayImage: truckplaceholder
    };

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

        API.submitTruck({
            username: usernameTransfer,
            truckName: this.state.truckName,
            truckPic: this.state.uploadedFile.filePath,
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
                            <img src={this.state.displayImage} alt={'Truck Mgt'} id='truckPlaceHolder' />
                        </Col>
                        <Col size="md-6 sm-12">
                            <div className='truckDetails'>
                                <Form
                                    onChangeInput={this.onChange2}
                                    handleInputChange={this.handleInputChange}
                                    handleFormSubmit={this.handleFormSubmit}
                                    handleImageSubmit={this.onSubmit}
                                    id={this.state.truckName}
                                    truckName={this.state.truckName}
                                    truckPic={this.state.filename}
                                    imageInput={this.state.image}
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











import React from "react";
// import {
//   // BrowserRouter as Router,
//   // Route,
//   // Link,
//   // Redirect,
//   // Switch,
//   // withRouter
// } from 'react-router-dom';



function Form(props) {


    return (
        <div>
            <form onSubmit={props.handleImageSubmit}>
                <div className="custom-file mb-4">
                    <input
                        type="file"
                        className="custom-file-input"
                        value={props.imageInput}
                        name="image"
                        id="truckPic"
                        onChange={props.onChangeInput}
                    />
                    <label
                        className="custom-file-label"
                        htmlFor="truckPic">{props.truckPic}
                    </label>
                </div>
                <input type="submit" value="Upload Image" className="btn btn-primary btn-block mt-4" />
            </form>
            <form>
                <div className="form-group">
                    <label htmlFor="Query">
                    </label>
                    <input
                        className="form-control"
                        id="truckName"
                        type="text"
                        value={props.truckName}
                        placeholder="Truck Name"
                        name="truckName"
                        onChange={props.handleInputChange}
                        required
                    />

                    {/* <br></br>

        <input
          className="custom-file-input"
          id="truckPic"
          type="file"
          value={props.imageInput}
          // placeholder={props.truckPic}
          name="image"
          onChange={props.onChangeInput}
          required
        />
        <label 
        className="custom-file-label" 
        htmlFor="truckPic">{props.truckPic}</label> */}

                    {/* <input 
          type="file" 
          className="custom-file-input form-control" 
          id="truckPic"
          value={props.truckPic} 
          name="image" 
          onChange={props.onChangeInput} /> */}

                    <br></br>

                    <input
                        className="form-control"
                        id="truckMenu"
                        type="text"
                        value={props.truckMenu}
                        placeholder="Menu"
                        name="truckMenu"
                        onChange={props.handleInputChange}
                        required
                    />

                    <br></br>

                    <input
                        className="form-control"
                        id="truckSchedule"
                        type="text"
                        value={props.truckSchedule}
                        placeholder="Schedule"
                        name="truckSchedule"
                        onChange={props.handleInputChange}
                        required
                    />

                    <br></br>

                    <input
                        className="form-control"
                        id="truckCuisine"
                        type="text"
                        value={props.truckCuisine}
                        placeholder="Cuisine"
                        name="truckCuisine"
                        onChange={props.handleInputChange}
                        required
                    />

                    <br></br>

                </div>
                <div className="pull-right">
                    <button
                        onClick={props.handleFormSubmit}
                        type="submit"
                        className="btn btn-lg btn-danger float-right"
                    >

                        Submit
        </button>
                </div>
            </form >
        </div>
    );
}

export default Form;

















import React from 'react';
import axios from "axios";
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
import truckPlaceHolder from "../TruckImages/fishnchips foodtruck.jpg"




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
        file: "",
        filename: "Choose a File",
        uploadedFile: {},
        message: "",
        displayImage: ""
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
                    displayImage: truck.truckPic


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
        API.updateTruck({
            truckName: this.state.truckName,
            truckPic: this.state.uploadedFile.filePath,
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
                                    id={this.state.truckName}
                                    truckName={this.state.truckName}
                                    truckPic={this.state.filename}
                                    imageInput={this.state.image}
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