import React, { Component } from "react";
import "../styles/profiledetails.css";
import InfoList from "./infolist";
import Actions from "./returnback";
import uiprofiles from "./uipagedetails/Uiprofiles.json";

class ProfileDetails extends Component {
  render() {
    var { id, name } = this.props;
    console.log("from profdetails-- " + name + id);
    return (
      <div className="about">
        <Actions />
        <section>
          <h5>About {id} </h5>
          <h1>Let me introduce myself.</h1>

          <div className="intro-info">
            <img src={require("../assets/p1.jpg")} alt="Profile Picture" />
            <p className="lead">
              Lorem ipsum Exercitation culpa qui dolor consequat exercitation
              fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure
              sunt id pariatur Duis laboris amet exercitation veniam labore
              consectetur ea id quis eiusmod.
            </p>
          </div>

          <div className="row">
            <h3>Profile</h3>
            <p>
              Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut
              esse in magna sint minim officia consectetur nisi commodo ea magna
              pariatur nisi cillum.
            </p>

            <h3>Skills</h3>

            <p>
              Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut
              esse in magna sint minim officia consectetur nisi commodo ea magna
              pariatur nisi cillum.
            </p>
          </div>
          <InfoList />
          <div className="row button-section">
            <a
              href="#contact"
              title="Hire Me"
              className="button stroke smoothscroll"
            >
              Hire Me
            </a>
            <a href="#" title="Download CV" className="Button">
              Download CV
            </a>
          </div>
        </section>

        <h2>Work Experience</h2>

        <div className="timeline-wrap">
          <div className="timeline-block">
            <div className="timeline-ico">
              <i className="fa fa-graduation-cap" />
            </div>

            <div className="timeline-header">
              <h3>UI Designer</h3>
              <p>July 2015 - Present</p>
            </div>

            <div className="timeline-content">
              <h4>Awesome Studio</h4>
              <p>
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi.
              </p>
            </div>
          </div>

          <div className="timeline-block">
            <div className="timeline-ico">
              <i className="fa fa-graduation-cap" />
            </div>

            <div className="timeline-header">
              <h3>Front-end Developer</h3>
              <p>July 2014 - June 2015</p>
            </div>

            <div className="timeline-content">
              <h4>Super Cool Agency</h4>
              <p>
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi incididunt.
              </p>
            </div>
          </div>

          <div className="timeline-block">
            <div className="timeline-ico">
              <i className="fa fa-graduation-cap" />
            </div>

            <div className="timeline-header">
              <h3>Web Designer</h3>
              <p>May 2013 - June 2014</p>
            </div>

            <div className="timeline-content">
              <h4>Great Designs Studio</h4>
              <p>
                Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna
                consectetur nisi cupidatat laboris esse eiusmod deserunt aute do
                quis velit esse sed Ut proident cupidatat nulla esse cillum
                laborum occaecat nostrud sit dolor incididunt amet est occaecat
                nisi incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileDetails;
