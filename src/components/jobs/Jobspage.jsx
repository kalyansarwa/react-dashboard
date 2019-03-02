import React, { Component } from "react";
import Jobs from "./Jobs";
import "./../../App.css";
import Form from "./Form";

const host = "data.usajobs.gov";
//const API_KEY = "rR0BKdPdxa4cC5f9VUElPBGzOINyzsBroxShVQNVPq4=";
const YOUR_EMAIL = "rekha.chirla@gmail.com";

class JobsPage extends Component {
  state = {
    jobs: []
  };

  gettitle = async e => {
    const title = e.target.elements.title.value;
    e.preventDefault();

    const api_call = await fetch(
      `https://data.usajobs.gov/api/Search?PositionTitle=${title}`,
      {
        //method: "GET",
        headers: {
          Host: { host },
          "User-Agent": { YOUR_EMAIL },
          "Authorization-Key": "rR0BKdPdxa4cC5f9VUElPBGzOINyzsBroxShVQNVPq4="
        }
      }
    );
    const data = await api_call.json();

    //console.log(data.SearchResult.SearchResultItems);
    this.setState({ jobs: data.SearchResult.SearchResultItems });
    console.log(this.state.jobs);
  };

  componentDidMount = () => {
    const json = localStorage.getItem("jobs");
    const jobs = JSON.parse(json);
    this.setState({ jobs });
  };
  componentDidUpdate = () => {
    const jobs = JSON.stringify(this.state.jobs);
    localStorage.setItem("jobs", jobs);
  };
  render() {
    return (
      <article>
        <Form gettitle={this.gettitle} />
        <Jobs jobs={this.state.jobs} />
      </article>
    );
  }
}

export default JobsPage;
