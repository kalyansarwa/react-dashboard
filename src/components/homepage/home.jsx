import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Card from "./homecards";
import "../../styles/dashboard.css";

class Home extends Component {
  render() {
    return (
      <article>
        <h1>Design & Developer Profiles </h1>
        <p>
          Are you looking to hire a talented Designers & Devlopers ? Then you
          are on the right place. This Site is specifically to hire frontend
          talented Designers & Devlopers.
        </p>

        <Card
          name="Design"
          image="UX2.png"
          topic="UX designer"
          content="User experience design (UX, UXD, UED or XD) is the process of enhancing user satisfaction with a product by improving the usability, accessibility, and pleasure provided in the interaction with the product."
        />

        <NavLink to="/uipage">
          <button
            style={{
              padding: "0",
              backgroundColor: "transparent",
              border: "none"
            }}
          >
            <Card
              name="Design"
              image="UI3.png"
              topic="UI designer"
              content="User Interface Design is a crucial subset of UX. They both share the same end goal - to provide a positive experience for the user - but UI Design comprises an entirely separate leg of the journey. Put simply, UI is what you use to interact with a product, while UX is concerned with how this overall interaction feel"
            />
          </button>
        </NavLink>

        <button
          style={{
            padding: "0",
            backgroundColor: "transparent",
            border: "none"
          }}
        >
          <Card
            name="Coding"
            image="developer2.png"
            topic="Frontend developer"
            content="Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly."
          />
        </button>
      </article>
    );
  }
}

export default Home;
