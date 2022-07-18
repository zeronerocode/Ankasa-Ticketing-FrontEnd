import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './ticketCard.module.css'

import flight from '../../../assets/flight.svg'
import Button from '../../base/buttonv2'

const TicketCard = ({airlineImg, airline, origin, arr, destination, dept, price, luggage, meal, wifi, id}) => {
    const navigate = useNavigate()
  
    return (
    <div className={styles.ticket}>
        <div className={styles.airline}>
            <div style={{width: '100px'}}>
                <img src={airlineImg} alt='' style={{width: '100%'}}/>
            </div>    
            <span>{airline}</span>
        </div>

        <div className={styles['flight-info']}>
            <div className={styles.schedule}>
                <div>
                    <p>{origin}</p>
                    <span>{arr}</span>
                </div>

                <div>
                    <img src={flight} alt='' />
                </div>

                <div>
                    <p>{destination}</p>
                    <span>{dept}</span>
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
                <p>Rp {price}</p>
                <span>/pax</span>
            </div>
            
            <Button 
            title='Select'
            type='button'
            className={styles.select}
            onClick={()=>navigate(`/flights/${id}`)}
            />
        </div>
    </div>
  )
}

export default TicketCard