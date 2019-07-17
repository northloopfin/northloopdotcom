import React from 'react'
import styles from './CurrencyProtectInfo.css'

const {
  mainText,
  subText,
} = styles

const CurrencyProtectInfo = () => {
  const isMobile = window.screen.width < 768
  return (
    <div>
      <p className={mainText} style={!isMobile ? { width: '650px', position: 'relative', bottom: '10px' } : null}>
        North Loop helps families protect themselves against currency fluctuations. Up to 5 business days after you send an international wire, we’ll check for currency price changes. If there is a change, we’ll refund you the amount you could have saved!
      </p>
      <p className={subText}>
        All North Loop Premium members <span style={{ color: '#C75561' }}>get free access</span> to CurrencyProtect, our unique currency insurance program.
      </p>
    </div>
  )
}

export default CurrencyProtectInfo
