import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

import styles from './LoanCSS/Loan.css';



class Loan extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  incStep = () => {
    this.setState({
      step: this.state.step + 1
    });
  }

  decStep = () => {
    this.setState({
      step: this.state.step - 1
    });
  }


  handleChange = (event) => {
    console.log(event.target.value);
  }

  render() {
    const { step } = this.state;

    const loanForm1 = (
      <Container className={styles.journey}>
        <h2 className={styles.subtitle}>Check if you qualify for a loan<span /></h2>
        <Grid item sm={10}>
          <form className={styles.container} noValidate autoComplete="off">
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="Name"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="email"
                  label="Email"
                  margin="dense"
                  type="email"/>
              </Grid>
              <Grid item xs={6}>
                <Select
                  value={10}
                  onChange={this.handleChange}
                  input={<Input name="age" id="age-helper" />}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                School
              </Grid>
              <Grid item xs={6}>
                Test Type
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="test-score"
                  label="Test Score"
                  margin="dense"
                  type="Number"/>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>);

const loanForm2 = (
      <Container className={styles.journey}>
        <h2 className={styles.subtitle}>Check if you qualify for a loan<span /></h2>
        <Grid item sm={10}>
          <form className={styles.container} noValidate autoComplete="off">
            <Grid container>
              <Grid item xs={6}>
                Gender
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="date"
                  label="Date of birth"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="Address"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="Country of Citizenship"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="Passport Number"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="US Social Security Number (if available)"
                  margin="dense"/>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>);

const loanForm3 = (
      <Container className={styles.journey}>
        <h2 className={styles.subtitle}>Check if you qualify for a loan<span /></h2>
        <Grid item sm={10}>
          <form className={styles.container} noValidate autoComplete="off">
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  id="costOfAttendance"
                  label="Cost of Attendance ($)"
                  type="Number"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="All Scholarships (if applicable)"
                  type="Number"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="All Loans (if applicable)"
                  type="Number"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="Amount You’re Requesting"
                  type="Number"
                  margin="dense"/>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>);

const loanForm4 = (
      <Container className={styles.journey}>
        <h2 className={styles.subtitle}>Check if you qualify for a loan<span /></h2>
        <Grid item sm={10}>
          <form className={styles.container} noValidate autoComplete="off">
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  id="costOfAttendance"
                  label="Most Recent Employment"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="standard-dense"
                  label="Most Recent Salary"
                  margin="dense"/>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>);

    return (
      <div className={styles.homeOutput}>
          { step == 1 && loanForm1}
          { step == 2 && loanForm2}
          { step == 3 && loanForm3}
          { step == 4 && loanForm4}
          <Container style={{'display': 'flex'}}>
            <Grid>
              { step > 1 && <Button onClick={this.decStep}>Prev</Button> }
              { step < 4  && <Button onClick={this.incStep}>Next</Button> }
              { step == 4  && <Button onClick={this.incStep}>Submit</Button> }
            </Grid>
          </Container>
      </div>
    );
  }
}

export default Loan;