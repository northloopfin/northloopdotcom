import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

import styles from './CSS/Header.css'
import Logo from '../../../../assets/images/logo.png'
import buttonStyles from '../Pages/Home/HomeCSS/Home.css'

function onGsfSignup() {
  console.log('AG')
  if (document.getElementsByClassName('grsf-inline-error').length < 1 && ga) {
    ga('send', 'event', 'signup', 'email-registered', 'email-registered-label', 1)
  }
}

setTimeout(() => {
  const grsrfBtn = document.getElementById('grsf-signup-button')
  if (grsrfBtn) {
    grsrfBtn.addEventListener('click', () => {
      onGsfSignup()
    })
  }
}, 2000)

function Header(props) {
  const [state, setState] = React.useState({
    left: false,
  })
  const { location } = props
  const { pathname } = location
  const isHome = pathname === '/'
  const isJoinUs = pathname === 'https://www.linkedin.com/company/35694537/admin/'
  const isHighYieldSavings = pathname === '/high-yield-savings'
  const isLoans = pathname === '/loans'
  const isBlogs = pathname === '/blogs'
  const isManualSignup = pathname === '/manual-signup'
  const isMobile = window.innerWidth < 768

  const divStyle = {
    background: '#fff6fc',
    paddingTop: '5px!important',
    padding: '0',
  }
  const toggleDrawer = (side, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = (side) => (
    <div
      className={styles.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div className={styles.globalHeader}>
        <nav>
          <ul>
            <li className={isHome ? styles.active : ''}>
              {isHome ? 'Students' : <Link to="/">Students</Link>}
            </li>
            <li className={isJoinUs ? styles.active : ''}>
              {isJoinUs ? (
                'Careers'
              ) : (
                <a href="https://www.linkedin.com/company/35694537/admin/" target="_blank">
                  Careers
                </a>
              )}
            </li>
            <li className={isLoans ? styles.active : ''}>
              {isLoans ? 'Loans' : <Link to="/loans">Loans</Link>}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )

  return (
    <header className={styles.globalHeader}>
      {isMobile && (
        <div>
          <AppBar position="fixed" className={styles.newappBar} style={divStyle}>
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                <ul className={styles.brandLogo}>
                  <Link to="/">
                    <img src={Logo} alt="Nort Loop" />
                  </Link>
                </ul>
              </Typography>
              <IconButton
                onClick={toggleDrawer('left', true)}
                edge="end"
                className={styles.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>
        </div>
      )}
      <Container className={styles.marginTop}>
        {!isMobile && (
          <div>
            <ul className={styles.brandLogo}>
              <Link to="/">
                <img src={Logo} alt="Nort Loop" />
              </Link>
            </ul>
            <nav>
              <ul>
                <li className={isHome ? styles.active : ''}>
                  {isHome ? 'Students' : <Link to="/">Students</Link>}
                </li>
                <li className={isJoinUs ? styles.active : ''}>
                  {isJoinUs ? (
                    'Careers'
                  ) : (
                    <a href="https://www.linkedin.com/company/35694537/admin/" target="_blank">
                      Careers
                    </a>
                  )}
                </li>
                <li className={isLoans ? styles.active : ''}>
                  {isLoans ? 'Loans' : <Link to="/loans">Loans</Link>}
                </li>
                <li>
                  <Button variant="contained" color="primary" className={buttonStyles.button}>
                    Get The App
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {isBlogs && (
          <div style={{ marginTop: '5%' }}>
            <h1>North Loop Blogs</h1>
            <p>Useful insights to ease your move to the US</p>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header
