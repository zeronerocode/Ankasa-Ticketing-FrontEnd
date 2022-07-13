import React from 'react'

import styles from './ticketCard.module.css'

import airline from '../../../assets/airline.svg'
import flight from '../../../assets/flight.svg'
import wifi from '../../../assets/facility/wifi.svg'
import luggage from '../../../assets/facility/luggage.svg'
import meal from '../../../assets/facility/meal.svg'
import Button from '../../base/buttonv2'

const TicketCard = () => {
  return (
    <div className={styles.ticket}>
        <div className={styles.airline}>
            <div>
                <img src={airline} alt='' />
            </div>    
            <span>Garuda Indonesia</span>
        </div>

        <div className={styles['flight-info']}>
            <div className={styles.schedule}>
                <div>
                    <p>IDN</p>
                    <span>12:33</span>
                </div>

                <div>
                    <img src={flight} alt='' />
                </div>

                <div>
                    <p>JPN</p>
                    <span>15:21</span>
                </div>
            </div>

            <div className={styles.duration}>
                <p>3 hours 11 minutes</p>
                <span>(1 transit)</span>
            </div>

            <div className={styles.facilities}>
                <div>
                    <img src={luggage} alt='' />
                </div>
                <div>
                    <img src={meal} alt='' />
                </div>
                <div>
                    <img src={wifi} alt='' />
                </div>
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