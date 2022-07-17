import axios from "axios";
import { ActionTypes } from "../constants/action-types";



export const detailBookingAction = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/bookings/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = result.data;
      console.log(data);
      
    dispatch({ type: ActionTypes.BOOKING, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const bookingAction = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/bookings/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = result.data;
    console.log(data);

    dispatch({ type: ActionTypes.BOOKING, payload: data });
  } catch (error) {
    console.log(error);
  }
};