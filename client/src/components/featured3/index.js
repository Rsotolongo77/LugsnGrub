import React, { Component } from "react";
import placeHolder3 from './placeHolder3.jpg';
import tacosMenu from './tacosMenu.jpg';
import truckSchedule from './truckSchedule.jpg';
import { Container } from "../Grid";
import './style.css'



class featured3 extends Component {

    render() {
        return (
            <Container fluid>
                <div id='contDiv'>
                    <div className='details'>
                        <h1 id='truckHeadMain1'>Zatachitos</h1>
                        <img src={placeHolder3} alt={'Feature truck'} id='detailsPic1' />



                        <h2 id='truckHead'>Menu: <img src={tacosMenu} alt={'Truck Menu'} id='menuPic1' /></h2>
                        <h2 id='truckHead'>Schedule: <img src={truckSchedule} alt={'Truck Schedule'} id='menuPic1' /></h2>


                    </div>
                </div>

            </Container>

        );
    }


}

export default featured3;