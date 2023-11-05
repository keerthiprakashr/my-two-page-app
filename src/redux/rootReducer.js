import { combineReducers } from 'redux';

const formDataReducer = (state = {}, action) => {
  if (action.type === 'SET_FORM_DATA') {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  formData: formDataReducer,
  // other reducers if needed
});

export default rootReducer;