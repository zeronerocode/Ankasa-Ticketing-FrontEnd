import axios from "axios";
import { ActionTypes } from "../constants/action-types";
import Swal from "sweetalert2";

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

export const createBooking = (data, navigate) => async (dispacth) => {
  try {
    const token = localStorage.getItem("token");
    const createdAt = await axios.post(
      ` ${process.env.REACT_APP_API_BACKEND}/bookings/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispacth({ type: ActionTypes.CREATE_BOOKINGS, payload: createdAt });
    Swal.fire({
      icon: "success",
      title: "Berhasil Memesan",
      text: `Selamat !!`,
    });
    navigate("/myBooking");
  } catch (error) {
    dispacth({ type: ActionTypes.GET_BOOKING_ERROR, payload: error.response });
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "data yang anda inputkan salah",
    });
  }
};
