import React, { Component } from "react";
import loading from "./mygif.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="loading Spinner" />
      </div>
    );
  }
}
