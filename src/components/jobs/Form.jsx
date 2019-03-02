import React from "react";

const Form = props => (
  <form
    onSubmit={props.gettitle}
    style={{ position: "fixed", marginLeft: "25%" }}
  >
    <input type="text" name="title" placeHolder=" Type here.." />

    <button>Search</button>
  </form>
);

export default Form;
