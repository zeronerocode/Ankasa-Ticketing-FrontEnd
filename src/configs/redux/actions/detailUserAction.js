import axios from "axios";

export const detailUserAction = (id) => async(dispatch) =>{
      try {
         const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/profile/'+id)
         const data = result.data.data
         dispatch({type: 'GET_DETAIL_USER', payload: data})
      } catch (error) {
         console.log(error)
      }
}