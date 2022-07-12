import React from 'react'
import Button from '../../base/buttonv2'
import Logo from '../logo'
import Searchbar from '../searchbar'

import styles from './naviv2.module.css'

import mail from '../../../assets/mail.svg'
import bell from '../../../assets/bell.svg'
import user from '../../../assets/user.svg'

const NaviV2 = () => {
  return (
    <div className={styles.navi}>
        <Logo />

        <Searchbar />

        <div className={styles['btn-group']}>
            <Button 
            title='Find Ticket'
            type='button'
            className={styles['navi-btn']}
            // onClick={handleLogin}
            />
            
            <Button 
            title='My Booking'
            type='button'
            className={styles['navi-btn']}
            // onClick={handleLogin}
            />
        </div>

        <div className={styles['profile-section']}>
          <div>
            <img src={mail} alt='' />
          </div>

          <div>
            <img src={bell} alt='' />
          </div>
          
          <div>
            <img src={user} alt='' />
          </div>
        </div>
    </div>
  )
}

export default NaviV2