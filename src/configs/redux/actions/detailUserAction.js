import axios from "axios";

export const detailUserAction = () => async(dispatch) =>{
      try {
         const token = localStorage.getItem('token')
         const result = await axios({
            method : 'get',
            url : process.env.REACT_APP_API_BACKEND+`/profile`,
            headers : {"Authorization" : `Bearer ${token}`}
         })
         const data = result.data
         console.log(data);
         // const token = 
         // const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/profile/')
         // const data = result.data.data
         dispatch({type: 'GET_DETAIL_USER', payload: data})
         console.log(result);
      } catch (error) {
         console.log(error)
      }
}