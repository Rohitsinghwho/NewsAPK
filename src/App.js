import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsItems from "./components/NewsItems";
// import Alert from "./components/Alert";
//using react router dom to navigate smoothly
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/general"
            element={
              <div>
                <h1 className="text-center my-4">NEWS APK- TOP HEADLINES</h1>
                <NewsItems
                  pageSize={6}
                  country={"us"}
                  key={"general"}
                  category={"general"}
                />
              </div>
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <div>
                <h1 className="text-center my-4">
                  NEWS APK- TOP TECH HEADLINES
                </h1>
                <NewsItems
                  pageSize={6}
                  country={"us"}
                  key={"technology"}
                  category={"technology"}
                />
              </div>
            }
          />

          <Route
            exact
            path="/science"
            element={
              <div>
                <h1 className="text-center my-4">
                  NEWS APK- TOP SCIENCE HEADLINES
                </h1>
                <NewsItems
                  pageSize={6}
                  country={"us"}
                  key={"science"}
                  category={"science"}
                />
              </div>
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <div>
                <h1 className="text-center my-4">
                  NEWS APK- TOP SPORTS HEADLINES
                </h1>
                <NewsItems
                  pageSize={6}
                  country={"us"}
                  key={"sports"}
                  category={"sports"}
                />
              </div>
            }
          />

          <Route
            exact
            path="/business"
            element={
              <div>
                <h1 className="text-center my-4">
                  NEWS APK- TOP BUSINESS HEADLINES
                </h1>
                <NewsItems
                  pageSize={6}
                  key={"business"}
                  country={"us"}
                  category={"business"}
                />
              </div>
            }
          />

          <Route
            exact
            path="/health"
            element={
              <div>
                <h1 className="text-center my-4">
                  NEWS APK- TOP HEALTH HEADLINES
                </h1>
                <NewsItems
                  pageSize={6}
                  key={"health"}
                  country={"us"}
                  category={"health"}
                />
              </div>
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <div>
                <h1 className="text-center my-4">
                  NEWS APK- TOP ENTERTAINMENT HEADLINES
                </h1>
                <NewsItems
                  pageSize={6}
                  country={"us"}
                  key={"entertainment"}
                  category={"entertainment"}
                />
              </div>
            }
          />
        </Routes>
        {/* <Alert /> */}
      </BrowserRouter>
    );
  }
}
