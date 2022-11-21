import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let {title,description,url, newUrl}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newUrl} traget="_blank" className="btn btn-primary">
              Know More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
