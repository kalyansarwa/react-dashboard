import React, { Component } from "react";
import { Route } from "react-router-dom";
import { NavLink, Link, Switch } from "react-router-dom";
import "./styles/dashboard.css";
import Home from "./components/homepage/home";
import Footer from "./components/footer";
import Header from "./components/header";
import NavBar from "./components/navbar";
import ProfileCard from "./components/profilecards";
import Uipage from "./components/uipagedetails/uipage";
import ProfileDetails from "./components/ProfileDetails";
import Form from "./components/jobs/Form";
import Jobs from "./components/jobs/Jobs";
import JobDescription from "./components/jobs/JobDescription";
import JobsPage from "./components/jobs/Jobspage";
import "./App.css";
import Avatar from "react-avatar";

const host = "data.usajobs.gov";
//const API_KEY = "rR0BKdPdxa4cC5f9VUElPBGzOINyzsBroxShVQNVPq4=";
const YOUR_EMAIL = "rekha.chirla@gmail.com";
let title = "Developer";

class App extends Component {
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
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <NavBar />
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/uipage" component={Uipage} />
              <Route path="/ProfileDetails" component={ProfileDetails} />
              <Route path="/Jobspage" component={JobsPage} />
              <Route path="/job/:id" component={JobDescription} />
            </Switch>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
//   <JobDescription />
//<ProfileDetails />
//<NavBar />
//<div>
//           <Switch>
//             <Route path="/uipage" Component={Uipage} />
//            <Route path="/" Component={Home} />
//          </Switch>
//        </div>
