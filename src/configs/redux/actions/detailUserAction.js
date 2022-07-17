import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_PRODUCT",
    });

    dispatch({
      type: "SIGN_OUT",
    });
  };
};

export const detailUserAction = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("refreshToken");
    console.log(token);
    dispatch({ type: "GET_PROFILE_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = result.data.data;
    console.log(result);
    // const token =
    // const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/profile/')
    // const data = result.data.data
    dispatch({ type: "GET_PROFILE_SUCCESS", payload: data });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};



// export const getDetailUser = () => async (dispatch) => {
//   try {
//     const token = localStorage.getItem("token");
//      const profile = JSON.parse(localStorage.getItem("user"));
//      console.log(profile)
//     dispatch({
//       type: ActionTypes.GET_DETAIL_USER_PENDING,
//     });
//     const res = await axios.get(
//       `${process.env.REACT_APP_API_BACKEND}/profile`,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );
//       console.log(res.data.data[0])
//     dispatch({
//       type: ActionTypes.GET_DETAIL_USER,
//       payload: res.data.data[0],
//     });
//   } catch (error) {
//     dispatch({
//       type: ActionTypes.GET_DETAIL_USER_FAILED,
//       payload: error.message,
//     });
//   }
// };


export const updateProfil = async (data) => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem("token");
    axios
      .put(`${process.env.REACT_APP_API_BACKEND}/profile`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        "Content-Type": "multipart/form-data",
      })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateUser = (users) => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload: users,
  };
};