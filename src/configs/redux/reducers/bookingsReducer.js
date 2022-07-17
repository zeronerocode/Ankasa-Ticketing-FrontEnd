import { ActionTypes } from "../constants/action-types";
const initialState = {
  data: [],
};

export const bookingAction = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.BOOKING:
      return { ...state, data: payload.data };
    default:
      return state;
  }
};


export const bookingGetAction = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.BOOKING:
      return { ...state, data: payload.data };
    default:
      return state;
  }
};