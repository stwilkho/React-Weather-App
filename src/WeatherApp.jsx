import React, { useState } from "react"
import humidity from "../src/Assets/humidity.png"
import rain from "../src/Assets/rain.png"
import search from "../src/Assets/search.png"
import snow from "../src/Assets/snow.png"
import wind from "../src/Assets/wind.png"
import cloud from "../src/Assets/cloud.png"
import drizzle from "../src/Assets/drizzle.png"
import clear from "../src/Assets/clear.png"
import "./WeatherApp.css"

const WeatherApp = () => {
  const apiKey = "fb4917a1bd6f5b80d2a99ccd895c9a90"

  const [wicon, setWicon] = useState(clear)

  const searchF = async () => {
    const element = document.getElementsByClassName("cityInput")

    if (element[0].value === "") {
      return 0
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`

    const response = await fetch(url)

    const data = await response.json()

    const humidity = document.getElementsByClassName("humidityPercent")

    const wind = document.getElementsByClassName("windSpeed")

    const location = document.getElementsByClassName("location")

    const temp = document.getElementsByClassName("temp")

    humidity[0].innerHTML = data.main.humidity + " %"
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h"
    temp[0].innerHTML = Math.floor(data.main.temp) + " °C"
    location[0].innerHTML = data.name

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear)
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloud)
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzle)
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzle)
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rain)
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rain)
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snow)
    } else {
      setWicon(clear)
    }
  }

  return (
    <div className="container">
      <div className="topBar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="searchIcon"
          onClick={() => {
            searchF()
          }}
        >
          <img src={search} alt="" />
        </div>
      </div>

      <div className="weatherImage">
        <img src={wicon} alt="" />
      </div>

      <div className="temp">21°C</div>
      <div className="location">Cape Town</div>

      <div className="dataContainer">
        <div className="elementHumid">
          <img src={humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidityPercent">53%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="elementWind">
          <img src={wind} alt="" className="icon" />
          <div className="data">
            <div className="windSpeed">19 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
