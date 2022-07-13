const initialState = {
    data : [],
    pagination : {}
 }
 
 const flightReducer = (state = initialState, action) => {
    if (action.type === 'GET_FILGHTS'){
       return {
          ...state,
          data : [
             ...action.payload.data
          ],
          pagination : {
             ...action.payload.pagination
          }
       }
    }else {
       return state
    }
 }
 
 export default flightReducer