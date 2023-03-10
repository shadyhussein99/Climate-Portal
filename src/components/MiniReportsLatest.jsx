
// The component used to structure the section of the latest reports

import React from "react"

function MiniReportsLatest(props) {
    return <div>
        <div className="row miniReportsLatest-div">
            <div className="col-lg-12 col-sm-4">
                <img className={props.LatestImgClass} src={props.reportImage} alt="report-img" />
            </div>
            <div className="col-lg-12 col-sm-8">
                <h5 className="miniReportsLatest-h5">{props.reportHeading}</h5>
                <p className="miniReportsLatest-p">{props.reportParagraph}</p>
                <a className="miniReportsLatest-a" href={props.reportLink}>Read the report</a>
            </div>
        </div>
    </div>
}

export default MiniReportsLatest