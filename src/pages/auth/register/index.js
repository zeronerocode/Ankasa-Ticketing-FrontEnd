import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/base/buttonv2";
import Input from "../../../components/base/inputv2";
import PasswordInput from "../../../components/base/password";
import Banner from "../../../components/module/banner";
import Logo from "../../../components/module/logo";
import axios from "axios";
import styles from "../auth.module.css";

import swal from "sweetalert2";
import { register } from "../../../configs/redux/actions/userAction";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [getErorr, setErorr] = useState("");
  console.log(form.password);
  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    if (form.name && form.email && form.password) {
      if (!form.name.match(/^[a-zA-Z ']*$/i)) {
        setErorr("name only alphabet!");
      } else if (
        !form.email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        setErorr("wrong email address!");
      } else if (form.password.length < 7) {
        setErorr(
          "password must contain uppercase letters, special characters and at least 8 letters."
        );
      } else if (form) {
        register(body)
          .then((response) => {
            swal.fire(
              "Success!",
              `success anda berhasil register, ${form.name} silahkan login `,
              "success"
            );
            navigate("/");
          })
          .catch((err) => {
            setErorr(err.response.data.error.toLowerCase());
          });
      }
    } else {
      setErorr("all inputs must be filled!");
    }
  };

  const onNavigate = () => {
    navigate("/");
  };
  // const togglePassword =()=>{
  //     if(passwordType==="password"){
  //         setPasswordType("text")
  //         return;
  //     }
  //     setPasswordType("password")
  // }

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <div className={styles.divider}>
        <Banner />
      </div>

      <div className={styles.auth}>
        <Logo />

        <p className={styles.title}>Register</p>

        <form
          className={styles.form}
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <Input
            id="name"
            name="name"
            type="text"
            className={styles.input}
            style={{
              marginBottom: "25px",
            }}
            onClick={() => setErorr("")}
            placeholder="Full name"
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
            // onChange={handleInput}
            // value={loginData.email}
          />

          <Input
            id="email"
            name="email"
            type="email"
            className={styles.input}
            style={{
              marginBottom: "25px",
            }}
            onClick={() => setErorr("")}
            placeholder="E-mail"
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            // onChange={handleInput}
            // value={loginData.email}
          />

          <PasswordInput
            id="password"
            name="password"
            className={styles.input}
            // style={style}
            placeholder="Password"
            onClick={() => setErorr("")}
            // onChange={handleInput}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
          />

          {getErorr ? (
            <p className="text-danger text-[13px]">{getErorr.toLowerCase()}</p>
          ) : null}
          <Button
            // htmlFor='login'
            title="Sign Up"
            type="submit"
            className={styles["auth-btn"]}
            // style={style}
          />

          <small className={styles.small}>Already have an account?</small>
          <Button
            // htmlFor='login'
            title="Sign In"
            type="submit"
            className={styles["link-btn"]}
            // style={style}
            // onClick={() => navigate("/login")}
          />
        </form>
      </div>
    </div>
  );
};
// ()=>navigate('/login')

export default Register;
