import './App.css';
import React from 'react';
import Form from './Form';
import Results from './Results';
import Attribution from './Attribution';

export default() => {
  return (<div className="app">
    <div className="ui segment">
      <h1>bmi calculator<img src="bmi-calc/img/scale.png" alt="scale"/></h1>
      <Form/>
      <Results/>
    </div>
    <Attribution/>
  </div>);
};
