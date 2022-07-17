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

// import wifiIcon from '../../../src/assets/'
// import luggageIcon from '../../assets/facility/luggage.svg'
// import mealIcon from '../../assets/facility/meal.svg'
import { useSearchParams } from "react-router-dom";

const SearchFlight = () => {
  const [flights, setFlights] = useState([]);

  const fetchFlight = async ({
    transitType,
    facilities,
    departure,
    arrival,
    airlines,
    sortBy,
    minPrice,
    maxPrice
  }) => {
    try {

      const result = await axios.get(`https://avtur-ankasa-ticketing.herokuapp.com/v1/flights?${transitType&&`&transit=${transitType}`}${facilities&& `&fasilitas=${facilities}`}${departure&& `&departure=${departure}`}${arrival&& `&arrival=${arrival}`}${airlines&& `&airline=${airlines}`}${minPrice&& `&min=${minPrice}`}${maxPrice&& `&max=${maxPrice}`}${sortBy&& `&sortBy=${sortBy}`}`);
      // const result = await axios.get(`https://avtur-ankasa-ticketing.herokuapp.com/v1/flights?${transitType&&`&transit=${transitType}`}${facilities&& `&fasilitas=${facilities}`}${departure&& `&departure=${departure}`}${arrival&& `&arrival=${arrival}`}${airlines&& `&airline=${airlines}`}${minPrice&& `&min=${minPrice}`}${maxPrice&& `&max=${maxPrice}`}`);
      // ${facilities&& `&fasilitas=${facilities}`}
      // ${departure&& `&departure=${departure}`}
      // ${arrival&& `&arrival=${arrival}`}
      // ${airlines&& `&airline=${airlines}`}
      // ${sortBy&& `&sortBy=${sortBy}`}
      // console.log(result.data);
      setFlights(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };



  const changeSearch = () => {
    setQuery({
      origin,
      destination,
    });
  };

  const [params, setParams] = useState({});
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  let [transitType, setTransitType] = useState("");
  const [facilities, setFacilities] = useState("");
  const [arrival, setArrival] = useState('')
  const [departure, setDeparture] = useState("");
  const [airlines, setArilines] = useState("");
  const [sortBy, setSortBy] = useState("")
  const [query, setQuery] = useSearchParams({});
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [date, setDate] = useState('')
  const [ticket, setTicket] = useState('')
  const [ticketType, setTicketType] = useState('')

  // console.log('ini statenya')
  // console.log(direct)
  // console.log(origin)
  // console.log(destination)
  // console.log(date)
  // console.log(airlines)
  // console.log(sortBy)
  console.log("ini transitType");
  console.log(transitType);
  console.log("ini departure");
  console.log(departure);
  console.log("ini facilites");
  console.log(facilities);
  console.log(flights);

  const onHandleReset = () =>{
      setFacilities('')
      setArrival('')
      setDeparture('')
      setArilines('')
      setSortBy('')
      setMinPrice('')
      setMaxPrice('')
      setParams({})
      setQuery({})
  }

  useEffect(() => {
    const dataParam = {
      date,
      ticket,
      ticketType,
      departure,
      arrival,
      transitType,
      facilities,
      airlines,
      minPrice,
      maxPrice,
      sortBy
    }
    fetchFlight(dataParam);
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
                onClick={()=>{onHandleReset()}}
              />
            </div>

            <div className={styles.filters}>
              <p>Transit</p>
              <div className={styles.options}>
                <div>
                  <label>Direct</label>
                  <input
                    id="transit"
                    type="checkbox"
                    // checked={direct === "0" ? true : false}
                    onChange={(e) => {
                      let newDirect = "1";
                      let allTransit = "";
                      let newParams = {};
                      if (e.target.checked) {
                        allTransit = transitType ? transitType + "." + newDirect : transitType + newDirect;
                        setTransitType(allTransit);
                        newParams = {
                          transit: allTransit,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });

                        // if(departure){
                        //    newParams = {
                        //     ...newParams,
                        //     transit: allTransit,
                        //   }
                        //   setParams(newParams)
                        //   setQuery(newParams);
                        // } else {
                        //   setQuery({
                        //     ...params,
                        //     transit: allTransit,
                        //     // departure: departure,
                        //   });
                        // }
                        // if(facilities){
                        //   const newParams = {
                        //     transit: allTransit,
                        //     facilities,
                        //     departure
                        //   }
                        //   setParams(newParams)
                        //   setQuery(newParams)

                        // } else {
                        //   setQuery({
                        //     ...params,
                        //     transit : allTransit
                        //   })
                        // }
                        // newDirect = "";
                      } else {
                        if (transitType.includes(".")) {
                          console.log("apakah berjalan");
                          allTransit = transitType.split(".").filter((item) => {
                            return item !== "1";
                          });
                          // console.log(allTransit.length);
                          allTransit = allTransit.length > 1 ? allTransit.join(".") : allTransit.join("");
                          // console.log(allTransit);
                          setTransitType(allTransit);
                          newParams = {
                            transit: allTransit,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });

                          // if(departure){
                          //   newParams = {
                          //     ...newParams,
                          //     departure,
                          //     transit: allTransit
                          //   }
                          //   setParams(newParams)
                          //   setQuery(newParams);
                          // } else {
                          //   setQuery({
                          //     ...params,
                          //     transit: allTransit,
                          //     // departure: departure,
                          //   });
                          // }
                        } else {
                          setTransitType("");
                          delete params.transit;
                          setQuery({
                            ...params,
                            // departure: departure,
                          });
                        }
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
                      let newParams = {};
                      if (e.target.checked) {
                        allTransit = transitType ? transitType + "." + newDirect : transitType + newDirect;
                        setTransitType(allTransit);
                        newParams = {
                          transit: allTransit,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (transitType.includes(".")) {
                          console.log("apakah berjalan");
                          allTransit = transitType.split(".").filter((item) => {
                            return item !== "2";
                          });
                          // console.log(allTransit.length);
                          allTransit = allTransit.length > 1 ? allTransit.join(".") : allTransit.join("");
                          // console.log(allTransit);
                          setTransitType(allTransit);
                          newParams = {
                            transit: allTransit,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setTransitType("");
                          delete params.transit;
                          setQuery({
                            ...params,
                            // departure: departure,
                          });
                        }
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
                      let newParams = {};
                      if (e.target.checked) {
                        allTransit = transitType ? transitType + "." + newDirect : transitType + newDirect;
                        setTransitType(allTransit);
                        newParams = {
                          transit: allTransit,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (transitType.includes(".")) {
                          console.log("apakah berjalan");
                          allTransit = transitType.split(".").filter((item) => {
                            return item !== "3";
                          });
                          // console.log(allTransit.length);
                          allTransit = allTransit.length > 1 ? allTransit.join(".") : allTransit.join("");
                          // console.log(allTransit);
                          setTransitType(allTransit);
                          newParams = {
                            transit: allTransit,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setTransitType("");
                          delete params.transit;
                          setQuery({
                            ...params,
                            // departure: departure,
                          });
                        }
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
                      let luggage = "1";
                      let newFacilities = "";
                      let newParams = {};
                      if (e.target.checked) {
                        newFacilities = facilities ? facilities + "." + luggage : facilities + luggage;
                        setFacilities(newFacilities);
                        newParams = {
                          facilities: newFacilities,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (facilities.includes(".")) {
                          console.log("apakah berjalan");
                          newFacilities = facilities.split(".").filter((item) => {
                            return item !== "1";
                          });
                          newFacilities = newFacilities.length > 1 ? newFacilities.join(".") : newFacilities.join("");
                          setFacilities(newFacilities);
                          newParams = {
                            facilities: newFacilities,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setFacilities("");
                          delete params.facilities;
                          setQuery({
                            ...params,
                          });
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <label>In-Flight Meal</label>
                  <input type="checkbox" 
                  onChange={(e) => {
                    let meal = "2";
                    let newFacilities = "";
                    let newParams = {};
                    if (e.target.checked) {
                      newFacilities = facilities ? facilities + "." + meal : facilities + meal;
                      setFacilities(newFacilities);
                      newParams = {
                        facilities: newFacilities,
                      };
                      setParams({
                        ...params,
                        ...newParams,
                      });
                      setQuery({
                        ...params,
                        ...newParams,
                      });
                    } else {
                      if (facilities.includes(".")) {
                        console.log("apakah berjalan");
                        newFacilities = facilities.split(".").filter((item) => {
                          return item !== meal;
                        });
                        newFacilities = newFacilities.length > 1 ? newFacilities.join(".") : newFacilities.join("");
                        setFacilities(newFacilities);
                        newParams = {
                          facilities: newFacilities,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        setFacilities("");
                        delete params.facilities;
                        setQuery({
                          ...params,
                        });
                      }
                    }
                  }}
                  />
                </div>
                <div>
                  <label>Wi-Fi</label>
                  <input type="checkbox" 
                  onChange={(e) => {
                    let wifi = "3";
                    let newFacilities = "";
                    let newParams = {};
                    if (e.target.checked) {
                      newFacilities = facilities ? facilities + "." + wifi : facilities + wifi;
                      setFacilities(newFacilities);
                      newParams = {
                        facilities: newFacilities,
                      };
                      setParams({
                        ...params,
                        ...newParams,
                      });
                      setQuery({
                        ...params,
                        ...newParams,
                      });
                    } else {
                      if (facilities.includes(".")) {
                        console.log("apakah berjalan");
                        newFacilities = facilities.split(".").filter((item) => {
                          return item !== wifi;
                        });
                        newFacilities = newFacilities.length > 1 ? newFacilities.join(".") : newFacilities.join("");
                        setFacilities(newFacilities);
                        newParams = {
                          facilities: newFacilities,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        setFacilities("");
                        delete params.facilities;
                        setQuery({
                          ...params,
                        });
                      }
                    }
                  }}
                  />
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
                      let newParams = {};
                      if (e.target.checked) {
                        // setMorningDeparture(newDirect);
                        allDeparture = departure ? departure + "." + time : departure + time;
                        setDeparture(allDeparture);
                        newParams = {
                          departure: allDeparture,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                        // if(transitType){
                        //   newParams = {
                        //     ...params,
                        //     departure: allDeparture,
                        //     transit: transitType
                        //   }
                        //   setParams(newParams)
                        //   setQuery(newParams);
                        // } else {
                        //   setQuery({
                        //     ...params,
                        //     departure: allDeparture,
                        //     // departure: departure,
                        //   });
                        // }
                        // setQuery({
                        //   ...{},
                        //   // transit: transitType,
                        //   departure: allDeparture,
                        // });
                      } else {
                        if (departure.includes(".")) {
                          console.log("apakah berjalan");
                          allDeparture = departure.split(".").filter((item) => {
                            return item !== "dinihari";
                          });
                          allDeparture = allDeparture.length > 1 ? allDeparture.join(".") : allDeparture.join("");
                          setDeparture(allDeparture);
                          newParams = {
                            departure: allDeparture,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                          // if(transitType){
                          //   newParams = {
                          //     ...newParams,
                          //     departure: allDeparture,
                          //     transit: transitType
                          //   }
                          //   setParams(newParams)
                          //   setQuery(newParams);
                          // } else {
                          //   setQuery({
                          //     ...params,
                          //     departure: allDeparture,
                          //     // departure: departure,
                          //   });
                          // }
                          // setQuery({
                          //   // transit: transitType,
                          //   departure: allDeparture,
                          // });
                        } else {
                          // setDirect("");
                          setDeparture("");
                          delete params.departure;
                          setQuery({
                            ...params,
                            // ...newParams
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
                      let newParams = {};
                      if (e.target.checked) {
                        allDeparture = departure ? departure + "." + time : departure + time;
                        setDeparture(allDeparture);
                        newParams = {
                          departure: allDeparture,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (departure.includes(".")) {
                          console.log("apakah berjalan");
                          allDeparture = departure.split(".").filter((item) => {
                            return item !== "pagi";
                          });
                          allDeparture = allDeparture.length > 1 ? allDeparture.join(".") : allDeparture.join("");
                          setDeparture(allDeparture);
                          newParams = {
                            departure: allDeparture,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setDeparture("");
                          delete params.departure;
                          setQuery({
                            ...params,
                            // ...newParams
                          });
                        }
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
                      let newParams = {};
                      if (e.target.checked) {
                        allDeparture = departure ? departure + "." + time : departure + time;
                        setDeparture(allDeparture);
                        newParams = {
                          departure: allDeparture,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (departure.includes(".")) {
                          console.log("apakah berjalan");
                          allDeparture = departure.split(".").filter((item) => {
                            return item !== "sore";
                          });
                          allDeparture = allDeparture.length > 1 ? allDeparture.join(".") : allDeparture.join("");
                          setDeparture(allDeparture);
                          newParams = {
                            departure: allDeparture,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setDeparture("");
                          delete params.departure;
                          setQuery({
                            ...params,
                            // ...newParams
                          });
                        }
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
                      let newParams = {};
                      if (e.target.checked) {
                        allDeparture = departure ? departure + "." + time : departure + time;
                        setDeparture(allDeparture);
                        newParams = {
                          departure: allDeparture,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        if (departure.includes(".")) {
                          console.log("apakah berjalan");
                          allDeparture = departure.split(".").filter((item) => {
                            return item !== "malam";
                          });
                          allDeparture = allDeparture.length > 1 ? allDeparture.join(".") : allDeparture.join("");
                          setDeparture(allDeparture);
                          newParams = {
                            departure: allDeparture,
                          };
                          setParams({
                            ...params,
                            ...newParams,
                          });
                          setQuery({
                            ...params,
                            ...newParams,
                          });
                        } else {
                          setDeparture("");
                          delete params.departure;
                          setQuery({
                            ...params,
                            // ...newParams
                          });
                        }
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
                  <input type="checkbox" 
                  onChange={(e) => {
                    let time = "dinihari";
                    let newArrival = "";
                    let newParams = {};
                    if (e.target.checked) {
                      newArrival = arrival ? arrival + "." + time : arrival + time;
                      setArrival(newArrival);
                      newParams = {
                        arrival: newArrival,
                      };
                      setParams({
                        ...params,
                        ...newParams,
                      });
                      setQuery({
                        ...params,
                        ...newParams,
                      });
                    } else {
                      if (arrival.includes(".")) {
                        console.log("apakah berjalan");
                        newArrival = arrival.split(".").filter((item) => {
                          return item !== time;
                        });
                        newArrival = newArrival.length > 1 ? newArrival.join(".") : newArrival.join("");
                        setArrival(newArrival);
                        newParams = {
                          departure: newArrival,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        setArrival("");
                        delete params.arrival;
                        setQuery({
                          ...params,
                          // ...newParams
                        });
                      }
                    }
                  }}
                  />
                </div>
                <div>
                  <label>06:00 - 12:00</label>
                  <input type="checkbox" 
                  onChange={(e) => {
                    let time = "pagi";
                    let newArrival = "";
                    let newParams = {};
                    if (e.target.checked) {
                      newArrival = arrival ? arrival + "." + time : arrival + time;
                      setArrival(newArrival);
                      newParams = {
                        arrival: newArrival,
                      };
                      setParams({
                        ...params,
                        ...newParams,
                      });
                      setQuery({
                        ...params,
                        ...newParams,
                      });
                    } else {
                      if (arrival.includes(".")) {
                        console.log("apakah berjalan");
                        newArrival = arrival.split(".").filter((item) => {
                          return item !== time;
                        });
                        newArrival = newArrival.length > 1 ? newArrival.join(".") : newArrival.join("");
                        setArrival(newArrival);
                        newParams = {
                          departure: newArrival,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        setArrival("");
                        delete params.arrival;
                        setQuery({
                          ...params,
                          // ...newParams
                        });
                      }
                    }
                  }}
                  />
                </div>
                <div>
                  <label>12:00 - 18:00</label>
                  <input type="checkbox" 
                  onChange={(e) => {
                    let time = "sore";
                    let newArrival = "";
                    let newParams = {};
                    if (e.target.checked) {
                      newArrival = arrival ? arrival + "." + time : arrival + time;
                      setArrival(newArrival);
                      newParams = {
                        arrival: newArrival,
                      };
                      setParams({
                        ...params,
                        ...newParams,
                      });
                      setQuery({
                        ...params,
                        ...newParams,
                      });
                    } else {
                      if (arrival.includes(".")) {
                        console.log("apakah berjalan");
                        newArrival = arrival.split(".").filter((item) => {
                          return item !== time;
                        });
                        newArrival = newArrival.length > 1 ? newArrival.join(".") : newArrival.join("");
                        setArrival(newArrival);
                        newParams = {
                          departure: newArrival,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        setArrival("");
                        delete params.arrival;
                        setQuery({
                          ...params,
                          // ...newParams
                        });
                      }
                    }
                  }}
                  />
                </div>
                <div>
                  <label>18:00 - 24:00</label>
                  <input type="checkbox" 
                  onChange={(e) => {
                    let time = "malam";
                    let newArrival = "";
                    let newParams = {};
                    if (e.target.checked) {
                      newArrival = arrival ? arrival + "." + time : arrival + time;
                      setArrival(newArrival);
                      newParams = {
                        arrival: newArrival,
                      };
                      setParams({
                        ...params,
                        ...newParams,
                      });
                      setQuery({
                        ...params,
                        ...newParams,
                      });
                    } else {
                      if (arrival.includes(".")) {
                        console.log("apakah berjalan");
                        newArrival = arrival.split(".").filter((item) => {
                          return item !== time;
                        });
                        newArrival = newArrival.length > 1 ? newArrival.join(".") : newArrival.join("");
                        setArrival(newArrival);
                        newParams = {
                          departure: newArrival,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        setArrival("");
                        delete params.arrival;
                        setQuery({
                          ...params,
                          // ...newParams
                        });
                      }
                    }
                  }}
                  />
                </div>
              </div>

              <div className={styles.hl} />
              <p>Airline</p>
              <div className={styles.options}>
                <div>
                  <label>Garuda Indonesia</label>
                  <input type="checkbox" 
                  onChange={(e) => {
                    let airline = "garudaindonesia";
                    let newAirlines = "";
                    let newParams = {};
                    if (e.target.checked) {
                      newAirlines = airlines ? airlines + "|" + airline : airlines + airline;
                      setArilines(newAirlines);
                      newParams = {
                        airlines: newAirlines,
                      };
                      setParams({
                        ...params,
                        ...newParams,
                      });
                      setQuery({
                        ...params,
                        ...newParams,
                      });
                    } else {
                      if (airlines.includes("|")) {
                        // console.log("apakah berjalan");
                        newAirlines = airlines.split("|").filter((item) => {
                          return item !== airline;
                        });
                        newAirlines = newAirlines.length > 1 ? newAirlines.join("|") : newAirlines.join("");
                        setArilines(newAirlines);
                        newParams = {
                          airlines: newAirlines,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        setArilines("");
                        delete params.airlines;
                        setQuery({
                          ...params,
                        });
                      }
                    }
                  }}
                  />
                </div>
                <div>
                <label>America</label>
                  <input type="checkbox" 
                  onChange={(e) => {
                    let airline = "america";
                    let newAirlines = "";
                    let newParams = {};
                    if (e.target.checked) {
                      newAirlines = airlines ? airlines + "|" + airline : airlines + airline;
                      setArilines(newAirlines);
                      newParams = {
                        airlines: newAirlines,
                      };
                      setParams({
                        ...params,
                        ...newParams,
                      });
                      setQuery({
                        ...params,
                        ...newParams,
                      });
                    } else {
                      if (airlines.includes("|")) {
                        // console.log("apakah berjalan");
                        newAirlines = airlines.split("|").filter((item) => {
                          return item !== airline;
                        });
                        newAirlines = newAirlines.length > 1 ? newAirlines.join("|") : newAirlines.join("");
                        setArilines(newAirlines);
                        newParams = {
                          airlines: newAirlines,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        setArilines("");
                        delete params.airlines;
                        setQuery({
                          ...params,
                        });
                      }
                    }
                  }}
                  />
                </div>
                <div>
                <label>Batik Air</label>
                  <input type="checkbox" 
                  onChange={(e) => {
                    let airline = "batikair";
                    let newAirlines = "";
                    let newParams = {};
                    if (e.target.checked) {
                      newAirlines = airlines ? airlines + "|" + airline : airlines + airline;
                      setArilines(newAirlines);
                      newParams = {
                        airlines: newAirlines,
                      };
                      setParams({
                        ...params,
                        ...newParams,
                      });
                      setQuery({
                        ...params,
                        ...newParams,
                      });
                    } else {
                      if (airlines.includes("|")) {
                        // console.log("apakah berjalan");
                        newAirlines = airlines.split("|").filter((item) => {
                          return item !== airline;
                        });
                        newAirlines = newAirlines.length > 1 ? newAirlines.join("|") : newAirlines.join("");
                        setArilines(newAirlines);
                        newParams = {
                          airlines: newAirlines,
                        };
                        setParams({
                          ...params,
                          ...newParams,
                        });
                        setQuery({
                          ...params,
                          ...newParams,
                        });
                      } else {
                        setArilines("");
                        delete params.airlines;
                        setQuery({
                          ...params,
                        });
                      }
                    }
                  }}
                  />
                </div>
              </div>
               
              <div className={styles.hl} />   
              <p>Price Range</p>
              <div className={styles.options}>
                <div className={styles.pricing}>
                  <label>Min. price</label>
                  <input
                  value={minPrice}
                  onChange={(e)=>{
                    let price = e.target.value
                    setMinPrice(price)
                    setParams({
                      ...params,
                      minPrice: price
                    })
                    setQuery({
                      ...params,
                      minPrice: price
                    })
                  }}
                  type="number" step="10000" min="0" />
                </div>
                <div className={styles.pricing}>
                  <label>Max. price</label>
                  <input
                  value={maxPrice}
                  onChange={(e)=>{
                    let price = e.target.value
                    setMaxPrice(price)
                    setParams({
                      ...params,
                      maxPrice: price
                    })
                    setQuery({
                      ...params,
                      maxPrice: price
                    })
                  }}
                  type="number" step="10000" />
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
                <Dropdown 
                setSortBy={setSortBy}
                setQuery={setQuery}
                setParams={setParams}
                params={params}
                />
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