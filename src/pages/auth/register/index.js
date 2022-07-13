import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/base/buttonv2'
import Input from '../../../components/base/inputv2'
import PasswordInput from '../../../components/base/password'
import Banner from '../../../components/module/banner'
import Logo from '../../../components/module/logo'
import axios from 'axios'
import styles from '../auth.module.css'

const Register = () => {
    const navigate = useNavigate();

    const [dataRegister, setDataRegister] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setDataRegister({
            ...dataRegister,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        axios.post('https://avtur-ankasa-ticketing.herokuapp.com/v1/users/register', dataRegister)
        .then((res)=>{
            navigate('/login')
        })
        .catch((e)=>{
            console.log(e);
            alert('Register Failed')
        })
    }

    // const togglePassword =()=>{
    //     if(passwordType==="password"){
    //         setPasswordType("text")
    //         return;
    //     }
    //     setPasswordType("password")
    // }

  return (
    <div style={{height: '100vh' ,display: 'flex'}}>
        <div className={styles.divider}>
            <Banner />
        </div>

        <div className={styles.auth}>
            <Logo />

            <p className={styles.title}>Register</p>

            <form className={styles.form} onSubmit={handleRegister}>
                <Input
                id='name'
                name='name'
                type='text'
                className={styles.input}
                style={{
                    marginBottom: '25px'
                }}
                placeholder='Full name'
                value={dataRegister.name}
                onChange={handleChange}
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
                value={dataRegister.email}
                onChange={handleChange}
                // onChange={handleInput}
                // value={loginData.email}
                />

                <PasswordInput 
                id='password'
                name='password'
                type='password'
                className={styles.input}
                // style={style}
                placeholder='Password'
                // onChange={handleInput}
                // value={loginData.password}
                value={dataRegister.password}
                onChange={handleChange}
                />

                <Button
                // htmlFor='login' 
                title='Sign Up'
                type='submit'
                className={styles['auth-btn']}
                // style={style}
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
// ()=>navigate('/login')

export default Register