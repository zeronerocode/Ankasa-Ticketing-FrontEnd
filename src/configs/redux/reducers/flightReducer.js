import { ActionTypes } from "../constants/action-types";

const initialState = {
  data: [],
  pagination: {},
};

const flightReducer = (state = initialState, action) => {
  if (action.type === "GET_FILGHTS") {
    return {
      ...state,
      data: [...action.payload.data],
      pagination: {
        ...action.payload.pagination,
      },
    };
  } else {
    return state;
  }
};

export default flightReducer;
export const flightsDetailReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.DETAIL:
      return { ...state, data: payload.data.data };
    default:
      return state;
  }
};
