import React, { Component } from 'react'
// import { Player, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
// import CurrencyProtectInfo from './CurrencyProtectInfoComponent/CurrencyProtectInfo'
// import HowItWorks from './HowItWorksComponent/HowItWorks'
// import ItsSimple from './ItsSimpleComponent/ItsSimple'
import Slider from '../../SliderComponent/Slider'
import Footer from '../../Footer/Footer'
// import Testimonial from './TestimonialComponent/Testimonial'
import mobile from '../../../../../assets/images/icon-mobile-white.svg'
import email from '../../../../../assets/images/icon-email.svg'

import styles from './CashBack.css'

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
                  <p className={styles.title}>Our Partners</p>
                  <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit nec magna vel pretium. Curabitur euismod, metus id aliquam tincidunt, nisl ipsum tincidunt massa, sed scelerisque est risus quis neque.</p>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div id="2">
          <Container className={styles.main}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <div className={styles.titleBlock}>
                  <p className={styles.subtitleRed}>Interested in becoming a partner?</p>
                  <p className={styles.title}>Contact Us</p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={styles.contactWrapper}>
                    <Container className={styles.footerSection}>
                        <div className={styles.innerContainer}>
                            <img src={mobile} alt="icon message" />
                            <p className={styles.text}>+1(831)740-8126</p>
                        </div>
                    </Container>
                    <Container className={styles.message}>
                        <div className={styles.innerContainer}>
                            <img src={email} alt="icon message" />
                            <p className={styles.text}>help@nolobank.com</p>
                        </div>
                    </Container>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div id="4">
          <Footer />
        </div>
      </Slider>
    )
  }
}

export default Partners;
