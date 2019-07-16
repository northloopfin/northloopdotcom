import React from 'react'
import Button from '@material-ui/core/Button'
import styles from './StudentAccount.css'
import homeStyles from '../HomeCSS/Home.css'

const {
  marginLeft, topPadding, formTitle, formText, form, formInput,
} = styles

const StudentAccount = ({ id }) => (
  <div className={topPadding} id={id}>
    <p className={formTitle}>Sign up in just 5 minutes</p>
    <p className={formText}>
      Sign up before coming to the US. Your card will be waiting for you when you land.
      <br />
      Get a T-Mobile SIM card before you fly.
    </p>
    <form action="" className={form}>
      <input type="text" placeholder="Enter your email" className={formInput} />
      <Button
        variant="contained"
        color="primary"
        className={[homeStyles.button, marginLeft].join(' ')}
      >
        Sign Up
      </Button>
    </form>
  </div>
)

export default StudentAccount
