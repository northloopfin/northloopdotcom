import React from 'react'
import iconAtm from '../../../../../../assets/images/icons/icon-atm.svg'
import iconFree from '../../../../../../assets/images/icons/icon-free.svg'
import Grid from '@material-ui/core/Grid';
import styles from './BankAccount.css';

const BankAccount = () => (
  <div className={styles.bankWrapper}>
    <Grid container 
          direction="row"
          alignItems="center"
          className={styles.rowSpacing}>
      <Grid item sm={2} xs={12} className={styles.imagePadding}>
        <img src={iconFree} alt="Bank free" className={styles.iconMobile}/>
      </Grid>
      <Grid item xs={12} md={3} sm={5}>
        <p className={[styles.text, styles.freeTextColored].join(' ')}>100% Free</p>
        <p className={styles.text}>
          <span className={styles.freeTextColored}>No!</span> account fees 
        </p>
        <p className={styles.text}>
          <span className={styles.freeTextColored}>No!</span> account minimums
        </p>
      </Grid>
      <Grid item xs={12} md={3} sm={5} className={styles.textLeftPadding}>
        <br/>
        <p className={styles.text}>
          <span className={styles.freeTextColored}>No!</span> ATM fees
        </p>
        <p className={styles.text}>
          <span className={styles.freeTextColored}>No!</span> incoming wire fees
        </p>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12} sm={2}>
        <img src={iconAtm} alt="Bank ATM" className={styles.iconMobile}/>
      </Grid>
      <Grid item sx={12} sm={10} className={styles.mobileAligment}>
        <p className={[styles.text, styles.atmTextColored].join(' ')}>ATM Network</p>
        <p className={styles.text}>
          <span className={styles.atmTextColored}>Get</span> nationwide wide ATM network
        </p>
        <p className={styles.text}>
          <span className={styles.atmTextColored}>Get</span> free access to 32, 000 ATMs across the US
        </p>
      </Grid>
    </Grid>
  </div>
)

export default BankAccount