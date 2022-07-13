import React from 'react'
import Button from '../../components/base/buttonv2'
import TicketCard from '../../components/module/ticketCard'

import styles from './searchFlight.module.css'

import plane from '../../assets/logoWhite.svg'
import switchIcon from '../../assets/switch.svg'
import sort from '../../assets/sort.svg'
import Dropdown from '../../components/base/dropdown'
import NaviV2 from '../../components/module/naviV2'
import Footer from '../../components/module/footer'

const SearchFlight = () => {
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
                            <span>Medan (IDN)</span>
                            <img src={switchIcon} alt='' />
                            <span>Tokyo (JPN)</span>
                        </div>

                        <div>
                            <p>Monday, 20 July 20</p>
                            <span> • </span>
                            <p>6 Passenger(s)</p>
                            <span> • </span>
                            <p>Economy</p>
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