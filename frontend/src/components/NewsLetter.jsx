/* eslint-disable no-unused-vars */
import React from 'react'
import './css/NewsLetter.css'
const NewsLetter = () =>{
    return (
        <div className="newsletter ">
            <h1 className='text-gray-800 '>Receive Special Deals via Email</h1>
            <p className='text-gray-800 '>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" name="" id="" placeholder='Your Email Adress'/>
                <button className='bg-gray-800 '>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter