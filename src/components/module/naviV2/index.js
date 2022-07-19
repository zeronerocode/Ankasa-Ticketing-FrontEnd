/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "../../base/buttonv2";
import Logo from "../logo";
import Searchbar from "../searchbar";
import styles from "./naviv2.module.css";
import mail from "../../../assets/mail.svg";
import bell from "../../../assets/bell.svg";
import user from "../../../assets/user.svg";
import switchIcon from "../../../assets/switchBlue.svg";
import oneway from "../../../assets/oneway.svg";
import round from "../../../assets/roundtrip.svg";
import arrow from "../../../assets/arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NaviV2 = () => {
  const navigate = useNavigate();
  const datas = useSelector((state) => state.myBooking);
  const data = datas.data;
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const [trip, setTrip] = useState("");

  const [date, setDate] = useState("");
  const [child, setChild] = useState("");
  const [adult, setAdult] = useState("");
  const [ticketType, setTicketType] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearchFlight = (origin, destination) => {
    console.log(`handle search ${origin}`);
    navigate(`/searchflight?origin=${origin}&destination=${destination}`);
  };

  // console.log(`${origin}`)
  // console.log(`${destination}`)
  // console.log(`trip : ${trip}`)
  // console.log(`${date}`)
  // console.log(`child : ${child}`)
  // console.log(`adult : ${adult}`)
  // console.log(`ticketType : ${ticketType}`)
  return (
    <div className={styles.navi}>
      <Link to="/home">
        <Logo />
      </Link>

      <Searchbar />

      <div className={styles["btn-group"]}>
        <Button
          title="Find Ticket"
          type="button"
          className={styles["navi-btn"]}
          onClick={handleShow}
        />

        <Modal
          show={show}
          onHide={handleClose}
          className={styles["modal-wrap"]}
        >
          <Modal.Body className={styles.modal}>
            <div className={styles["modal-header"]}>
              <span>Hey,</span>
              <p>Where you want to go?</p>
            </div>

            <div className={styles["modal-detail"]}>
              <div>
                <span>From</span>
                <span>To</span>
              </div>

              <div>
                <input
                  name="origin"
                  type="text"
                  className={styles.origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  required
                />
                <img src={switchIcon} alt="" />
                <input
                  type="text"
                  className={styles.dest}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className={styles["modal-trip"]}>
              <button name="trip" onClick={() => setTrip("oneway")}>
                <div>
                  <img src={oneway} alt="" />
                  <span>One way</span>
                </div>
              </button>

              <button name="trip" onClick={() => setTrip("round")}>
                <div>
                  <img src={round} alt="" />
                  <span>Round trip</span>
                </div>
              </button>
            </div>

            <div className={styles["modal-ticket"]}>
              <p>Departure</p>
              <input
                type="date"
                name="departure"
                placeholder="dd-mm-yyyy"
                min="1997-01-01"
                max="2030-12-31"
                className={styles.date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />

              <p>How many person?</p>
              <div>
                <select
                  name="child"
                  id="child"
                  className={styles.ticket}
                  onChange={(e) => {
                    setChild(e.target.value);
                  }}
                >
                  <option value="1">1 Child</option>
                  <option value="2">2 Child</option>
                  <option value="3">3 Child</option>
                  <option value="4">4 Child</option>
                </select>

                <select
                  name="adult"
                  id="adult"
                  className={styles.ticket}
                  onChange={(e) => {
                    setAdult(e.target.value);
                  }}
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adult</option>
                  <option value="3">3 Adult</option>
                  <option value="4">4 Adult</option>
                </select>
              </div>
            </div>

            <div className={styles["modal-ticket-type"]}>
              <p>Which class do you want?</p>
              <div>
                <div>
                  <input
                    id="economy"
                    value="economy"
                    type="radio"
                    name="class"
                    onClick={(e) => setTicketType(e.target.value)}
                  />
                  <label htmlFor="economy">Economy</label>
                </div>

                <div>
                  <input
                    id="business"
                    value="business"
                    type="radio"
                    name="class"
                    onClick={(e) => setTicketType(e.target.value)}
                  />
                  <label htmlFor="business">Business</label>
                </div>

                <div>
                  <input
                    id="firstClass"
                    value="firstClass"
                    type="radio"
                    name="class"
                    onClick={(e) => setTicketType(e.target.value)}
                  />
                  <label htmlFor="firstClass">First Class</label>
                </div>
              </div>
            </div>

            <button
              className={styles["modal-btn"]}
              onClick={() => handleSearchFlight(origin, destination)}
            >
              <span>SEARCH FLIGHT</span>
              <img src={arrow} alt="" />
            </button>
          </Modal.Body>
        </Modal>

        <Link to="/myBooking">
          <Button
            title="My Booking"
            type="button"
            className={styles["navi-btn"]}
            // onClick={handleLogin}
          />
        </Link>
      </div>

      <div className={styles["profile-section"]}>
        <div>
          <img src={mail} alt="" />
        </div>

        <div>
          <img src={bell} alt="" />
          <span className=" top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {data.length}
          </span>
        </div>

        <div>
          <Link to={"/profile"}>
            <img src={user} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NaviV2;
