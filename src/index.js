import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CardContainer from './CardContainer/CardContainer';
import Forecast from './Forecast/Forecast';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
ReactDOM.render(

    <Router>
        <div>
            <Link to='/' className="Container-title">Weather</Link>
            <Route path='/' component={CardContainer}/>
            <Route path='/Forecast/:day' component={Forecast} />
        </div>
    </Router>

, document.getElementById('root'));
registerServiceWorker();
