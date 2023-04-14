
// Features section in the home page

import React from "react"
import MiniFeatures from "./MiniFeatures"

function Features() {
    return <section className="container features-div">

        <section className="row features-first-row">
            <section className="col-lg-3 col-sm-6 features-upper-cols">
                <MiniFeatures
                    iconClass="fa-solid fa-cloud icon"
                    heading="Real-Time Live weather"
                    paragraph="Our information covers global weather data across the board to get live information and accurate weather forecasts."
                />
            </section>
            <section className="col-lg-3 col-sm-6 features-upper-cols">
                <MiniFeatures
                    iconClass="fa-solid fa-location-dot icon"
                    heading="Millions of Locations"
                    paragraph="Make use of live weather data for millions of cities and towns worldwide, you can look up any location."
                />
            </section>
            <section className="col-lg-3 col-sm-6 features-upper-cols">
                <MiniFeatures
                    iconClass="fa-solid fa-gauge-high icon"
                    heading="Rapid Responses"
                    paragraph="Powered by best-in-class infrastructure data, our information delivers in milliseconds."
                />
            </section>
            <section className="col-lg-3 col-sm-6 features-upper-cols icon">
                <MiniFeatures
                    iconClass="fa-solid fa-tag"
                    heading="Completely Free"
                    paragraph="All the data and information are served completely free to our users, no any type of payment required."
                />
            </section>
        </section>

        <section className="row features-second-row">
            <section className="col-lg-6 col-sm-12 features-secondRow-firstCol">
                <h3 className="features-h3">Access to Global Weather Data</h3>
                <p>Get instant access to accurate weather data for any location in the world and enjoy a rich set of capabilities:</p>
                <ul>
                    <li>Real-Time Weather Data</li>
                    <li>Any Location Required</li>
                    <li>Instant Response</li>
                    <li>Accurate Information</li>
                </ul>
            </section>
            <section className="col-lg-6 col-sm-12">
                <img className="features-img" src="./public/pics/map.PNG" alt="world-pic" />
            </section>
        </section>

    </section>
}

export default Features