
// The component used to structure the science section

import React from "react"

function MiniScience(props) {
    return <article>
        <h2 className="miniScience-h2">{props.scienceHeading}</h2>

        <p className="miniScience-p">{props.scienceFirstParagraph}</p>
        <p className="miniScience-p">{props.scienceSecondParagraph}</p>
        <p className="miniScience-p">{props.scienceThirdParagraph}</p>

        <img className={props.miniScienceImgClass} src={props.scienceImage} alt="earth-img" />
    </article>
}

export default MiniScience