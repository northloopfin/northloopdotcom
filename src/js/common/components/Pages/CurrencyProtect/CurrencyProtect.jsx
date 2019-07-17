import React, { Component } from 'react'
import { Player, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import CurrencyProtectInfo from './CurrencyProtectInfoComponent/CurrencyProtectInfo'
import HowItWorks from './HowItWorksComponent/HowItWorks'
import ItsSimple from './ItsSimpleComponent/ItsSimple'
import Slider from '../../SliderComponent/Slider'
import Footer from '../../Footer/Footer'
import Testimonial from './TestimonialComponent/Testimonial'
import DollarSign from '../../../../../assets/images/illustration-currency_protet.svg'
import styles from './CurrencyProtect.css'
import DownloadApp from '../../DownloadAppComponent/DownloadApp'

class CurrencyProtect extends Component {
  render() {
    const isMobile = window.screen.width < 768
    return (
      <Slider>
        <div id="1">
          <Container className={styles.main}>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <div className={styles.titleBlock}>
                  <p className={styles.title}>Currency Protect</p>
                  <p className={styles.subtitle}>Peace of mind with international money transfers</p>
                </div>
                <CurrencyProtectInfo />
              </Grid>
              <Grid item xs={12} sm={4} className={styles.headerIphone}>
                <img src={DollarSign} className={styles.sectionImage} style={{ marginTop: 55 }} alt="iPhone 6" />
              </Grid>
            </Grid>
          </Container>
        </div>
        <div id="2">
          <Container className={styles.main} style={!isMobile ? { marginBottom: 0 } : null}>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <div className={styles.titleBlock}>
                  <p className={styles.title}>Here’s How It Works</p>
                </div>
                <HowItWorks />
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className={styles.videoWrapper}>
                  <Player
                    width={500}
                    height={290}
                    fluid={isMobile ? true: false}
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                    <BigPlayButton position="center" />
                  </Player>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div id="3">
          <Container className={styles.main} style={!isMobile ? { marginTop: 0 } : null}>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <div className={styles.titleBlock}>
                  <p className={styles.title} style={{ color: '#C75561' }}>
                    It’s that simple !
                  </p>
                </div>
                <ItsSimple />
              </Grid>
            </Grid>
          </Container>
          <Container className={styles.main}>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <div className={styles.titleBlock}>
                  <p className={styles.title}>Testimonials</p>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Testimonial />
              </Grid>
            </Grid>
          </Container>
        </div>
        <div id="4">
          <Footer />
          <DownloadApp />
        </div>
      </Slider>
    )
  }
}

export default CurrencyProtect
