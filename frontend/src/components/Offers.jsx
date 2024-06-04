/* eslint-disable no-unused-vars */
import React from "react";
import './css/Offers.css'
import exclusive_image from './Assets/special_image.png'

const Offers = ()=> {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Special</h1>
                <h1>Deal For You</h1>
                <p>TOP-SELLING ITEMS ONLY</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div> 
    )
}
export default Offers