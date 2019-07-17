import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from './Slider.css'

const Dots = ({ screens }) => (
  <div className={styles.dots}>
    {screens.map(screen => (
      <AnchorLink href={`#${screen.props.id}`}>
        <div className={styles.dot}></div>
      </AnchorLink>
    ))}
  </div>
)

class Slider extends Component {
    render() {
      const isMobile = window.screen.width < 768
      return (
        <div>
          {!isMobile && <Dots screens={this.props.children} />}
          {this.props.children}
        </div>
      )
    }
}

export default Slider;