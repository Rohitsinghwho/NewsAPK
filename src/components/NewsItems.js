import React, { Component } from "react";
import NewsComp from "./NewsComp";

export default class NewsItems extends Component {
  //Intializing Constructor to create State for the news component
  constructor() {
    super();
    this.state = {
      //setting articles as empty in the starting
      articles: [],
      loading: false,
      page: 1,
    };
  }
  //This function will run after rendering the news
  componentDidMount = async () => {
    console.log("Hello i am component didmout");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3a63208ab5f54b399aa7498b98db65f6&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    //fetching data from News Api in json format
    let Data = await fetch(url);
    let parsedData = await Data.json();
    // console.log(parsedData);
    //setting the state from a null array to the news component
    this.setState({
      articles: parsedData.articles,
    });
  };

  //writing function for prev click--->

  handlePrevClick = async () => {
    console.log("Hello i am component didmout");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3a63208ab5f54b399aa7498b98db65f6&pageSize=${
      this.props.pageSize
    }&page=${this.state.page - 1}`;
    //fetching data from News Api in json format
    let Data = await fetch(url);
    let parsedData = await Data.json();
    // console.log(parsedData);
    //setting the state from a null array to the news component and page as prev
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };

  //writing function for next click-->
  handleNextClick = async () => {
    console.log("Hello i am component didmout");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3a63208ab5f54b399aa7498b98db65f6&pageSize=${
      this.props.pageSize
    }&page=${this.state.page + 1}`;
    //fetching data from News Api in json format
    let Data = await fetch(url);
    let parsedData = await Data.json();
    // console.log(parsedData);
    //setting the state from a null array to the news component and page as prev
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row container my-2">
          {/* //Traversing the Json Array of News api */}
          {this.state.articles.map((element) => {
            return (
              <div className="col md-4 my-2" key={element.url}>
                {" "}
                {/*Unique key is neccessary*/}
                <NewsComp
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  urlToNews={element.url}
                />
              </div>
            );
          })}
          {/* Adding buttons for Navigation */}
          <div className="container d-flex justify-content-between mx-2">
            <button
              disabled={
                this.state.page <= 1
              } /*if page is no more then button disable*/
              type="button"
              className="btn btn-success btn-sm"
              onClick={this.handlePrevClick}
            >
              Prev
            </button>
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={this.handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
