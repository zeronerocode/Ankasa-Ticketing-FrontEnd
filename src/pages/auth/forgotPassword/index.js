import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/base/buttonv2'
import Input from '../../../components/base/inputv2'
import Banner from '../../../components/module/banner'
import Logo from '../../../components/module/logo'

import styles from '../auth.module.css'

const ForgotPassword = () => {
    const navigate = useNavigate();

  return (
    <div style={{height: '100vh' ,display: 'flex'}}>
        <div className={styles.divider}>
            <Banner />
        </div>

        <div className={styles.auth}>
            <Logo />

            <p className={styles.title}>Forgot Password</p>

            <form className={styles.form}>
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

                <Button
                // htmlFor='login' 
                title='Send'
                type='submit'
                className={styles['auth-btn']}
                // style={style}
                onClick={()=>navigate('/login')}
                />

                <small className={styles.small}>You'll get message soon on your e-mail</small>
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword