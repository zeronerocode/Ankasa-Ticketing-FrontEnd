import React from 'react'
import styles from './cardProfile.module.css'
import Card from '../../base/card/index'
import Button from '../../base/button/index'
import Input from '../../base/input/index'
import UserLogo from '../../../assets/user.png'
import Setting from '../../../assets/setting.png'
import Rating from '../../../assets/rating.png'
import LogOut from '../../../assets/logOut.png'
import Avatar from '../../../assets/avatar.png'

const ProfileCard = ( className ) => {
  return (
    <>
    <div className={className}>
        <Card className={styles.card}/>
                <div>
                    <img src={Avatar} alt="avatar" className={styles.ava} />
                </div>
                <div className={styles.upload}>
                <Button className={styles.btn} title="Select Photo"  />
                <Input id="selectFile" type="file"  />
                <div className={styles.userName}>User Name</div>
                <div className={styles.userOrigin}>User Origin</div>
                <div className={styles.cards}>Cards</div>
                <Button className={styles.btn2} title="+ Add" />
                <div className={styles.cardBox} />
                    <p className={styles.cardNumber}>Card Number</p>
                    <p className={styles.cardBank}>Bank Name</p>
                    <p className={styles.cardSaldo}>Saldo</p>
                <div className={styles.wrapper}>
                    <img src={UserLogo} className={styles.userLogo} alt="user"/><p>Profile</p>
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