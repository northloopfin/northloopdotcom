import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Slider from 'react-slick';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactHtmlParser from 'react-html-parser';

import styles from './HomeCSS/Home.css';
import ZeroFees from '../../../../../assets/images/zero-fees.png';
import whenYouLand from '../../../../../assets/images/when-you-land.png';
import FDIC from '../../../../../assets/images/fdicImg.png';
import CreditCardImg from '../../../../../assets/images/creditCard.png';
import Audio from '../../../../../assets/images/audio.png';
import Conecto from '../../../../../assets/images/conecto.png';
import goWithLow from '../../../../../assets/images/goWithLow.png';
import syfuel from '../../../../../assets/images/syfuel.png';
import playground from '../../../../../assets/images/playground.png';
import AppStore from '../../../../../assets/images/appStore.png';
import GooglePlay from '../../../../../assets/images/GooglePlay.png';

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
        },
      },
    ],
  };
  return (
    <Container className={styles.Partners}>
      <h3 className={styles.subtitle}>
Partners
        {' '}
        <span />
      </h3>
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
    <h2 className={styles.subtitle}>
Start Your Journey
      {' '}
      <span />
    </h2>
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
const NewPartners = Partners();
const NewDownload = Download();
const NewJourney = Journey();

class Home extends PureComponent {
  render() {
    const { location } = this.props;
    const { pathname } = location;
    const isHighYieldSavings = pathname === '/high-yield-savings';
    const isLoans = pathname === '/loans';

    // Text for each pages
    let serviceTitle = 'Banking designed for<br />your lifestyle';
    let servicesubTitle1 = 'No fees';
    let servicesubTitle2 = 'Bank Wherever You Are';
    let servicesubTitle3 = '100% secure';
    let serviceText1 = 'ZERO wire fees. No ATM Fees. No Account Fees or Minimums.';
    let serviceText2 = 'Start the sign up process before you come to the US. Your card will be waiting for you when you land.';
    let serviceText3 = 'All accounts are insured up to $250,000 by the US government.';

    let visaTitle = 'North Loop Visa® Card';
    let visaSubtitle = 'Accepted everywhere. Extra secure with EMV chips.<br />5% cashback on your first $1,000.';
    if (isHighYieldSavings) {
      serviceTitle = 'The North Loop Checking<br />Account';
      servicesubTitle1 = 'No fees';
      servicesubTitle2 = 'A global spending account';
      servicesubTitle3 = '100% secure';
      serviceText1 = 'Free access to over 32,000 ATMs. No Account Fees. No overdraft fees.';
      serviceText2 = 'No international transaction fees.';
      serviceText3 = 'All accounts are FDIC insured';

      visaTitle = 'North Loop Visa® Card';
      visaSubtitle = 'Accepted everywhere that accepts VISA. Extra secure with EMV chips. ';

    }
    const Services = () => (
      <Container className={styles.servicesWrapper}>
        <h2 className={styles.subtitle}>
          { ReactHtmlParser(serviceTitle) }
          {' '}
          <span />
        </h2>
        <Grid container className={styles.servicesGrid}>
          <Grid item xs={12} sm={4} className={styles.servicesRow}>
            <div className={styles.maxWidthFirst}>
              <div className={styles.icon}><img src={ZeroFees} alt="Zero Fees" /></div>
              <h3>{ ReactHtmlParser(servicesubTitle1) }</h3>
              <p>
                { ReactHtmlParser(serviceText1) }
              </p>

            </div>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.servicesRow}>
            <div className={styles.maxWidthSec}>
              <div className={styles.icon}><img src={whenYouLand} alt="Zero Fees" /></div>
              <h3>{ ReactHtmlParser(servicesubTitle2) }</h3>
              <p>{ ReactHtmlParser(serviceText2) }</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.servicesRow}>
            <div className={styles.maxWidthThird}>
              <div className={styles.icon}><img src={FDIC} alt="Zero Fees" /></div>
              <h3>{ ReactHtmlParser(servicesubTitle3) }</h3>
              <p>{ ReactHtmlParser(serviceText3) }</p>
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
              <h3 className={styles.subtitle}>
                { ReactHtmlParser(visaTitle) }
                {' '}
                <span />
              </h3>
              <p className={styles.discoverHow}>
                { ReactHtmlParser(visaSubtitle) }
              </p>
            </Grid>
            <Grid item xs={12} sm={6} className={styles.creditC}>
              <img src={CreditCardImg} alt="Credit Card" />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
    const NewServices = Services();
    const NewCreditCard = CreditCard();

    return (
      <div className={styles.homeOutput}>
        { true
        && (
        <section>
          <div>{false && NewServices}</div>
          { false && !isLoans && <div>{NewCreditCard}</div> }
        </section>
        )}
      </div>
    );
  }
}

export default Home;

// <div>{NewPartners}</div>
// <div>{NewDownload}</div>
// <div>{NewJourney}</div>
