import React from 'react'
import Button from '../../base/buttonv2'
import Logo from '../logo'
import Searchbar from '../searchbar'
import styles from './naviv2.module.css'
import mail from '../../../assets/mail.svg'
import bell from '../../../assets/bell.svg'
import user from '../../../assets/user.svg'
import { Link } from 'react-router-dom'

export class NaviV2 extends React.Component {
  // onNavigate() {
  //   BrowserHistory.push('/myBooking')
  // }
  render(){
  return (
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

            // onClick={this.onNavigate}
            />
            </Link>

        </div>

        <div className={styles['profile-section']}>
          <div>
            <img src={mail} alt='' />
          </div>

          <div>
            <img src={bell} alt='' />
          </div>
          
          <div>
          <Link to={'/profile'}>
            <img src={user} alt='' />
            </Link>
          </div>
        </div>
    </div>
  )
  }
}

export default NaviV2