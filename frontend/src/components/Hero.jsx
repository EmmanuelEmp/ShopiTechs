/* eslint-disable no-unused-vars */
import React from "react";
import './css/Hero.css';
// import hand_icon from './Assets/hand_icon.png'
import arrow from './Assets/arrow.png'
import hero_image from './Assets/hero_image6.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW PRODUCTS</h2>
                <div className="para">
                    <div className="hero-hand-icon">
                        <p>Latest</p>
                        {/* <img src={hand_icon} alt="" /> */}
                    </div>
                    <p>gadgets for</p>
                    <p>all tech lovers</p>
                </div>
                <div className="hero-latest-btn">
                    <div>New Arrivals</div>
                    <img className="arrow" src={arrow} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
                {/* <div className="line">
                <hr />
                </div> */}
            </div>
          
        </div>
    )
}

export default Hero