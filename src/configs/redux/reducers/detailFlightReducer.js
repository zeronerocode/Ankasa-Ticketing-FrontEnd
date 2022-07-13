const initialState = {
    flights : {
       airline: '',
       origin: '',
       destination: ''
    },
 }
 
 const detailFlightReducer = (state = initialState, action) => {
    if (action.type === 'GET_DETAIL_FLIGHT'){
       return {
          ...state,
          data : {
             ...action.payload,
             employee : [
                ...action.payload.employee
             ]
          }
       }
    }else {
       return state
    }
 }
 
 export default detailFlightReducer