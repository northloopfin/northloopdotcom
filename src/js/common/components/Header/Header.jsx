import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ReactHtmlParser from 'react-html-parser';

import styles from './CSS/Header.css';
import Logo from '../../../../assets/images/logo.png';
import iPhone from '../../../../assets/images/iphone-6.png';
import iPhone2 from '../../../../assets/images/iphone-6-two.png';
import iPhone3 from '../../../../assets/images/iphone-6-three.png';
import iPhone4 from '../../../../assets/images/iphone-6-four.png';
import hundredFreeIcon from '../../../../assets/images/hundredFreeIcon.svg';
import atmNetworkIcon from '../../../../assets/images/atmNetwork.svg';
import instantNotificationIcon from '../../../../assets/images/instantNotification.svg';
import visaCardIcon from '../../../../assets/images/visaCard.svg';
import lockCardIcon from '../../../../assets/images/lockYourCard.svg';
import iconSecure from '../../../../assets/images/iconSecure.svg';
import redRibbon from '../../../../assets/images/redRibbon.svg';
import yellowRibbon from '../../../../assets/images/yellowRibbon.svg';
import purpleRibbon from '../../../../assets/images/purpleRibbon.svg';

const divStyle = {
  paddingTop: '5px!important',
  padding: '0',
};

const tnpStyle = {
  container: {
    marginTop: '10%'
  },
  title: {
    color: '#C75561',
    fontFamily: 'Muli ExtraBold',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  content: {
    color: '#4A494B',
    fontSize: 'medium',
    marginTop: '1%'
  }
};

const imgIconStyle = {
  outerContainer: {
    display: 'flex',
    marginTop: '10%'
  },
  icon: {
    height: '76px',
    width: '64px'
  }
}

const bankFeaturesStyle = {
  title: {
    color: '#C75561',
    fontFamily: 'Muli ExtraBold',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  title2: {
    color: '#B04995',
    fontFamily: 'Muli ExtraBold',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  outerContainer: {
    width: '75%',
    marginLeft: '2%'
  },
  container: {
    display: 'flex'
  },
  feature1: {
    fontSize: '14px',
    marginBottom: '1%',
    flex: '1'
  },
  feature2: {
    fontSize: '14px',
    marginBottom: '1%',
    flex: '2'
  },
  noColor: {
    color: '#C75561'
  },
  noColor2: {
    color: '#B04995'
  }

}

const securityFeaturesStyle = {
  title: {
    color: '#C75561',
    fontFamily: 'Muli ExtraBold',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  content: {
    color: '#4A494B',
    fontSize: 'medium',
    marginTop: '1%'
  },
  icon: {
    height: '54px',
    width: '54px'
  },
  outerContainer: {
    display: 'flex',
    marginTop: '3%'
  },
}

const rewardsFeaturesStyle = {
  icon: {
    height: '24px',
    width: '24px'
  },
  content: {
    color: '#4A494B',
    fontSize: 'medium'
  }
}

const globalFeaturesStyle = {
  icon: {
    height: '91px',
    width: '54px',
    position: 'relative',
    right: '4%',
    bottom: '10%'
  },
  content: {
    color: '#4A494B',
    fontSize: 'medium'
  },
  outerContainer: {
    display: 'flex',
    marginTop: '5%',
    marginLeft: '3%',
    height: '120px',
    width: '593px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 10px 25px 0 rgba(172,185,196,0.28)'
  }
}

const testimonialsStyle = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10%'
  },
  container: {
    display: 'flex',
    height: '107.64px',
    width: '247.76px',
    borderRadius: '3.68px',
    background: 'linear-gradient(315.52deg, #C861AD 0%, #FF7987 100%)',
    boxShadow: '0 10px 25px 0 rgba(176,73,149,0.32)',
  },
  inactiveContainer: {
    display: 'flex',
    height: '107.64px',
    width: '247.76px',
    borderRadius: '3.68px',
    background: 'linear-gradient(180deg, #D6D4D7 0%, #A4A2A7 100%)',
    boxShadow: '0 10px 25px 0 rgba(176,73,149,0.32)',
  },
  img: {
    height: '100px',
    width: '100px'
  },
  personContainer: {
    flex: '1'
  },
  name: {
    color: '#FFFFFF',
    fontFamily: 'Muli ExtraBold',
    fontSize: '16px',
    lineHeight: '20px'
  },
  university: {
    color: '#FFFFFF',
    fontFamily: 'Muli ExtraBold',
    fontSize: '15px',
    lineHeight: '20px'
  }
}


function sendToGSF() {
  growsurf.open();
}

function onGsfSignup() {
  console.log('AG');
  if( document.getElementsByClassName('grsf-inline-error').length < 1 && ga ) {
    ga('send', 'event', 'signup', 'email-registered', 'email-registered-label', 1);
  }
}

setTimeout(function(){
  const grsrfBtn = document.getElementById('grsf-signup-button');
  if (grsrfBtn) {
    grsrfBtn.addEventListener("click", function(){
      onGsfSignup();
    });
  }
}, 2000);

// setTimeout(function(){
//   if (window.innerWidth < 768 && growsurf) {
//     const growsurfWidget = document.getElementById('grsf-widget');
//     growsurfWidget.style.top = '20%';
//     growsurfWidget.style.width = '80px';
//     growsurfWidget.style.fontSize = '11px';
//   }
// }, 2000);


function Header(props) {

  const [state, setState] = React.useState({
    left: false,
  });
  const { location } = props;
  const { pathname } = location;
  const isHome = pathname === '/';
  const isJoinUs = pathname === 'https://www.linkedin.com/company/35694537/admin/';
  const isHighYieldSavings = pathname === '/high-yield-savings';
  const isLoans = pathname === '/loans';
  const isBlogs = pathname === '/blogs';
  const isManualSignup = pathname === '/manual-signup';
  const isMobile = window.innerWidth < 768;

  // Content for each pages
  let title = 'Ultimate International Student Account';
  const title2 = 'The simplest bank account ever!';
  const title3 = 'Industry leading security';
  const title4 = 'Get access to the best rewards possible';
  const title5 = 'Start Banking in 3 Steps';
  const title6 = 'A Global Account for Global Citizens';
  const title7 = 'Join thousands of students';

  let subtitle = '<ul><li>No Incoming Wire Fees</li><ul>';
  let button = 'Get Early Access';
  let loanContent;

  if (isLoans) {
    title = 'International Student Loans & Refinancing';
    loanContent = (<ul className="hdr-content-ul">
        <li>Why pay more when you can save thousands of dollars?</li>
        <li />
        <li />
        <li>Refer 4 friends and get 0.5% off your interest.</li>
        <li>Refer 10 friends and get 1.5% off your interest.</li>
      </ul>);
    subtitle = 'Need an education loan? Get early access to the lowest rates possible.<br /><br />Why pay more when you can save thousands of dollars?<br />Refer 10 friends and get 1.5% off your interest.<br />';
    button = 'Get Early Access';
  }
  if (isHighYieldSavings) {
    title = 'Design - same as homepage';
    subtitle = 'The more people you refer, the higher you move up the waitlist.<br />The first 5,000 people get access to 5% APY<br />The next 5,000 get access to 5%. It’ll keep dropping until 2%. Hurry.';
    button = 'Join the waitlist';
  }

  if (isManualSignup) {
    title = 'North Loop Account Registration';
    subtitle = 'Receive a $10 Uber voucher when your account is approved!';
    button = '';
  }

  const divStyle = {
    paddingTop: '5px!important',
    padding: '0',
  }
  const toggleDrawer = (side, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <div
      className={styles.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}>
      <div className={styles.globalHeader}>
        <nav>
          <ul>
            <li className={!isHome ? styles.active : ''}>
            {isHome ? 'Students' : <Link to="/">Students</Link>}
          </li>
            <li className={!isJoinUs ? styles.active : ''}>
            {isJoinUs ? 'Join Us' : <a href="https://www.linkedin.com/company/35694537/admin/" target="_blank">Join Us</a>}
          </li>
            <li className={!isLoans ? styles.active : ''}>
            {isLoans ? 'Loans' : <Link to="/loans">Loans</Link>}
          </li>
          </ul>
        </nav>
      </div>
    </div>
  );

  return (
    <header className={styles.globalHeader}>

      {isMobile && (
        <div>
          <AppBar position="fixed" className={styles.newappBar} style={divStyle}>
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                <ul className={styles.brandLogo}>
                  <img src={Logo} alt="Nort Loop" />
                </ul>
              </Typography>
              <IconButton
                onClick={toggleDrawer("left", true)}
                edge="end"
                className={styles.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
            {sideList("left")}
          </Drawer>
        </div>
      )}

      <Container className={styles.marginTop}>
        {!isMobile && (
          <div>
            <ul className={styles.brandLogo}>
              <img src={Logo} alt="Nort Loop" />
            </ul>
            <nav>
              <ul>
                <li className={!isHome ? styles.active : ""}>
                  {isHome ? "Students" : <Link to="/">Students</Link>}
                </li>
                <li className={!isJoinUs ? styles.active : ""}>
                  {isJoinUs ? (
                    "Join Us"
                  ) : (
                    <a
                      href="https://www.linkedin.com/company/35694537/admin/"
                      target="_blank"
                    >
                      Join Us
                    </a>
                  )}
                </li>
                <li className={!isLoans ? styles.active : ""}>
                  {isLoans ? "Loans" : <Link to="/loans">Loans</Link>}
                </li>
              </ul>
            </nav>
          </div>
        )}

        {!isBlogs && (
          <div className={styles.headerTextContainer}>
            <Grid container>
              <Grid item xs={12} sm={8} className={styles.headerWithText} style={isLoans ? { paddingTop: "5%" } : {}}>
                <h1 className={styles.title}>{ReactHtmlParser(title)} </h1>
                <div className={styles.subHeader}>
                  {isLoans ? loanContent : ReactHtmlParser(subtitle)}
                </div>
                <div className="title-and-paragraph" style={tnpStyle.container}>
                  <div className="sign-up-in-5-min" style={tnpStyle.title}>
                    Sign up in just 5 minutes
                  </div>
                  <p style={tnpStyle.content}>
                    Sign up before coming to the US. Your card will be waiting for
                    you when you land. <br /> We will give you a T-mobile SIM card
                    before you fly.
                  </p>
                </div>
                {!isMobile && !isLoans && !isManualSignup && (
                  <div className={styles.buttonInputWrapper}>
                    <form
                      className={styles.bannerForm}
                      noValidate
                      autoComplete="off">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          sendToGSF();
                        }}
                        className={styles.button}>
                        {ReactHtmlParser(button)}
                      </Button>
                    </form>
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={4} className={styles.headerIphone}>
                {!isLoans && !isManualSignup ? (
                  <div className={styles.iPhoneContainer}>
                    <img src={iPhone} alt="iPhone 6" />
                  </div>
                ) : (
                  !isLoans &&
                  !isManualSignup && (
                    <div className={styles.loanHeaderAccessButton}>
                      <div>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            sendToGSF();
                          }}
                          className={styles.button}
                        >
                          {ReactHtmlParser(button)}
                        </Button>
                      </div>
                    </div>
                  )
                )}
              </Grid>
            </Grid>
          </div>
        )}

        {!isBlogs && (
          <div className={styles.headerTextContainer}>
            <Grid container>
              <Grid item xs={12} sm={8} className={styles.headerWithText} style={isLoans ? { paddingTop: "5%" } : {}}>
                <h1 className={styles.title}>{ReactHtmlParser(title2)} </h1>
                <div className="title-and-paragraph" style={imgIconStyle.outerContainer}>
                  <img src={hundredFreeIcon} style={imgIconStyle.icon} />
                  <div style={bankFeaturesStyle.outerContainer}>
                    <div className="sign-up-in-5-min" style={bankFeaturesStyle.title}>
                      100% Free
                    </div>
                    <div className="bank-features-container" style={bankFeaturesStyle.container}>
                      <div style={bankFeaturesStyle.feature1}><span style={bankFeaturesStyle.noColor}>No</span> account fees</div>
                      <div style={bankFeaturesStyle.feature2}><span style={bankFeaturesStyle.noColor}>No</span> ATM fees</div>
                    </div>
                    <div className="bank-features-container" style={bankFeaturesStyle.container}>
                      <div style={bankFeaturesStyle.feature1}><span style={bankFeaturesStyle.noColor}>No</span> account minimums</div>
                      <div style={bankFeaturesStyle.feature2}><span style={bankFeaturesStyle.noColor}>No</span> incoming wire fees</div>
                    </div>
                  </div>
                </div>
                <div className="title-and-paragraph" style={imgIconStyle.outerContainer}>
                  <img src={atmNetworkIcon} style={imgIconStyle.icon} />
                  <div style={bankFeaturesStyle.outerContainer}>
                    <div className="sign-up-in-5-min" style={bankFeaturesStyle.title2}>
                      ATM Network
                    </div>
                    <div className="bank-features-container" style={bankFeaturesStyle.container}>
                      <div style={bankFeaturesStyle.feature1}><span style={bankFeaturesStyle.noColor2}>Get</span> nation wide ATM network</div>
                    </div>
                    <div className="bank-features-container" style={bankFeaturesStyle.container}>
                      <div style={bankFeaturesStyle.feature1}><span style={bankFeaturesStyle.noColor2}>Get</span> access to 32, 000 ATMs across the US</div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} className={styles.headerIphone}>
                {!isLoans && !isManualSignup && (
                  <div className={styles.iPhoneContainer}>
                    <img src={iPhone2} alt="iPhone 6" />
                  </div>
                )}
              </Grid>
            </Grid>
          </div>
        )}

        {!isBlogs && (
          <div className={styles.headerTextContainer}>
            <Grid container>
              <Grid item xs={12} sm={8} className={styles.headerWithText} style={isLoans ? { paddingTop: "5%" } : {}}>
                <h1 className={styles.title}>{ReactHtmlParser(title3)} </h1>
                
                <div className="title-and-paragraph" style={securityFeaturesStyle.outerContainer}>
                  <img src={iconSecure} style={securityFeaturesStyle.icon} />
                  <div style={bankFeaturesStyle.outerContainer}>
                    <div className="security-feature-container" >
                      <div className="security-feature-title" style={securityFeaturesStyle.title}>
                        100% Secure
                      </div>
                      <p style={securityFeaturesStyle.content}>
                        All accounts are FDIC insured (US Government) up to $250,000.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="title-and-paragraph" style={securityFeaturesStyle.outerContainer}>
                  <img src={visaCardIcon} style={securityFeaturesStyle.icon} />
                  <div style={bankFeaturesStyle.outerContainer}>
                    <div className="security-feature-container" >
                      <div className="security-feature-title" style={securityFeaturesStyle.title}>
                        Your VISA® Debit Card
                      </div>
                      <p style={securityFeaturesStyle.content}>
                        Your card comes with an EMV chip and is enabled with VISA® Zero Liability. 
                      </p>
                    </div>
                  </div>
                </div>

                <div className="title-and-paragraph" style={securityFeaturesStyle.outerContainer}>
                  <img src={lockCardIcon} style={securityFeaturesStyle.icon} />
                  <div style={bankFeaturesStyle.outerContainer}>
                    <div className="security-feature-container" >
                      <div className="security-feature-title" style={securityFeaturesStyle.title}>
                        Lock Your Card
                      </div>
                      <p style={securityFeaturesStyle.content}>
                        Lost or misplaced your card? Lock it with a single tap. Found it? Unlock it with another tap.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="title-and-paragraph" style={securityFeaturesStyle.outerContainer}>
                  <img src={instantNotificationIcon} style={securityFeaturesStyle.icon} />
                  <div style={bankFeaturesStyle.outerContainer}>
                    <div className="security-feature-container" >
                      <div className="security-feature-title" style={securityFeaturesStyle.title}>
                        Instant Notifications
                      </div>
                      <p style={securityFeaturesStyle.content}>
                        Get a notification every time you make a purchase. You’re in control of your money.
                      </p>
                    </div>
                  </div>
                </div>
                
              </Grid>
              <Grid item xs={12} sm={4} className={styles.headerIphone}>
                {!isLoans && !isManualSignup && (
                  <div className={styles.iPhoneContainer}>
                    <img src={iPhone3} alt="iPhone 6" />
                  </div>
                )}
              </Grid>
            </Grid>
          </div>
        )}

        {!isBlogs && (
          <div className={styles.headerTextContainer}>
            <Grid container>
              <Grid item xs={12} sm={8} className={styles.headerWithText} style={isLoans ? { paddingTop: "5%" } : {}}>
                <h1 className={styles.title}>{ReactHtmlParser(title4)} </h1>

                <div className="title-and-paragraph" style={securityFeaturesStyle.outerContainer}>
                  <img src={iconSecure} style={rewardsFeaturesStyle.icon} />
                  <div style={bankFeaturesStyle.outerContainer}>
                    <div className="security-feature-container" >
                      <p style={rewardsFeaturesStyle.content}>
                        5% cashback on your first $1,000 of purchases
                      </p>
                    </div>
                  </div>
                </div>

                <div className="title-and-paragraph" style={securityFeaturesStyle.outerContainer}>
                  <img src={iconSecure} style={rewardsFeaturesStyle.icon} />
                  <div style={bankFeaturesStyle.outerContainer}>
                    <div className="security-feature-container" >
                      <p style={rewardsFeaturesStyle.content}>
                        CampusCashback® at your favorite stores and restaurants
                      </p>
                    </div>
                  </div>
                </div>

                <div className="title-and-paragraph" style={securityFeaturesStyle.outerContainer}>
                  <img src={iconSecure} style={rewardsFeaturesStyle.icon} />
                  <div style={bankFeaturesStyle.outerContainer}>
                    <div className="security-feature-container" >
                      <p style={rewardsFeaturesStyle.content}>
                        Discounted T-Mobile Cellular Bill
                      </p>
                    </div>
                  </div>
                </div>

                <div className="title-and-paragraph" style={securityFeaturesStyle.outerContainer}>
                  <img src={iconSecure} style={rewardsFeaturesStyle.icon} />
                  <div style={bankFeaturesStyle.outerContainer}>
                    <div className="security-feature-container" >
                      <p style={rewardsFeaturesStyle.content}>
                        Free Amazon Prime Student
                      </p>
                    </div>
                  </div>
                </div>

                <div className="title-and-paragraph" style={securityFeaturesStyle.outerContainer}>
                  <img src={iconSecure} style={rewardsFeaturesStyle.icon} />
                  <div style={bankFeaturesStyle.outerContainer}>
                    <div className="security-feature-container" >
                      <p style={rewardsFeaturesStyle.content}>
                        Discounted Housing
                      </p>
                    </div>
                  </div>
                </div>

              </Grid>
              <Grid item xs={12} sm={4} className={styles.headerIphone}>
                {!isLoans && !isManualSignup && (
                  <div className={styles.iPhoneContainer}>
                    <img src={iPhone3} alt="iPhone 6" />
                  </div>
                )}
              </Grid>
            </Grid>
          </div>
        )}

        {!isBlogs && (
          <div className={styles.headerTextContainer}>
            <Grid container>
              <Grid item xs={12} sm={8} className={styles.headerWithText} style={isLoans ? { paddingTop: "5%" } : {}}>
                <h1 className={styles.title}>{ReactHtmlParser(title6)} </h1>
                
                <div className="title-and-paragraph" style={globalFeaturesStyle.outerContainer}>
                  <img src={redRibbon} style={globalFeaturesStyle.icon} />
                  <div style={bankFeaturesStyle.outerContainer}>
                    <div className="security-feature-container" >
                      <div className="security-feature-title" style={securityFeaturesStyle.title}>
                        Receive Money for Free
                      </div>
                      <p style={securityFeaturesStyle.content}>
                        Zero incoming wire fees. Unlimited incoming international wires. Receive 100% of what your family sends you. Most other banks charge $25.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="title-and-paragraph" style={globalFeaturesStyle.outerContainer}>
                  <img src={purpleRibbon} style={globalFeaturesStyle.icon} />
                  <div style={bankFeaturesStyle.outerContainer}>
                    <div className="security-feature-container" >
                      <div className="security-feature-title" style={securityFeaturesStyle.title}>
                        Receive Money Instantly
                      </div>
                      <p style={securityFeaturesStyle.content}>
                        Need money ASAP? Receive wire transfers in minutes rather than in days.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="title-and-paragraph" style={globalFeaturesStyle.outerContainer}>
                  <img src={yellowRibbon} style={globalFeaturesStyle.icon} />
                  <div style={bankFeaturesStyle.outerContainer}>
                    <div className="security-feature-container" >
                      <div className="security-feature-title" style={securityFeaturesStyle.title}>
                        No International Fees
                      </div>
                      <p style={securityFeaturesStyle.content}>
                        No fees when you travel and spend with your North Loop card.
                      </p>
                    </div>
                  </div>
                </div>
                
              </Grid>
              <Grid item xs={12} sm={4} className={styles.headerIphone}>
                {!isLoans && !isManualSignup && (
                  <div className={styles.iPhoneContainer}>
                    <img src={iPhone3} alt="iPhone 6" />
                  </div>
                )}
              </Grid>
            </Grid>
          </div>
        )}

        {!isBlogs && (
          <div className={styles.headerTextContainer}>
            <Grid container>
              <Grid item xs={12} sm={8} className={styles.headerWithText} style={isLoans ? { paddingTop: "5%" } : {}}>
                <h1 className={styles.title}>{ReactHtmlParser(title7)} </h1>
                
                <div className="testimonial-outer-container" style={testimonialsStyle.outerContainer}>
                  <div className="testimonial-container" style={testimonialsStyle.container}>
                    <img src={iconSecure} style={testimonialsStyle.img} />
                    <div className="testimonial-person-container" style={testimonialsStyle.personContainer}>
                      <h3 style={testimonialsStyle.name}>Simon Wood</h3>
                      <p style={testimonialsStyle.university}>Northwestern University</p>
                    </div>
                  </div>

                  <div className="testimonial-container" style={testimonialsStyle.inactiveContainer}>
                    <img src={iconSecure} style={testimonialsStyle.img} />
                    <div className="testimonial-person-container" style={testimonialsStyle.personContainer}>
                      <h3 style={testimonialsStyle.name}>Sebastian Paul</h3>
                      <p style={testimonialsStyle.university}>Stanford University</p>
                    </div>
                  </div>

                  <div className="testimonial-container" style={testimonialsStyle.inactiveContainer}>
                    <img src={iconSecure} style={testimonialsStyle.img} />
                    <div className="testimonial-person-container" style={testimonialsStyle.personContainer}>
                      <div>
                        <h3 style={testimonialsStyle.name}>Jai Menon</h3>
                        <p style={testimonialsStyle.university}>University of Michigan</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </Grid>
            </Grid>
          </div>
        )}

      </Container>
    </header>

    );
}

export default Header;

// <li className={!isHighYieldSavings ? styles.active : ''}>
//                   {isHighYieldSavings ? 'High Yield Savings' : <Link to="/high-yield-savings">High Yield Savings</Link>}
//                 </li>

// <li className={!isHighYieldSavings ? styles.active : ''}>
//             {isHighYieldSavings ? 'High Yield Savings' : <Link to="/high-yield-savings">High Yield Savings</Link>}
//           </li>

          // <ul>
          //   <li>
          //   <Button variant="outlined" color="secondary" className={styles.button}>
          //     Coming Soon
          //         </Button>
          // </li>
          // </ul>
// <ul>
//                 <li>
//                   <Button variant="outlined" color="secondary" className={styles.button}>
//                   Coming Soon
//                   </Button>
//                 </li>
//               </ul>

// <TextField
//                     id="standard-textarea"
//                     type="email"
//                     placeholder="Enter your email"
//                     className={styles.textField}
//                     margin="normal"/>