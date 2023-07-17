import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsItems from "./components/NewsItems";
import Alert from "./components/Alert";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Alert />
        <h1 className="text-center my-4">NEWS APK- TOP HEADLINES</h1>
        <NewsItems pageSize={6} />
      </div>
    );
  }
}
