import React from 'react';
import "./Weather.css";
import search from "../assets/search_icon.png";
import sunny from "../assets/sunny.png";
import cloudy from "../assets/cloudy.png";
import rain from "../assets/rain.png";

const Weather = () => {
  return (
    <div className='weather'>
        <div className='searching'>
            <input type='text' placeholder='Search'></input>
            <img src={search} alt=''></img>
        </div>
        <img src=''></img>
    </div>
  )
}

export default Weather