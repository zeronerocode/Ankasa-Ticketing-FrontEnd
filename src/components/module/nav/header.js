import React, { useState, useEffect } from 'react'
import Nav from './nav'
import { useNavigate } from 'react-router';
import { useDispatch} from 'react-redux';
import { flightAction } from '../../../configs/redux/actions/flightAction';
// import { useDispatch, useNabigate } from 'react-redux/es/exports'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const localToken = localStorage.getItem('token')
    if (localToken) {
      setIsLogin(true)
    }
  },[])

  return (
    <header>
      <div>
         <i onClick={() => {navigate('/home'); dispatch(flightAction())}}/>
         { isLogin ? <Nav type='logged' /> : <Nav type='notLogged' /> }
      </div>
    </header>
  )
}

export default Header