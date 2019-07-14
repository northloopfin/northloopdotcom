import React from 'react'
import Grid from '@material-ui/core/Grid'
import iconSecure from '../../../../../../assets/images/icons/icon-secure.svg'
import iconVisacard from '../../../../../../assets/images/icons/icon-visacard.svg'
import iconLockYourCard from '../../../../../../assets/images/icons/icon-LockYourCard.svg'
import iconInstantNotification from '../../../../../../assets/images/icons/icon-InstantNotification.svg'
import styles from './LeadingSecurity.css'

const LeadingSecurity = () => (
  <div>
    <Grid container className={styles.rowSpacing}>
      <Grid item xs={2} className={styles.imagePaddingLeft}>
        <img src={iconSecure} alt="Secure" />
      </Grid>
      <Grid item xs={10} sm={8}>
        <p className={styles.title}>100% Secure</p>
        <p className={styles.text}>All accounts are FDIC insured (US Government) up to $250,000.</p>
      </Grid>
    </Grid>
    <Grid container className={styles.rowSpacing}>
      <Grid item xs={2} className={styles.imagePaddingLeft}>
        <img src={iconVisacard} alt="Vise" />
      </Grid>
      <Grid item xs={10} sm={8}>
        <p className={styles.title}>Your VISA® Debit Card</p>
        <p className={styles.text}>Your card comes with an EMV chip and is enabled with VISA® Zero Liability.</p>
      </Grid>
    </Grid>
    <Grid container className={styles.rowSpacing}>
      <Grid item xs={2} className={styles.imagePaddingLeft}>
        <img src={iconLockYourCard} alt="Lock Card" />
      </Grid>
      <Grid item xs={10} sm={8}>
        <p className={styles.title}>Lock Your Card</p>
        <p className={styles.text}>
          Lost or misplaced your card? Lock it with a single tap. Found it? Unlock it with another
          tap.
        </p>
      </Grid>
    </Grid>
    <Grid container className={styles.rowSpacing}>
      <Grid item xs={2} className={styles.imagePaddingLeft}>
        <img src={iconInstantNotification} alt="Lock Card" />
      </Grid>
      <Grid item xs={10} sm={8}>
        <p className={styles.title}>Instant Notifications</p>
        <p className={styles.text}>Get a notification every time you make a purchase. You’re in control of your money.</p>
      </Grid>
    </Grid>
  </div>
)

export default LeadingSecurity
