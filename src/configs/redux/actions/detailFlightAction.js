import axios from "axios";

export const detailFlightAction = (flight_id) => async(dispatch) =>{
      try {
         const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/flight/'+flight_id)
         const data = result.data.data
         dispatch({type: 'GET_DETAIL_FLIGHT', payload: data})
      } catch (error) {
         console.log(error)
      }
}