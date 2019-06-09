import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';

import styles from './LoanCSS/Loan.css';



class Loan extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      submitted: false,
      form1: {
        name: '',
        email: '',
        program: '',
        school: '',
        test: '',
        testScore: ''
      },
      form2: {
        gender: '',
        dob: '',
        address: '',
        citizenship: '',
        passportNumber: '',
        ssn: ''
      },
      form3: {
        coa: '',
        scholarships: '',
        loans: '',
        requestedAmount: ''
      },
      form4: {
        recentEmployment: '',
        recentSalary: ''
      }
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

  updateDropdownValue = (event, form, key) => {
      this.setState(Object.assign(this.state[form], { [key]: event.target.value}));
  }

  submitForm = () => {
      let formData = new FormData();
      const userDataObj = Object.assign({}, this.state.form1, this.state.form2, this.state.form3, this.state.form4);
      for ( var key in userDataObj ) {
          formData.append(key, userDataObj[key]);
      }
      const options = {
        method: 'POST',
        data: formData,
        headers: {'Content-Type': 'application/x-www-form-urlencoded' },
        url: 'https://script.google.com/a/nolobank.com/macros/s/AKfycbzE-WrdRFqwVFWXR4d7Jisvr3t76I8ajqsEkZbj/exec'
      };

      axios(options).then(res => {
        if (res.data && res.data.result === 'success') {
          this.setState(Object.assign(this.state.submitted, { submitted: true, step: 0 }));
        }
      });
  }

  render() {
    const { step, form1, form2, submitted } = this.state;

    const loanForm1 = (
      <Container className={styles.journey}>
        <h2 className={styles.subtitle}>Check if you qualify for a loan<span /></h2>
        <Grid item sm={10}>
          <form className={styles.container} noValidate autoComplete="off">
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'name');}}
                  id="standard-dense"
                  label="Name"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'email');}}
                  id="email"
                  label="Email"
                  margin="dense"
                  type="email"/>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="program-auto-width">Program</InputLabel>
                  <Select
                    value={form1.program}
                    onChange={(event) => {this.updateDropdownValue(event, 'form1', 'program');}}
                    input={<Input name="program" id="program-auto-width" />}
                    autoWidth>
                    <MenuItem value={'MBA'}>MBA</MenuItem>
                    <MenuItem value={'MSBA'}>MS - Business Analytics</MenuItem>
                    <MenuItem value={'MSCS'}>MS - Computer Science</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="school-auto-width">School</InputLabel>
                  <Select
                    value={form1.school}
                    onChange={(event) => {this.updateDropdownValue(event, 'form1', 'school');}}
                    input={<Input name="school" id="school-auto-width" />}
                    autoWidth>
                    <MenuItem value={'CU'}>Cornell University</MenuItem>
                    <MenuItem value={'CMU'}>Carnegie Melon</MenuItem>
                    <MenuItem value={'NYU'}>New York University</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="test-auto-width">Test Type</InputLabel>
                  <Select
                    value={form1.test}
                    onChange={(event) => {this.updateDropdownValue(event, 'form1', 'test');}}
                    input={<Input name="test" id="test-auto-width" />}
                    autoWidth>
                    <MenuItem value={'GMAT'}>GMAT</MenuItem>
                    <MenuItem value={'GRE'}>GRE</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form1', 'testScore');}}
                  id="test-score"
                  label="Test Score"
                  margin="dense"
                  type="Number"/>
              </Grid>
            </Grid>
          </form>
          <p className={styles.noSchoolWarning}>Don’t see your school or program? We’re adding new programs and schools every week! Check back soon.</p>
        </Grid>
      </Container>);

const loanForm2 = (
      <Container className={styles.journey}>
        <h2 className={styles.subtitle}>Check if you qualify for a loan<span /></h2>
        <Grid item sm={10}>
          <form className={styles.container} noValidate autoComplete="off">
            <Grid container>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="gender-auto-width">Gender</InputLabel>
                  <Select
                    value={form2.gender}
                    onChange={(event) => {this.updateDropdownValue(event, 'form2', 'gender');}}
                    input={<Input name="gender" id="gender-auto-width" />}
                    autoWidth>
                    <MenuItem value={'M'}>Male</MenuItem>
                    <MenuItem value={'F'}>Female</MenuItem>
                    <MenuItem value={'O'}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form2', 'dob');}}
                  id="date"
                  label="Date of birth"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form2', 'address');}}
                  id="standard-dense"
                  label="Address"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form2', 'citizenship');}}
                  id="standard-dense"
                  label="Country of Citizenship"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form2', 'passportNumber');}}
                  id="standard-dense"
                  label="Passport Number"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form2', 'ssn');}}
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
                  onBlur={() => {this.updateDropdownValue(event, 'form3', 'coa');}}
                  id="costOfAttendance"
                  label="Cost of Attendance ($)"
                  type="Number"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form3', 'scholarships');}}
                  id="standard-dense"
                  label="All Scholarships (if applicable)"
                  type="Number"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form3', 'loans');}}
                  id="standard-dense"
                  label="All Loans (if applicable)"
                  type="Number"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form3', 'requestedAmount');}}
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
                  onBlur={() => {this.updateDropdownValue(event, 'form4', 'recentEmployment');}}
                  id="standard-dense"
                  label="Most Recent Employment"
                  margin="dense"/>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onBlur={() => {this.updateDropdownValue(event, 'form4', 'recentSalary');}}
                  id="standard-dense"
                  label="Most Recent Salary"
                  margin="dense"/>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>);

const successMessage = (
      <Container style={{'marginTop': '5%', 'marginBottom': '5%', 'display': 'flex', 'justifyContent': 'center', 'fontSize': 'large'}}>
          <p>Thank you. Your application has been receive and we will be in touch with next steps!</p>
      </Container>);

    return (
      <div className={styles.homeOutput}>
          { step == 1 && loanForm1 }
          { step == 2 && loanForm2 }
          { step == 3 && loanForm3 }
          { step == 4 && loanForm4 }
          { submitted && successMessage }
          <Container>
            <Grid item sm={10} style={{'display': 'flex', 'justifyContent': 'flex-end', 'marginTop': '2%', 'marginBottom': '2%'}}>
              { step > 1 && step < 5 && <Button onClick={this.decStep}>Prev</Button> }
              { step > 0 && step < 4  && <Button onClick={this.incStep}>Next</Button> }
              { step == 4 && <Button onClick={this.submitForm}>Submit</Button> }
            </Grid>
          </Container>
      </div>
    );
  }
}

export default Loan;