import React, { useState, Fragment } from 'react'
import arturoChan from '../../../../assets/images/arturo_chan.jpeg'
import jaiNanavati from '../../../../assets/images/jai_nanavati.jpeg'
import ayeshaKad from '../../../../assets/images/ayesha_kad.png'
import punctuation from '../../../../assets/images/icons/icon-punctuation.svg'
import styles from './Testimonial.css'

const Testimonial = () => {
  const [value, setValue] = useState(0)

  const reviews = [
    {
      name: 'Jai Nanavati',
      location: 'University of Michigan',
      img: jaiNanavati,
      text:
        'I have paid so much to my bank in wire fees everytime my family sends me money. No wire fees from North Loop? I’m definitely signing up!',
      author: 'Jai Nanavati, University of Michigan',
    },
    {
      name: 'Arturo Chan',
      location: 'Northwestern University',
      text:
        'The app is so simple to use. No account fees and no wire fees saves me hundreds of dollars!',
      author: 'Mrinal Mohanka, Columbia University',
      img: arturoChan,
    },
    {
      name: 'Ayesha Kad',
      location: 'University of Pennsylvania',
      img: ayeshaKad,
      text:
        'When I came to the US, I was without a debit card for over 10 days. Can’t wait to use North Loop - this will solve so many problems!',
      author: 'Ayesha Kad, University of Pennsylvania',
    },
  ]

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.tabRow}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className={index == value ? styles.activeTab : styles.tab}
            onClick={() => setValue(index)}
          >
            <img src={review.img} alt="photo" className={styles.tabAvatar} />
            <div className={styles.tabTextBlock}>
              <p className={styles.name}>{review.name}</p>
              <p className={styles.location}>{review.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.textBlock}>
        <img src={punctuation} alt="quete" />
        <p className={styles.text}>{reviews[value].text}</p>
        <p className={styles.textAuthor}>{reviews[value].author}</p>
      </div>
    </div>
  )
}

export default Testimonial
