import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import NavigateBefore from "@material-ui/icons/NavigateBefore";

class Actions extends Component {
  render() {
    let { item } = this.props;

    return (
      <div
        className="job_button1"
        style={{ marginLeft: "-80%", marginBottom: "0%" }}
      >
        <NavLink to="/uipage" title="Back to list">
          <span>Back to list</span>
        </NavLink>
      </div>
    );
  }
}

export default Actions;
