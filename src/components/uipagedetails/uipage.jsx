import React, { Component } from "react";
import ProfileCard from "../profilecards";
import "../../styles/profilecard.css";
import uiprofiles from "./Uiprofiles.json";

class Uipage extends Component {
  state = {};
  render() {
    // uiprofiles list data is showing up from json file
    return (
      <article>
        <h3>UI designer Profiles </h3>
        {uiprofiles.map(uiprofiles => (
          <ProfileCard
            name={uiprofiles.name}
            image={uiprofiles.image}
            title={uiprofiles.title}
            company={uiprofiles.company}
            id={uiprofiles.id}
            key={uiprofiles.id}
          />
        ))}
      </article>
    );
  }
}

export default Uipage;

//
/*<ProfileCard
          name="John Smith"
          image="p1.jpg"
          title="UI designer"
          company="Works @ Google.inc"
          id="1"
        />
        <ProfileCard
          name="John Smith"
          image="p2.jpg"
          title="Visual designer"
          company="Works @ Infosys"
          id="2"
        />
        <ProfileCard
          name="John Smith"
          image="p4.jpg"
          title="Freelance designer"
          company="Works @ Verizon"
          id="3"
        />
        <ProfileCard
          name="John Smith"
          image="p3.jpg"
          title="UI designer"
          company="Works @ Amazon"
        />
        <ProfileCard
          name="John Smith"
          image="p5.jpg"
          title="Visual designer"
          company="Works @ AT&T"
        />
        <ProfileCard
          name="John Smith"
          image="p6.jpg"
          title="UI designer"
          company="Works @ Zillow"
        />*/
