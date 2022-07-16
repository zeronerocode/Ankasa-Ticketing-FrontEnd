import React from 'react'

import styles from './ticketCard.module.css'

// import airline from '../../../assets/airline.svg'
import flight from '../../../assets/flight.svg'
// import wifi from '../../../assets/facility/wifi.svg'
// import luggage from '../../../assets/facility/luggage.svg'
// import meal from '../../../assets/facility/meal.svg'
import Button from '../../base/buttonv2'

const TicketCard = ({airlineImg, airline, origin, arr, destination, dept, price, id, direct,transit,more_transit}) => {
  return (
    <div className={styles.ticket}>
        <div className={styles.airline}>
            {/* <div>
                <img src={airline} alt='' />
            </div>     */}
            <span>{airline}</span>
        </div>

        <div className={styles['flight-info']}>
            <div className={styles.schedule}>
                <div>
                    <p>{origin}</p>
                    <span>{dept}</span>
                </div>

                <div className={styles.frame}>
                    <img src={airlineImg} alt='' />
                </div>

                <div>
                    <p>{destination}</p>
                    <span>{arr}</span>
                </div>
            </div>

            <div className={styles.duration}>
                <p>3 hours 11 minutes</p>
                <span>{direct? 'direct' : transit || more_transit}</span>
            </div>

            <div className={styles.facilities}>
                {/* <div>
                    <img src={luggage} alt='' />
                </div>
                <div>
                    <img src={meal} alt='' />
                </div>
                <div>
                    <img src={wifi} alt='' />
                </div> */}
            </div>

            <div className={styles.pricetag}>
                <p>$ 214,00</p>
                <span>/pax</span>
            </div>
            
            <Button 
            title='Select'
            type='button'
            className={styles.select}
            />
        </div>
    </div>
  )
}

export default TicketCard