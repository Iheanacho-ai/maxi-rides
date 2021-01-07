import React from 'react';
import './header.styles.css'

const Header = () => (
    <div className = 'header'>
        <div className = 'header-container'>
            <div className = 'toggle-header' >
                <div className="nav-toggle-bar" >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h2>MAXI</h2>
            </div>
        </div>
    </div>
)

export default Header;