const initialState = {
    user: {
        name: '',
        email: ''
    },
    isLoading: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOGIN_PENDING":
          return {
            ...state,
            isLoading: true,
          };
        case "USER_LOGIN_SUCCESS":
          return {
            ...state,
            user: action.payload,
            isLoading: false,
          };
        default:
          return state;
      }
}

export default userReducer