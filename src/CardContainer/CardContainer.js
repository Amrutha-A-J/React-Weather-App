import React, { Component } from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
class CardContainer extends Component {
  constructor(props){
      super(props);
      this.dayFinder = this.dayFinder.bind(this);
      this.state={selected: "d1",
      day:"Sunday"
    };
  }

  dayFinder(x){
    this.setState({selected : x.props.id,
    day:x.props.day});
  }
  render() {
    return (
      <div className="Card-Container">
      
        <Card dayFinder={this.props.history} id="d1" low="17&#8451;" high="34&#8451;" img_url="/images/windy.jpg" day="Sunday"/>
        <Card dayFinder={this.props.history} id="d2" low="17&#8451;" high="34&#8451;" img_url="/images/windy.jpg" day="Monday"/>
        <Card dayFinder={this.props.history} id="d3" low="17&#8451;" high="34&#8451;" img_url="/images/cloudy.jpg" day="Tuesday"/>
        <Card dayFinder={this.props.history} id="d4" low="17&#8451;" high="34&#8451;" img_url="/images/sunny_cloudy.jpg" day="Wednesday"/>
        <Card dayFinder={this.props.history} id="d5" low="17&#8451;" high="34&#8451;" img_url="/images/sunny.jpg" day="Thursday"/>
        <Card dayFinder={this.props.history} id="d6" low="17&#8451;" high="34&#8451;" img_url="/images/lightning_storm.jpg" day="Friday"/>
        <Card dayFinder={this.props.history} id="d7" low="17&#8451;" high="34&#8451;" img_url="/images/rainy.jpg" day="Saturday"/>
      </div>
    );
  }
}

export default CardContainer;
