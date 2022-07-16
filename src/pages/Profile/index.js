import React, { useState, useEffect } from "react";
import Card from "../../components/base/card/index";
import ProfileCard from "../../components/module/cardProfile/index";
import styles from "./profile.module.css";
import Input from "../../components/base/input/index";
import Button from "../../components/base/button/index";
// import Navi from '../../components/module/navi/index'
import Footer from "../../components/module/footer/index";
import Header from "../../components/module/nav/header";
import { useSelector, useDispatch } from "react-redux";
import styless from "../../components/module/cardProfile/cardProfile.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { updateUser } from "../../configs/redux/actions/detailUserAction";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const id = user.id;
  const dispatch = useDispatch();
  const [phone_number, setPhone_number] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
  const [post_code, setPost_code] = useState("");
  const [photo, setPhoto] = useState("");
  const [imagePreview, setImagePreview] = useState(photo);

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    console.log(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const navigate = useNavigate();
  const onSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const data = new FormData();
    data.append("phone_number", phone_number);
    data.append("username", username);
    data.append("city", city);
    data.append("address", address);
    // data.append("email", email);
    data.append("post_code", post_code);
    data.append("photo", photo);
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_BACKEND}/profile`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        "Content-Type": "multipart/form-data",
      })
      .then((res) => {
        console.log(res);
        dispatch(updateUser(res));
        navigate("/profile");
        Swal.fire({
          icon: "success",
          title: "Berhasil mengupdate users",
          text: `users :`,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "data yang anda inputkan salah",
        });
        console.log(err);
      });
  };
  useEffect(() => {
    getProductById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(username);
  const getProductById = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data[0].username);
    setUsername(response.data.data[0].username);
    setPhoto(response.data.data[0].photo);
    setPost_code(response.data.data[0].post_code);
    setCity(response.data.data[0].city);
    setEmail(response.data.data[0].email);
    setPhone_number(response.data.data[0].phone_number);
    setAddress(response.data.data[0].address);
  };

  return (
    <>
      <div className={styles.container}>
        <Header />
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.wrapper}>
            <div>
              <ProfileCard
                className={styles.card}
                srcs={imagePreview}
                images={
                  <input
                    id="selectFile"
                    type="file"
                    onChange={(e) => onImageUpload(e)}
                    name="photo"
                  />
                }
              />
            </div>
            <div>
              <Card className={styles.card2} />
              <p className={styles.text}>Profile</p>
              <p className={styles.text2}>Profile</p>

              <div className={styles.contact}>
                <p className={styles.contactText}>Contact</p>
                <p className={styles.emailText}>Email</p>
                <input
                  type="email"
                  name="email"
                  className={styles.input}
                  value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  placeholder="Insert Your Email"
                />
                <p className={styles.phoneText}>Phone Number</p>
                <input
                  type="number"
                    value={phone_number}
                  onChange={(e) => setPhone_number(e.target.value)}
                  name="phone_number"
                  className={styles.input2}
                  placeholder="Insert Your Phone Number"
                />
              </div>
              <div className={styles.biodata}>
                <p className={styles.biodataText}>Biodata</p>
                <p className={styles.username}>Username</p>
                <input
                  type="text"
                  //   name="username"
                  id="text"
                    value={username || ""}
                  onChange={(e) => setUsername(e.target.value)}
                  className={styles.input3}
                  placeholder="Insert Your Name"
                />
                <p className={styles.city}>City</p>
                <input
                  type="text"
                  name="city"
                    value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={styles.input4}
                  placeholder="Insert Your City"
                />
                <p className={styles.adress}>Adress</p>
                <input
                  type="text"
                  className={styles.input5}
                    value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Insert Your Adress"
                />
                <p className={styles.zip}>Zip Coder</p>
                <input
                  type="number"
                  className={styles.input6}
                  name="post_code"
                    value={post_code}
                  onChange={(e) => setPost_code(e.target.value)}
                  placeholder="Insert Your Zip Code"
                />
              </div>
              <p className={styles.settingText}>Account Setting</p>
              <Button className={styles.btn} title="save" type="submit" />
            </div>
          </div>
        </form>
        <Footer className={styles.footer} />
      </div>
    </>
  );
};

export default Profile;
