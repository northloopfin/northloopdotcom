import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios';

// This is i18n and i10n
// import { FormattedMessage, FormattedDate, FormattedTime } from 'react-intl'
import ManualSignupViewFile from '../../common/components/Pages/ManualSignup/ManualSignup.jsx';

class ManualSignupView extends Component {

  render() {
    // Note for i18n and i10n
    // if `id` is found, it will use the matched message
    // otherwise, it will use defaultMessage as fallback
    // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
    if ( ga ) {
      ga('send', 'event', 'ManualSignupView', 'ManualSignupPageView', 'Manual-Signup-View-Label', 1);
    }

    return (
      <div>
        <ManualSignupViewFile />
      </div>
    )
  }
}


export default ManualSignupView;