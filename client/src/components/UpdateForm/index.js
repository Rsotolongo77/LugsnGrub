import React from 'react';
import Form from '../Form';
import { Col, Row, Container } from "../../components/Grid";
import './style.css';
import API from "../../utils/API"
import { truckId } from "../TruckMgt"
import axios from 'axios';


class TruckForm extends React.Component {
    state = {
        id: truckId,
        truckName: "",
        truckPic: "",
        truckMenu: "",
        truckSchedule: "",
        truckCuisine: "",
        image: "",
        menu: "",
        schedule: "",
        file: "",
        filename: "Choose a File",
        file2: "",
        filename2: "Choose a File",
        file3: "",
        filename3: "Choose a File",
        uploadedFile: {},
        uploadedFile2: {},
        uploadedFile3: {},
        message: "",
        displayImage: "",
        displayMenu: "",
        displaySchedule: "",
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
                    displayMenu: truck.truckMenu,
                    displaySchedule: truck.truckSchedule


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

    onChange3 = e => {
        this.setState({
            file2: e.target.files[0],
            filename2: e.target.files[0].name
        })

    }

    onChange4 = e => {
        this.setState({
            file3: e.target.files[0],
            filename3: e.target.files[0].name
        })

    }

    onSubmit = async e => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", this.state.file);
        // formData.append("file2", this.state.file);
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

    onSubmit2 = async e => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", this.state.file2);
        axios.post("/upload", formData)
            .then(res => {
                const { fileName, filePath } = res.data;
                console.log(filePath)
                this.setState({
                    uploadedFile2: {
                        fileName: fileName,
                        filePath: filePath
                    },
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

    onSubmit3 = async e => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", this.state.file3);
        axios.post("/upload", formData)
            .then(res => {
                const { fileName, filePath } = res.data;
                console.log(filePath)
                this.setState({
                    uploadedFile3: {
                        fileName: fileName,
                        filePath: filePath
                    },
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
            truckMenu: this.state.uploadedFile2.filePath,
            truckSchedule: this.state.uploadedFile3.filePath,
            truckCuisine: this.state.truckCuisine
        })

            .then(res => {
                console.log(res)
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
                                    onChangeInput2={this.onChange3}
                                    onChangeInput3={this.onChange4}
                                    handleInputChange={this.handleInputChange}
                                    handleFormSubmit={this.handleFormSubmit}
                                    handleImageSubmit={this.onSubmit}
                                    handleMenuSubmit={this.onSubmit2}
                                    handleScheduleSubmit={this.onSubmit3}
                                    truckName={this.state.truckName}
                                    id={this.state.truckName}
                                    truckPic={this.state.filename}
                                    imageInput={this.state.image}
                                    truckMenu={this.state.filename2}
                                    truckSchedule={this.state.filename3}
                                    scheduleInput={this.state.schedule}
                                    menuInput={this.state.menu}
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