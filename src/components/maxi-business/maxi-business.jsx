import React from 'react';
import MaxiBusinessImg from '../../assets/maxi-business.png';
import './maxi-business.styles.css'

const MaxiBusiness = () => (
    <div className = 'maxi-business'>
        <div className= 'maxi-business-container'>
            <div className= 'maxi-business-info'>
                <h2>Maxi Business</h2>
                <p>A new concept of corporate transport. 
                    Your employees or clients can travel in the quickest,
                    and safer way there is. From one simple platform, 
                    control all the costs, follow all journeys in real price.
                </p>
            </div>
            <div className = 'maxi-business-photo' style= {{backgroundImage:`url(${MaxiBusinessImg})`}}></div>
        </div>
    </div>
);

export default MaxiBusiness;