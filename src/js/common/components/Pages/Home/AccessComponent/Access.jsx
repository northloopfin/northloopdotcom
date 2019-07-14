import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import iconTick from '../../../../../../assets/images/icons/icon-tick.svg'
import styles from './Access.css'
import homeStyles from '../HomeCSS/Home.css'

const textArray = [
  'Up to 5% cashback every month',
  'CampusCashback® at your favorite stores and restaurants',
  'Discounted T-Mobile Cellular Bill',
  'Free Amazon Prime Student',
  'Discounted Housing',
]

const Access = () => (
  <div>
    {textArray.map((text, index) => (
      <Grid container spacing={3} key={index}>
        <Grid item xs={12} className={styles.row}>
          <img src={iconTick} alt="Secure" />
          <p className={styles.text}>{text}</p>
        </Grid>
      </Grid>
    ))}
    <Grid container>
      <Grid item xs={12} className={styles.buttonWrapper}>
        <Button variant="contained" color="primary" className={homeStyles.button}>
          And More
        </Button>
      </Grid>
    </Grid>
  </div>
)

export default Access
