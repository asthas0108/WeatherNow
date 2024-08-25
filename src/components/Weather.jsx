import React, { useEffect, useRef, useState } from 'react';
import "./Weather.css";
import search from "../assets/search_icon.png";
import sunny from "../assets/sunny.png";
import cloudy from "../assets/cloudy.png";
import rain from "../assets/rain.png";
import drizzle from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import wind from "../assets/wind.png";
import snow from "../assets/snow.png";

const Weather = () => {

  const inputRef = useRef();

  const allIcons = {
    "01d": sunny,
    "01n": sunny,
    "02d": cloudy,
    "02n": cloudy,
    "03d": cloudy,
    "03n": cloudy,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  }

  const [weatherData, setWeatherData] = useState(false);

  const searchWeather = async (city)=> {

    if(city === ""){
      alert("Enter the city name");
      return;
    }

    try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_KEY}`;

      const res = await fetch(url);
      const data = await res.json();

      if(!res.ok){
        alert(data.message);
        return ;
      }

      console.log(data);

      const icon = allIcons[data.weather[0]] || sunny;

      setWeatherData({
        humidity: data.main.humidity,
        wind: data.wind.speed,
        temp: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      })

    }catch(error){
        setWeatherData(false);
        console.error("error in fetching weather")
    }
  }

  useEffect(()=>{
    searchWeather("New York")
  },[]);

  return (
    <div className='weather'>
        <div className='searching'>
            <input ref={inputRef} type='text' placeholder='Search'></input>
            <img src={search} alt='' onClick={()=>{searchWeather(inputRef.current.value)}}></img>
        </div>

        {weatherData ? 
        <>
          <img src={weatherData.icon} className='weather-icon'></img>
        <p className='temparatue'>{weatherData.temp} &deg;C</p>
        <p className='location'>{weatherData.location}</p>

        <div className='weather-data'>
          <div className='col'>
            <img src={humidity_icon}></img>
            <div>
              <p>{weatherData.humidity}%</p>
              <span>Humidity</span>
            </div>
          </div>

          <div className='col'>
            <img src={wind}></img>
            <div>
              <p>{weatherData.wind} km/hr</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
        </> : <></>}
    </div>
  )
}

export default Weather;