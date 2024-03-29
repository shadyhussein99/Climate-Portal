
// The section where the user enters the requested city

import React from "react"
import { useState, useEffect } from "react"

function Form(props) {

    var [userInput, setUserInput] = useState("")   // saves the user input before clicking to get the results

    useEffect(function () {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.savedInput}&appid=64b15dec72dea3abefff806d579e1177&units=metric`)
            .then((res) => res.json())
            .then((res) => {
                const { main, weather, wind } = res
                const [theWeather] = weather
                props.setMain(main)
                props.setWind(wind)
                props.setTheWeather(theWeather);
            })
            .catch(err => console.log(err));
    }, [props.savedInput])


    function handleChange(event) {
        setUserInput(event.target.value)
        props.setTheStats(false)             // setTheStats is false to hide the results section while the user is still typing
    }

    function handleClick(event) {
        props.setSavedInput(userInput)      // setSavedInput saves the user input after clicking the button in the state that is connected with the API
        event.preventDefault()
        if (userInput) {
            props.setTheStats(true)             //  To check that when the user presses the button, the input is not null before showing the results
        } else { props.setTheStats(false) }
    }

    return <section className="form-div">
        <section className="container">
            <form>
                <label><h1 className="form-h1">Required City:</h1></label>

                <section className="row form-row">

                    <section className="col col-lg-6">
                        <input onChange={handleChange} value={userInput} className="form-control form-input" type="text" placeholder="City.." />
                    </section>

                    <section className="col col-lg-6">
                        <button onClick={handleClick} className="form-button">Get Results</button>
                    </section>

                </section>
            </form>
        </section>
    </section>
}

export default Form


