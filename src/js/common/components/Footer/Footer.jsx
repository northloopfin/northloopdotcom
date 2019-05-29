import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Logo from '../../../../assets/images/bottom.png';
import styles from './Footer.css';

class Footer extends PureComponent {
  render() {
    const { location } = this.props;
    const { pathname } = location;
    const isBlog = pathname === '/blog';

    return (
      <footer className={styles.globalFooter}>
      <Container className={styles.footerSection}>
      <nav>
      <Grid container>
        <Grid item xs={12} sm={4}>
        
          <ul>
            <li><a href="https://www.instagram.com/northloopbank/" target="_blank">Instagram</a></li>
            <li><a href="https://www.facebook.com/northloopbank/" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com/NorthLoop11" target="_blank">Twitter</a></li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ul>
            <li>Privacy</li>
            <li>Legal</li>
            <li>Terms of Service</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ul>
            <li>Help</li>
            <li>Careers</li>
            <li className={!isBlog ? styles.active : ''}>
              {isBlog ? 'Blog' : <Link to="/blog">Blog</Link>}
            </li>
          </ul>
        </Grid>
      </Grid>
        <img src={Logo} alt="Logo" />
        <p className={styles.copy}>© 2019 North Loop Technologies, Inc. The North Loop checking accounts are opened and maintained with, and the North Loop debit card is issued by, Evolve Bank & Trust, member FDIC. Earn up to 5% cashback. Earn 5% cashback on the first $1,000 of North Loop debit card purchases each calendar month. 4.50% per annum = 2.15% APY + 2.85% per annum North Loop top up. Savings account has $500 minimum monthly balance or $10 charge. 2.15% Annual Percentage Yield (APY) may change at any time. APY as of Feb 6th, 2019. Savings accounts and CDs provided by our partner.</p>      
      </nav>
      </Container>
      </footer>
    );
  }
}

export default Footer;
