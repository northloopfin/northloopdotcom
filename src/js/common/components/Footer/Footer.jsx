import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import FDICLogo from '../../../../assets/images/bottom.png';
import Logo from '../../../../assets/images/logo.png';
import mobileIcon from '../../../../assets/images/icon-mobile.svg';
import emailIcon from '../../../../assets/images/icon-email.svg';
import weChatIcon from '../../../../assets/images/icon-wechat.svg';
import whatsappIcon from '../../../../assets/images/icon-whatsapp.svg';
import igIcon from '../../../../assets/images/icon-instagram.svg';
import twitterIcon from '../../../../assets/images/icon-twitter.svg';
import facebookIcon from '../../../../assets/images/icon-facebook.svg';
import youtubeIcon from '../../../../assets/images/icon-youtube.svg';
import iPhone2 from '../../../../assets/images/iphone-6-two.png';
import RespDialog from '../RespDialog/RespDialog.jsx';
import styles from './Footer.css';

const liTextCenter = { 'textAlign': 'center' };

const contactUsHeader = {
  color: '#000000',
  fontFamily: 'Muli ExtraBold',
  fontSize: '50px',
  lineHeight: '60px'
}

const socialMediaStyles = {
  container: {
    height: '70px',
    width: '1151px',
    marginTop: '8%',
    display: 'flex',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 10px 25px 0 rgba(172,185,196,0.28)'
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: '1',
    justifyContent: 'center'
  },
  onlyIconContainer: {
    display: 'flex',
    flex: '0.5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconDescription: {
      color: '#4A494B',
      fontFamily: 'Muli',
      fontSize: '14px',
      lineHeight: '24px',
      marginLeft: '2%'
  },
  callIcon: {
    height: '20px',
    width: '20px'
  },
  footerLinkContainer: {
    marginTop: '10%'
  },
  footerLink: {
    color: '#4A494B',
    fontSize: '13px',
    textAlign: 'center'
  }
}

const copyRightContainer = {
  width: '55%',
  bottom: '5%',
  position: 'absolute'
}

const copyRightContent = {
  color: '#A4A2A7',
  fontFamily: 'Muli',
  fontSize: '12px',
  lineHeight: '18px'
}

const footerLogoContainer = {
  width: '50%',
  display: 'flex',
  marginTop: '2%',
  justifyContent: 'space-between'
}

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
                <Grid item xs={12} sm={8} className={styles.headerWithText}>
                  <h1 style={contactUsHeader}>Contact Us</h1>

                  <div style={socialMediaStyles.container}>
                    
                    <div style={socialMediaStyles.iconContainer}>
                      <img src={mobileIcon} style={socialMediaStyles.callIcon} />
                      <span style={socialMediaStyles.iconDescription}>+1(831)740-8126</span>
                    </div>
                    <div style={socialMediaStyles.iconContainer}>
                      <img src={emailIcon} style={socialMediaStyles.callIcon} />
                      <span style={socialMediaStyles.iconDescription}>help@nolobank.com</span>
                    </div>
                    <div style={socialMediaStyles.iconContainer}>
                      <img src={weChatIcon} style={socialMediaStyles.callIcon} />
                      <span style={socialMediaStyles.iconDescription}>+1(831)740-8126</span>
                    </div>
                    <div style={socialMediaStyles.iconContainer}>
                      <img src={whatsappIcon} style={socialMediaStyles.callIcon} />
                      <span style={socialMediaStyles.iconDescription}>+1(831)740-8126</span>
                    </div>
                    <div style={socialMediaStyles.onlyIconContainer} onClick={() => { window.open('https://www.instagram.com/northloopbank/', '_blank'); }}>
                      <img src={igIcon} style={socialMediaStyles.callIcon} />
                    </div>
                    <div style={socialMediaStyles.onlyIconContainer} onClick={() => { window.open('https://www.facebook.com/northloopbank/', '_blank'); }}>
                      <img src={facebookIcon} style={socialMediaStyles.callIcon} />
                    </div>
                    <div style={socialMediaStyles.onlyIconContainer} onClick={() => { window.open('https://twitter.com/NorthLoop11', '_blank'); }}>
                      <img src={twitterIcon} style={socialMediaStyles.callIcon} />
                    </div>
                    <div style={socialMediaStyles.onlyIconContainer} onClick={() => { window.open('https://www.youtube.com/channel/UCiZGeovSnqQktykrNpLui4A', '_blank'); }}>
                      <img src={youtubeIcon} style={socialMediaStyles.callIcon} />
                    </div>

                  </div>
                </Grid>
            </Grid>

            <div style={socialMediaStyles.footerLinkContainer}>
              <Grid container>
              <Grid item xs={12} sm={4}>
                  <ul>
                    <li style={socialMediaStyles.footerLink}><a>Company</a></li>
                    <li style={socialMediaStyles.footerLink}><a href="https://www.facebook.com/northloopbank/" target="_blank">Careers</a></li>
                    <li style={socialMediaStyles.footerLink}><a href="/#/blogs" target="_blank">Blog</a></li>
                    <li style={socialMediaStyles.footerLink}><a href="https://twitter.com/NorthLoop11" target="_blank">Partners</a></li>
                    <li style={socialMediaStyles.footerLink}><a href="https://twitter.com/NorthLoop11" target="_blank">Press</a></li>
                  </ul>  
                </Grid>
                <Grid item xs={12} sm={4}>
                  <ul>
                    <li style={socialMediaStyles.footerLink}><a href="">Legal</a></li>
                    <RespDialog isFooterItem title="North Loop Consumer Privacy Notice" linkName="pp" fullScreen footerLinkTitle="Privacy"/>
                    <RespDialog isFooterItem title="Terms of Service" linkName="tos" fullScreen footerLinkTitle="Terms of Service"/>
                    <li style={socialMediaStyles.footerLink}><a href="">Help</a></li>
                  </ul> 
                </Grid>
                <Grid item xs={12} sm={4} className={styles.headerIphone}>
                  <div className={styles.iPhoneContainer}>
                    <img src={iPhone2} alt="iPhone 6" />
                  </div>
                </Grid>
                <div style={copyRightContainer}>
                  <p style={copyRightContent} className={styles.copy}>© 2019 North Loop Technologies, Inc. The North Loop checking accounts are opened and maintained with, and the North Loop debit card is issued by, Evolve Bank & Trust, member FDIC. Cashback on North Loop debit card purchases are calculated each calendar month.</p>      
                  <div style={footerLogoContainer}>
                    <img src={Logo}/>
                    <img src={FDICLogo}/>
                  </div>
                </div>
              </Grid>
            </div>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;

// <Grid item xs={12} sm={4}>
//           <ul>
//             <li>Privacy</li>
//             <li>Legal</li>
//             <li>Terms of Service</li>
//           </ul>
//         </Grid>

// <li>Help</li>
// <li>Careers</li>

// <Grid item xs={12} sm={4}>
        
//           <ul>
//             <li><a href="https://www.instagram.com/northloopbank/" target="_blank">Instagram</a></li>
//             <li><a href="https://www.facebook.com/northloopbank/" target="_blank">Facebook</a></li>
//             <li><a href="https://twitter.com/NorthLoop11" target="_blank">Twitter</a></li>
//           </ul>
//         </Grid>


// <Grid item xs={12} sm={4}>
//           <ul>
//             <li className={!isBlog ? styles.active : ''}>
//               {isBlog ? 'Blog' : <Link to="/blog">Blog</Link>}
//             </li>
//           </ul>
//         </Grid>

// <img src={Logo} alt="Logo" />

// <Grid item xs={12} sm={4}>
//               <ul>
                // <li className={!isBlog ? styles.active : ''}>
                //   {isBlog ? 'Blog' : <Link to="/blog">Blog</Link>}
                // </li>
//               </ul>  
//             </Grid>

// <Grid item xs={12} sm={3}>
//               <ul>
//                 <li style={liTextCenter} className={!isBlog ? styles.active : ''}>
//                   {isBlog ? 'Blog' : <Link to="/blog">Blog</Link>}
//                 </li>
//               </ul>  
//             </Grid>
