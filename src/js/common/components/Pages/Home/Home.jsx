import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import StudentAccount from './StudentAccountComponent/StudentAccount'
import LeadingSecurity from './LeadingSecurityComponent/LeadingSecurity'
import GlobalAccount from './GlobalAccountComponent/GlobalAccount'
import StartBankin from './StartBankingComponent/StartBankin'
import Testimonial from '../../TestimonialComponent/Testimonial'
import Access from './AccessComponent/Access'
import Slider from '../../SliderComponent/Slider'
import Footer from '../../Footer/Footer'
import BankAccount from './BankAccountComponent/BankAccount'
import iPhone from '../../../../../assets/images/iphone-6.png'
import iphonePortrait from '../../../../../assets/images/iphone_portrait.png'
import scanIphone from '../../../../../assets/images/scan_ip_iphone.png'
import signUpIphone from '../../../../../assets/images/signUp-iphone.png'
import styles from './HomeCSS/Home.css'
import DownloadApp from '../../DownloadAppComponent/DownloadApp'

const HomeSection = ({
  children, image, title, subtitle,
}) => (
  <Container className={styles.main}>
    <Grid container>
      <Grid item xs={12} sm={8}>
        <div className={styles.titleBlock}>
          <p className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        {children}
      </Grid>
      <Grid item xs={12} sm={4} className={styles.headerIphone}>
        <img src={image} alt="iPhone 6" />
      </Grid>
    </Grid>
  </Container>
)

class Home extends Component {
  render() {
    const isMobile = window.screen.width < 768
    return (
      <Slider>
        <div id="1">
          <HomeSection
            image={iPhone}
            title={'The Ultimate International <br /> Student Account'}
            subtitle="No Incoming Wire Fees"
          >
            <StudentAccount />
          </HomeSection>
        </div>
        <div id="2">
          <HomeSection image={iphonePortrait} title="The simplest bank account <br/> ever!">
            <BankAccount />
          </HomeSection>
        </div>
        <div id="3">
          <HomeSection image={scanIphone} title="Industry leading security">
            <LeadingSecurity />
          </HomeSection>
        </div>
        <div id="4">
          <HomeSection image={scanIphone} title="Get access to the best rewards possible">
            <Access />
          </HomeSection>
        </div>
        <div id="5">
          <HomeSection image={signUpIphone} title="Start Banking in 3 Steps">
            <StartBankin />
          </HomeSection>
        </div>
        <div id="6">
          <HomeSection image={scanIphone} title="A global account for global citizens">
            <GlobalAccount />
          </HomeSection>
        </div>
        <div id="7">
          <Container className={styles.main}>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <div className={styles.titleBlock}>
                  <p className={styles.title}>Join thousands of students</p>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Testimonial />
              </Grid>
            </Grid>
          </Container>
        </div>
        <div id="8">
          <Footer />
          <DownloadApp />
        </div>
      </Slider>
    )
  }
}

export default Home
