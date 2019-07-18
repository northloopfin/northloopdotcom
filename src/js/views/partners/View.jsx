import React, { Component, Fragment } from 'react'
import PartnersViewFile from '../../common/components/Pages/Partners/Partners.jsx';

class PartnersView extends Component {

  render() {

    if ( ga ) {
      ga('send', 'event', 'PartnersView', 'PartnersPageView', 'Partners-View-Label', 1);
    }

    return (
      <div>
        <PartnersViewFile />
      </div>
    )
  }
}


export default PartnersView;