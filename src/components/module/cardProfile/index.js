/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "./cardProfile.module.css";
// import Card from "../../base/card/index";
// import Button from "../../base/button/index";
import Input from "../../base/inputv2/index";
import UserLogo from "../../../assets/user.png";
import Setting from "../../../assets/setting.png";
import Rating from "../../../assets/rating.png";
import LogOut from "../../../assets/logOut.png";
import axios from "axios";
// import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import {
  signOut,
} from "../../../configs/redux/actions/detailUserAction";
// import Avatar from "../../../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProfileCard = ({ className, images,gambar,onChange,names }) => {
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
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.ava}>
            <img src={gambar ? gambar : photo} alt="photoprofile" />
          </div>
          <div className={styles.upload}>
            <label className={styles.btnLabel} htmlFor={"uploadAva"}>
              Select Photo
            </label>
            <input
              onChange={onChange}
              name={ names}
              type={"file"}
              id={"uploadAva"}
              className={styles.btn}
              accept=".jpeg, .jpg, .png"
            />
            <div className={styles.userName}>{username}</div>
            <div className={styles.userOrigin}>{email}</div>
            <div className={styles.cards}>
              <p>Cards</p>
              <p className={styles.btn2}>+ Add</p>
            </div>
            <div className={styles.cardBox}>
              <p className={styles.cardNumber}>7569511535</p>
              <div className={styles.cardIdentity}>
                <p>BCA</p>
                <p>$ 250,00</p>
              </div>
            </div>
            <div className={styles.bottomsect} id={styles.profile}>
              <div className={styles.bottomsect}>
                <img src={UserLogo} className={styles.userLogo} alt="user" />
                <p>Profile</p>
              </div>
              <p>{">"}</p>
            </div>
            <div className={styles.bottomsect}>
              <div className={styles.bottomsect}>
                <img src={Rating} className={styles.rating} alt="user" />
                <p>My Review</p>
              </div>
              <p>{">"}</p>
            </div>

            <div className={styles.bottomsect}>
              <div className={styles.bottomsect}>
                <img src={Setting} className={styles.setting} alt="user" />
                <p>Setting</p>
              </div>
              <p>{">"}</p>
            </div>
            <div
              className={styles.bottomsect}
              id={styles.logout}
              onClick={() => handleSignOut()}
            >
              <div className={styles.bottomsect}>
                <img src={LogOut} className={styles.logout} alt="user" />
                <p>Logout</p>
              </div>
              <p>{">"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
