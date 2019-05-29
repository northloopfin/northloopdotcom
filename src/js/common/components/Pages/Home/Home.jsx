import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Slider from 'react-slick';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './HomeCSS/Home.css';
import ZeroFees from '../../../../../assets/images/zero-fees.png';
import whenYouLand from '../../../../../assets/images/when-you-land.png';
import FDIC from '../../../../../assets/images/FDIC.png';
import CreditCardImg from '../../../../../assets/images/creditCard.png';
import Audio from '../../../../../assets/images/audio.png';
import Conecto from '../../../../../assets/images/conecto.png';
import goWithLow from '../../../../../assets/images/goWithLow.png';
import syfuel from '../../../../../assets/images/syfuel.png';
import playground from '../../../../../assets/images/playground.png';
import AppStore from '../../../../../assets/images/AppStore.png';
import GooglePlay from '../../../../../assets/images/GooglePlay.png';

const Services = () => (
  <Container className={styles.servicesWrapper}>
    <h2 className={styles.subtitle}>Our Great Services With<br />All In One App <span /></h2>
    <Grid container className={styles.servicesGrid}>
      <Grid item xs={12} sm={4} className={styles.servicesRow}>
        <div className={styles.maxWidthFirst}>
          <div className={styles.icon}><img src={ZeroFees} alt="Zero Fees" /></div>
          <h3>No fees</h3>
          <p>ZERO wire fees. No ATM Fees. No Account Fees or Minimums. </p></div>
      </Grid>
      <Grid item xs={12} sm={4} className={styles.servicesRow}>
        <div className={styles.maxWidthSec}>
          <div className={styles.icon}><img src={whenYouLand} alt="Zero Fees" /></div>
          <h3>Bank Wherever You Are</h3>
          <p>Start the sign up process before you come to the US. Your card will be waiting for you when you land.</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={4} className={styles.servicesRow}>
        <div className={styles.maxWidthThird}>
          <div className={styles.icon}><img src={FDIC} alt="Zero Fees" /></div>
          <h3>100% secure</h3>
          <p>All accounts are insured up to $250,000 by the US government.</p>
        </div>
      </Grid>
    </Grid>
  </Container>
);

const CreditCard = () => (
  <div className={styles.creditCard}>
    <Container>
      <Grid item container>
        <Grid item xs={12} sm={6}>
          <h3 className={styles.subtitle}>North Loop Visa® Card <span /></h3>
          <p className={styles.discoverHow}>Accepted everywhere. Extra secure with EMV chips.<br />5% cashback on your first $1,000 every month</p>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.creditC}>
          <img src={CreditCardImg} alt="Credit Card" />
        </Grid>
      </Grid>
    </Container>
  </div>
);

function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 478,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };
  return (
    <Container className={styles.Partners}>
      <h3 className={styles.subtitle}>Partners <span /></h3>
      <Slider {...settings} className={styles.partnerSlider}>
        <div>
          <img src={Audio} alt="Audio Tech" />
        </div>
        <div>
          <img src={Conecto} alt="Conecto" />
        </div>
        <div>
          <img src={goWithLow} alt="Go With Flow" />
        </div>
        <div>
          <img src={syfuel} alt="Syfuel" />
        </div>
        <div>
          <img src={playground} alt="Playground" />
        </div>
        <div>
          <img src={playground} alt="Playground" />
        </div>
        <div>
          <img src={playground} alt="Playground" />
        </div>
        <div>
          <img src={playground} alt="Playground" />
        </div>
      </Slider>
    </Container>
  );
}
const Download = () => (
  <div className={styles.appSection}>
    <Container>
      <h2 className={styles.subtitle}>Download Our App And Signup In 5min</h2>
      <ul>
        <li><a href="/"><img src={AppStore} alt="Play Store" /></a></li>
        <li><a href="/"><img src={GooglePlay} alt="Google Play" /></a></li>
      </ul>
    </Container>
  </div>
);

const Journey = () => (
  <Container className={styles.journey}>
    <h2 className={styles.subtitle}>Start Your Journey <span /></h2>
    <Grid item sm={10}>
      <form className={styles.container} noValidate autoComplete="off">
        <Grid container>
          <Grid item xs={6}>
            <TextField
              id="standard-dense"
              label="First Name"
              margin="dense"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-dense"
              label="Last Name"
              margin="dense"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-dense"
              label="Email"
              margin="dense"
              type="email"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-dense"
              label="Phone No."
              margin="dense"
              type="tel"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-dense"
              label="Pin Code"
              margin="dense"
              type="tel"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-dense"
              label="Address"
              margin="dense"
            />
          </Grid>
          <Button variant="contained" color="primary" className={styles.button}>Submit</Button>
        </Grid>
      </form>
    </Grid>
  </Container>
);
const NewServices = Services();
const NewCreditCard = CreditCard();
const NewPartners = Partners();
const NewDownload = Download();
const NewJourney = Journey();

class Home extends PureComponent {
  render() {
    const { home } = this.props;
    const result = (home && home.result) || null;
    if (result) {
      return (
        <div className={styles.homeOutput}>
          {/* <pre>{JSON.stringify(result, undefined, 2)}</pre> */}
          {NewServices}
          {NewCreditCard}
          {NewPartners}
          {NewDownload}
          {NewJourney}
        </div>
      );
    }
    return <div />;
  }
}

export default Home;
