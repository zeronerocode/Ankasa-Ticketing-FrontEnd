import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Button from '../../components/base/button'
import TicketCard from '../../components/module/ticketCard'
import Dropdown from '../../components/base/dropdown'
import NaviV2 from '../../components/module/naviV2'
import Footer from '../../components/module/footer'

import styles from './searchFlight.module.css'

import plane from '../../assets/logoWhite.svg'
import switchIcon from '../../assets/switch.svg'
// import sort from '../../assets/sort.svg'

// import wifiIcon from '../../assets/facility/wifi.svg'
// import luggageIcon from '../../assets/facility/luggage.svg'
// import mealIcon from '../../assets/facility/meal.svg'
import { useSearchParams } from 'react-router-dom'

const SearchFlight = () => {
    const [flights, setFlights] = useState([]);

    const fetchFlight = async (origin, destination) => {
        try {
            const result = await axios.get(`https://avtur-ankasa-ticketing.herokuapp.com/v1/flights?origin=${origin}&destination=${destination}`)
            // console.log(result.data);
            setFlights(result.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const [query, setQuery] = useSearchParams()

    const changeSearch = () => {
        setQuery({
            origin,
            destination
        })
    }

    useEffect(() => {
        fetchFlight(origin, destination)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    
    const [date, setDate] = useState('');
    const [ticket, setTicket] = useState('');
    const [ticketType, setTicketType] = useState('');

    const [direct, setDirect] = useState('')
    const [transit, setTransit] = useState('')
    let [transitType, setTransitType] = useState('')

    // const [luggage, setLuggage] = useState('')
    // const [meal, setMeal] = useState('')
    // const [wifi, setWifi] = useState('')
    // const [facilities, setFacilities] = useState('')

    // const [morningArrival, setMorningArrival] = useState('')
    // const [noonArrival, setNoonArrival] = useState('')
    // const [eveningArrival, setEveningArrival] = useState('')
    // const [nightArrival, setNightArrival] = useState('')
    // const [arrival, setArrival] = useState('')

    // const [morningDeparture, setMorningDeparture] = useState('')
    // const [noonDeparture, setNoonDeparture] = useState('')
    // const [eveningDeparture, setEveningDeparture] = useState('')
    // const [nightDeparture, setNightDeparture] = useState('')
    // const [departure, setDeparture] = useState('')
    
    // console.log('ini statenya')
    // console.log(direct)
    // console.log(origin)
    // console.log(destination)
    // console.log(date)
    // console.log(ticket)
    // console.log(ticketType)
    console.log('ini transitType')
    console.log(transitType)
    // console.log(`query : ${query}`)
    // console.log(query)
  return (
    <>
        <NaviV2 />

        <div>
            <div className={styles.flight}>
                <div>
                    <div>
                        <img src={plane} alt='' />
                    </div>

                    <div className={styles.detail}>
                        <div>
                            <span>From</span>
                            <span>To</span>
                        </div>

                        <div>
                            <input
                            name='origin'
                            type='text'
                            className={styles.origin}
                            onChange={(e)=>setOrigin(e.target.value)}
                            />
                            <img src={switchIcon} alt='' />
                            <input
                            type='text'
                            className={styles.dest}
                            onChange={(e)=>setDestination(e.target.value)}
                            />
                        </div>

                        <div>
                            <input 
                            type='date' 
                            name='departure'
                            placeholder="dd-mm-yyyy" 
                            min="1997-01-01" 
                            max="2030-12-31"
                            className={styles.date}
                            onChange={(e)=>{setDate(e.target.value)}}
                            />
                            <span> • </span>
                            <select name="ticket" id="ticket" className={styles.qty} onChange={(e)=>{setTicket(e.target.value)}}>
                                <option value="1">1 Passenger</option>
                                <option value="2">2 Passengers</option>
                                <option value="3">3 Passengers</option>
                                <option value="4">4 Passengers</option>
                            </select>
                            <span> • </span>
                            <select name="class" id="class" className={styles.class} onChange={(e)=>{setTicketType(e.target.value)}}>
                                <option value="Economy">Economy</option>
                                <option value="Business">Business</option>
                                <option value="First Class">First Class</option>
                            </select>
                        </div>
                    </div>
                </div>

                <Button
                title='Change Search'
                type='button'
                className={styles['change-search']}
                onClick={changeSearch}
                />
            </div>

            <div className={styles['search-result']}>
                <div className={styles['filter-wrap']}>
                    <div className={styles.subtitle}>
                        <p>Filter</p>
                        <Button
                        title='Reset'
                        type='button'
                        className={styles['reset-filter']}
                        // onClick={onClick}
                        />
                    </div>

                    <div className={styles.filters}>
                            <p>Transit</p>
                            <div className={styles.options}>
                                <div>
                                    <label>Direct</label>
                                    <input 
                                    type='checkbox' 
                                    // checked={direct === "0" ? true : false}
                                    checked={() => {
                                        setDirect(1);
                                        // setTransitType(direct)
                                        setTransitType(
                                            transitType => transitType ? direct :  transitType.concat(`%${direct}`)
                                        )
                                    }
                                    }
                                    />
                                </div>
                                <div>
                                    <label>Transit</label>
                                    <input 
                                    type='checkbox' 
                                    onChange={() => {
                                        setTransit(2);
                                        // setTransitType(direct)
                                        setTransitType(
                                            transitType => transitType ? transit : transitType.concat(`%${transit}`)
                                        )
                                    }
                                    }
                                    />
                                </div>
                            </div>

                            <div className={styles.hl}/>

                            <p>Facilities</p>
                            <div className={styles.options}>
                                <div>
                                    <label>Luggage</label>
                                    <input type='checkbox' />
                                </div>
                                <div>
                                    <label>In-Flight Meal</label>
                                    <input type='checkbox' />
                                </div>
                                <div>
                                    <label>Wi-Fi</label>
                                    <input type='checkbox' />
                                </div>
                            </div>

                            <div className={styles.hl}/>

                            <p>Departure Time</p>
                            <div className={styles.options}>
                                <div>
                                    <label>00:00 - 06:00</label>
                                    <input type='checkbox' />
                                </div>
                                <div>
                                    <label>06:00 - 12:00</label>
                                    <input type='checkbox' />
                                </div>
                                <div>
                                    <label>12:00 - 18:00</label>
                                    <input type='checkbox' />
                                </div>
                                <div>
                                    <label>18:00 - 24:00</label>
                                    <input type='checkbox' />
                                </div>
                            </div>

                            <div className={styles.hl}/>

                            <p>Arrival Time</p>
                            <div className={styles.options}>
                                <div>
                                    <label>00:00 - 06:00</label>
                                    <input type='checkbox' />
                                </div>
                                <div>
                                    <label>06:00 - 12:00</label>
                                    <input type='checkbox' />
                                </div>
                                <div>
                                    <label>12:00 - 18:00</label>
                                    <input type='checkbox' />
                                </div>
                                <div>
                                    <label>18:00 - 24:00</label>
                                    <input type='checkbox' />
                                </div>
                            </div>

                            <div className={styles.hl}/>

                            <p>Price Range</p>
                            <div className={styles.options}>
                                <div className={styles.pricing}>
                                    <label>Min. price</label>
                                    <input type='number' step='10000' min='0'/>
                                </div>
                                <div className={styles.pricing}>
                                    <label>Max. price</label>
                                    <input type='number' step='10000'/>
                                </div>
                            </div>                            
                    </div>
                </div>

                <div className={styles['ticket-wrap']}>
                    <div className={styles.subtitle}>
                        <p>Select Ticket<span></span></p>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Dropdown />
                            <button className={styles.sort}>
                                {/* <img src={sort} alt='' /> */}
                            </button>
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
  )
}

export default SearchFlight