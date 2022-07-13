import React, { useState } from 'react'
import Button from '../../components/base/buttonv2'
import TicketCard from '../../components/module/ticketCard'
import Dropdown from '../../components/base/dropdown'
import NaviV2 from '../../components/module/naviV2'
import Footer from '../../components/module/footer'

import styles from './searchFlight.module.css'

import plane from '../../assets/logoWhite.svg'
import switchIcon from '../../assets/switch.svg'
import sort from '../../assets/sort.svg'

const SearchFlight = () => {
    const [flights, setFlights] = useState([]);
    
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
                            type='text'
                            className={styles.origin}
                            />
                            <img src={switchIcon} alt='' />
                            <input
                            type='text'
                            className={styles.dest}
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
                            />
                            <span> • </span>
                            <select name="ticket" id="ticket" className={styles.qty}>
                                <option value="1">1 Passenger</option>
                                <option value="2">2 Passengers</option>
                                <option value="3">3 Passengers</option>
                                <option value="4">4 Passengers</option>
                            </select>
                            <span> • </span>
                            <select name="class" id="class" className={styles.class}>
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
                // onClick={onClick}
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
                                    <input type='checkbox' />
                                </div>
                                <div>
                                    <label>Transit</label>
                                    <input type='checkbox' />
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
                                <img src={sort} alt='' />
                            </button>
                        </div>
                    </div>

                    <div>
                        <TicketCard />
                        <TicketCard />
                        <TicketCard />
                        <TicketCard />
                        <TicketCard />
                        <TicketCard />
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default SearchFlight