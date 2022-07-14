import { combineReducers } from 'redux';
import detailFlightReducer from './detailFlightReducer';
import detailUserReducer from './detailUserReducer'
import flightReducer from './flightReducer';
import userReducer from './userReducer';

const rootReducers = combineReducers({
  user: userReducer,
  flight: flightReducer,
  detailFlight: detailFlightReducer,
  detailUser: detailUserReducer
});

export default rootReducers;