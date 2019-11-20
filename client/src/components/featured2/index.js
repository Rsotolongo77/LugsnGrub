import React, { Component } from "react";
import placeHolder2 from './placeHolder2.jpg';
import hotDogMenu from './hotDogMenu.jpg';
import truckSchedule from './truckSchedule.jpg';
import { Container } from "../Grid";
import './style.css'



class featured2 extends Component {

    render() {
        return (
            <Container fluid>
                <div id='contDiv'>
                    <div className='details'>
                        <h1 id='truckHeadMain1'>Hotdog Heaven</h1>
                        <img src={placeHolder2} alt={'Feature truck'} id='detailsPic1' />



                        <h2 id='truckHead'>Menu: <img src={hotDogMenu} alt={'Truck Menu'} id='menuPic1' /></h2>
                        <h2 id='truckHead'>Schedule: <img src={truckSchedule} alt={'Truck Schedule'} id='menuPic1' /></h2>


                    </div>
                </div>

            </Container>

        );
    }


}

export default featured2;