import { combineReducers } from 'redux';
import detailFlightReducer from './detailFlightReducer';
import detailUser from "./detailUserReducer";
import UpdateUserReducer from "./detailUserReducer";
import flightReducer from './flightReducer';
import { userReducer } from "./userReducer";

const rootReducers = combineReducers({
  auth: userReducer,
  flight: flightReducer,
  detailFlight: detailFlightReducer,
  detail: detailUser,
  updateUser: UpdateUserReducer,
});

export default rootReducers;