import React from 'react';

function CohortDetails(props) {

    const { cohort } = props;

    return (
        <div>

            <h3>
                {cohort.cohortCode} -
                <span> {cohort.technology}</span>
            </h3>

            <dl>
                <dt>Current Status</dt>
                <dd>{cohort.currentStatus}</dd>

                <dt>Started On</dt>
                <dd>{cohort.startDate}</dd>

                <dt>Coach</dt>
                <dd>{cohort.coachName}</dd>

                <dt>Trainer</dt>
                <dd>{cohort.trainerName}</dd>
            </dl>

        </div>
    );

}

export default CohortDetails;