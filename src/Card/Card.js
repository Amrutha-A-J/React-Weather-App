import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  test= ()=>{
    this.props.dayFinder.push("/Forecast/"+this.props.day);   //dayFinder is the history
  }
  render() {
    return (
      <div className="Card" onClick={this.test}>
        <header className="Card-header">
          <h1 className="Card-title">{this.props.day}</h1>
        </header>
        <div>
          <img src={this.props.img_url} className="Card-img" alt="weather-icon" />
          <div>{this.props.high}</div>
          <div>{this.props.low}</div>
        </div>
      </div>

    );
  }
}

export default Card;
