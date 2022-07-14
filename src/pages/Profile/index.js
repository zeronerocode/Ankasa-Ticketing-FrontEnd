import React from 'react'
import Card from '../../components/base/card/index'
import ProfileCard from '../../components/module/cardProfile/index'
import styles from './profile.module.css'
import Input from '../../components/base/input/index'
import Button from '../../components/base/button/index'
// import Navi from '../../components/module/navi/index'
import Footer from '../../components/module/footer/index'
import Header from '../../components/module/nav/header'
// import axios from 'axios'

const Profile = () => {
  

  return (
    <>
        <div className={styles.container}>
            <Header />
            <div className={styles.wrapper}>
            <div>
                <ProfileCard className={styles.card} />
            </div>
            <div>
                <Card className={styles.card2} />
                <p className={styles.text}>Profile</p>
                <p className={styles.text2}>Profile</p>
                <form method='post' className={styles.form}>
                    <div className={styles.contact}>
                        <p className={styles.contactText}>Contact</p>
                        <p className={styles.emailText}>Email</p>
                            <Input type="email" className={styles.input} placeholder="Insert Your Email" />
                        <p className={styles.phoneText}>Phone Number</p>
                            <Input type="number" className={styles.input2} placeholder="Insert Your Phone Number" />
                    </div>
                    <div className={styles.biodata}>
                        <p className={styles.biodataText}>Biodata</p>
                        <p className={styles.username}>Username</p>
                            <Input type="text" className={styles.input3} placeholder="Insert Your Name" />
                        <p className={styles.city}>City</p>
                            <Input type="text" className={styles.input4} placeholder="Insert Your City" />
                            <p className={styles.adress}>Adress</p>
                            <Input type="text" className={styles.input5} placeholder="Insert Your Adress" />
                        <p className={styles.zip}>Zip Coder</p>
                            <Input type="number" className={styles.input6} placeholder="Insert Your Zip Code" />
                    </div>
                    <p className={styles.settingText}>Account Setting</p>
                    <Button className={styles.btn} title="save" type="submit" />
                </form>
            </div>
            </div>
            <Footer className={styles.footer} />
        </div>
    </>
  )
}

export default Profile