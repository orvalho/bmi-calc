import './Results.css';
import React from 'react';
import {connect} from 'react-redux';

const Results = ({bmi, category}) => {
  if (bmi === null) {
    return null;
  }

  return (<div className="results ui message">
    <div>Your BMI is:&nbsp;<strong>{bmi}</strong>
    </div>
    <div>You are:&nbsp;<strong>{category}</strong>
    </div>
  </div>);
};

const mapStateToProps = state => {
  return {bmi: state.bmi.bmi, category: state.bmi.category}
};

export default connect(mapStateToProps)(Results);
