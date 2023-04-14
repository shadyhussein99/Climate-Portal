import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

// The about section

function About() {
    return <section>
        <Navbar />
        <section className="container">

            <h1 className="about-h1">About Us</h1>

            <article className="about-div">
                <h2 className="about-h2">What is the rationale behind Climate Portal ?</h2>
                <p>The Climate Portal is the hub for climate-related information and data. The Portal provides an online platform from which access and analyze comprehensive data related to climate change and development. The successful integration of scientific information to provide comprehensive information to a wide range of users.</p>
                <h2 className="about-h2">What can users achieve using Climate Portal?</h2>
                <ul>
                    <li>Learn about climate at global levels</li>
                    <li>Enhance knowledge on climate changes and get resourceful climate data and information.</li>
                </ul>
                <p>Climate science is highly complex and the policy implications are not always clear. We therefore work to advance scientific knowledge on climate science and make this information accessible to our users.
                    <br />
                    To do this, we conduct our own research and communicate key findings from the scientific literature, and their implications.
                    <br />
                    Predictions of future climate change are subject to uncertainty, as they depend on a range of developments that cannot be foreseen. There remain important limitations to the understanding and modelling of some processes in the climate system. Much of our work is therefore focused on understanding these processes and the probabilities associated with climate impact projections.
                </p>
            </article>
            
        </section>
        <Footer />
    </section>
}

export default About