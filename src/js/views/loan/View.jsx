import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// This is i18n and i10n
// import { FormattedMessage, FormattedDate, FormattedTime } from 'react-intl'

import LazyLoading from '../../common/components/LazyLoading'
import { actions as homeActions } from '../../redux/modules/loan'
import { homeSelector } from '../../redux/selectors/home/Selector'
import { LoanWithError } from '../../common/components/Pages/Loan';
import { ErrorBoundary } from '../../common/components/Utilities';

// This is lazy loading home
const LazyLoan = LazyLoading(() => import('../../common/components/Pages/Loan/Loan'));

class LoanView extends Component {
  static propTypes = {
    loan: PropTypes.object.isRequired,
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
        <LazyLoan {...this.props} />
        <ErrorBoundary>
          <LoanWithError {...this.props} />
        </ErrorBoundary>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  loan: homeSelector(state),
})

const mapDispatchToProps = {
  ...homeActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanView)
