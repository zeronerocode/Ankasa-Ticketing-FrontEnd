/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import styles from "./myBooking.module.css";
// import Card from "../../components/base/card/index";
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
  let styless = {
    marginTop: "600px",
  };
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.wrapper}>
        <div className={styles.sect1}>
        <ProfileCard/>
        </div>
        <div className={styles.sect2}>
        <div className={styles.wcard2}>
            <p className={styles.text}>My Booking</p>
            <div className={styles.headers}>
            <p className={styles.text2}>My Booking</p>
            <p className={styles.text3}>Order History</p>
            </div>
          </div>
          <div className={styles.dflex}>
            {data.map((item) => (
                <CardBooking id={item.id} origin={item.origin} destination={item.destination} airline_name={item.airline_name} payment_status={item.payment_status} departure_time={item.departure_time} departure_date={item.departure_date} />
            ))}
          </div>
        </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default MyBooking;
