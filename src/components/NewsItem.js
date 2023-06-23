import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ left: '90%', zIndex: '1' }}>{source}</span>
            <img src={!imageUrl ? "https://etvbharatimages.akamaized.net/etvbharat/prod-images/1200-675-18670148-648-18670148-1685854463377.jpg" : imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title} </h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem
