
// function CohortDetails(props) {
//     return (
//         <div>
//             <h3>
//                 {props.cohort.cohortCode} -
//                 <span>{props.cohort.technology}</span>
//             </h3>
//             <dl>
//                 <dt>Started On</dt>
//                 <dd>{props.cohort.startDate}</dd>
//                 <dt>Current Status</dt>
//                 <dd>{props.cohort.currentStatus}</dd>
//                 <dt>Coach</dt>
//                 <dd>{props.cohort.coachName}</dd>
//                 <dt>Trainer</dt>
//                 <dd>{props.cohort.trainerName}</dd>
//             </dl>
//         </div>

        
//     );
// }
// export default CohortDetails;

import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails(props) {

    const cohort = props.cohort;

    const headingStyle = {
        color: cohort.currentStatus === "Ongoing" ? "green" : "blue"
    };

    return (

        <div className={styles.box}>

            <h3 style={headingStyle}>
                {cohort.cohortCode}
            </h3>

            <dl>

                <dt>Technology</dt>
                <dd>{cohort.technology}</dd>

                <dt>Started On</dt>
                <dd>{cohort.startDate}</dd>

                <dt>Current Status</dt>
                <dd>{cohort.currentStatus}</dd>

                <dt>Coach</dt>
                <dd>{cohort.coachName}</dd>

                <dt>Trainer</dt>
                <dd>{cohort.trainerName}</dd>

            </dl>

        </div>

    );

}

export default CohortDetails;