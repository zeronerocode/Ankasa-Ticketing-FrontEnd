import React from 'react'
import Nav from './nav'
// import { useDispatch, useNabigate } from 'react-redux/es/exports'

const Header = () => {
    const isLogin = false
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const [isLogin, setIsLogin] = useState(false)
  
    // useEffect(() => {
    //   const localToken = localStorage.getItem('token')
    //   if (localToken) {
    //     setIsLogin(true)
    //   }
    // },[])

  return(
    <div>
    { isLogin ? <Nav type='logged' /> : <Nav type='notLogged' /> }
    </div>
  )
}

export default Header