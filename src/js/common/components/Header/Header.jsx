import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Logo from '../../../../assets/images/logo.png';
import iPhone from '../../../../assets/images/iphone-6.png';
import styles from './CSS/Header.css';

class Header extends PureComponent {
  render() {
    const { location } = this.props;
    const { pathname } = location;
    const isHome = pathname === '/';
    const isPersonal = pathname === '/personal';
    const isBusiness = pathname === '/business';
    const isMembers = pathname === '/members';

    return (
      <header className={styles.globalHeader}>
      <Container className={styles.marginTop}>
      <ul className={styles.brandLogo}>
          <img src={Logo} alt="Nort Loop" />
      </ul>
      <nav>
        <ul>
          <li className={!isHome ? styles.active : ''}>
            {isHome ? 'Home' : <Link to="/">Home</Link>}
          </li>
          <li className={!isPersonal ? styles.active : ''}>
            {isPersonal ? 'Personal' : <Link to="/personal">Personal</Link>}
          </li>
          <li className={!isBusiness ? styles.active : ''}>
            {isBusiness ? 'Business' : <Link to="/business">Business</Link>}
          </li>
          <li className={!isMembers ? styles.active : ''}>
            {isMembers ? 'Members' : <Link to="/members">Members</Link>}
          </li>
        </ul>
        <ul>
            <li>
                <Button variant="outlined" color="secondary" className={styles.button}>
                    Login / Signup
                </Button>
            </li>
        </ul>
        </nav>
        <div className={styles.headerTextContainer}>
          <Grid container>
          <Grid item xs={12} sm={8} className={styles.headerWithText}>
            <h1 className={styles.title}>Maximise Your Profit<br />With Our Bank <span /></h1>
            <p className={styles.subHeader}>A modern banking solution, designed exclusively for your goals and lifestyle</p>
            <div className={styles.buttonInputWrapper}>
            <form className={styles.bannerForm} noValidate autoComplete="off">
              <TextField
                id="standard-textarea"
                type="email"
                placeholder="Enter your email"
                className={styles.textField}
                margin="normal"
              />
              <Button variant="contained" color="primary" className={styles.button}>
                Sign up
              </Button>
              </form>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.headerIphone}>
            <div className={styles.iPhoneContainer}>
            <img src={iPhone} alt="iPhone 6" />
            </div>
          </Grid>
          </Grid>
        </div>  
        
        </Container>
      </header>
    );
  }
}

export default Header;
