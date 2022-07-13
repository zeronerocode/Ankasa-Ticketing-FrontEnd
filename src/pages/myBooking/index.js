import React from 'react'
import styles from './myBooking.module.css'
import Card from '../../components/base/card/index'
import ProfileCard from '../../components/module/cardProfile/index'
import CardBooking from '../../components/module/cardBooking'
// import Navi from '../../components/module/navi'
import Footer from '../../components/module/footer'
import Header from '../../components/module/nav/header'


const MyBooking = () => {

  return (
    <>
        <div className={styles.container}>
          <Header />
          <div className={styles.wrapper}>
          <div className={styles.wcard}>
            <ProfileCard className={styles.cardBio} />
          </div>
          <div className={styles.wcard2}>
            <Card className={styles.card2}/>
            <p className={styles.text}>My Booking</p>
            <p className={styles.text2}>My Booking</p>
            <p className={styles.text3}>Order History</p>
          </div>
          <div className={styles.wcard2}>
            <CardBooking className={styles.btn} title="Waiting for Payment" />
          </div>
          <div className={styles.wcard3}>
            <CardBooking className={styles.btn2} title="Eticket Issued" />
          </div>
            <Card className={styles.card4}/>
            </div>
            <Footer className={styles.footer} />
        </div>
    </>
  )
}

export default MyBooking