
// The component used to construct the features section

import React from "react"

function MiniFeatures(props) {
    return <section className="miniFeatures-div">
        <i className={props.iconClass}></i>
        <p><strong>{props.heading}</strong></p>
        <p>{props.paragraph}</p>
    </section>
}

export default MiniFeatures