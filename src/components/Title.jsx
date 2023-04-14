
// Title of the website in the home page

import React from "react"

function Title() {
    return <header className="container title-div">
        <section className="row">
            <section className="col-lg-6 col-sm-12 title-first-col">
                <h1 className="title-heading" >Explore current weather conditions and track up to date climate changes</h1>
                <p className="title-paragraph" >The Climate Portal provides global data on current climate stats based on the most reliable stations and aims to gain deeper insights into climate risks and adaptation actions.</p>
            </section>
            <section className="col-lg-6 col-sm-12">
                <img className="climate-img" src="../public/pics/climate.PNG" alt="climate-img" />
            </section>
        </section>
    </header>

}

export default Title