
// The section that shows the results when the user selects a city

import React from "react"

function Stats(props) {

    return <section className="stats-div">
        <section className="container">
            <h1 className="stats-h1">In {props.savedInput} :</h1>

            <section className="row">
                <section className="col col-lg-6">
                    <p className=" stats-p stats-p-first">Temperature is {props.temp} °C</p>
                </section>
                <section className="col col-lg-6">
                    <p className=" stats-p stats-p-second">Dominant Condition is {props.weather} <img className="stats-img" src={`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`} /></p>
                </section>
            </section>

            <section className="row">
                <section className="col col-lg-4">
                    <p className=" stats-p stats-p-lower stats-p-third">Pressure is {props.pressure} hPa</p>
                </section>
                <section className="col col-lg-4">
                    <p className=" stats-p stats-p-lower stats-p-fourth">Humidity is {props.humidity} %</p>
                </section>
                <section className="col col-lg-4">
                    <p className=" stats-p stats-p-lower stats-p-fifth">Wind Speed is {props.wind} meter/sec</p>
                </section>
            </section>

        </section>
    </section>
}

export default Stats