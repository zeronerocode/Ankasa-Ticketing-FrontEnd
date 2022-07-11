import React from 'react'
import styles from './card.module.css'

const Card = ({ className }) => {
  return (
    <>
        <div className={className}>
            <div className={styles.card}></div>
        </div>
    </>
  )
}

export const Card2 = ({ className, title, content }) => {
  return(
    <>
      <div className={className}>
          <div className={styles.Card2}>
            <p className={styles.text}>{title}</p>
            <p className={styles.text2}>{content}</p>
          </div>
      </div>
    </>
  )
}

export default Card