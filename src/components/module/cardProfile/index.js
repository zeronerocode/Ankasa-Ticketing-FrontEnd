import React, { useEffect, useState } from 'react'
import styles from './cardProfile.module.css'
import Card from '../../base/card/index'
import Button from '../../base/button/index'
import Input from '../../base/input/index'
import UserLogo from '../../../assets/user.png'
import Setting from '../../../assets/setting.png'
import Rating from '../../../assets/rating.png'
import LogOut from '../../../assets/logOut.png'
// import Avatar from '../../../assets/avatar.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ProfileCard = ( className ) => {
    const [profile, setProfile] = useState ([])
    useEffect(()=>{
        async function fetchData(){
            try {
                const result = await axios({
                    method: "GET",
                    baseURL: "https://avtur-ankasa-ticketing.herokuapp.com/v1",
                    url: "/profile"
                });
                setProfile(result.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
  return (
    <>
    <div className={className}>
        <Card className={styles.card}/>
                <div>
                    {profile.map((item)=>(
                        <img src={item.photo} alt="avatar" className={styles.ava} />
                    ))}
                </div>
                <div className={styles.upload}>
                <Button className={styles.btn} title="Select Photo"  />
                <Input id="selectFile" type="file"  />
                {profile.map((item)=>(
                        <div className={styles.userName}>{item.name}</div>
                    ))}
                {profile.map((item)=>(
                        <div className={styles.userOrigin}>{item.city}</div>
                    ))}
                <div className={styles.cards}>Cards</div>
                <Button className={styles.btn2} title="+ Add" />
                <div className={styles.cardBox} />
                    <p className={styles.cardNumber}>7569511535</p>
                    <p className={styles.cardBank}>BCA</p>
                    <p className={styles.cardSaldo}>$ 250,00</p>
                <div className={styles.wrapper}>
                    <Link to="/Profile">
                        <img src={UserLogo} className={styles.userLogo} alt="user"/><p>Profile</p>
                    </Link>
                </div>
                <div className={styles.wrapper2}>
                    <img src={Rating} className={styles.rating} alt="user" /><p>My Review</p>
                </div>
                <div className={styles.wrapper3}>
                    <img src={Setting} className={styles.setting} alt="user" /><p>Setting</p>
                </div>
                <div className={styles.wrapper4}>
                    <img src={LogOut} className={styles.logout} alt="user" /><p>Logout</p>
                </div>
                </div>
        </div>
    </>
  )
}

export default ProfileCard