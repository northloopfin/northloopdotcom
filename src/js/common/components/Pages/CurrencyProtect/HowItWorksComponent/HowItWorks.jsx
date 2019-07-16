import React from 'react'
import Grid from '@material-ui/core/Grid'
import icon from '../../../../../../assets/images/illustration-currencyprotect_path.svg'
import styles from './HowItWorks.css'

const HowItWorks = () => (
  <div className={styles.wrapper}>
    <img src={icon} className={styles.icon} />
    <Grid container className={styles.rowSpacing}>
      <Grid item xs={10} sm={8}>
        <p className={styles.text}>You send money to The US on Monday</p>
      </Grid>
    </Grid>
    <Grid container className={styles.rowSpacing}>
      <Grid item xs={10} sm={8}>
        <p className={styles.text}>Your currency becomes cheaper on Wednesday.</p>
        <p className={styles.text}>Now you regret sending it as you could’ve saved money!</p>
      </Grid>
    </Grid>
    <Grid container className={styles.rowSpacing}>
      <Grid item xs={10} sm={8}>
        <p className={styles.text}>We’ll refund you the difference on the transfer!</p>
      </Grid>
    </Grid>
  </div>
)

export default HowItWorks
