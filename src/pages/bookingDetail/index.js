import React,{useEffect} from "react";
import Card, { Card2 } from "../../components/base/card/index";
import styles from "./bookingDetail.module.css";
import IconOpt from "../../assets/iconOption.png";
import Destination from "../../assets/dst.png";
import Data from "../../components/base/QRCode";
import Navi from "../../components/module/navi/index";
import Footer from "../../components/module/footer/index";
import { detailBookingAction } from "../../configs/redux/actions/detailBookingActions";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const BookingDetail = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const datas = useSelector((state) => state.bookingDetail);
  const { code, terminal, image, gate, destination, origin, departure_date } =
    datas.data;
  console.log(datas.data);
  // };
  useEffect(() => {
    dispatch(detailBookingAction(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
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
                <div className={`${styles.airLinesLogo}`}>
                  <img src={image} alt="" width="70px" />
                </div>
                <div className={styles.destwrap}>
                  <p className={styles.origin}>{origin}</p>
                  <img className={styles.destIcon} src={Destination} alt="" />
                  <p className={styles.destination}>{destination}</p>
                </div>
                <Card2 title="Code" content={code} className={styles.card3} />
                <Card2 title="Class" content="Class" className={styles.card4} />
                <Card2
                  title="Terminal"
                  content={terminal}
                  className={styles.card5}
                />
                <Card2
                  title="Gate"
                  content={gate === 1 ? "Ready" : "Non Ready"}
                  className={styles.card6}
                />
                <Card2
                  title="Departure"
                  content={departure_date}
                  className={styles.card7}
                />
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
  );
};;;

export default BookingDetail;
