import React from 'react';
import FacebookImg from '../../assets/Group-3.png';
import TwitterImg from '../../assets/Path-13.png';
import LinkedinImg from '../../assets/Path-15.png';
import './footer.styles.css';

const Footer = () => (
    <div className = 'footer'>
        <div className = 'footer-container'>
            <div className = 'terms-container'>
                <div className= 'border-right'  > Terms of Service</div>
                <div>Privacy Policy</div>
            </div>
            <div className = 'actual-footer'>
                <div className = 'rights-div'>
                    <p> All rights reserved. Wakawithme, a Maxi company © 2020</p>
                </div>
                <div className = 'social-media'>
                    <div style= {{backgroundImage:`url(${FacebookImg})`}}></div>
                    <div style= {{backgroundImage:`url(${TwitterImg})`}}></div>
                    <div style= {{backgroundImage:`url(${LinkedinImg})`}}></div>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;