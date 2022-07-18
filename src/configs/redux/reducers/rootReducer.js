import { combineReducers } from 'redux';
import { bookingAction, bookingGetAction } from "./bookingsReducer";
import detailFlightReducer from './detailFlightReducer';
import detailUser from "./detailUserReducer";
import UpdateUserReducer from "./detailUserReducer";
import flightReducer from './flightReducer';
import {flightsDetailReducer} from "./flightReducer";
import { userReducer } from "./userReducer";

const rootReducers = combineReducers({
  auth: userReducer,
  flight: flightReducer,
  detailFlight: detailFlightReducer,
  detail: detailUser,
  updateUser: UpdateUserReducer,
  detailFlights: flightsDetailReducer,
  // BOOKING DETAIL
  bookingDetail: bookingAction,
  myBooking: bookingGetAction,
});

export default rootReducers;