
// section of the home page

import React from "react"
import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Form from "./Form"
import Title from "./Title"
import Stats from "./Stats"
import Footer from "./Footer"
import Features from "./Features"


function App() {

  var [savedInput, setSavedInput] = useState("")   //  The state connected to the API
  var [main, setMain] = useState("")               //  Related to API data
  var [wind, setWind] = useState("")               //  Related to API data
  var [theWeather, setTheWeather] = useState("")   //  Related to API data
  var [theStats, setTheStats] = useState(false)    //  State responsible for showing and disappearing the results section

  useEffect(function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${savedInput}&appid=64b15dec72dea3abefff806d579e1177&units=metric`)
      .then(res => res.json())
      .then((res) => {
        const { main, weather, wind } = res
        const [theWeather] = weather
        setMain(main)
        setWind(wind)
        setTheWeather(theWeather);
      })
      .catch(err => console.log(err));
  }, [savedInput])

  return (
    <div>
      <Navbar />
      <Title />
      <Form
        setSavedInput={setSavedInput}
        setTheStats={setTheStats}
      />
      {theStats && <Stats
        savedInput={savedInput}
        temp={main?.temp}
        weather={theWeather?.main}
        weatherIcon={theWeather?.icon}
        pressure={main?.pressure}
        humidity={main?.humidity}
        wind={wind?.speed}
      />}
      <Features />
      <Footer />
    </div>
  )
}

export default App
