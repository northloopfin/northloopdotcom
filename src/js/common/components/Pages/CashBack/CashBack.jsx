import React, { Component } from 'react'
import 'video-react/dist/video-react.css';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Slider from '../../SliderComponent/Slider'
import Footer from '../../Footer/Footer'
import styles from './CashBack.css'
import amazon from '../../../../../assets/images/amazon.png';
import netflix from '../../../../../assets/images/netflix.png';
import tmobile from '../../../../../assets/images/tmobile.png';

class Partners extends Component {
  render() {
    const isMobile = window.screen.width < 768
    return (
      <Slider>
        <div id="1">
          <Container className={styles.main}>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <div className={styles.titleBlock}>
                  <p className={styles.title}>Campus Cashback</p>
                  <p className={styles.subtitle}>Experience the best rewards on your campus and across the country</p>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={4}>
                <div className={styles.rewardWrapper}>
                    <div className={styles.rewardImage}>
                        <img src={amazon} />
                    </div>
                    <div className={styles.rewardText}>
                        <p>1 month of Netflix</p>
                        <p className={styles.subtitleRed}>Free*</p>
                    </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className={styles.rewardWrapper}>
                    <div className={styles.rewardImage}>
                        <img src={netflix} />
                    </div>
                    <div className={styles.rewardText}>
                        <p>1 month of Netflix</p>
                        <p className={styles.subtitleRed}>Free*</p>
                    </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className={styles.rewardWrapper}>
                    <div className={styles.rewardImage}>
                        <img src={tmobile} />
                    </div>
                    <div className={styles.rewardText}>
                        <p>
                            <span className={styles.redText}>Discounts</span> on Cell Bill
                        </p>
                    </div>
                </div>
              </Grid>
            </Grid>
            <div className={styles.spacing} />
            <Grid container>
              <Grid item xs={12} sm={12}>
                <p className={styles.thumbnail}>Enter your college email to see all the exclusive benefits you can get on campus with North Loop.</p>
                <div className={styles.formWrapper}>
                    <form action="" className={styles.form}>
                        <input type="text" placeholder="Enter your email" className={styles.formInput} />
                        <Button
                            variant="contained"
                            color="primary"
                            className={styles.button}
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div id="2">
          <Footer />
        </div>
      </Slider>
    )
  }
}

export default Partners;
