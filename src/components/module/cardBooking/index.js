// import React,{useEffect} from 'react'
import styles from './cardBooking.module.css'
// import Card from '../../base/card/index'
// import Button from '../../base/button/index'
import Destination from '../../../assets/dst.png'
import { Link } from 'react-router-dom'
// import { bookingAction } from "../../../configs/redux/actions/detailBookingActions";
// import { useDispatch, useSelector } from "react-redux";

const CardBooking = ({ id, origin, destination, airline_name, payment_status, departure_date, departure_time}) => {
  // const dispatch = useDispatch();
  // const datas = useSelector((state) => state.myBooking);
  // const data = datas.data
  // console.log(data);
  // // };
  // useEffect(() => {
  //   dispatch(bookingAction());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
        <div className={styles.wcard3} key={id}>
        <Link to={`/bookingDetail/${id}`}>
        <div className={styles.sect1}>
          <p className={styles.date}>{departure_date}:{departure_time}</p>
          <div className={styles.destiFlight}>
          <p className={styles.origin}>{origin}</p>
          <img className={styles.destIcon} src={Destination} alt="" />
          <p className={styles.destination}>{destination}</p>
          </div>
          <p className={styles.airLines}>{airline_name}</p>
          <div className={styles.line}></div>
          </div>
          </Link>
          <div className={styles.stat}>
          <div className={styles.stats}>
          <p className={styles.status}>Status</p>
          {payment_status? <p className={styles.ticketIssued}>Ticket issued</p>: <p className={styles.waiting}>Waiting for payment</p>}
          </div>
          <div className={styles.sect2}>
          <p className={styles.viewDetail}>View Details</p>
          <select
            className={styles.sBtn}
            name="viewDetail"
            id="viewDetail"
          ></select>
          </div>
          </div>
          
        </div>
    </>
  );
};

export default CardBooking