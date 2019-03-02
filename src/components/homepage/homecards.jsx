import React, { Component } from "react";
import "../../styles/dashboard.css";

class Card extends Component {
  render() {
    var { image, name, topic, content } = this.props;
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={require("../../assets/" + image)}
              alt="Avatar"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="flip-card-back">
            <h1>{name}</h1>
            <p>{topic}</p>
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
