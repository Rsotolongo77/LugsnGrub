import React, { Component } from "react";
import placeHolder6 from './placeHolder6.jpg';
import mixedMenu from './mixedMenu.jpg';
import truckSchedule from './truckSchedule.jpg';
import { Container } from "../Grid";
import './style.css'



class featured3 extends Component {

    render() {
        return (
            <Container fluid>
                <div id='contDiv'>
                    <div className='details'>
                        <h1 id='truckHeadMain1'>The Teal Tavern</h1>
                        <img src={placeHolder6} alt={'Feature truck'} id='detailsPic1' />



                        <h2 id='truckHead'>Menu: <img src={mixedMenu} alt={'Truck Menu'} id='menuPic1' /></h2>
                        <h2 id='truckHead'>Schedule: <img src={truckSchedule} alt={'Truck Schedule'} id='menuPic1' /></h2>


                    </div>
                </div>

            </Container>

        );
    }


}

export default featured3;