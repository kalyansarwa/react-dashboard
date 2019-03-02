import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            activeStyle={{ color: "#c30000" }}
            style={{ color: "#000000" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/uipage"
            activeStyle={{ color: "#c30000" }}
            style={{ color: "#000000" }}
          >
            UI Designer
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/uxpage"
            activeStyle={{ color: "#c30000" }}
            style={{ color: "#000000" }}
          >
            UX Designer
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Jobspage"
            activeStyle={{ color: "#c30000" }}
            style={{ color: "#000000" }}
          >
            Job Openings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
