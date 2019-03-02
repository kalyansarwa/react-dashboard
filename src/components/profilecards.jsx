import React, { Component } from "react";
import ProfileDetails from "./ProfileDetails";

class ProfileCard extends Component {
  handleClick(id) {
    console.log(id);
    document.location.href = "/ProfileDetails";
  }
  render() {
    var { image, name, title, company, id } = this.props;
    return (
      <div>
        <div className="profilecard" onClick={() => this.handleClick(id)}>
          <img
            src={require("../assets/" + image)}
            alt="profile image"
            style={{ width: "100%" }}
          />
          <h1>{name}</h1>

          <p className="profiletitle">{title}</p>
          <p>{company}</p>
          <p>
            <button
              key={id}
              className="profilebutton"
              onClick={() => this.handleClick(id)}
            >
              View Profile
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileCard;

//<div style="margin: 24px 0;">
//       <a href="#">linkedin Profile<i className="fa fa-linkedin"></i></a>
//</div>
//<h2 style={{ textAlign: "center" }}>User Profile Card</h2>
