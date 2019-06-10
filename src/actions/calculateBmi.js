import {CALC_BMI} from './types';
import {bmiLookup} from '../helper';

export default formValues => {
  let bmi = formValues.weight / Math.pow(formValues.height / 100, 2);
  let category = '';

  if (bmi < 18.5) {
    category = bmiLookup[18.5];
  } else if (bmi < 25) {
    category = bmiLookup[25];
  } else if (bmi < 30) {
    category = bmiLookup[30];
  } else {
    category = bmiLookup.max;
  }

  bmi = bmi.toFixed(2);

  return {
    type: CALC_BMI,
    payload: {
      bmi: bmi,
      category: category
    }
  }
};
