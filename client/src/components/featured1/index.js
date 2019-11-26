import React, { Component } from "react";
import placeHolder1 from './placeHolder1.jpg';
import icecreamMenu from './icecreamMenu.jpg';
import truckSchedule from './truckSchedule.jpg';
import { Container } from "../Grid";
import './style.css'



class featured1 extends Component {



    render() {
        return (
            <Container fluid>
                <div id='contDiv'>
                    <div className='details'>
                        <h1 id='truckHeadMain1'>Sweet Temptations</h1>
                        <img src={placeHolder1} alt={'Feature truck'} id='detailsPic1' />



                        <h2 id='truckHead'>Menu: <img src={icecreamMenu} alt={'Truck Menu'} id='menuPic1' /></h2>
                        <h2 id='truckHead'>Schedule: <img src={truckSchedule} alt={'Truck Schedule'} id='menuPic1' /></h2>


                    </div>
                </div>

            </Container>

        );
    }


}

export default featured1;