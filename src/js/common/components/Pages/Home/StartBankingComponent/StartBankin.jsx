import React from 'react'
import Grid from '@material-ui/core/Grid'
import iconSuccess from '../../../../../../assets/images/icons/icon-success-bubble.svg'
import tick from '../../../../../../assets/images/icons/tick.svg'
import iocnStartBanking from '../../../../../../assets/images/icons/icon-StartBanking.svg'
import iconDownloadApp from '../../../../../../assets/images/icons/icon-DownloadApp.svg'
import iconScanID from '../../../../../../assets/images/icons/icon-ScanID.svg'
import styles from './StartBanking.css'

const StartBanking = () => (
  <Grid container>
    <Grid item xs={12}>
      <div className={styles.wrapper}>
        <img src={iconSuccess} alt="icon-success" className={styles.success} />
        <div className={styles.shadow}>
          <div className={styles.successBlock}>
            <img src={tick} alt="rick" className={styles.successIcon1} />
            <div className={styles.gradient1} />
            <img src={tick} alt="rick" className={styles.successIcon2} />
            <div className={styles.gradient2} />
            <img src={tick} alt="rick" className={styles.successIcon3} />
          </div>
          <div className={styles.stepBlock}>
            <div>
              <img src={iconDownloadApp} alt="download app" />
              <p>Download the app</p>
            </div>
            <div>
              <img src={iconScanID} alt="scan id" />
              <p>Sign Up & Scan Your ID</p>
            </div>
            <div>
              <img src={iocnStartBanking} alt="start banking" />
              <p>Start Banking</p>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  </Grid>
)

export default StartBanking
