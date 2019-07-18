import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import LazyLoading from 'common/components/LazyLoading'

import styles from '../style/index.css'

// This is show case how you can lazy loading component
const HomeRouteHandler = LazyLoading(() => import('views/home'))
const LoanRouteHandler = LazyLoading(() => import('views/loan'))
const BlogRouteHandler = LazyLoading(() => import('views/blog'))
const CashbackRouteHandler = LazyLoading(() => import('views/cashback'))
const BlogDetailRouteHandler = LazyLoading(() => import('views/blog-detail'))
const CurrencyProtectRouteHandler = LazyLoading(() => import('views/currencyprotect'))
const ManualSignupRouteHandler = LazyLoading(() => import('views/manualSignup'))
const LegalRouteHandler = LazyLoading(() => import('views/legal'))
const PartnersRouteHandler = LazyLoading(() => import('views/partners'))
const Header = LazyLoading(() => import('common/components/Header/Header'))

// This show case how you can access routing info in your component
const HeaderWithRouter = withRouter((props) => <Header {...props} />)
module.exports = (
  <div>
    <HeaderWithRouter />
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={HomeRouteHandler} />
        <Route path="/loans" component={LoanRouteHandler} />
        <Route path="/blogs/:blogId" component={BlogDetailRouteHandler} />
        <Route path="/blogs" component={BlogRouteHandler} />
        <Route path="/partners" component={PartnersRouteHandler} />
        <Route path="/cashback" component={CashbackRouteHandler} />
        <Route path="/currency/protect" component={CurrencyProtectRouteHandler} />
        <Route path="/manual-signup" component={ManualSignupRouteHandler} />
        <Route path="/legal" component={LegalRouteHandler} />
        <Route path="/privacy-policy" component={LegalRouteHandler} />
        <Route path="/terms-of-service" component={LegalRouteHandler} />
        <Route path="/cardholder-agreement" component={LegalRouteHandler} />
        <Route path="/consumer-deposit-agreement" component={LegalRouteHandler} />
        <Route path="*" component={HomeRouteHandler} />
      </Switch>
    </div>
  </div>
)
