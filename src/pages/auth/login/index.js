import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../components/base/buttonv2'
import Input from '../../../components/base/inputv2'
import PasswordInput from '../../../components/base/password'
import Banner from '../../../components/module/banner'
import Logo from '../../../components/module/logo'
import { useDispatch } from 'react-redux'
import styles from '../auth.module.css'
import { loginCustomer } from '../../../configs/redux/actions/userAction'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const [passwordType, setPasswordType] = useState("password");
    // const togglePassword =()=>{
    //     if(passwordType==="password"){
    //         setPasswordType("text")
    //         return;
    //     }
    //     setPasswordType("password")
    // }
    

    const [formLogin, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleChage = (e) =>{
        setLogin({
            ...formLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) =>{
        e.preventDefault()
        dispatch(loginCustomer(formLogin, navigate))
    }

  return (
    <div style={{height: '100vh' ,display: 'flex'}}>
        <div className={styles.divider}>
            <Banner />
        </div>

        <div className={styles.auth}>
            <Logo />

            <p className={styles.title}>Login</p>

            <form onSubmit={handleLogin} className={styles.form}>
                <Input
                id='email'
                name='email'
                type='email'
                className={styles.input}
                style={{
                    marginBottom: '25px'
                }}
                placeholder='E-mail'
                value={formLogin.email}
                onChange={handleChage}
                // value={loginData.email}
                />

                <PasswordInput 
                id='password'
                name='password'
                type='password'
                className={styles.input}
                // style={style}
                placeholder='Password'
                value={formLogin.password}
                onChange={handleChage}
                // value={loginData.password}
                // onClick={togglePassword}
                />

                <Button
                // htmlFor='login' 
                title='Login'
                type='submit'
                className={styles['auth-btn']}
                // style={style}
                // onClick={handleLogin}
                />

                <small className={styles.small}>Did you forgot your password? <Link to='/forgotpassword' className={styles.links}>Tap here to reset</Link></small>

            </form>
        </div>
    </div>
  )
}

export default Login