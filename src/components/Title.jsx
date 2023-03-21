
// Title of the website in the home page

import React from "react"

function Title() {
    return <div className="container title-div">
        <div className="row">
            <div className="col-lg-6 col-sm-12 title-first-col">
                <h1 className="title-heading" >Explore current weather conditions and track up to date climate changes</h1>
                <p className="title-paragraph" >The Climate Portal provides global data on current climate stats based on the most reliable stations and aims to gain deeper insights into climate risks and adaptation actions.</p>
            </div>
            <div className="col-lg-6 col-sm-12">
                <img className="climate-img" src="/pics/climate.PNG" alt="climate-img" />
            </div>
        </div>
    </div>
}

export default Title