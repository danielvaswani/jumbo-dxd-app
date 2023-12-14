import React from 'react';
import './DeliciouslyClever.css';
import robotchef from '../img/Group.svg';
import s1 from '../img/s1.png';
import s2 from '../img/s2.png';
const DeliciouslyClever = () => {
    return (
        <div className="deliciously-clever-wrapper">
            <div className="clever-header">
                <div className="clever-content">
                    <h2>Deliciously clever!</h2>
                <p>Your recipes, your style! Freshly made by our Robot Chef</p>
                </div>
               
                
                <div className="food-clever-container">
<img alt='s2' src={s2}></img>
<img alt='s1' src={s1}></img></div>
<img alt='robotchef' src={robotchef}></img>


            </div>
        
        </div>
    );
};

export default DeliciouslyClever;
