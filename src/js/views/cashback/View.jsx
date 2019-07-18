import React, { Component } from 'react'

// This is i18n and i10n
// import { FormattedMessage, FormattedDate, FormattedTime } from 'react-intl'
import CashBackViewFile from '../../common/components/Pages/CashBack/CashBack.jsx';

class CashBackView extends Component {

  render() {
    // Note for i18n and i10n
    // if `id` is found, it will use the matched message
    // otherwise, it will use defaultMessage as fallback
    // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
    if ( ga ) {
      ga('send', 'event', 'CashBack', 'CashBack', 'Cash-Back-Label', 1);
    }

    return (
      <div>
        <CashBackViewFile />
      </div>
    )
  }
}


export default CashBackView;