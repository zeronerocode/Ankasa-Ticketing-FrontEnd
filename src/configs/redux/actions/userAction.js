import axios from 'axios'
import swal from "sweetalert2";



// export const loginCustomer = (data) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(`${process.env.REACT_APP_API_BACKEND}/users/login`, data, {})
//       .then((response) => {
//         resolve(response);
//         //  const user = result.data.data;
//         console.log(response.data.data.token);
//         localStorage.setItem("refreshToken", response.data.data.refreshToken);
//         localStorage.setItem("token", response.data.data.token);
//         localStorage.setItem("user", JSON.stringify(response.data.data));
//       //  dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
//       })
//       .catch((error) => {
//         swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "password and email wrong!",
//         });
//         reject(error);
//       });
//   });
// };


export const loginCustomer = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/users/login`,
      dataForm
    );
    const user = result.data.data;
    // console.log(result.data.data.token);
    const token = result.data.data.token;
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", user.refreshToken);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      token: token.data,
      payload: user,
    });
    swal.fire({
      icon: "success",
      title: "Selamat anda berhasil Login",
      text: `Hallo ${result.data}`,
    });
    navigate("/home");
  } catch (error) {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "data yang anda inputkan salah, anda bukan admin",
    });
    console.log(error);
  }
};

export const register = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_BACKEND}/users/register`, data)
      .then((response) => {
        console.log(response)
        resolve(response);
      })
      .catch((error) => {
        swal.fire({
          icon: "error",
          title: "Oops...",
          text: "data yang anda input kan masih salah",
        });
        reject(error);
      });
  });
};
// export const registerUser = (dataForm, navigate) => async (dispatch) => {
//     try {
//       dispatch({ type: "USER_REGISTER_PENDING" });
//       const result = await axios.post(
//         `https://avtur-ankasa-ticketing.herokuapp.com/v1/users/register`,
//         dataForm
//       );
//       const user = result.data.data;
      
//       localStorage.setItem("token", user.token);
//       localStorage.setItem("refreshToken", user.refreshToken);
//       dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
//       navigate("/login");
//       alert("Anda berhasil daftar")
//     } catch (error) {
//       console.log(error);
//       alert("User sudah terdaftar")
//     }
//   };
  
  export const GET_USERS_DETAIL = "GET_USERS_DETAIL";

  export const getUserDetail = (id) => {
    return (dispatch) => {
      axios
      .get("https://avtur-ankasa-ticketing.herokuapp.com/v1/profile/"+id)
      .then(function(response){
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          }
        })
      })
      .catch(function (error){
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          }
        })
      })
    }
  }