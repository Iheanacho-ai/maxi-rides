import React from 'react';
import PlaystoreImg from '../../assets/playstore.png'; 
import MaxiphoneImg from '../../assets/maxi-phonee.png'; 
import AppinfoImg from '../../assets/app-info.png'; 
import './download-app.styles.css'; 

const DownloadApp = () => (
    <div className = 'download-app'>
        <div>
            <h2>Download our mobile app</h2>
            <div className = 'playstore-img' style= {{backgroundImage:`url(${PlaystoreImg})`}} ></div>
        </div>
        <div className = 'download-app-image'  style= {{backgroundImage:`url(${MaxiphoneImg})`}}></div>
        <div className= 'app-info' style= {{backgroundImage:`url(${AppinfoImg})`}}></div>
    </div>
);

export default DownloadApp;