import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "react-avatar";

const Jobs = props => (
  <div>
    {props.jobs.map(job => {
      return (
        <div className="Job_card" key={job.MatchedObjectId}>
          <NavLink
            to={{
              pathname: `/job/${job.MatchedObjectId}`,
              state: { job: job.MatchedObjectDescriptor.PositionTitle }
            }}
          >
            <Avatar
              name={job.MatchedObjectDescriptor.PositionTitle}
              size="100"
              textSizeRatio="1.75"
            />

            <p className="profiletitle">
              Title:
              {job.MatchedObjectDescriptor.PositionTitle.length < 20
                ? `${job.MatchedObjectDescriptor.PositionTitle}`
                : `${job.MatchedObjectDescriptor.PositionTitle.substring(
                    0,
                    25
                  )}...`}
              <br />
              Job ID: {job.MatchedObjectDescriptor.PositionID}
              <br />
              Position EndDate: {job.MatchedObjectDescriptor.PositionEndDate}
            </p>

            <button className="job_button "> View job Description</button>
          </NavLink>
        </div>
      );
    })}
  </div>
);

export default Jobs;
// <Avatar PositionTitle={job.MatchedObjectDescriptor.PositionTitle} />
