import React from 'react';            
import NoCashImg from '../../assets/no-cash.png';            
import ProtectionImg from '../../assets/x-19-512.png';            
import JourneyTrackingImg from '../../assets/mapping.png';            
import SafeLockImg from '../../assets/green-lock.png';            
import MessagesImg from '../../assets/chat-icons.png';
import './why-maxi.styles.css';

const WhyMaxi = () => (
    <div className = 'why-maxi'>
        <h2>Why Maxi?</h2>
        <div className= 'why-maxi-container' >
            <div className= 'why-maxi-box'>
                <div className = 'why-max-icon' style= {{backgroundImage:`url(${NoCashImg})`}}></div>
                <div className= 'why-maxi-info'>
                    <h5>Cashless Rides</h5>
                    <p>Now go cashless and travel easy, 
                        add your credit or debit card to enjoy.</p>
                </div>
            </div>
            <div className= 'why-maxi-box'>
                <div className = 'why-max-icon' style= {{backgroundImage:`url(${ProtectionImg})`}}></div>
                <div className= 'why-maxi-info'>
                    <h5>Protection against Covid 19 </h5>
                    <p>Extra safety and hygiene so that 
                    you can ride around the city as safely as ever.</p>
                </div>
            </div>
            <div className= 'why-maxi-box'>
                <div className = 'why-max-icon' style= {{backgroundImage:`url(${JourneyTrackingImg})`}}></div>
                <div className= 'why-maxi-info'>
                    <h5>Journey Tracking</h5>
                        <p>Each Journey is tracked 
                        and you can share your route in 
                        real-time so your friends and family can track you</p>
                </div>
            </div>
            <div className= 'why-maxi-box'>
                <div className = 'why-max-icon'  style= {{backgroundImage:`url(${SafeLockImg})`}}></div>
                <div className= 'why-maxi-info'>
                    <h5>Secure and 
                    Safer Rides</h5>
                    <p>Verified drivers, a button for emergencies, 
                    and live ride tracking are some of the features 
                    we have to ensure you a safe travel experience. </p>
                </div>
            </div>
        </div>
        <div className = 'final-maxi-info'>
            <div className = 'why-max-icon center-icon' style= {{backgroundImage:`url(${MessagesImg})`}}></div>
            <div className= 'why-maxi-info'>
                <h5>We're here for you</h5>
                <p>Our customer support teamis her to help you
                and answer any questionyou might have</p>
            </div>
        </div>

        <div className = 'disclaimer'>
            <h1>"RIDEFARES ARE FIXED REGARDLESS OF TRAFFIC"</h1>
            <h1>"NO MORE GOING TO WORK LATE"</h1>
            
        </div>
    </div>
);

export default WhyMaxi;