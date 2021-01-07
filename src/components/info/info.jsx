import React from 'react';
import WakaWithMeImg from '../../assets/Group-2.png';
import TrackYourRidesImg from '../../assets/Track-your-rides.png';            
import BusinessImg from '../../assets/Business.png'; 
import './info.styles.css';

const Info = () => (
    <div className = 'info'>
            <div className= 'info-container'>
                <div className = 'info-div'>
                    <div className= 'icons' style= {{backgroundImage:`url(${WakaWithMeImg})`}}></div>
                    <div className= 'icons-preview'>
                        <h3>Wakawithme</h3>
                        <p className = 'info-p'>The perfect way to go to work everyday in the City. Work Taxi are available 5 working days(Weekly subscription,
                        With rides sharing as low as 20naira/km, 
                        you get paired to a pilot that works in the same direction as you do</p>
                    </div>
                </div>
                <div className = 'info-div'>
                    <div className= 'icons' style= {{backgroundImage:`url(${TrackYourRidesImg})`}}></div>
                    <div className= 'icons-preview'>
                        <h3>Track your rides</h3>
                        <p className = 'info-p'>From the moment your Pilot is assigned till you get to your destination, track your ride real time or share your details with your love ones.</p>
                    </div>
                </div>
                <div className = 'info-div'>
                    <div className= 'icons' style= {{backgroundImage:`url(${BusinessImg})`}}></div>
                    <div className= 'icons-preview'>
                        <h3>Business</h3>
                        <p className = 'info-p'>A new concept of corporate transport. Your employees or clients can travel in the quickest, and safer way there is. From one simple platform, control all the costs, follow all journeys in real price.</p>
                    </div>
                </div>
            </div>
    </div>
)

export default Info;