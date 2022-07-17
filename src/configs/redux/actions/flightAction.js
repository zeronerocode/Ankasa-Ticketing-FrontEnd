import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const flightAction =
  (page, search, sort, sortBy) => async (dispatch) => {
    try {
      const result = await axios.get(
        process.env.REACT_APP_BACKEND_API +
          `/flights?search=${search}&sort=${sort}&sortby=${sortBy}&page=${page}`
      );
      const data = result.data;
      dispatch({ type: "GET_FILGHTS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

// export const detailFlightsAction = (id) => async (dispatch) => {

//   const result = await axios
//     .get(
//       `https://avtur-ankasa-ticketing.herokuapp.com/v1/flights/${id}`
//     )
//     .catch((err) => {
//       console.log(err);
//     });
//     const data = result.data
//     console.log(result);
//   dispatch({ type: ActionTypes.DETAIL, payload: data });
// };

export const detailFlightsAction = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const result = await axios.get(
      `https://avtur-ankasa-ticketing.herokuapp.com/v1/flights/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(result);

    dispatch({ type: ActionTypes.DETAIL, payload: result });
  } catch (error) {
    console.log(error);
  }
};
