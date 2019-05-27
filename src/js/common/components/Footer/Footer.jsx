import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Logo from '../../../../assets/images/logo.png';
import styles from './Footer.css';

class Footer extends PureComponent {
  render() {
    const { location } = this.props;
    const { pathname } = location;
    const isPrivacy = pathname === '/privacy';
    const isTerms = pathname === '/terms';
    const isAccessibility = pathname === '/accessibility';
    const isSitemap = pathname === '/sitemap';

    return (
      <footer className={styles.globalFooter}>
      <Container className={styles.footerSection}>
      <ul className={styles.brandLogo}>
          <img src={Logo} alt="Nort Loop" />
      </ul>
      <nav>
        <ul>
          <li>&#169; 2019</li>
          <li className={!isPrivacy ? styles.active : ''}>
            {isPrivacy ? 'Privacy' : <Link to="/privacy">Privacy</Link>}
          </li>
          <li className={!isTerms ? styles.active : ''}>
            {isTerms ? 'Terms' : <Link to="/terms">Terms</Link>}
          </li>
          <li className={!isAccessibility ? styles.active : ''}>
            {isAccessibility ? 'Accessibility' : <Link to="/accessibility">Accessibility</Link>}
          </li>
          <li className={!isSitemap ? styles.active : ''}>
            {isSitemap ? 'Sitemap' : <Link to="/sitemap">Sitemap</Link>}
          </li>
        </ul>
        </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
