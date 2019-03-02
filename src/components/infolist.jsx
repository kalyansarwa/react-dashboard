import React, { Component } from "react";
import "../styles/profiledetails.css";
class InfoList extends Component {
  state = {};
  render() {
    return (
      <ul>
        <li>
          <strong>Fullname:</strong>
          <span>Juan Dela Cruz</span>
        </li>
        <li>
          <strong>Birth Date:</strong>
          <span>September 28, 1987</span>
        </li>
        <li>
          <strong>Job:</strong>
          <span>Freelancer, Frontend Developer</span>
        </li>
        <li>
          <strong>Website:</strong>
          <span>www.kardswebsite.com</span>
        </li>
        <li>
          <strong>Email:</strong>
          <span>me@kardswebsite.com</span>
        </li>
      </ul>
    );
  }
}

export default InfoList;
