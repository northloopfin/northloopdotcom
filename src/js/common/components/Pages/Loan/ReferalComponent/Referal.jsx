import React, { useState, Fragment } from 'react'
import styles from './Referal.css'

const Referal = () => {
  const [value, setValue] = useState(0)

  const reviews = [
    {
      text: 'Save thousands of dollars by referring your friends',
    },
    {
      text: 'Refer 4 friends and get 0.5% off your interest',
    },
    {
      text: 'Refer 10 friends and get 1.5% off your interest.',
    },
  ]

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.tabRow}>
        {reviews.map((review, index) => (
          <div
            className={styles.tab}
          >
            <p className={styles.tabText}>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Referal
