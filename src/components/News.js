import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    console.log("Hello i am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5bb6f4fb93b64fd58e2abd79fcd2544b";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5bb6f4fb93b64fd58e2abd79fcd2544b&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5bb6f4fb93b64fd58e2abd79fcd2544b&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }

  render() {
    return (
      <div className='container my-3'>
        <h3>GoNews - Top Headlines</h3>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" class="btn btn-dark px-4" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
