import React from 'react';
import './email-collation.styles.css';


const EmailCollation = () => (
    <div className = 'email-collation'>

        <div className = 'email-collation-container'>
      <p> Drop your email to be informed about when we launch!</p>

        <div className="email-collation-input-div">
            <input type="email" name="email"/>
            <button>Submit</button></div>
        </div>
    
    </div>
);

export default EmailCollation;