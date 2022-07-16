import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "../../components/base/button";
import TicketCard from "../../components/module/ticketCard";
import Dropdown from "../../components/base/dropdown";
import NaviV2 from "../../components/module/naviV2";
import Footer from "../../components/module/footer";

import styles from "./searchFlight.module.css";

import plane from "../../assets/logoWhite.svg";
import switchIcon from "../../assets/switch.svg";
// import sort from '../../assets/sort.svg'

// import wifiIcon from '../../assets/facility/wifi.svg'
// import luggageIcon from '../../assets/facility/luggage.svg'
// import mealIcon from '../../assets/facility/meal.svg'
import { useSearchParams } from "react-router-dom";

const SearchFlight = () => {
  const [flights, setFlights] = useState([]);

  const fetchFlight = async (origin, destination) => {
    try {
      const result = await axios.get(`https://avtur-ankasa-ticketing.herokuapp.com/v1/flights?origin=${origin}&destination=${destination}`);
      // console.log(result.data);
      setFlights(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

 

  // console.log(query);
  // console.log(query.get);


  const changeSearch = () => {
    setQuery({
      origin,
      destination,
    });
  };

  // const params = {
  //   transit: '',
  //   departure: ''
  // }

  const [params, setParams] = useState({
  })



  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const [setDate] = useState("");
  const [setTicket] = useState("");
  const [setTicketType] = useState("");

  const [direct, setDirect] = useState("");
  const [transit, setTransit] = useState("");
  const [moreTransit, setMoreTransit] = useState("");
  let [transitType, setTransitType] = useState("");

  const [luggage, setLuggage] = useState('')
  const [meal, setMeal] = useState('')
  const [wifi, setWifi] = useState('')
  const [facilities, setFacilities] = useState('')

  // const [morningArrival, setMorningArrival] = useState('')
  // const [noonArrival, setNoonArrival] = useState('')
  // const [eveningArrival, setEveningArrival] = useState('')
  // const [nightArrival, setNightArrival] = useState('')
  // const [arrival, setArrival] = useState('')

  // const [morningDeparture, setMorningDeparture] = useState('')
  // const [noonDeparture, setNoonDeparture] = useState('')
  // const [eveningDeparture, setEveningDeparture] = useState('')
  // const [nightDeparture, setNightDeparture] = useState('')
  const [departure, setDeparture] = useState("");

  const [query, setQuery] = useSearchParams({});

  // console.log('ini statenya')
  // console.log(direct)
  // console.log(origin)
  // console.log(destination)
  // console.log(date)
  // console.log(ticket)
  // console.log(ticketType)
  console.log("ini transitType");
  console.log(transitType);
  // console.log(`query : ${query}`)
  // console.log(query)
  console.log(flights);

  useEffect(() => {
    fetchFlight(origin, destination);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <>
      <NaviV2 />

      <div>
        <div className={styles.flight}>
          <div>
            <div>
              <img src={plane} alt="" />
            </div>

            <div className={styles.detail}>
              <div>
                <span>From</span>
                <span>To</span>
              </div>

              <div>
                <input name="origin" type="text" className={styles.origin} onChange={(e) => setOrigin(e.target.value)} />
                <img src={switchIcon} alt="" />
                <input type="text" className={styles.dest} onChange={(e) => setDestination(e.target.value)} />
              </div>

              <div>
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
                <span> • </span>
                <select
                  name="ticket"
                  id="ticket"
                  className={styles.qty}
                  onChange={(e) => {
                    setTicket(e.target.value);
                  }}
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                </select>
                <span> • </span>
                <select
                  name="class"
                  id="class"
                  className={styles.class}
                  onChange={(e) => {
                    setTicketType(e.target.value);
                  }}
                >
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                  <option value="First Class">First Class</option>
                </select>
              </div>
            </div>
          </div>

          <Button title="Change Search" type="button" className={styles["change-search"]} onClick={changeSearch} />
        </div>

        <div className={styles["search-result"]}>
          <div className={styles["filter-wrap"]}>
            <div className={styles.subtitle}>
              <p>Filter</p>
              <Button
                title="Reset"
                type="button"
                className={styles["reset-filter"]}
                // onClick={onClick}
              />
            </div>

            <div className={styles.filters}>
              <p>Transit</p>
              <div className={styles.options}>
                <div>
                  <label>Direct</label>
                  <input
                    type="checkbox"
                    // checked={direct === "0" ? true : false}
                    onChange={(e) => {
                      let newDirect = "1";
                      let allTransit = "";
                      if (e.target.checked) {
                        setDirect(newDirect);
                        allTransit = transitType ? transitType + "." + newDirect : transitType + newDirect;
                        setTransitType(allTransit);

                        if(departure){
                          const newParams = {
                            transit: allTransit,
                            departure
                          }
                          setParams({
                            ...newParams
                          })
                          setQuery(newParams);
                        } else {
                          setQuery({
                            transit: allTransit,
                            // departure: departure,
                          });
                        }
                        if(facilities){
                          const newParams = {
                            transit: allTransit,
                            facilities,
                            departure
                          }
                          setParams(newParams)
                          setQuery(newParams)

                        } else {
                          setQuery({
                            ...params,
                            transit : allTransit
                          })
                        }

                       
                        

                        newDirect = "";
                      } else {
                        setDirect("");

                        if (transitType.includes(".")) {
                          console.log("apakah berjalan");
                          allTransit = transitType.split(".").filter((item) => {
                            return item !== "1";
                          });
                          // console.log(allTransit.length);
                          allTransit = allTransit.length > 1 ? allTransit.join(".") : allTransit.join("");
                          // if(allTransit.length > 1) {
                          //   allTransit.join
                          // }
                          console.log(allTransit);
                          setTransitType(allTransit);
                          setQuery({
                            ...query,
                            // departure
                            // transit: allTransit,
                            departure: departure,
                          });
                        } else {
                          setDirect("");
                          setTransitType("");
                          delete query.transit;
                          setQuery({
                            ...query,
                            // departure: departure,
                          });

                          // console.log(query);
                        }

                        console.log(allTransit);
                      }
                    }}
                  />
                </div>
                <div>
                  <label>Transit</label>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      let newDirect = "2";
                      let allTransit = "";
                      if (e.target.checked) {
                        setTransit(newDirect);
                        allTransit = transitType ? transitType + "." + newDirect : transitType + newDirect;
                        setTransitType(allTransit);
                        setQuery({
                          ...{},
                          transit: allTransit,
                          // departure: departure,
                        });
                        newDirect = "";
                      } else {
                        setTransit("");
                        if (transitType.includes(".")) {
                          // console.log("apakah berjalan");
                          allTransit = transitType.split(".").filter((item) => {
                            return item !== "2";
                          });
                          allTransit = allTransit.length > 1 ? allTransit.join(".") : allTransit.join("");
                          // allTransit.length > 1 ? allTransit.join('.') : allTransit.join('')
                          // console.log(allTransit);
                          setTransitType(allTransit);
                          setQuery({
                            ...{},
                            transit: allTransit,
                            // departure: departure&&fr,
                          });
                        } else {
                          setTransitType("");
                          delete query.transit;
                          setQuery({
                            ...{},
                            departure: departure,
                          });

                          // console.log(query);
                        }

                        console.log(allTransit);
                      }
                    }}
                  />
                </div>
                <div>
                  <label>Transit 2+</label>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      let newDirect = "3";
                      let allTransit = "";
                      if (e.target.checked) {
                        setMoreTransit(newDirect);
                        allTransit = transitType ? transitType + "." + newDirect : transitType + newDirect;
                        setTransitType(allTransit);
                        setQuery({
                          ...query,
                          transit: allTransit,
                          // departure: departure,
                        });
                        // newDirect = "";
                      } else {
                        setMoreTransit("");
                        if (transitType.includes(".")) {
                          // console.log("apakah berjalan");
                          allTransit = transitType.split(".").filter((item) => {
                            return item !== "3";
                          });
                          allTransit = allTransit.length > 1 ? allTransit.join(".") : allTransit.join("");
                          console.log(allTransit);
                          setTransitType(allTransit);
                          setQuery({
                            ...query,
                            transit: allTransit,
                            // departure: departure,
                          });
                        } else {
                          setTransitType("");
                          delete query.transit;
                          setQuery({
                            ...query,
                            // departure: departure,
                          });

                          // console.log(query);
                        }

                        // console.log(allTransit);
                      }
                    }}
                  />
                </div>
              </div>

              <div className={styles.hl} />

              <p>Facilities</p>
              <div className={styles.options}>
                <div>
                  <label>Luggage</label>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      let lugage = "1";
                      let allFas = "";
                      if (e.target.checked) {
                        // set(newDirect);
                        allFas = facilities ? facilities + "." + lugage : facilities + lugage;
                        setFacilities(allFas);
                        setQuery({
                          facilities : allFas,
                        });
                      } else {
                        setDirect("");

                        if (facilities.includes(".")) {
                          console.log("apakah berjalan");
                          allFas = facilities.split(".").filter((item) => {
                            return item !== "1";
                          });
                          // console.log(allTransit.length);
                          allFas = allFas.length > 1 ? allFas.join(".") : allFas.join("");
                          // if(allTransit.length > 1) {
                          //   allTransit.join
                          // }
                          // console.log(allTransit);
                          setFacilities(allFas);
                          setQuery({
                            facilities: allFas
                          });
                        } else {
                          // setDirect("");
                          setFacilities("");
                          delete query.facilities;
                          setQuery(params);

                          // console.log(query);
                        }

                        // console.log(allTransit);
                      }
                    }}
                  />
                </div>
                <div>
                  <label>In-Flight Meal</label>
                  <input type="checkbox" />
                </div>
                <div>
                  <label>Wi-Fi</label>
                  <input type="checkbox" />
                </div>
              </div>

              <div className={styles.hl} />

              <p>Departure Time</p>
              <div className={styles.options}>
                <div>
                  <label>00:00 - 06:00</label>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      let time = "dinihari";
                      let allDeparture = "";
                      if (e.target.checked) {
                        // setMorningDeparture(newDirect);
                        allDeparture = departure ? departure + "." + time : departure + time;
                        setDeparture(allDeparture);
                        // transitType ? set
                        setQuery({
                          ...{},
                          // transit: transitType,
                          departure: allDeparture,
                        });
                      } else {
                        if (departure.includes(".")) {
                          console.log("apakah berjalan");
                          allDeparture = departure.split(".").filter((item) => {
                            return item !== "dinihari";
                          });
                          allDeparture = allDeparture.length > 1 ? allDeparture.join(".") : allDeparture.join("");
                          console.log(allDeparture);
                          setDeparture(allDeparture);
                          setQuery({
                            // transit: transitType,
                            departure: allDeparture,
                          });
                        } else {
                          // setDirect("");
                          setDeparture("");
                          delete query.departure;
                          setQuery({
                            ...query,
                          });
                        }

                        // console.log(allTransit);
                      }
                    }}
                  />
                </div>
                <div>
                  <label>06:00 - 12:00</label>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      let time = "pagi";
                      let allDeparture = "";
                      if (e.target.checked) {
                        // setMorningDeparture(newDirect);
                        allDeparture = departure ? departure + "." + time : departure + time;
                        setDeparture(allDeparture);
                        setQuery({
                          ...query,
                          // transit: transitType,
                          departure: allDeparture,
                        });
                      } else {
                        if (departure.includes(".")) {
                          console.log("apakah berjalan");
                          allDeparture = departure.split(".").filter((item) => {
                            return item !== "pagi";
                          });
                          allDeparture = allDeparture.length > 1 ? allDeparture.join(".") : allDeparture.join("");
                          console.log(allDeparture);
                          setDeparture(allDeparture);
                          setQuery({
                            ...query,
                            // transit: transitType,
                            departure: allDeparture,
                          });
                        } else {
                          // setDirect("");
                          setDeparture("");
                          delete query.departure;
                          setQuery({
                            ...query,
                            // transit: transitType,
                          });
                        }

                        // console.log(allTransit);
                      }
                    }}
                  />
                </div>
                <div>
                  <label>12:00 - 18:00</label>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      let time = "sore";
                      let allDeparture = "";
                      if (e.target.checked) {
                        // setMorningDeparture(newDirect);
                        allDeparture = departure ? departure + "." + time : departure + time;
                        setDeparture(allDeparture);
                        setQuery({
                          ...query,
                          // transit: transitType,
                          departure: allDeparture,
                        });
                      } else {
                        if (departure.includes(".")) {
                          console.log("apakah berjalan");
                          allDeparture = departure.split(".").filter((item) => {
                            return item !== "sore";
                          });
                          allDeparture = allDeparture.length > 1 ? allDeparture.join(".") : allDeparture.join("");
                          console.log(allDeparture);
                          setDeparture(allDeparture);
                          setQuery({
                            ...query,
                            // transit: transitType,
                            departure: allDeparture,
                          });
                        } else {
                          // setDirect("");
                          setDeparture("");
                          delete query.departure;
                          setQuery({
                            ...query,
                            // transit: transitType,
                          });
                        }

                        // console.log(allTransit);
                      }
                    }}
                  />
                </div>
                <div>
                  <label>18:00 - 24:00</label>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      let time = "malam";
                      let allDeparture = "";
                      if (e.target.checked) {
                        // setMorningDeparture(newDirect);
                        allDeparture = departure ? departure + "." + time : departure + time;
                        setDeparture(allDeparture);
                        setQuery({
                          ...query,
                          // transit: transitType,
                          departure: allDeparture,
                        });
                      } else {
                        if (departure.includes(".")) {
                          console.log("apakah berjalan");
                          allDeparture = departure.split(".").filter((item) => {
                            return item !== "malam";
                          });
                          allDeparture = allDeparture.length > 1 ? allDeparture.join(".") : allDeparture.join("");
                          console.log(allDeparture);
                          setDeparture(allDeparture);
                          setQuery({
                            ...query,
                            // transit: transitType,
                            departure: allDeparture,
                          });
                        } else {
                          // setDirect("");
                          setDeparture("");
                          delete query.departure;
                          setQuery({
                            ...query,
                            // transit: transitType,
                          });
                        }

                        // console.log(allTransit);
                      }
                    }}
                  />
                </div>
              </div>

              <div className={styles.hl} />

              <p>Arrival Time</p>
              <div className={styles.options}>
                <div>
                  <label>00:00 - 06:00</label>
                  <input type="checkbox" />
                </div>
                <div>
                  <label>06:00 - 12:00</label>
                  <input type="checkbox" />
                </div>
                <div>
                  <label>12:00 - 18:00</label>
                  <input type="checkbox" />
                </div>
                <div>
                  <label>18:00 - 24:00</label>
                  <input type="checkbox" />
                </div>
              </div>

              <div className={styles.hl} />

              <p>Price Range</p>
              <div className={styles.options}>
                <div className={styles.pricing}>
                  <label>Min. price</label>
                  <input type="number" step="10000" min="0" />
                </div>
                <div className={styles.pricing}>
                  <label>Max. price</label>
                  <input type="number" step="10000" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles["ticket-wrap"]}>
            <div className={styles.subtitle}>
              <p>
                Select Ticket<span></span>
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Dropdown />
                <button className={styles.sort}>{/* <img src={sort} alt='' /> */}</button>
              </div>
            </div>

            <div>
              {flights.map((flight) => (
                <TicketCard
                  airlineImg={flight.airline_image}
                  airline={flight.airline_name}
                  origin={flight.origin}
                  arr={flight.arrival_time}
                  destination={flight.destination}
                  dept={flight.departure_time}
                  price={flight.price}
                  direct={flight.direct}
                  transit={flight.transit}
                  mtransit={flight.more_transit}
                  // luggage={flight.luggage === 1 ? luggageIcon : ""}
                  // meal={flight.meal === 1 ? mealIcon : ""}
                  // wifi={flight.wifi === 1 ? wifiIcon : ""}
                  id={flight.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SearchFlight;
