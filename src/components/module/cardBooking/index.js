import React from 'react'
import styles from './cardBooking.module.css'
import Card from '../../base/card/index'
import Button from '../../base/button/index'
import Destination from '../../../assets/dst.png'

const CardBooking = ({ title, className }) => {
  return (
    <>
        <div className={styles.wcard3}>
            <Card className={styles.card3}/>
            <p className={styles.date}>Date and Time</p>
            <p className={styles.origin}>ORG</p>
            <img className={styles.destIcon} src={Destination} alt="" />
            <p className={styles.destination}>DST</p>
            <p className={styles.airLines}>Airlines Name</p>
            <div className={styles.line}></div>
            <p className={styles.status}>Status</p>
            <Button className={className} title={title} />
            <p className={styles.viewDetail}>View Details</p>
              <select className={styles.sBtn} name="viewDetail" id="viewDetail"></select>
        </div>
    </>
  )
}

export default CardBooking