import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../components/base/buttonv2'
import Input from '../../../components/base/inputv2'
import PasswordInput from '../../../components/base/password'
import Banner from '../../../components/module/banner'
import Logo from '../../../components/module/logo'
import { useDispatch } from 'react-redux'
import styles from '../auth.module.css'
import swal from "sweetalert2";
import { loginCustomer } from '../../../configs/redux/actions/userAction'

const Login = () => {

     const navigate = useNavigate();
     const dispatch = useDispatch();
     const [formLogin, setFormLogin] = useState({
       email: "",
       password: "",
     });

     const handleChange = (e) => {
       setFormLogin({
         ...formLogin,
         [e.target.name]: e.target.value,
       });
     };
     console.log(formLogin.admin);
     const handleLogin = (e) => {
       e.preventDefault();
       dispatch(loginCustomer(formLogin, navigate));
     };

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <div className={styles.divider}>
        <Banner />
      </div>

      <div className={styles.auth}>
        <Logo />

        <p className={styles.title}>Login</p>

        <form onSubmit={handleLogin} className={styles.form}>
          <Input
            id="email"
            name="email"
            type="email"
            className={styles.input}
            style={{
              marginBottom: "25px",
            }}
            value={formLogin.email}
            placeholder="E-mail"
            onChange={handleChange}
            // value={loginData.email}
          />

          <PasswordInput
            id="password"
            name="password"
            type="password"
            className={styles.input}
            // style={style}
            placeholder="Password"
            value={formLogin.password}
            onChange={handleChange}
            // value={loginData.password}
            // onClick={togglePassword}
          />

          <Button
            // htmlFor='login'
            title="Login"
            type="submit"
            className={styles["auth-btn"]}
            // style={style}
            // onClick={handleLogin}
          />

          <small className={styles.small}>
            SIGN UP{" "}
            <Link to="/register" className={styles.links}>
              Gooo ....
            </Link>
          </small>
          <small className={styles.small}>
            Did you forgot your password?{" "}
            <Link to="/forgotpassword" className={styles.links}>
              Tap here to reset
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login