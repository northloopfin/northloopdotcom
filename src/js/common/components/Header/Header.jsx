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

const divStyle = {
  background: '#fff6fc',
  paddingTop: '5px!important',
  padding: '0',
};

function sendToGSF() {
  // const userEmail = document.getElementById('standard-textarea').value;
  growsurf.open();
  // if (growsurf && userEmail.length > 0 && userEmail.includes('@') && userEmail.includes('.')) {
  //       growsurf.addParticipant(userEmail);
  // }
}

setTimeout(function(){
  if (window.innerWidth < 768 && growsurf) {
    const growsurfWidget = document.getElementById('grsf-widget');
    growsurfWidget.style.top = '20%';
    growsurfWidget.style.width = '80px';
    growsurfWidget.style.fontSize = '11px';
  }
}, 2000);


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
  const isMobile = window.innerWidth < 768;

  // Content for each pages
  let title = 'Banking for international students in the US';
  let subtitle = '<ul><li>No wire fees. No social security number needed.</li><ul>';
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
  const divStyle = {
    background: '#fff6fc',
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
      { isMobile
        && (
        <div>
          <AppBar position="fixed" className={styles.newappBar} style={ divStyle }>
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                <ul className={styles.brandLogo}>
                  <img src={Logo} alt="Nort Loop" />
                </ul>
              </Typography>
              <IconButton onClick={toggleDrawer('left', true)} edge="end" className={styles.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>
        </div>
        )
      }
      <Container className={styles.marginTop}>
        { !isMobile && (
          <div>
            <ul className={styles.brandLogo}>
              <img src={Logo} alt="Nort Loop" />
            </ul>
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
        )
}


        {!isBlogs && (<div className={styles.headerTextContainer}>
                          <Grid container>
                            <Grid item xs={12} sm={8} className={styles.headerWithText} style={ isLoans ? { 'paddingTop': '5%' } : {}}>
                              <h1 className={styles.title}>
                                { ReactHtmlParser(title) }
                                {' '}
                                <span />
                              </h1>
                              <div className={styles.subHeader}>{  isLoans ? loanContent : ReactHtmlParser(subtitle) }</div>
                              {
                                !isMobile && !isLoans && (
                                  <div className={styles.buttonInputWrapper}>
                                    <form className={styles.bannerForm} noValidate autoComplete="off">
                                      <Button variant="contained" color="primary" onClick={() => {sendToGSF();}} className={styles.button}>
                                        { ReactHtmlParser(button) }
                                      </Button>
                                    </form>
                                  </div> 
                                )
                              }
                            </Grid>
                            <Grid item xs={12} sm={4} className={styles.headerIphone}>
                              {!isLoans ? (
                              <div className={styles.iPhoneContainer}>
                                <img src={iPhone} alt="iPhone 6" />
                              </div>
                              ) :
                              (!isLoans && <div className={styles.loanHeaderAccessButton}>
                                                              <div>
                                                                <Button variant="contained" color="primary" onClick={() => {sendToGSF();}} className={styles.button}>
                                                                      { ReactHtmlParser(button) }
                                                                </Button>
                                                              </div>
                                                            </div> )
                            }
                            </Grid>
                          </Grid>
                        </div>)}
      { isBlogs && (
        <div style={{marginTop: '5%'}}>
          <h1>North Loop Blogs</h1>
          <p>
            Useful insights to ease your move to the US
          </p>
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