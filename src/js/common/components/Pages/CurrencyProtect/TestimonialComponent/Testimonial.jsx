import React, { useState } from 'react'
import styles from './Testimonial.css'
import punctuation from '../../../../../../assets/images/icons/icon-punctuation.svg';

const Referal = () => {
  const [value, setValue] = useState(0)

  const reviews = [
    {
      text: 'Sanjeev Verma',
    },
    {
      text: 'Mrinal Mohanka',
    },
    {
      text: 'Kevin Chen',
    },
  ]

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.tabRow}>
        {reviews.map((review, index) => (
          <div
            className={styles.tab}
            className={index == value ? styles.activeTab : styles.tab}
            onClick={() => setValue(index)}
          >
            <p className={styles.tabText} style={{ color: '#fff' }}>{review.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.textBlock}>
        <img src={punctuation} alt="quete" />
        <p className={styles.tabText}>“Using CurrencyProtect means I no longer worry about FX rates and when is the best day to send money to my daughter. I know I’m covered and get refunded!”</p>
        <p className={styles.textAuthor}>{reviews[value].text}</p>
      </div>
    </div>
  )
}

export default Referal
