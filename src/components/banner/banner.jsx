import React from 'react';
import BannerImg from '../../assets/maxi-rides-banner.png';
import './banner.styles.css';


const Banner = () => (
    <div className = 'banner' style= {{backgroundImage:`url(${BannerImg})`}}>
        <div className = 'book-now-container'>
            <h1>Ecofriendly rides at your fingertips</h1>
            <button>Book Now</button>
        </div>
    </div>
);

export default Banner;