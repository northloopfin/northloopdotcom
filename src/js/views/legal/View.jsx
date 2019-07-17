import React, { Component, Fragment } from 'react'
import LegalViewFile from '../../common/components/Pages/Legal/Legal.jsx';

class LegalView extends Component {

  render() {

    if ( ga ) {
      ga('send', 'event', 'LegalView', 'LegalPageView', 'Legal-View-Label', 1);
    }

    return (
      <div>
        <LegalViewFile />
      </div>
    )
  }
}


export default LegalView;