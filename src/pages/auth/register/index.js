import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/base/buttonv2'
import Input from '../../../components/base/inputv2'
import PasswordInput from '../../../components/base/password'
import Banner from '../../../components/module/banner'
import Logo from '../../../components/module/logo'

import styles from '../auth.module.css'

const Register = () => {
    const navigate = useNavigate();

    const [passwordType, setPasswordType] = useState("password");

    const togglePassword =()=>{
        if(passwordType==="password"){
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

  return (
    <div style={{height: '100vh' ,display: 'flex'}}>
        <div className={styles.divider}>
            <Banner />
        </div>

        <div className={styles.auth}>
            <Logo />

            <p className={styles.title}>Register</p>

            <form className={styles.form}>
                <Input
                id='fullname'
                name='fullname'
                type='text'
                className={styles.input}
                style={{
                    marginBottom: '25px'
                }}
                placeholder='Full name'
                // onChange={handleInput}
                // value={loginData.email}
                />

                <Input
                id='email'
                name='email'
                type='email'
                className={styles.input}
                style={{
                    marginBottom: '25px'
                }}
                placeholder='E-mail'
                // onChange={handleInput}
                // value={loginData.email}
                />

                <PasswordInput 
                id='password'
                name='password'
                type={passwordType}
                className={styles.input}
                // style={style}
                placeholder='Password'
                // onChange={handleInput}
                // value={loginData.password}
                onClick={togglePassword}
                />

                <Button
                // htmlFor='login' 
                title='Sign Up'
                type='submit'
                className={styles['auth-btn']}
                // style={style}
                // onClick={handleLogin}
                />

                <small className={styles.small}>Already have an account?</small>

                <Button
                // htmlFor='login' 
                title='Sign In'
                type='button'
                className={styles['link-btn']}
                // style={style}
                onClick={()=>navigate('/login')}
                />
            </form>
        </div>
    </div>
  )
}

export default Register