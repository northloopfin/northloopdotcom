import React, { Component, Fragment } from 'react'

// This is i18n and i10n
// import { FormattedMessage, FormattedDate, FormattedTime } from 'react-intl'
import LegalViewFile from '../../common/components/Pages/Legal/Legal.jsx';

class LegalView extends Component {

  render() {

    if ( ga ) {
      ga('send', 'event', 'LegalView', 'LegalPageView', 'Legal-View-Label', 1);
    }

    console.log('This is legal 1');

    return (
      <div>
        <LegalViewFile />
      </div>
    )
  }
}


export default LegalView;