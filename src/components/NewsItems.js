import React, { Component } from "react";
import NewsComp from "./NewsComp";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
export default class NewsItems extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  //Intializing Constructor to create State for the news component
  constructor(props) {
    super(props);
    this.state = {
      //setting articles as empty in the starting
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.props.category} -> NEWS APK`;
  }
  //This function will run after rendering the news

  UpadateNews = async () => {
    console.log("Hello i am component didmout");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=3a63208ab5f54b399aa7498b98db65f6&pageSize=${this.props.pageSize}&page=${this.state.page}&category=${this.props.category}`;
    //fetching data from News Api in json format
    this.setState({ loading: true });
    let Data = await fetch(url);
    let parsedData = await Data.json();
    // console.log(parsedData);
    //setting the state from a null array to the news component
    this.setState({
      articles: parsedData.articles,
      loading: false,
    });
  };
  componentDidMount = async () => {
    this.UpadateNews();
  };

  //writing function for prev click--->

  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.UpadateNews();
  };

  //writing function for next click-->
  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.UpadateNews();
  };
  render() {
    return (
      <div className="container">
        <div className="container text-center">
          {this.state.loading && <Spinner />}
        </div>
        <div className="row container my-2">
          {/* //Traversing the Json Array of News api */}
          {!this.state.loading &&
            this.state.articles.map((element) => {
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
