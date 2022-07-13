import React from 'react'
import { Link } from 'react-router-dom'
import styles from './dropdown.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Dropdown = () => {
  return (
    <div className={`dropdown ${styles['dropdown-wrapper']}`}>
        <Link 
        className={`btn dropdown-toggle ${styles.toggler}`} 
        to='#' 
        role='button' 
        id='dropdownMenuLink' 
        data-bs-toggle='dropdown' 
        aria-expanded='false'
        >
            <label className={styles.label}>
                Sort by
            </label>
        </Link>

        <ul className={`dropdown-menu ${styles.menu}`} aria-labelledby='dropdownMenuLink'>
            <li><Link to='#' className={styles.options}>Price</Link></li>
            <li><Link to='#' className={styles.options}>Departure time</Link></li>
            <li><Link to='#' className={styles.options}>Arrival time</Link></li>
        </ul>
    </div>
  )
}

export default Dropdown