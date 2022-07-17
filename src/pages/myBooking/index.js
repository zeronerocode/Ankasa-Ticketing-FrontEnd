import React, { useEffect } from "react";
import styles from "./myBooking.module.css";
import Card from "../../components/base/card/index";
import ProfileCard from "../../components/module/cardProfile/index";
import CardBooking from "../../components/module/cardBooking";
// import Navi from '../../components/module/navi'
import Footer from "../../components/module/footer";
import Header from "../../components/module/nav/header";
import { bookingAction } from "../../configs/redux/actions/detailBookingActions";
import { useDispatch, useSelector } from "react-redux";

const MyBooking = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.myBooking);
  const data = datas.data;
  console.log(data);
  // };
  useEffect(() => {
    dispatch(bookingAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.wcard}>
            <ProfileCard className={styles.cardBio} />
          </div>
          <div className={styles.wcard2}>
            <Card className={styles.card2} />
            <p className={styles.text}>My Booking</p>
            <p className={styles.text2}>My Booking</p>
            <p className={styles.text3}>Order History</p>
          </div>
          <div className={styles.dflex}>
            {data.map((item) => (
              <div className={styles.wcard2} key={item.id}>
                {/* <h1>{item.id}</h1> */}
                <CardBooking
                  className={
                    item.payment_status === 1 ? styles.btn2 : styles.btn
                  }
                  title={
                    item.payment_status === 1
                      ? " Eticket Success"
                      : "Waithing payment"
                  }
                />
              </div>
            ))}
          </div>

          <Card className={styles.card4} />
        </div>
        <Footer className={styles.footer} />
      </div>
    </>
  );
};

export default MyBooking;
