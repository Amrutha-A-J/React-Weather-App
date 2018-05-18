import React, { Component } from 'react';
import './Forecast.css';

class Forecast extends Component {
  constructor(props){
    super(props);
    this.state={
    list:[]
  };
}
  componentDidMount(){
    const url = 'http://api.openweathermap.org/data/2.5/forecast?id=1254187&APPID=1749e6f24bc9ceedc0bccf3ebc85b5f5&units=metric&cnt=5';
    fetch(url)
    .then(list=>{return list.json();})
    .then( 
      data=>{ 
        let items= data.list.map( 
          (item)=>{
            const time= new Date(item.dt_txt).getHours();
            return (
              <div className="forecast-item" key={item.dt}>
                <div>{(time>12)?time-12+"pm":((time===12)?time+"pm": time+"am")}</div>
                <div>{item.weather[0].main}</div>
                <div>{item.main.temp+'℃'}</div>
              </div>
            );
          }
        )
        this.setState({list:items});
      }
    )
  }
  render() {
    return (
      <div className="table-container">
        <h3 colSpan="8">{this.props.match.params.day}</h3>
        <div className="forecast-container">
          <div className="forecast-item">
            <div>Time</div>
            <div>Forecast</div>
            <div>Temperature</div>
          </div>
          {this.state.list}
        </div>
      </div>
    );
  }
}

export default Forecast;
