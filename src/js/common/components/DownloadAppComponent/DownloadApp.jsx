import React from 'react'
import Container from '@material-ui/core/Container'
import styles from './DownloadApp.css'
import appStoreImage from '../../../../assets/images/appstore.png'
import playStoreImage from '../../../../assets/images/playstore.png'
import iconMessage from '../../../../assets/images/icons/icon-message.svg'

const DownloadApp = () => (
  <div className={styles.container}>
    <Container className={styles.footerSection}>
      <div className={styles.innerContainer}>
        <div className={styles.text}>Get the app installed in your mobile now</div>
        <img src={playStoreImage} onClick={() => {}} className={styles.storeImg} />
        <img src={appStoreImage} onClick={() => {}} className={styles.storeImg2} />
      </div>
    </Container>
    <div className={styles.message}>
      <img src={iconMessage} alt="icon message" />
      <p>Message us</p>
    </div>
  </div>
)

export default DownloadApp
