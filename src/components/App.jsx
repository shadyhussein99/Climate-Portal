
// section of the home page

import React from "react"
import { useState } from "react"
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

  return (
    <div>
      <Navbar />
      <Title />
      <Form
        savedInput={savedInput}
        setSavedInput={setSavedInput}
        setTheStats={setTheStats}
        setMain={setMain}
        setWind={setWind}
        setTheWeather={setTheWeather}
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
