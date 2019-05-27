import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// This is i18n and i10n
import { FormattedMessage, FormattedDate, FormattedTime } from 'react-intl'

import LazyLoading from '../../common/components/LazyLoading'
import { actions as homeActions } from '../../redux/modules/home'
import { homeSelector } from '../../redux/selectors/home/Selector'
import { HomeWithError } from '../../common/components/Pages';
import { ErrorBoundary } from '../../common/components/Utilities';

// This is lazy loading home
const LazyHome = LazyLoading(() => import('../../common/components/Pages/Home'));

class HomeView extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
  }

  state = {
    myArbitraryNumber: Math.floor(Math.random() * 10000),
    currentTime: new Date(),
  }

  componentDidMount() {
    const { getAwesomeCode } = this.props

    getAwesomeCode()
  }

  render() {
    const { myArbitraryNumber, currentTime } = this.state

    // Note for i18n and i10n
    // if `id` is found, it will use the matched message
    // otherwise, it will use defaultMessage as fallback

    return (
      <Fragment>
        <LazyHome {...this.props} />
        <ErrorBoundary>
          <HomeWithError {...this.props} />
        </ErrorBoundary>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  home: homeSelector(state),
})

const mapDispatchToProps = {
  ...homeActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
