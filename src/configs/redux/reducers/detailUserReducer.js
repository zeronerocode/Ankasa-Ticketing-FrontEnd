const initialState = {
    data : {
        profile: []
    },
 }
 
 const detailUserReducer = (state = initialState, action) => {
    if (action.type === 'GET_DETAIL_USER'){
       return {
          ...state,
          data : {
             ...action.payload,
             profile : [
                ...action.payload.profile
             ]
          }
       }
    }else {
       return state
    }
 }
 
 export default detailUserReducer