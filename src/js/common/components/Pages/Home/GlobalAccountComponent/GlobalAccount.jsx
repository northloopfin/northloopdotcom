import React from 'react'
import Grid from '@material-ui/core/Grid'
import redribbon from '../../../../../../assets/images/redribbon.svg'
import purpleribbon from '../../../../../../assets/images/purpleribbon.svg'
import yellowribbon from '../../../../../../assets/images/yellowribbon.svg'
import styles from './GlobalAccount.css'

const GlobalAccount = () => (
  <div className={styles.mainBlock}>
    <Grid container className={styles.row}>
      <Grid item xs={1}>
        <img src={redribbon} alt="Secure" />
      </Grid>
      <Grid item xs={11} sm={9} className={styles.textPadding}>
        <p className={[styles.freeText, styles.receive].join(' ')}>Receive Money for Free</p>
        <p className={styles.text}>
          Zero incoming wire fees. Unlimited incoming international wires. Receive 100% of what your
          family sends you. Most other banks charge $25.
        </p>
      </Grid>
    </Grid>
    <Grid container className={styles.row}>
      <Grid item xs={1}>
        <img src={purpleribbon} alt="Secure" />
      </Grid>
      <Grid item xs={11} sm={9} className={styles.textPadding}>
        <p className={[styles.instanslyText, styles.receive].join(' ')}>Receive Money Instantly</p>
        <p className={styles.text}>
          Need money ASAP? Receive wire transfers in minutes rather than in days.
        </p>
      </Grid>
    </Grid>
    <Grid container className={styles.row}>
      <Grid item xs={1}>
        <img src={yellowribbon} alt="Secure" />
      </Grid>
      <Grid item xs={11} sm={9} className={styles.textPadding}>
        <p className={[styles.feeslyText, styles.receive].join(' ')}>No International Fees </p>
        <p className={styles.text}>No fees when you travel and spend with your North Loop card. </p>
      </Grid>
    </Grid>
  </div>
)

export default GlobalAccount
