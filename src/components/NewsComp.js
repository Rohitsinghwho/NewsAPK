import React, { Component } from "react";
import DemoImg from "./Demoimg.jpg";
export default class NewsComp extends Component {
  render() {
    //intitalizing props
    let { title, description, imgUrl, urlToNews } = this.props;
    return (
      <div className="container my-5">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imgUrl ? DemoImg : imgUrl
            } /*Ternery operator for img as some of them are null*/
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={urlToNews}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }
}
