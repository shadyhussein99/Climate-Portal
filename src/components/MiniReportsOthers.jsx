
// The component used to structure the section of the oldest reports

import React from "react";

function MiniReportsOthers(props) {
    return <article className="row miniReportsOthers-div">

        <section className="col-lg-4 col-sm-12 miniReportsOthers-img">
            <img src={props.reportImage} alt="report-img" />
        </section>

        <section className="col-lg-8 col-sm-12 miniReportsOthers-secondCol">
            <h5 className="miniReportsOthers-h5">{props.reportHeading}</h5>
            <p>{props.reportParagraph}</p>
            <a href={props.reportLink} className="miniReportsOthers-a">Read full report</a>
        </section>

    </article>

}

export default MiniReportsOthers