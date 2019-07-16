import React from 'react'
import Grid from '@material-ui/core/Grid'
import iconSecure from '../../../../../../assets/images/icons/icon-secure.svg'
import styles from './AchieveDreams.css'

const AchieveDreams = () => (
  <div>
    <Grid container className={styles.rowSpacing}>
      <Grid item xs={2} className={styles.imagePaddingLeft}>
        <img src={iconSecure} alt="Secure" />
      </Grid>
      <Grid item xs={10} sm={8}>
        <p className={styles.title}>EASY 5 minutes APPLICATION</p>
        <p className={styles.text}>Check if you’re eligible for a loan in 5 minutes. No co-signer. No collateral.</p>
      </Grid>
    </Grid>
    <Grid container className={styles.rowSpacing}>
      <Grid item xs={2} className={styles.imagePaddingLeft}>
        <img src={iconSecure} alt="Vise" />
      </Grid>
      <Grid item xs={10} sm={8}>
        <p className={styles.title}>OVER 100+ US UNIVERSITIES SUPPORTED</p>
        <p className={styles.text}>We offer loans to pathways, undergraduate and graduate students.</p>
      </Grid>
    </Grid>
    <Grid container className={styles.rowSpacing}>
      <Grid item xs={2} className={styles.imagePaddingLeft}>
        <img src={iconSecure} alt="Lock Card" />
      </Grid>
      <Grid item xs={10} sm={8}>
        <p className={styles.title}>EXCLUSIVE CAREER OPPORTUNITIES</p>
        <p className={styles.text}>No fees when you travel and spend with your North Loop card. </p>
      </Grid>
    </Grid>
  </div>
)

export default AchieveDreams
