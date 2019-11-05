import React from 'react';
import './style.css'
import { Container } from '../Grid';
import truckRepairPic from './truckRepairPic.jpg';

class user extends React.Component {
    render() {
        return (
            <Container>
                <div className='ownerLanding'>
                    <h1>Welcome to your truck management page!</h1>
                    <h4>We are excited to have join our community as we try and bring customer and truck owner together. </h4>
                    <div className='ownerLandingBtn'>
                        <br></br>
                        <div className="stitched">
                            <button className='btn1'>Create Truck!</button>
                            <button className='btn1'>Update Truck</button>
                            <button className='btn1'>Delete Truck</button>
                        </div>
                        <br></br>
                        <img src={truckRepairPic} alt={'Truck Mgt'} id='repairPic' />
                    </div>
                </div>
            </Container>
        )
    }
}

export default user;