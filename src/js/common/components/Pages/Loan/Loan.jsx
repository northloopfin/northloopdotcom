import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './LoanCSS/Loan.css';

console.log('Loann page');

class Loan extends PureComponent {

  render() {


    const loanForm1 = (
      <Container className={styles.journey}>
        <h2 className={styles.subtitle}>Check if you qualify for a loan<span /></h2>
        <Grid item sm={10}>
          <form className={styles.container} noValidate autoComplete="off">
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="First Name"
                  margin="dense"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="Last Name"
                  margin="dense"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="Email"
                  margin="dense"
                  type="email"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="Phone No."
                  margin="dense"
                  type="tel"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="Pin Code"
                  margin="dense"
                  type="tel"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="Address"
                  margin="dense"
                />
              </Grid>
              <Button variant="contained" color="primary" className={styles.button}>Submit</Button>
            </Grid>
          </form>
        </Grid>
      </Container>);

    const loanForm2 = (
          <Container className={styles.journey}>
            <Grid item sm={10}>
              <form className={styles.container} noValidate autoComplete="off">
                <Grid container>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-dense"
                      label="First Name"
                      margin="dense"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-dense"
                      label="Last Name"
                      margin="dense"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-dense"
                      label="Email"
                      margin="dense"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-dense"
                      label="Phone No."
                      margin="dense"
                      type="tel"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-dense"
                      label="Pin Code"
                      margin="dense"
                      type="tel"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="standard-dense"
                      label="Address"
                      margin="dense"
                    />
                  </Grid>
                  <Button variant="contained" color="primary" className={styles.button}>Submit</Button>
                </Grid>
              </form>
            </Grid>
          </Container>);

    return (
      <div className={styles.homeOutput}>
          {loanForm1}
      </div>
    );
  }
}

export default Loan;