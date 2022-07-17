import React,{useEffect} from 'react'
import styles from './cardBooking.module.css'
import Card from '../../base/card/index'
import Button from '../../base/button/index'
import Destination from '../../../assets/dst.png'
import { Link } from 'react-router-dom'
import { bookingAction } from "../../../configs/redux/actions/detailBookingActions";
import { useDispatch, useSelector } from "react-redux";

const CardBooking = ({ title, className }) => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.myBooking);
  const data = datas.data
  console.log(data);
  // };
  useEffect(() => {
    dispatch(bookingAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {data.map((item) => (
        <div className={styles.wcard3} key={item.id}>
          <Card className={styles.card3} />
          <p className={styles.date}>Date and Time</p>
          <p className={styles.origin}>{item.origin}</p>
          <img className={styles.destIcon} src={Destination} alt="" />
          <p className={styles.destination}>{item.destination}</p>
          <p className={styles.airLines}>{item.airline_name}</p>
          <div className={styles.line}></div>
          <p className={styles.status}>Status</p>
          <Link to={`/bookingDetail/${item.id}`}>
            <Button className={className} title={title} />
          </Link>
          <p className={styles.viewDetail}>View Details</p>
          <select
            className={styles.sBtn}
            name="viewDetail"
            id="viewDetail"
          ></select>
        </div>
      ))}
    </>
  );
};

export default CardBooking