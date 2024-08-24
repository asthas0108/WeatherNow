import React from 'react';
import "./Weather.css";
import search from "../assets/search_icon.png";

const Weather = () => {
  return (
    <div className='weather'>
        <div className='searching'>
            <input type='text' placeholder='Search'></input>
            <img src={search} alt=''></img>
        </div>
    </div>
  )
}

export default Weather