import './Form.css';
import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';

import {calculateBmi} from '../actions';

class Form extends React.Component {
  renderError = ({error, touched}) => {
    if (error && touched) {
      return (<div className="ui error message">
        <div className="header">{error}</div>
      </div>);
    }
  };

  renderInput = ({input, meta, label, placeholder}) => {
    const className = `field ${meta.error && meta.touched
      ? 'error'
      : ''}`;
    return (<div className={className}>
      <label>{label}</label>
      <input {...input} type="number" placeholder={placeholder} autoComplete="off"/> {this.renderError(meta)}
    </div>);
  };

  onSubmit = formValues => {
    this.props.calculateBmi(formValues);
  };

  render() {
    return (<div className="form bmi">
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="height" component={this.renderInput} label="Height" placeholder="cm"/>
        <Field name="weight" component={this.renderInput} label="Weight" placeholder="kg"/>
        <button className="ui button">Calculate BMI</button>
      </form>
    </div>);
  }
};

const validate = formValues => {
  const errors = {};
  if (!formValues.height) {
    errors.height = "You must enter your height";
  }
  if (!formValues.weight) {
    errors.weight = "You must enter your weight";
  }
  return errors;
};

export default reduxForm({form: 'bmiForm', validate})(connect(null, {calculateBmi})(Form));
