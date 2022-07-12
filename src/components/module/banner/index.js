import React from 'react'

import banner from '../../../assets/banner.svg'

import styles from './banner.module.css'

const Banner = () => {
  return (
    <div className={styles.banner}>
        <img src={banner} alt='' />
    </div>
  )
}

export default Banner
