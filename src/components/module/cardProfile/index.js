import React, { useEffect,useState } from "react";
import styles from "./cardProfile.module.css";
import Card from "../../base/card/index";
import Button from "../../base/button/index";
import Input from "../../base/input/index";
import UserLogo from "../../../assets/user.png";
import Setting from "../../../assets/setting.png";
import Rating from "../../../assets/rating.png";
import LogOut from "../../../assets/logOut.png";
import axios from 'axios'
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {
  detailUserAction,
  signOut,
} from "../../../configs/redux/actions/detailUserAction";
import Avatar from "../../../assets/avatar.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"

const ProfileCard = ({ className, images }) => {
     const { user } = useSelector((state) => state.auth);
     console.log(user);
     const handleSignOut = () => {
       localStorage.removeItem("refreshToken");
       localStorage.removeItem("id");
       dispatch(signOut());
       Swal.fire({
         icon: "success",
         title: "Selamat anda berhasil logout",
         text: `Selamat tinggal`,
       });
     };
  const dispatch = useDispatch();
  //  const {id} = useParams()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
  useEffect(() => {
    dispatch(detailUserAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {profile}  = useSelector((state) => state.detail);
//   const {username,email,name} = profile
      useEffect(() => {
        getProductById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
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
        setEmail(response.data.data[0].email);
      };
// console.log(username);
  // useEffect(()=>{
  //     axios.get('https://avtur-ankasa-ticketing.herokuapp.com/v1/profil')
  //     .then((res)=>{
  //         console.log(res);
  //     })
  //     .catch((err)=>{
  //         console.log(err);
  //     })
  // }, [])

  return (
    <>
      <div className={className}>
        <Card className={styles.card} />
        <div>
          <img className={styles.ava} src={photo} alt="photoprofile" />
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
          <div className={styles.wrapper4}>
            <img
              src={LogOut}
              className={styles.logout}
              onClick={() => handleSignOut()}
              alt="user"
            />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
