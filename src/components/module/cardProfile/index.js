import React, { useEffect, useState } from "react";
import styles from "./cardProfile.module.css";
import Card from "../../base/card/index";
import Button from "../../base/button/index";
import Input from "../../base/input/index";
import UserLogo from "../../../assets/user.png";
import Setting from "../../../assets/setting.png";
import Rating from "../../../assets/rating.png";
import LogOut from "../../../assets/logOut.png";
import axios from "axios";
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {
  detailUserAction,
  signOut,
} from "../../../configs/redux/actions/detailUserAction";
import Avatar from "../../../assets/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProfileCard = ({ className, images,gambar }) => {
  // const { data } = useSelector((state) => state.detail);
  // // const id = user.id;
  // console.log(data);
  // const { photo,username,email } = data;
  // console.log(photo)
  const navigate = useNavigate()
  const handleSignOut = () => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate('/login')
    dispatch(signOut());
    Swal.fire({
      icon: "success",
      title: "Selamat anda berhasil logout",
      text: `Selamat tinggal`,
    });
  };
  const dispatch = useDispatch();
   const [username, setUsername] = useState("");
   const [photo, setPhoto] = useState("");
   const [email, setEmail] = useState("");
useEffect(() => {
  datas()
}, []);
  
   const datas = async () => {
     const token = localStorage.getItem("token");
     const response = await axios.get(
       `${process.env.REACT_APP_API_BACKEND}/profile`,
       {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       }
     );
     console.log(response.data.data.username);
     setUsername(response.data.data.username);
     setPhoto(response.data.data.photo);
     setEmail(response.data.data.email);
   };
  return (
    <>
      <div className={className}>
        <Card className={styles.card} />
        <div>
          <img
            className={styles.ava}
            src={gambar ? gambar : photo}
            alt="photoprofile"
          />
        </div>
        <div className={styles.upload}>
          <Button className={styles.btn} title="Select Photo" />
          {images}
          <div className={styles.userName}>@{username}</div>
          <div className={styles.userOrigin}>{email}</div>
          <div className={styles.cards}>Cards</div>
          <Button className={styles.btn2} title="+ Add" />
          <div className={styles.cardBox} />
          <p className={styles.cardNumber}>7569511535</p>
          <p className={styles.cardBank}>BCA</p>
          <p className={styles.cardSaldo}>$ 250,00</p>
          <div className={styles.wrapper}>
            <Link to="/Profile">
              <img src={UserLogo} className={styles.userLogo} alt="user" />
              <p>Profile</p>
            </Link>
          </div>
          <div className={styles.wrapper2}>
            <img src={Rating} className={styles.rating} alt="user" />
            <p>My Review</p>
          </div>
          <div className={styles.wrapper3}>
            <img src={Setting} className={styles.setting} alt="user" />
            <p>Setting</p>
          </div>
          <div className={styles.wrapper4} onClick={() => handleSignOut()}>
            <img src={LogOut} className={styles.logout} alt="user" />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
