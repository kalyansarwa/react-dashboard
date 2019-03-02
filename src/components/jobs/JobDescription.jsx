import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class JobDescription extends Component {
  state = {
    activeJob: []
  };

  componentDidMount = async () => {
    const host = "data.usajobs.gov";
    const YOUR_EMAIL = "rekha.chirla@gmail.com";
    const titles = this.props.location.state.job;
    console.log("titles " + titles);
    const req = await fetch(
      `https://data.usajobs.gov/api/Search?PositionTitle=${titles}`,
      {
        headers: {
          Host: { host },
          "User-Agent": { YOUR_EMAIL },
          "Authorization-Key": "rR0BKdPdxa4cC5f9VUElPBGzOINyzsBroxShVQNVPq4="
        }
      }
    );
    const res = await req.json();
    console.log(res);
    this.setState({
      activeJob: res.SearchResult.SearchResultItems[0].MatchedObjectDescriptor
    });
    //console.log(this.props);
    //console.log(this.state.activeJob);
    //.MatchedObjectDescriptor.PositionTitle
  };

  render() {
    const job = this.state.activeJob;

    return (
      <div className="container">
        {this.state.activeJob.length !== 0 && (
          <div className="jobs__box">
            <div className="active-job">
              <button className="job_button1">
                <NavLink to="/Jobspage"> Go Back </NavLink>
              </button>
              <div className="job__text">
                <div className="jobs__title">
                  Job Title :{job.PositionTitle}
                </div>
                <div className="jobs__subtitle">
                  <div>Job id :{job.PositionID}</div>
                  <div>OrganizationName :{job.OrganizationName}</div>
                  <div>DepartmentName :{job.DepartmentName}</div>
                  <div>Job Location :{job.PositionLocationDisplay}</div>
                  <div>Application Start Date :{job.PublicationStartDate}</div>
                  <div>Application End Date :{job.PositionEndDate}</div>
                </div>
                <p style={{ fontWeight: "400" }}>
                  <span className="jobs__subtitle">QualificationSummary :</span>
                  {job.QualificationSummary}
                </p>
                <div className="active-job__button">
                  <a href={job.ApplyURI}>Click to Apply </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default JobDescription;
