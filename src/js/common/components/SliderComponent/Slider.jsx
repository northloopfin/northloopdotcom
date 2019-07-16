import React, { Component } from 'react'
import styles from './Slider.css'

const Dots = () => (
  <div className={styles.dots}>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
  </div>
)


class Slider extends Component {
    render() {
      const isMobile = window.screen.width < 768
      return (
        <div>
          {!isMobile && <Dots />}
          {this.props.children}
        </div>
      )
    }
}

export default Slider;