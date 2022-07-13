import axios from 'axios'

export const loginCustomer = (dataForm, navigate) => async(dispatch) => {
    try {
        dispatch({type: 'USER_LOGIN_PENDING'})
        const result = await axios.post('https://avtur-ankasa-ticketing.herokuapp.com/v1/users/login', dataForm)
        const user = result.data.data
        localStorage.setItem('token', user.token)
        localStorage.setItem('refreshToken', user.refreshToken)
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: user})
        alert("Login Success")
        navigate('/home')
    } catch (error) {
        
    }
}