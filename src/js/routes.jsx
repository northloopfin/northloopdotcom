import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import LazyLoading from 'common/components/LazyLoading'

import styles from '../style/index.css'

// This is show case how you can lazy loading component
const HomeRouteHandler = LazyLoading(() => import('views/home'))
const LoanRouteHandler = LazyLoading(() => import('views/loan'))
const BlogRouteHandler = LazyLoading(() => import('views/blog'))
const Header = LazyLoading(() => import('common/components/Header/Header'))
const Footer = LazyLoading(() => import('common/components/Footer/Footer'))

// This show case how you can access routing info in your component
const HeaderWithRouter = withRouter((props) => <Header {...props} />)
const FooterWithRouter = withRouter((props) => <Footer {...props} />)
module.exports = (
  <div>
    <HeaderWithRouter />
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={HomeRouteHandler} />
        <Route path="/loans" component={LoanRouteHandler} />
        <Route path="/blogs" component={BlogRouteHandler} />
        <Route path="*" component={HomeRouteHandler} />
      </Switch>
    </div>
    <FooterWithRouter />
  </div>
)
