import React from 'react'
import Button from '../../base/buttonv2'
import Logo from '../logo'
import Searchbar from '../searchbar'
import { Link } from 'react-router-dom'

import styles from './navi.module.css'

const Navi = ({ className }) => {
  return (
    <div className={className}>
    <div className={styles.navi}>
    <Link to={'/home'}>
        <Logo />
      </Link>

        <Searchbar />

        <div className={styles['btn-group']}>
        <Link to={'/searchFlight'}>
            <Button 
            title='Find Ticket'
            type='button'
            className={styles['navi-btn']}
            // onClick={handleLogin}
            />
            </Link>
            

            <Link to={'/myBooking'}>
            <Button 
            title='My Booking'
            type='button'
            className={styles['navi-btn']}
            // onClick={handleLogin}
            />
            </Link>
        </div>

        <Link to={'/register'}>
        <Button 
        title='Sign Up'
        type='button'
        className={styles['sign-btn']}
        // onClick={handleLogin}
        />
        </Link>
    </div>
    </div>
  )
}

export default Navi