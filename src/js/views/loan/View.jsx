import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios';

// This is i18n and i10n
// import { FormattedMessage, FormattedDate, FormattedTime } from 'react-intl'
import LoanViewFile from '../../common/components/Pages/Loan/Loan.jsx';

class LoanView extends Component {

  render() {
    // Note for i18n and i10n
    // if `id` is found, it will use the matched message
    // otherwise, it will use defaultMessage as fallback

    return (
      <div>
        <LoanViewFile />
      </div>
    )
  }
}


export default LoanView;