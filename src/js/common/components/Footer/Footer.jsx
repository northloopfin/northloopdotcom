import React, { PureComponent } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Logo from '../../../../assets/images/logo.png'
import FDICLogo from '../../../../assets/images/fdicImg.png'
import mobileIcon from '../../../../assets/images/icons/icon-mobile.svg'
import emailIcon from '../../../../assets/images/icons/icon-email.svg'
import weChatIcon from '../../../../assets/images/icons/icon-wechat.svg'
import whatsappIcon from '../../../../assets/images/icons/icon-whatsapp.svg'
import InstagrammIcon from '../../icons/InstagrammIcon'
import TwitterIcon from '../../icons/TwitterIcon'
import FacebookIcon from '../../icons/FacebookIcon'
import YouTubeIcon from '../../icons/YouTubeIcon'
import iPhone2 from '../../../../assets/images/signUp-iphone.png'
import RespDialog from '../RespDialog/RespDialog.jsx'
import styles from './Footer.css'
import homeStyles from '../Pages/Home/HomeCSS/Home.css'

const Footer = class Footer extends PureComponent {
  socialLink = (link) => window.open(link, '_blank')

  render() {
    return (
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <p className={homeStyles.title}>Contact Us</p>
            <div className={styles.contactSection}>
              <div className={styles.contactBlock}>
                <img src={mobileIcon} />
                <span>+1(831)740-8126</span>
              </div>
              <div className={styles.contactBlock}>
                <img src={emailIcon} />
                <span>help@nolobank.com</span>
              </div>
              <div className={styles.contactBlock}>
                <img src={weChatIcon} />
                <span>WeChat</span>
              </div>
              <div className={styles.contactBlock}>
                <img src={whatsappIcon} />
                <span>+1(831)740-8126</span>
              </div>
              <div className={styles.socialWrapper}>
                <div
                  className={styles.social}
                  onClick={() => {
                    this.socialLink('https://www.instagram.com/northloopbank/')
                  }}
                >
                  <InstagrammIcon />
                </div>
                <div
                  className={styles.social}
                  onClick={() => {
                    this.socialLink('https://www.facebook.com/northloopbank/')
                  }}
                >
                  <FacebookIcon />
                </div>
                <div
                  className={styles.social}
                  onClick={() => {
                    this.socialLink('https://twitter.com/NorthLoop11')
                  }}
                >
                  <TwitterIcon />
                </div>
                <div
                  className={styles.social}
                  onClick={() => {
                    this.socialLink('https://www.youtube.com/channel/UCiZGeovSnqQktykrNpLui4A')
                  }}
                >
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container className={styles.navSection}>
          <Grid item xs={12} sm={8}>
            <Grid container>
              <Grid item xs={12} sm={4}>
                <ul className={styles.footerNav}>
                  <li>Parents</li>
                  <li>Currency Protect</li>
                  <li> Partners </li>
                  <li>Campus Ambassadors</li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={4}>
                <ul className={styles.footerNav}>
                  <RespDialog title="North Loop Consumer Privacy Notice" linkName="pp" fullScreen footerLinkTitle="Privacy"/>
                  <li>Legal</li>
                  <RespDialog title="Terms of Service" linkName="tos" fullScreen footerLinkTitle="Terms of Service"/>
                  <li>Help</li>
                  <li>Pay For College</li>
                  <li>Instant Wire Transfer</li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={4}>
                <ul className={styles.footerNav}>
                  <li>Careers</li>
                  <li>Blogs</li>
                  <li>Send money to USA</li>
                  <li>Savings Account</li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={12}>
                <p className={styles.copyrightext}>
                  © 2019 North Loop Technologies, Inc. The North Loop checking accounts are opened
                  and maintained with, and the North Loop debit card is issued by, Evolve Bank &
                  Trust, member FDIC. Cashback on North Loop debit card purchases are calculated
                  each calendar month.
                </p>
              </Grid>
              <Grid item xs={12} sm={3}>
                  <img src={Logo} alt="North Loop" />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <img src={FDICLogo} />
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <img src={iPhone2} alt="iPhone 6" />
            </div>
          </Grid>
        </Grid>
      </Container>
    )
  }
}
                    
export default Footer
