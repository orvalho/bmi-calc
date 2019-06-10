import {CALC_BMI} from '../actions/types';

const INITIAL_STATE = {
  bmi: null,
  category: ''
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CALC_BMI:
      return {bmi: action.payload.bmi, category: action.payload.category};
    default:
      return state;
  }
};
