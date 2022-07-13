import React from 'react'
import Card, { Card2 } from '../../components/base/card/index'
import styles from './bookingDetail.module.css'
import IconOpt from '../../assets/iconOption.png'
import Destination from '../../assets/dst.png'
import Data from '../../components/base/QRCode'
import Navi from '../../components/module/navi/index'
import Footer from '../../components/module/footer/index'


const BookingDetail = () => {

  return (
    <>
        <div className={styles.container}>
            <Navi />
            <div className={styles.wrapper}>
                <div>
                    <div>
                        <Card className={styles.card} />
                        <div className={styles.wrapper1}>
                            <p className={styles.text}>Booking Pass</p>
                            <img src={IconOpt} className={styles.iconOpt} alt="option" />
                            <Card className={styles.card2} />
                            <div className={styles.airLinesLogo}></div>
                            <div className={styles.destwrap}>
                            <p className={styles.origin}>ORG</p>
                            <img className={styles.destIcon} src={Destination} alt="" />
                            <p className={styles.destination}>DST</p>
                            </div>
                            <Card2 title="Code" content="Code" className={styles.card3} />
                            <Card2 title="Class" content="Class" className={styles.card4} />
                            <Card2 title="Terminal" content="Terminal" className={styles.card5} />
                            <Card2 title="Gate" content="Code" className={styles.card6} />
                            <Card2 title="Departure" content="Departure" className={styles.card7} />
                            <div className={styles.ellipse}></div>
                            <div className={styles.ellipse2}></div>
                            <div className={styles.line}></div>
                            <div className={styles.QR}>
                            <Data />
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default BookingDetail