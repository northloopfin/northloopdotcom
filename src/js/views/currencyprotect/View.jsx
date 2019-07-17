import React, { Component } from 'react'

// This is i18n and i10n
// import { FormattedMessage, FormattedDate, FormattedTime } from 'react-intl'
import CurrencyProtectViewFile from '../../common/components/Pages/CurrencyProtect/CurrencyProtect.jsx';

class CurrencyProtectView extends Component {

  render() {
    // Note for i18n and i10n
    // if `id` is found, it will use the matched message
    // otherwise, it will use defaultMessage as fallback
    // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
    if ( ga ) {
      ga('send', 'event', 'PageView', 'CurrencyProtectView', 'Currency-Protect-Label', 1);
    }

    return (
      <div>
        <CurrencyProtectViewFile />
      </div>
    )
  }
}


export default CurrencyProtectView;